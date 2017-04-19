<template>
	<div class="recommend">
		<ul>
			<router-link tag='li' to='/home' active-class='current'>
				<a href="javascript:;">推荐</a>
			</router-link>
			<router-link tag='li' to='/in_theaters' active-class='current'>
				<a href="javascript:;">正在热映</a>
			</router-link>
			<router-link tag='li' to='/coming_soon' active-class='current'>
				<a href="javascript:;">即将上映</a>
			</router-link>
			<router-link tag='li' to='/top250' active-class='current'>
				<a href="javascript:;">top250</a>
			</router-link>
			<!-- <li class="current"><a href="javascript:;">推荐</a></li>
			<li><a href="javascript:;">正在热映</a></li>
			<li><a href="javascript:;">即将上映</a></li>
			<li><a href="javascript:;">top250</a></li> -->
		</ul>
	</div>
</template>