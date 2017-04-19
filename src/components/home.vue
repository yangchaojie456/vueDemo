<template>
	<div>
		<swipeView></swipeView>

		<movieListView></movieListView>
	</div>
</template>
<script>
	import swipeView from './swipe.vue'
	import movieListView from './movie_list.vue'
	export default{ 
		components:{
			swipeView,
  			movieListView
		}
	}
</script>
