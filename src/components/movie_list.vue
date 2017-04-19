<template>
	<div class="movie_list">
		<div class="title">
			<h3>热播电影</h3>
			<span>更多&gt;</span>
		</div>
		<div class="content" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">

			<!-- <router-link tag='div' v-for='item in list' :to="'/movie/'+item.id" class='movie'>
				<div class="img">
					<img v-lazy='item.images.medium' alt="">
					<i class="rate">{{item.rating.average}}</i>
				</div>
				<p>{{item.title}}</p>
			</router-link> -->
			<div class="movie" v-for='item in list' >
				<div class="img">
					<img v-lazy='item.ver_high_pic' alt="">
					<i class="rate">{{item.score}}</i>
				</div>
				<p>{{item.album_name}}</p>
			</div>

		</div>
		<div class="tag">
			<ul>
				<li><a href="javascript:;">喜剧</a></li>
				<li><a href="javascript:;">动作</a></li>
				<li><a href="javascript:;">恐怖</a></li>
				<li><a href="javascript:;">爱情</a></li>
			</ul>
			<ul>
				<li><a href="javascript:;">武侠</a></li>
				<li><a href="javascript:;">文艺</a></li>
				<li><a href="javascript:;">经典</a></li>
				<li><a href="javascript:;">全部</a></li>
			</ul>
		</div>
	</div>
</template>
<script>
	import jsonp from 'jsonp-promise'
	import { Indicator } from 'mint-ui'
	export default{
		data(){
			return {
				list:[],
				offset:0,
				count:9,
				loading:false
			}
		},
		watch:{
			$route(to,from){
				if(to.path=='/home'){
					this.loading = false;
				}
				if(from.path=='/home'){
					this.loading = true;
				}
			}
		},
		methods:{
			loadMore() {
				this.loading = true;
				const url = 'https://s1.api.tv.itc.cn/v4/search/channel/sub.json?subId=23&&offset='+this.offset+'&api_key=f351515304020cad28c92f70f002261c&plat=17&pt=5&sver=4.7&page_size='+this.count
				
				jsonp(url).promise.then(res=>{
					console.log(res,this)

					res.data.videos.forEach((v,i)=>{
						this.list.push(v)
					})
					this.offset+=this.count
			    	this.loading = false;
				})
			},
			get(){
				const url = 'https://s1.api.tv.itc.cn/v4/search/channel/sub.json?subId=23&&offset='+this.offset+'&api_key=f351515304020cad28c92f70f002261c&plat=17&pt=5&sver=4.7&page_size=9'
				// const url = 'https://api.douban.com/v2/movie/in_theaters?count=33'

				jsonp(url).promise.then(res=>{
					console.log(res,this)
					// this.list = res.subjects
				})

			
			}
		}
	}
</script>