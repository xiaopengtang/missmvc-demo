class Index extends miss.base.controller{
	$method = ["GET"]
	$rootTemplate(data){
		const {$error} = data
		this.$response.status($error.status)
		return `
		<html>
		    <head>
		        <meta charset="utf-8"/>
		        <title>${$error.status}</title>
		    </head>
		    <body>
		        <h2>${$error.message}</h2>
		        <p>${$error.stack}</p>
		    </body>
		</html>
		`;
	}
	render = function* (){
		return ""
	}
}

export default Index