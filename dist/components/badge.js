"use strict";

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

var Badge = function (_wepy$component) {
  _inherits(Badge, _wepy$component);

  function Badge() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Badge);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Badge.__proto__ || Object.getPrototypeOf(Badge)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      value: {
        type: [Number, String],
        coerce: function coerce(v) {
          if (isNaN(v)) return 0;
          return +v;
        },
        default: 0
      },
      icon: {
        type: String,
        default: ""
      }
    }, _this.data = {}, _this.computed = {
      badge: function badge() {
        return this.value > 99 ? "99+" : this.value;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Badge;
}(_wepy2.default.component);

exports.default = Badge;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhZGdlLmpzIl0sIm5hbWVzIjpbIkJhZGdlIiwicHJvcHMiLCJ2YWx1ZSIsInR5cGUiLCJOdW1iZXIiLCJTdHJpbmciLCJjb2VyY2UiLCJ2IiwiaXNOYU4iLCJkZWZhdWx0IiwiaWNvbiIsImRhdGEiLCJjb21wdXRlZCIsImJhZGdlIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxLLEdBQVE7QUFDTkMsYUFBTztBQUNMQyxjQUFNLENBQUNDLE1BQUQsRUFBU0MsTUFBVCxDQUREO0FBRUxDLGdCQUFRLGdCQUFTQyxDQUFULEVBQVk7QUFDbEIsY0FBSUMsTUFBTUQsQ0FBTixDQUFKLEVBQWMsT0FBTyxDQUFQO0FBQ2QsaUJBQU8sQ0FBQ0EsQ0FBUjtBQUNELFNBTEk7QUFNTEUsaUJBQVM7QUFOSixPQUREO0FBU05DLFlBQU07QUFDSlAsY0FBTUUsTUFERjtBQUVKSSxpQkFBUztBQUZMO0FBVEEsSyxRQWNSRSxJLEdBQU8sRSxRQUNQQyxRLEdBQVc7QUFDVEMsV0FEUyxtQkFDRDtBQUNOLGVBQU8sS0FBS1gsS0FBTCxHQUFhLEVBQWIsR0FBa0IsS0FBbEIsR0FBMEIsS0FBS0EsS0FBdEM7QUFDRDtBQUhRLEs7Ozs7RUFoQnNCLGVBQUtZLFM7O2tCQUFuQmQsSyIsImZpbGUiOiJiYWRnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSBcIndlcHlcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhZGdlIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICBwcm9wcyA9IHtcbiAgICB2YWx1ZToge1xuICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcbiAgICAgIGNvZXJjZTogZnVuY3Rpb24odikge1xuICAgICAgICBpZiAoaXNOYU4odikpIHJldHVybiAwO1xuICAgICAgICByZXR1cm4gK3Y7XG4gICAgICB9LFxuICAgICAgZGVmYXVsdDogMFxuICAgIH0sXG4gICAgaWNvbjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogXCJcIlxuICAgIH1cbiAgfTtcbiAgZGF0YSA9IHt9O1xuICBjb21wdXRlZCA9IHtcbiAgICBiYWRnZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlID4gOTkgPyBcIjk5K1wiIDogdGhpcy52YWx1ZTtcbiAgICB9XG4gIH07XG59XG4iXX0=