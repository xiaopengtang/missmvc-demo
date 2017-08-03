import React from "react"
// import {createStore} from "redux"
const Base = miss.import("modules/Home/base")
// const {Tpl,store} = miss.import("Home/Index/index/index.js","react")

class Index extends Base{
	$method = ["POST","GET"] 
	// $store  = createStore(store)
	created(){}
	mounted(){}
	updated(){}
	render  = function* (){
		// const data = yield this.$server.getHomeData()
		return `<div>hello world</div>`
	}
}

export default Index