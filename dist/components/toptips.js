'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TopTips = function (_wepy$component) {
  _inherits(TopTips, _wepy$component);

  function TopTips() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TopTips);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TopTips.__proto__ || Object.getPrototypeOf(TopTips)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      appear: false,
      content: ''
    }, _this.methods = {
      show: function show() {
        var _this2 = this;

        var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        clearTimeout(this.timer);

        if (typeof options === 'number') {
          options = { duration: options };
        }

        options = _extends({ duration: 3000 }, options);

        this.timer = setTimeout(function () {
          _this2.appear = false;
          _this2.timer = null;
          _this2.$apply();
        }, options.duration);

        this.appear = true;
        this.content = content;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return TopTips;
}(_wepy2.default.component);

exports.default = TopTips;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcHRpcHMuanMiXSwibmFtZXMiOlsiVG9wVGlwcyIsImRhdGEiLCJhcHBlYXIiLCJjb250ZW50IiwibWV0aG9kcyIsInNob3ciLCJvcHRpb25zIiwiY2xlYXJUaW1lb3V0IiwidGltZXIiLCJkdXJhdGlvbiIsInNldFRpbWVvdXQiLCIkYXBwbHkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLE87Ozs7Ozs7Ozs7Ozs7O3dMQUNuQkMsSSxHQUFPO0FBQ0xDLGNBQVEsS0FESDtBQUVMQyxlQUFTO0FBRkosSyxRQUtQQyxPLEdBQVU7QUFDUkMsVUFEUSxrQkFDeUI7QUFBQTs7QUFBQSxZQUE1QkYsT0FBNEIsdUVBQWxCLEVBQWtCO0FBQUEsWUFBZEcsT0FBYyx1RUFBSixFQUFJOztBQUMvQkMscUJBQWEsS0FBS0MsS0FBbEI7O0FBRUEsWUFBSSxPQUFPRixPQUFQLEtBQW1CLFFBQXZCLEVBQWlDO0FBQy9CQSxvQkFBVSxFQUFFRyxVQUFVSCxPQUFaLEVBQVY7QUFDRDs7QUFFREEsNkJBQVlHLFVBQVUsSUFBdEIsSUFBK0JILE9BQS9COztBQUVBLGFBQUtFLEtBQUwsR0FBYUUsV0FBVyxZQUFNO0FBQzVCLGlCQUFLUixNQUFMLEdBQWMsS0FBZDtBQUNBLGlCQUFLTSxLQUFMLEdBQWEsSUFBYjtBQUNBLGlCQUFLRyxNQUFMO0FBQ0QsU0FKWSxFQUlWTCxRQUFRRyxRQUpFLENBQWI7O0FBTUEsYUFBS1AsTUFBTCxHQUFjLElBQWQ7QUFDQSxhQUFLQyxPQUFMLEdBQWVBLE9BQWY7QUFDRDtBQWxCTyxLOzs7O0VBTnlCLGVBQUtTLFM7O2tCQUFyQlosTyIsImZpbGUiOiJ0b3B0aXBzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tIFwid2VweVwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9wVGlwcyBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgZGF0YSA9IHtcbiAgICBhcHBlYXI6IGZhbHNlLFxuICAgIGNvbnRlbnQ6ICcnXG4gIH1cblxuICBtZXRob2RzID0ge1xuICAgIHNob3coY29udGVudCA9ICcnLCBvcHRpb25zID0ge30pIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcblxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnbnVtYmVyJykge1xuICAgICAgICBvcHRpb25zID0geyBkdXJhdGlvbjogb3B0aW9ucyB9O1xuICAgICAgfVxuXG4gICAgICBvcHRpb25zID0geyBkdXJhdGlvbjogMzAwMCwgLi4ub3B0aW9ucyB9O1xuXG4gICAgICB0aGlzLnRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuYXBwZWFyID0gZmFsc2U7XG4gICAgICAgIHRoaXMudGltZXIgPSBudWxsO1xuICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgfSwgb3B0aW9ucy5kdXJhdGlvbik7XG5cbiAgICAgIHRoaXMuYXBwZWFyID0gdHJ1ZTtcbiAgICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG4iXX0=