"use strict"
const $path = require("path")
// console.log(["this is path",$path.resolve()])
module.exports =  {
	"PAGE_ERROR" : "Error/404"
	,"LOG_PATH" : $path.resolve("log")
	,"APPLICATION_PATH" : $path.resolve("application")
	,"VIEW_PATH" : $path.resolve("resource/view")
	,"STATIC_PATH":$path.resolve("public")
	,"host" : {
		"port" : "3888"
	}
}