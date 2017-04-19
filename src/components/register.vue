<template>
	<div>
		<!-- header -->
		<div class="header">
			<!-- <i class="iconfont">&#xe660;</i> -->
			<router-link tag='i' to='/home' class='iconfont'>&#xe660;</router-link>			
			<span class="right">注册</span>
			<router-link tag='span' to='/login' class='center'>注册</router-link>
			<!-- <span class="center">登录</span> -->
		</div>

		<div class="form">
			<div>
				<span>+86</span>
				<div>
					<input type="tel" placeholder="请输入手机号">
					<a href="javascript:;">获取验证码</a>
				</div>
			</div>
			<div>
				<span>验证码</span>
				<div>
					<input type="text" placeholder="请输入验证码">
				</div>
			</div>
		</div>
		<div class="resolve">
			<p>如您无法收到验证码或遇到问题，请进入<a href="javascript:;">客户服务中心</a>，联系解决方案，谢谢~</p>
		</div>

		<div class="commit">
			<a href="javascript:;">快速注册</a>
		</div>

		
	</div>
</template>
<script>
	
</script>
<style scoped>
	body{
			background-color: #EFF0F3;
		}
		.header{
			background-color: #3399FF;
			height: 1.2222222222rem;
			display:flex;
			justify-content: space-between;
			align-items: center;
			color: white;
			padding: 0 0.2777777778rem;
			margin-bottom: 0.2777777778rem;
		}
		.right{
			font-size: 0.5555555556rem;
		}
		.center{
			font-size: 0.3888888889rem;
		}
		.form {
			margin-top: 1.2222222222rem;
			font-size: 0.3888888889rem;
		}
		.form>div{
			height: 1.5rem;
			background-color: white;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
		.form div+div{
			border-top: 0.0277777778rem solid #eee;
		}
		.form>div>span {
			width: 2.0rem;
			padding-left: 0.4444444444rem;
		}
		.form>div>div{
			width: 100%;

		}
		.form a{
			float: right;
			margin-right: 0.4166666667rem;
		}
		.form input {
			color: #222;
			font-size: 0.4444444444rem;
		}
		.form a{
			color: #bbb;
		}
		.resolve {
			padding: 0.2222222222rem 0.4444444444rem;
			font-size: 0.3333333333rem;
			line-height: 0.5rem;
			color: #999;
		}
		.resolve a{
			color: #3399FF;
		}

		.commit {
			padding: 0.3333333333rem 0.2777777778rem;
		}
		.commit a{
			display: block;
			height: 1.1666666667rem;
			background-color: #DCDDE0;
			color: white;
			border-radius: 0.1388888889rem;
			text-align: center;
			line-height: 1.1666666667rem;
			font-size: 0.4444444444rem;
		}
</style>