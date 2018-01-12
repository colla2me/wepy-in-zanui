"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../../npm/wepy/lib/wepy.js');

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Toast.__proto__ || Object.getPrototypeOf(Toast)).call.apply(_ref, [this].concat(args))), _this), _this.props = {}, _this.data = {
      show: false,
      title: '',
      timer: null
    }, _this.methods = {
      _clearToast: function _clearToast() {
        clearTimeout(this.timer);
        this.show = false;
        this.timer = null;
      },
      showToast: function showToast(title, timeout) {
        var _this2 = this;

        clearTimeout(this.timer);

        this.show = true;
        this.title = title;
        this.timer = setTimeout(function () {
          _this2.methods._clearToast.call(_this2);
          _this2.$apply();
        }, timeout || 3000);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Toast;
}(_wepy2.default.component);

exports.default = Toast;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlRvYXN0IiwicHJvcHMiLCJkYXRhIiwic2hvdyIsInRpdGxlIiwidGltZXIiLCJtZXRob2RzIiwiX2NsZWFyVG9hc3QiLCJjbGVhclRpbWVvdXQiLCJzaG93VG9hc3QiLCJ0aW1lb3V0Iiwic2V0VGltZW91dCIsImNhbGwiLCIkYXBwbHkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLEssR0FBUSxFLFFBRVJDLEksR0FBTztBQUNMQyxZQUFNLEtBREQ7QUFFTEMsYUFBTyxFQUZGO0FBR0xDLGFBQU87QUFIRixLLFFBTVBDLE8sR0FBVTtBQUNSQyxpQkFEUSx5QkFDTTtBQUNaQyxxQkFBYSxLQUFLSCxLQUFsQjtBQUNBLGFBQUtGLElBQUwsR0FBWSxLQUFaO0FBQ0EsYUFBS0UsS0FBTCxHQUFhLElBQWI7QUFDRCxPQUxPO0FBT1JJLGVBUFEscUJBT0VMLEtBUEYsRUFPU00sT0FQVCxFQU9rQjtBQUFBOztBQUN4QkYscUJBQWEsS0FBS0gsS0FBbEI7O0FBRUEsYUFBS0YsSUFBTCxHQUFZLElBQVo7QUFDQSxhQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxhQUFLQyxLQUFMLEdBQWFNLFdBQVcsWUFBTTtBQUM1QixpQkFBS0wsT0FBTCxDQUFhQyxXQUFiLENBQXlCSyxJQUF6QjtBQUNBLGlCQUFLQyxNQUFMO0FBQ0QsU0FIWSxFQUdWSCxXQUFXLElBSEQsQ0FBYjtBQUlEO0FBaEJPLEs7Ozs7RUFUdUIsZUFBS0ksUzs7a0JBQW5CZCxLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tIFwid2VweVwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9hc3QgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gIHByb3BzID0ge31cblxuICBkYXRhID0ge1xuICAgIHNob3c6IGZhbHNlLFxuICAgIHRpdGxlOiAnJyxcbiAgICB0aW1lcjogbnVsbFxuICB9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICBfY2xlYXJUb2FzdCgpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcbiAgICAgIHRoaXMuc2hvdyA9IGZhbHNlO1xuICAgICAgdGhpcy50aW1lciA9IG51bGw7XG4gICAgfSxcblxuICAgIHNob3dUb2FzdCh0aXRsZSwgdGltZW91dCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xuXG4gICAgICB0aGlzLnNob3cgPSB0cnVlO1xuICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgdGhpcy50aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLm1ldGhvZHMuX2NsZWFyVG9hc3QuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgIH0sIHRpbWVvdXQgfHwgMzAwMCk7XG4gICAgfVxuICB9XG59XG4iXX0=