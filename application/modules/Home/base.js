"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Index = function (_miss$base$controller) {
	(0, _inherits3.default)(Index, _miss$base$controller);

	// 渲染的主页面
	//默认访问方式
	function Index() {
		(0, _classCallCheck3.default)(this, Index);

		var _this = (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).call(this));

		_this.$mothod = "GET";
		_this.$engine = "react";
		_this.$rootTemplateUrl = "Home/index.html";

		var Base = "";
		_this.setServer({ Base: Base }); //设置server
		return _this;
	} //指定渲染引擎
	// $server = {}
	// $middleware = ["HomeMiddleware"] // 中间件


	return Index;
}(miss.base.controller);

exports.default = Index;