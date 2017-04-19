<template>
	
	<div class="header">
			<router-link tag='div' to='/search'>
				<i class="iconfont">&#xe651;</i>
				<span>请输入片名或主演名</span>
			</router-link>
			<!-- <div>
				<i class="iconfont">&#xe651;</i>
				<span>请输入片名或主演名</span>
			</div> -->
			<!-- <i class="iconfont">&#xe659;</i> -->
			<router-link tag='i' to='/login' class='iconfont'>&#xe659;</router-link>
	</div>
</template>
<script>
	var url = 'http://suggest.video.iqiyi.com/?key=%E5%B0%8F&callback=window.Q.__callbacks__.cb76hyhd'
</script>
<style>
	
</style>