'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Card = function (_wepy$page) {
  _inherits(Card, _wepy$page);

  function Card() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Card);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Card.__proto__ || Object.getPrototypeOf(Card)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      url: ''
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Card, [{
    key: 'onLoad',
    value: function onLoad() {
      var _this2 = this;

      console.log('card page onload');
      setTimeout(function () {
        _this2.url = 'https://img.yzcdn.cn/upload_files/2016/11/25/FpqPXlrMRjKwJs8VdTu3ZDJCj4j5.jpeg?imageView2/2/w/200/h/200/q/90/format/jpeg';
        _this2.$apply();
      }, 1000);
    }
  }]);

  return Card;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Card , 'pages/card'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQuanMiXSwibmFtZXMiOlsiQ2FyZCIsImRhdGEiLCJ1cmwiLCJjb25zb2xlIiwibG9nIiwic2V0VGltZW91dCIsIiRhcHBseSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEk7Ozs7Ozs7Ozs7Ozs7O2tMQUNuQkMsSSxHQUFPO0FBQ0xDLFdBQUs7QUFEQSxLOzs7Ozs2QkFJRTtBQUFBOztBQUNQQyxjQUFRQyxHQUFSLENBQVksa0JBQVo7QUFDQUMsaUJBQVcsWUFBTTtBQUNmLGVBQUtILEdBQUwsR0FBVywwSEFBWDtBQUNBLGVBQUtJLE1BQUw7QUFDRCxPQUhELEVBR0csSUFISDtBQUlEOzs7O0VBWCtCLGVBQUtDLEk7O2tCQUFsQlAsSSIsImZpbGUiOiJjYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGRhdGEgPSB7XG4gICAgdXJsOiAnJ1xuICB9XG5cbiAgb25Mb2FkKCkge1xuICAgIGNvbnNvbGUubG9nKCdjYXJkIHBhZ2Ugb25sb2FkJylcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMudXJsID0gJ2h0dHBzOi8vaW1nLnl6Y2RuLmNuL3VwbG9hZF9maWxlcy8yMDE2LzExLzI1L0ZwcVBYbHJNUmpLd0pzOFZkVHUzWkRKQ2o0ajUuanBlZz9pbWFnZVZpZXcyLzIvdy8yMDAvaC8yMDAvcS85MC9mb3JtYXQvanBlZyc7XG4gICAgICB0aGlzLiRhcHBseSgpO1xuICAgIH0sIDEwMDApO1xuICB9XG59XG4iXX0=