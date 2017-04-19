<template>
	<div>
		<div class="header">
			<input type="text" v-model='s' placeholder="请输入片名或主演名" @keyup=get>
			<!-- <a href="javascript:;"></a> -->
			<router-link to='/home'>取消&nbsp;</router-link>
		</div>
		<ul>
			<li v-for='item in list'>{{item.tag}}</li>
		</ul>
	</div>
</template>

<script>
	import jsonp from 'jsonp-promise'
	export default {
		data(){
			return {
				s:'',
				list:[]
			}
		},
		methods:{
			get(){
				const url = 'http://www.1905.com/search/sg.php?q='+this.s
				
				jsonp(url,{param:'jsoncallback',timeout:2000}).promise.then(
					res=>{
						console.log(res)
						this.list = res
					}
				).catch(error=>{
					console.log(error)
				})
			}
		}
	}
</script>

<style scoped>
	.header{
			height: 1.2222222222rem;
			width: 100%;
			background-color: #3097FD;
			font-size: 0.4444444444rem;
			display: flex;
			align-items: center;
			justify-content: space-around;
		}
		.header input{
			background: white;
			width: 7.7777777778rem;
			height: 0.7777777778rem;
			border-radius: 0.3888888889rem;
			text-indent: 1em;
			
		}
		.header a{
			color: white;

		}
		ul{
			margin-top: 1.2222222222rem;
		}
		ul>li{
			
			font-size: 0.3888888889rem;
			height: 1.2222222222rem;
			line-height: 1.2222222222rem;
			border-bottom: 0.0277777778rem solid #E7E7E7;
			text-indent: 1em;
		}
		ul>li:hover{
			background-color: #daedff;
		}

</style>