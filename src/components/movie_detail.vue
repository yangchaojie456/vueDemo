<template>
	<div>
		
		<div class="detail">
			<div class="movie_info">
				<div class="poster">
					<img :src='item.images.large' :alt='item.alt'>
				</div>
				<div class="info">
					<h3>{{item.title}}</h3>
					<p class="rate">{{item.rating.average}}</p>
					<p>
						<span v-for='actor in item.casts'>{{actor.name}}&nbsp;</span>
					</p>
					<p>
						<span>{{item.year}}</span>&nbsp;
						<span v-for='country in item.countries'>{{country}}</span>&nbsp;
						<span v-for='genre in item.genres'>{{genre}}&nbsp;</span>
						
					</p>
					<p class="brief" @click='toggle'>{{item.summary}}
						<span class="more"></span>
					</p>
				</div>
			</div>
			<div class="watch">
				<a href="javascript:;">点击观看</a>
			</div>
		</div>

		<div class="main_actor">
			<h4><span>本片主演</span></h4>
			<ul>
				<li v-for='actor in item.casts'>
					<div>
						<img :src="actor.avatars.medium" :alt="actor.alt">
					</div>
					<p>{{actor.name}}</p>
				</li>
			</ul>
		</div>

		<div class="comment">
			<h4><span>影评</span></h4>
			<ul>
				<li class="clear">
					<div class="f_left">
						<img src="../assets/images/7.png" alt="">
					</div>
					<div class="o_right">
						<p class="name">广东游客</p>
						<p class="content">真的很666</p>
						<p class="time">03-08 20:41</p>
					</div>
				</li>
				<li class="clear">
					<div class="f_left">
						<img src="../assets/images/7.png" alt="">
					</div>
					<div class="o_right">
						<p class="name">广东游客</p>
						<p class="content">真的很666</p>
						<p class="time">03-08 20:41</p>
					</div>
				</li>
				<li class="clear">
					<div class="f_left">
						<img src="../assets/images/7.png" alt="">
					</div>
					<div class="o_right">
						<p class="name">广东游客</p>
						<p class="content">真的很666</p>
						<p class="time">03-08 20:41</p>
					</div>
				</li><li class="clear">
					<div class="f_left">
						<img src="../assets/images/7.png" alt="">
					</div>
					<div class="o_right">
						<p class="name">广东游客</p>
						<p class="content">真的很666</p>
						<p class="time">03-08 20:41</p>
					</div>
				</li>
			</ul>
			<div class="comment_more">
				<a href="javascript:;">查看更多影评</a>
			</div>
		</div>

		
	</div>
</template>
<script>
	import jsonp from 'jsonp-promise'
	export default{
		data(){
			return {
				item:null
			}
		},
		created(){
			this.show();
		},
		watch:{
			$route(to){
				
				this.item=null
				console.log(to.path)
				if(/\/movie\/\d+/.test(to.path)){
					this.show();
				}
			}
		},
		methods:{
			show(){
				const url = 'https://api.douban.com/v2/movie/subject/'+this.$route.params.id

				jsonp(url).promise.then(
					res=>{
						console.log(res)
						this.item=res;
					}
				)

			},
			toggle(){
				var brief = document.querySelector('.brief')
				var more = document.querySelector('.more')
		
				brief.classList.toggle('open')
				more.classList.toggle('open')
				
		
			}
		}
	}
</script>
<style scoped>
	.header {
	height: 1.2222222222rem;
	background-color: #3097FD;
	padding: 0 0.2777777778rem;
	display: flex;
	align-items: center;

}
.header>div {
	width: 100%;
	height: 0.7777777778rem;
	font-size: 0.3888888889rem;
	color: white;
	line-height: 0.7777777778rem;

}

