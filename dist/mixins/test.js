'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var testMixin = function (_wepy$mixin) {
    _inherits(testMixin, _wepy$mixin);

    function testMixin() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, testMixin);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = testMixin.__proto__ || Object.getPrototypeOf(testMixin)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
            mixin: 'This is mixin data.'
        }, _this.methods = {
            tap: function tap() {
                this.mixin = 'mixin data was changed';
                console.log('mixin method tap');
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(testMixin, [{
        key: 'onShow',
        value: function onShow() {
            console.log('mixin onShow');
        }
    }, {
        key: 'onLoad',
        value: function onLoad() {
            console.log('mixin onLoad');
        }
    }]);

    return testMixin;
}(_wepy2.default.mixin);

exports.default = testMixin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuanMiXSwibmFtZXMiOlsidGVzdE1peGluIiwiZGF0YSIsIm1peGluIiwibWV0aG9kcyIsInRhcCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFM7Ozs7Ozs7Ozs7Ozs7O2dNQUNqQkMsSSxHQUFPO0FBQ0hDLG1CQUFPO0FBREosUyxRQUdQQyxPLEdBQVU7QUFDTkMsZUFETSxpQkFDQTtBQUNGLHFCQUFLRixLQUFMLEdBQWEsd0JBQWI7QUFDQUcsd0JBQVFDLEdBQVIsQ0FBWSxrQkFBWjtBQUNIO0FBSkssUzs7Ozs7aUNBT0Q7QUFDTEQsb0JBQVFDLEdBQVIsQ0FBWSxjQUFaO0FBQ0g7OztpQ0FFUTtBQUNMRCxvQkFBUUMsR0FBUixDQUFZLGNBQVo7QUFDSDs7OztFQWpCa0MsZUFBS0osSzs7a0JBQXZCRixTIiwiZmlsZSI6InRlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgdGVzdE1peGluIGV4dGVuZHMgd2VweS5taXhpbiB7XHJcbiAgICBkYXRhID0ge1xyXG4gICAgICAgIG1peGluOiAnVGhpcyBpcyBtaXhpbiBkYXRhLidcclxuICAgIH1cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgICAgdGFwKCkge1xyXG4gICAgICAgICAgICB0aGlzLm1peGluID0gJ21peGluIGRhdGEgd2FzIGNoYW5nZWQnXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdtaXhpbiBtZXRob2QgdGFwJylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25TaG93KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdtaXhpbiBvblNob3cnKVxyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnbWl4aW4gb25Mb2FkJylcclxuICAgIH1cclxufVxyXG4iXX0=