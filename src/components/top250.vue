<template>
	<div class="movie_list">
		<div class="title">
			<h3>{{title}}</h3>
			<span>更多&gt;</span>
		</div>
		<div class="content" v-infinite-scroll="loadMore" infinite-scroll-distance="100" infinite-scroll-disabled="bool"
		>
			<router-link tag='div' v-for='item in list' :to="'/movie/'+item.id" class='movie'>
				<div class="img">
					<img v-lazy='item.images.medium' alt="">
					<i class="rate">{{item.rating.average}}</i>
				</div>
				<p>{{item.title}}</p>
			</router-link>
		</div>
	</div>
</template>
<script>
	import jsonp from 'jsonp-promise'
	import { Indicator } from 'mint-ui';
	export default{
		data(){
			return {
				list:[],
				bool:false,
				count:66,
				title:'',
				in_theaters:{
					list:[],
					start:0
				},
				coming_soon:{
					list:[],
					start:0
				},
				top250:{
					list:[],
					start:0
				}
			}
		},
		watch:{
			$route(to){
				
				if(to.path=='/in_theaters' || to.path=='/coming_soon' || to.path=='/top250'){
					this.list = this[to.path.slice(1)].list
					this.loadMore()
				}
			}
		},
		methods:{
			loadMore(){
			
				this.bool = true
				const url = 'https://api.douban.com/v2/movie'+this.$route.path+'?count='+this.count+'&start='+this[this.$route.path.slice(1)].start
				Indicator.open({
					text: '加载中...',
					spinnerType: 'fading-circle'
				});
				jsonp(url).promise.then(res=>{
					console.log(res)
					this.title = res.title
					var arr = res.subjects
					if(arr.length){
						this.bool = false
					}else{
						this.bool= true
					}
					console.log(this.$route.path.slice(1))
					var path = this.$route.path.slice(1);
					arr.forEach((v,i)=>{
						this[path].list.push(v)
					})

					this.list = this[path].list

					this[path].start+=this.count
					Indicator.close()

				})
			}
		}
	}
</script>

<style scoped>
	
.movie_list {
	margin-top: 2.3333333333rem !important;
}
</style>