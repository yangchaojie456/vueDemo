<template>
	<div class="movie_list">
		<div class="title">
			<h3>正在热映</h3>
			<span>更多&gt;</span>
		</div>
		<div class="content">
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
	export default{
		data(){
			return {
				list:[]
			}
		},
		mounted(){
			this.get()
		},
		methods:{
			get(){
				const url = 'https://api.douban.com/v2/movie/in_theaters?count=33'

				jsonp(url).promise.then(res=>{
					console.log(res,this)
					this.list = res.subjects
				})
			}
		}
	}
</script>