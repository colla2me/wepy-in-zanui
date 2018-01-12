'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Toast = function (_wepy$component) {
  _inherits(Toast, _wepy$component);

  function Toast() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Toast);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Toast.__proto__ || Object.getPrototypeOf(Toast)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      appear: false,
      title: ''
    }, _this.methods = {
      _clearToast: function _clearToast() {
        clearTimeout(this.timer);
        this.appear = false;
        this.timer = null;
      },
      show: function show() {
        var _this2 = this;

        var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3000;

        clearTimeout(this.timer);
        this.appear = true;
        this.title = title;
        this.timer = setTimeout(function () {
          _this2.methods._clearToast.call(_this2);
          _this2.$apply();
        }, timeout);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Toast;
}(_wepy2.default.component);

exports.default = Toast;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvYXN0LmpzIl0sIm5hbWVzIjpbIlRvYXN0IiwiZGF0YSIsImFwcGVhciIsInRpdGxlIiwibWV0aG9kcyIsIl9jbGVhclRvYXN0IiwiY2xlYXJUaW1lb3V0IiwidGltZXIiLCJzaG93IiwidGltZW91dCIsInNldFRpbWVvdXQiLCJjYWxsIiwiJGFwcGx5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxJLEdBQU87QUFDTEMsY0FBUSxLQURIO0FBRUxDLGFBQU87QUFGRixLLFFBS1BDLE8sR0FBVTtBQUNSQyxpQkFEUSx5QkFDTTtBQUNaQyxxQkFBYSxLQUFLQyxLQUFsQjtBQUNBLGFBQUtMLE1BQUwsR0FBYyxLQUFkO0FBQ0EsYUFBS0ssS0FBTCxHQUFhLElBQWI7QUFDRCxPQUxPO0FBT1JDLFVBUFEsa0JBT3lCO0FBQUE7O0FBQUEsWUFBNUJMLEtBQTRCLHVFQUFwQixFQUFvQjtBQUFBLFlBQWhCTSxPQUFnQix1RUFBTixJQUFNOztBQUMvQkgscUJBQWEsS0FBS0MsS0FBbEI7QUFDQSxhQUFLTCxNQUFMLEdBQWMsSUFBZDtBQUNBLGFBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLGFBQUtJLEtBQUwsR0FBYUcsV0FBVyxZQUFNO0FBQzVCLGlCQUFLTixPQUFMLENBQWFDLFdBQWIsQ0FBeUJNLElBQXpCO0FBQ0EsaUJBQUtDLE1BQUw7QUFDRCxTQUhZLEVBR1ZILE9BSFUsQ0FBYjtBQUlEO0FBZk8sSzs7OztFQU51QixlQUFLSSxTOztrQkFBbkJiLEsiLCJmaWxlIjoidG9hc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gXCJ3ZXB5XCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2FzdCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgZGF0YSA9IHtcbiAgICBhcHBlYXI6IGZhbHNlLFxuICAgIHRpdGxlOiAnJ1xuICB9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICBfY2xlYXJUb2FzdCgpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcbiAgICAgIHRoaXMuYXBwZWFyID0gZmFsc2U7XG4gICAgICB0aGlzLnRpbWVyID0gbnVsbDtcbiAgICB9LFxuXG4gICAgc2hvdyh0aXRsZSA9ICcnLCB0aW1lb3V0ID0gMzAwMCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xuICAgICAgdGhpcy5hcHBlYXIgPSB0cnVlO1xuICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgdGhpcy50aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLm1ldGhvZHMuX2NsZWFyVG9hc3QuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgIH0sIHRpbWVvdXQpO1xuICAgIH1cbiAgfVxufVxuIl19