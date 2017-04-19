<template>
  <div id="app">
    	
		<headerView v-show=hide></headerView>

		<navView v-show=hide></navView>
		
		<keep-alive>
			<router-view></router-view>
		</keep-alive>

		<footerView v-show=hide></footerView>
		
  </div>
</template>

<script>
import headerView from './components/header.vue'
import navView from './components/nav.vue'
import footerView from './components/footer.vue'
import {mapGetters} from 'Vuex'
export default {
	computed:mapGetters([
		'hide'
		]),
	watch:{
		$route(to,home){

			if(to.path=='/login'||to.path=='/register'||to.path=='/search'){
				this.$store.dispatch('hide')
			}else{
				this.$store.dispatch('show')
			}
		}
	},
  	components:{
  		headerView,
  		navView,
  		footerView,
  	},
  	mounted(){
  		console.log(this)
  	}
}
</script>

<style>
	@import url(./assets/css/home.css);		
</style>
