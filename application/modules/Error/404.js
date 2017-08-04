"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Index = function (_miss$base$controller) {
	(0, _inherits3.default)(Index, _miss$base$controller);

	function Index() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, Index);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$method = ["GET"], _this.render = _regenerator2.default.mark(function _callee() {
			return _regenerator2.default.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							return _context.abrupt("return", "");

						case 1:
						case "end":
							return _context.stop();
					}
				}
			}, _callee, this);
		}), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(Index, [{
		key: "$rootTemplate",
		value: function $rootTemplate(data) {
			var $error = data.$error;

			this.$response.status($error.status);
			return "\n\t\t<html>\n\t\t    <head>\n\t\t        <meta charset=\"utf-8\"/>\n\t\t        <title>" + $error.status + "</title>\n\t\t    </head>\n\t\t    <body>\n\t\t        <h2>" + $error.message + "</h2>\n\t\t        <p>" + $error.stack + "</p>\n\t\t    </body>\n\t\t</html>\n\t\t";
		}
	}]);
	return Index;
}(miss.base.controller);

exports.default = Index;