"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _stepper = require('./../components/stepper.js');

var _stepper2 = _interopRequireDefault(_stepper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Step = function (_wepy$page) {
  _inherits(Step, _wepy$page);

  function Step() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Step);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Step.__proto__ || Object.getPrototypeOf(Step)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      stepper1: 10,
      min1: 1,
      max1: 20,

      stepper2: 1,
      min2: 1,
      max2: 1,

      stepper3: 10,
      min3: 1,
      max3: 20
    }, _this.$repeat = {}, _this.$props = { "stepper1": { "componentId": "stepper1", "xmlns:v-bind": "", "v-bind:stepper.sync": "stepper1", "v-bind:min.once": "min1", "v-bind:max.once": "max1" } }, _this.$events = {}, _this.components = {
      stepper1: _stepper2.default
    }, _this.events = {
      stepperChange: function stepperChange(data) {
        if (data.componentId === 'stepper1') {
          this.stepper1 = data.value;
        }
        console.log('change:', data);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Step;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Step , 'pages/stepper'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0ZXBwZXIuanMiXSwibmFtZXMiOlsiU3RlcCIsImRhdGEiLCJzdGVwcGVyMSIsIm1pbjEiLCJtYXgxIiwic3RlcHBlcjIiLCJtaW4yIiwibWF4MiIsInN0ZXBwZXIzIiwibWluMyIsIm1heDMiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJldmVudHMiLCJzdGVwcGVyQ2hhbmdlIiwiY29tcG9uZW50SWQiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLEksR0FBTztBQUNMQyxnQkFBVSxFQURMO0FBRUxDLFlBQU0sQ0FGRDtBQUdMQyxZQUFNLEVBSEQ7O0FBS0xDLGdCQUFVLENBTEw7QUFNTEMsWUFBTSxDQU5EO0FBT0xDLFlBQU0sQ0FQRDs7QUFTTEMsZ0JBQVUsRUFUTDtBQVVMQyxZQUFNLENBVkQ7QUFXTEMsWUFBTTtBQVhELEssUUFjUkMsTyxHQUFVLEUsUUFDWEMsTSxHQUFTLEVBQUMsWUFBVyxFQUFDLGVBQWMsVUFBZixFQUEwQixnQkFBZSxFQUF6QyxFQUE0Qyx1QkFBc0IsVUFBbEUsRUFBNkUsbUJBQWtCLE1BQS9GLEVBQXNHLG1CQUFrQixNQUF4SCxFQUFaLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1ZaO0FBRFUsSyxRQUlaYSxNLEdBQVM7QUFDUEMsbUJBRE8seUJBQ09mLElBRFAsRUFDYTtBQUNsQixZQUFJQSxLQUFLZ0IsV0FBTCxLQUFxQixVQUF6QixFQUFxQztBQUNuQyxlQUFLZixRQUFMLEdBQWdCRCxLQUFLaUIsS0FBckI7QUFDRDtBQUNEQyxnQkFBUUMsR0FBUixDQUFZLFNBQVosRUFBdUJuQixJQUF2QjtBQUNEO0FBTk0sSzs7OztFQXRCdUIsZUFBS29CLEk7O2tCQUFsQnJCLEkiLCJmaWxlIjoic3RlcHBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSBcIndlcHlcIjtcbmltcG9ydCBTdGVwcGVyIGZyb20gJy4uL2NvbXBvbmVudHMvc3RlcHBlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0ZXAgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBkYXRhID0ge1xuICAgIHN0ZXBwZXIxOiAxMCxcbiAgICBtaW4xOiAxLFxuICAgIG1heDE6IDIwLFxuXG4gICAgc3RlcHBlcjI6IDEsXG4gICAgbWluMjogMSxcbiAgICBtYXgyOiAxLFxuXG4gICAgc3RlcHBlcjM6IDEwLFxuICAgIG1pbjM6IDEsXG4gICAgbWF4MzogMjBcbiAgfTtcblxuICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wic3RlcHBlcjFcIjp7XCJjb21wb25lbnRJZFwiOlwic3RlcHBlcjFcIixcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6c3RlcHBlci5zeW5jXCI6XCJzdGVwcGVyMVwiLFwidi1iaW5kOm1pbi5vbmNlXCI6XCJtaW4xXCIsXCJ2LWJpbmQ6bWF4Lm9uY2VcIjpcIm1heDFcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgIHN0ZXBwZXIxOiBTdGVwcGVyXG4gIH1cblxuICBldmVudHMgPSB7XG4gICAgc3RlcHBlckNoYW5nZShkYXRhKSB7XG4gICAgICBpZiAoZGF0YS5jb21wb25lbnRJZCA9PT0gJ3N0ZXBwZXIxJykge1xuICAgICAgICB0aGlzLnN0ZXBwZXIxID0gZGF0YS52YWx1ZVxuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coJ2NoYW5nZTonLCBkYXRhKTtcbiAgICB9XG4gIH07XG59XG4iXX0=