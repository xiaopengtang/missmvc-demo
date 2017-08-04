import React from "react"
// import {createStore} from "redux"
const Base = miss.import("modules/Home/base")

class Index extends Base{
	//控制器实例被创建
	created(){}
	//模板被渲染之前
	beforeMount(params){}
	//模板渲染结束
	// mounted(html){}
	//渲染函数
	render  = function* (){
		return `<div>hello world</div>`
	}
}

export default Index