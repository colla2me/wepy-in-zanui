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

var Stepper = function (_wepy$component) {
  _inherits(Stepper, _wepy$component);

  function Stepper() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Stepper);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Stepper.__proto__ || Object.getPrototypeOf(Stepper)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      componentId: String,
      size: {
        type: String,
        default: ''
      },
      stepper: {
        type: Number,
        default: 0
      },
      min: {
        type: Number,
        default: 0
      },
      max: {
        type: Number,
        default: 0
      }
    }, _this.methods = {
      _handleStepperPlus: function _handleStepperPlus(disabled) {
        if (disabled) {
          return;
        }
        this._callback(this.stepper + 1);
      },
      _handleStepperMinus: function _handleStepperMinus(disabled) {
        if (disabled) {
          return;
        }
        this._callback(this.stepper - 1);
      },
      _handleStepperBlur: function _handleStepperBlur(e) {
        var _this2 = this;

        var value = e.detail.value;
        if (!value) {
          setTimeout(function () {
            _this2._callback.call(_this2, _this2.min);
          }, 16);
          this._callback(value);
          return '' + value;
        }

        value = +value;
        value = Math.max(this.min, Math.min(this.max, value));
        this._callback(value);
        return '' + value;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Stepper, [{
    key: '_callback',
    value: function _callback(stepper) {
      this.$emit('stepperChange', {
        componentId: this.componentId,
        value: stepper
      });
    }
  }]);

  return Stepper;
}(_wepy2.default.component);