.header>div>span{
	vertical-align: top;
}
.header>i {
	font-size: 0.7222222222rem;
	color: white;
	padding-left: 0.1388888889rem;
}
.detail {
	background-color: #EFF0F3;
	margin-top: 2.3333333333rem;
}
.detail>.movie_info{
	background-color: white;
	padding: 0.2777777778rem;
	display: flex;
}
.detail>.movie_info>.poster>img{
	display: block;
	width: 2.5rem;
}
.detail>.movie_info>.info{
	padding-left: 0.2777777778rem;			
}
.detail>.movie_info>.info>h3{
	line-height: 0.8333333333rem;
	font-size: 0.4444444444rem;
	font-weight: normal;
}
.detail>.movie_info>.info>.rate{
	color: #FF8833;
	line-height: 0.7777777778rem;
}
.detail>.movie_info>.info>p{
	color: #999;
	line-height: 0.6111111111rem;
}
.detail>.movie_info>.info>.brief{
	position: relative;
	width: 6.3888888889rem;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	padding-right: 0.2777777778rem;
}
.detail>.movie_info>.info>.brief.open{
	white-space: normal;
}
.detail>.watch{
	background-color: white;
	padding: 0 0.2777777778rem;
	border-bottom: 0.2222222222rem solid #EFF0F3;
	padding-bottom: 0.2777777778rem;
}
.detail>.watch a{
	display: block;
	border-radius: 0.1388888889rem;
	line-height: 1.1666666667rem;
	color: white;
	text-align: center;
	font-size: 0.5rem;
	background-color: #FF8833;
}
.main_actor {
	border-bottom: 0.1388888889rem solid #EFF0F3;
}
h4{
	line-height: 1.1111111111rem;
}
h4>span{
	font-size: 0.3888888889rem;
	font-weight: normal;
	border-left: 0.0833333333rem solid #3399FF;
	padding-left: 0.1944444444rem;
}
.main_actor ul{
	display: flex;
	justify-content: space-around;
	width: 100%;
}
.main_actor ul li{
	width: 1.8333333333rem;
}
.main_actor ul li div{
	height: 1.8333333333rem;
	overflow: hidden;
	border-radius: 50%;
}
.main_actor ul li p{
	text-align: center;
	line-height: 0.7777777778rem;
}
.main_actor ul li img{
	width: 100%;
}

.comment{
	border-bottom: 0.2777777778rem solid #E9EBEF;
}
.comment li{
	padding:0.4166666667rem 0.2777777778rem 0;
}
.comment li+li{
	border-top: 0.0277777778rem solid #eee;
}
.comment .f_left{
	float: left;			
	width: 0.8333333333rem;
	border-radius: 50%;
	overflow: hidden;
}
.comment .f_left img{
	display: block;
	width: 100%;
}
.comment .o_right{
	overflow: hidden;
	padding-left: 0.2777777778rem;
	line-height: 0.8333333333rem;
	color: #999;
	font-size: 0.3888888889rem;
}
.comment .o_right>.content{
	color: #222;
}
.comment_more {
	padding: 0.2777777778rem;
}
.comment_more a{
	display: block;
	width: 100%;
	height: 100%;
	color:white;
	text-align: center;
	line-height: 1.1666666667rem;
	background-color: #3399FF;
	border-radius: 0.1388888889rem;
	font-size: 0.5rem;
}
.footer {
	height: 2.0rem;
	background-color: #DFDFDF;
	padding-top: 0.4444444444rem;
	text-align: center;
}
.footer a{
	padding: 0 0.3888888889rem;
	font-size: 0.4444444444rem;
}
.footer span{
	border-left: 0.0277777778rem solid #686868;
}
.more {
	position: absolute;
	top: 0.1388888889rem;
	right: 0;
	display: inline-block;
	width: 0.1666666667rem;
	height: 0.1666666667rem;
	transition: all 0.5s;
	transform: rotate(-135deg);
	border-left: 0.0277777778rem solid black;
	border-top: 0.0277777778rem solid black;
}
.more.open{
	transform: rotate(-315deg);
}

</style>