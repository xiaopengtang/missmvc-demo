
class Index extends miss.base.controller {
	$mothod = "GET" //默认访问方式
	$engine = "react" //指定渲染引擎
	// $server = {}
	// $middleware = ["HomeMiddleware"] // 中间件
	$rootTemplateUrl = "Home/index.html" // 根目录
	constructor(){
		super()
		const Base = ""
		this.setServer({Base}) //设置server
	}
}

export default Index