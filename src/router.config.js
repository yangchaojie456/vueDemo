import Home from './components/home.vue'

import Top250 from './components/top250.vue'
import MovieDetail from './components/movie_detail.vue'
import Login from './components/login.vue'
import Register from './components/register.vue'
import Search from './components/search.vue'
export default[
	{
		path:'/home',
		component:Home
	},
	{
		path:'/in_theaters',
		component:Top250
	},
	{
		path:'/coming_soon',
		component:Top250
	},
	{
		path:'/top250',
		component:Top250
	},
	{
		path:'/login',
		component:Login
	},
	{
		path:'/register',
		component:Register
	},
	{
		path:'/search',
		component:Search
	},
	{
		path:'/movie/:id',
		component:MovieDetail
	},
	{
		path:'/',
		redirect:'/home'
	}
]