exports.default = Stepper;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0ZXBwZXIuanMiXSwibmFtZXMiOlsiU3RlcHBlciIsInByb3BzIiwiY29tcG9uZW50SWQiLCJTdHJpbmciLCJzaXplIiwidHlwZSIsImRlZmF1bHQiLCJzdGVwcGVyIiwiTnVtYmVyIiwibWluIiwibWF4IiwibWV0aG9kcyIsIl9oYW5kbGVTdGVwcGVyUGx1cyIsImRpc2FibGVkIiwiX2NhbGxiYWNrIiwiX2hhbmRsZVN0ZXBwZXJNaW51cyIsIl9oYW5kbGVTdGVwcGVyQmx1ciIsImUiLCJ2YWx1ZSIsImRldGFpbCIsInNldFRpbWVvdXQiLCJjYWxsIiwiTWF0aCIsIiRlbWl0IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxPOzs7Ozs7Ozs7Ozs7Ozt3TEFDbkJDLEssR0FBUTtBQUNOQyxtQkFBYUMsTUFEUDtBQUVOQyxZQUFNO0FBQ0pDLGNBQU1GLE1BREY7QUFFSkcsaUJBQVM7QUFGTCxPQUZBO0FBTU5DLGVBQVM7QUFDUEYsY0FBTUcsTUFEQztBQUVQRixpQkFBUztBQUZGLE9BTkg7QUFVTkcsV0FBSztBQUNISixjQUFNRyxNQURIO0FBRUhGLGlCQUFTO0FBRk4sT0FWQztBQWNOSSxXQUFLO0FBQ0hMLGNBQU1HLE1BREg7QUFFSEYsaUJBQVM7QUFGTjtBQWRDLEssUUEyQlJLLE8sR0FBVTtBQUNSQyx3QkFEUSw4QkFDV0MsUUFEWCxFQUNxQjtBQUMzQixZQUFJQSxRQUFKLEVBQWM7QUFBRTtBQUFTO0FBQ3pCLGFBQUtDLFNBQUwsQ0FBZSxLQUFLUCxPQUFMLEdBQWUsQ0FBOUI7QUFDRCxPQUpPO0FBTVJRLHlCQU5RLCtCQU1ZRixRQU5aLEVBTXNCO0FBQzVCLFlBQUlBLFFBQUosRUFBYztBQUFFO0FBQVM7QUFDekIsYUFBS0MsU0FBTCxDQUFlLEtBQUtQLE9BQUwsR0FBZSxDQUE5QjtBQUNELE9BVE87QUFXUlMsd0JBWFEsOEJBV1dDLENBWFgsRUFXYztBQUFBOztBQUNwQixZQUFJQyxRQUFRRCxFQUFFRSxNQUFGLENBQVNELEtBQXJCO0FBQ0EsWUFBSSxDQUFDQSxLQUFMLEVBQVk7QUFDVkUscUJBQVcsWUFBTTtBQUNmLG1CQUFLTixTQUFMLENBQWVPLElBQWYsU0FBMEIsT0FBS1osR0FBL0I7QUFDRCxXQUZELEVBRUcsRUFGSDtBQUdBLGVBQUtLLFNBQUwsQ0FBZUksS0FBZjtBQUNBLGlCQUFPLEtBQUtBLEtBQVo7QUFDRDs7QUFFREEsZ0JBQVEsQ0FBQ0EsS0FBVDtBQUNBQSxnQkFBUUksS0FBS1osR0FBTCxDQUFTLEtBQUtELEdBQWQsRUFBbUJhLEtBQUtiLEdBQUwsQ0FBUyxLQUFLQyxHQUFkLEVBQW1CUSxLQUFuQixDQUFuQixDQUFSO0FBQ0EsYUFBS0osU0FBTCxDQUFlSSxLQUFmO0FBQ0EsZUFBTyxLQUFLQSxLQUFaO0FBQ0Q7QUF6Qk8sSzs7Ozs7OEJBUEFYLE8sRUFBUztBQUNqQixXQUFLZ0IsS0FBTCxDQUFXLGVBQVgsRUFBNEI7QUFDMUJyQixxQkFBYSxLQUFLQSxXQURRO0FBRTFCZ0IsZUFBT1g7QUFGbUIsT0FBNUI7QUFJRDs7OztFQTFCa0MsZUFBS2lCLFM7O2tCQUFyQnhCLE8iLCJmaWxlIjoic3RlcHBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSBcIndlcHlcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0ZXBwZXIgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gIHByb3BzID0ge1xuICAgIGNvbXBvbmVudElkOiBTdHJpbmcsXG4gICAgc2l6ZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJydcbiAgICB9LFxuICAgIHN0ZXBwZXI6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IDBcbiAgICB9LFxuICAgIG1pbjoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogMFxuICAgIH0sXG4gICAgbWF4OiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICBkZWZhdWx0OiAwXG4gICAgfVxuICB9XG5cbiAgX2NhbGxiYWNrKHN0ZXBwZXIpIHtcbiAgICB0aGlzLiRlbWl0KCdzdGVwcGVyQ2hhbmdlJywge1xuICAgICAgY29tcG9uZW50SWQ6IHRoaXMuY29tcG9uZW50SWQsXG4gICAgICB2YWx1ZTogc3RlcHBlclxuICAgIH0pXG4gIH1cblxuICBtZXRob2RzID0ge1xuICAgIF9oYW5kbGVTdGVwcGVyUGx1cyhkaXNhYmxlZCkge1xuICAgICAgaWYgKGRpc2FibGVkKSB7IHJldHVybjsgfVxuICAgICAgdGhpcy5fY2FsbGJhY2sodGhpcy5zdGVwcGVyICsgMSlcbiAgICB9LFxuXG4gICAgX2hhbmRsZVN0ZXBwZXJNaW51cyhkaXNhYmxlZCkge1xuICAgICAgaWYgKGRpc2FibGVkKSB7IHJldHVybjsgfVxuICAgICAgdGhpcy5fY2FsbGJhY2sodGhpcy5zdGVwcGVyIC0gMSlcbiAgICB9LFxuXG4gICAgX2hhbmRsZVN0ZXBwZXJCbHVyKGUpIHtcbiAgICAgIGxldCB2YWx1ZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLl9jYWxsYmFjay5jYWxsKHRoaXMsIHRoaXMubWluKTtcbiAgICAgICAgfSwgMTYpO1xuICAgICAgICB0aGlzLl9jYWxsYmFjayh2YWx1ZSk7XG4gICAgICAgIHJldHVybiAnJyArIHZhbHVlO1xuICAgICAgfVxuXG4gICAgICB2YWx1ZSA9ICt2YWx1ZTtcbiAgICAgIHZhbHVlID0gTWF0aC5tYXgodGhpcy5taW4sIE1hdGgubWluKHRoaXMubWF4LCB2YWx1ZSkpO1xuICAgICAgdGhpcy5fY2FsbGJhY2sodmFsdWUpO1xuICAgICAgcmV0dXJuICcnICsgdmFsdWU7XG4gICAgfVxuICB9XG59XG4iXX0=