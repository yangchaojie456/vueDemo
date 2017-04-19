import getters from './getters.js'

const state = {
	isShow : true
}

const mutations = {
	hide(state){
		state.isShow = false
	},
	show(state){
		state.isShow = true
	}
}

export default {
	state,
	mutations,
	getters
}