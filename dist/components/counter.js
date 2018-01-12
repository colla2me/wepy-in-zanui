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

// import abc from 'abc'

var Counter = function (_wepy$component) {
  _inherits(Counter, _wepy$component);

  function Counter() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Counter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Counter.__proto__ || Object.getPrototypeOf(Counter)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Counter;
}(_wepy2.default.component);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.props = {
    num: {
      type: [Number, String],
      coerce: function coerce(v) {
        console.log('num', v);
        return +v;
      },
      default: 50
    }
  };
  this.data = {};
  this.events = {
    "index-broadcast": function indexBroadcast() {
      var _ref2;

      var $event = (_ref2 = arguments.length - 1, arguments.length <= _ref2 ? undefined : arguments[_ref2]);
      console.log(_this2.$name + " receive " + $event.name + " from " + $event.source.$name);
    }
  };
  this.watch = {
    num: function num(curVal, oldVal) {
      console.log("\u65E7\u503C\uFF1A" + oldVal + "\uFF0C\u65B0\u503C\uFF1A" + curVal);
    }
  };
  this.methods = {
    plus: function plus() {
      this.num = this.num + 1;
      console.log(this.$name + " plus tap");

      this.$emit("index-emit", 1, 2, 3);
    },
    minus: function minus() {
      this.num = this.num - 1;
      console.log(this.$name + " minus tap");
    }
  };
};

exports.default = Counter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdW50ZXIuanMiXSwibmFtZXMiOlsiQ291bnRlciIsImNvbXBvbmVudCIsInByb3BzIiwibnVtIiwidHlwZSIsIk51bWJlciIsIlN0cmluZyIsImNvZXJjZSIsInYiLCJjb25zb2xlIiwibG9nIiwiZGVmYXVsdCIsImRhdGEiLCJldmVudHMiLCIkZXZlbnQiLCJsZW5ndGgiLCIkbmFtZSIsIm5hbWUiLCJzb3VyY2UiLCJ3YXRjaCIsImN1clZhbCIsIm9sZFZhbCIsIm1ldGhvZHMiLCJwbHVzIiwiJGVtaXQiLCJtaW51cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFDQTs7SUFFcUJBLE87Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUFnQixlQUFLQyxTOzs7OztPQUN4Q0MsSyxHQUFRO0FBQ05DLFNBQUs7QUFDSEMsWUFBTSxDQUFDQyxNQUFELEVBQVNDLE1BQVQsQ0FESDtBQUVIQyxjQUFRLGdCQUFTQyxDQUFULEVBQVk7QUFDbEJDLGdCQUFRQyxHQUFSLENBQVksS0FBWixFQUFtQkYsQ0FBbkI7QUFDQSxlQUFPLENBQUNBLENBQVI7QUFDRCxPQUxFO0FBTUhHLGVBQVM7QUFOTjtBQURDLEc7T0FXUkMsSSxHQUFPLEU7T0FDUEMsTSxHQUFTO0FBQ1AsdUJBQW1CLDBCQUFhO0FBQUE7O0FBQzlCLFVBQUlDLGtCQUFjLFVBQUtDLE1BQUwsR0FBYyxDQUE1QiwyREFBSjtBQUNBTixjQUFRQyxHQUFSLENBQ0ssT0FBS00sS0FEVixpQkFDMkJGLE9BQU9HLElBRGxDLGNBQytDSCxPQUFPSSxNQUFQLENBQWNGLEtBRDdEO0FBR0Q7QUFOTSxHO09BU1RHLEssR0FBUTtBQUNOaEIsT0FETSxlQUNGaUIsTUFERSxFQUNNQyxNQUROLEVBQ2M7QUFDbEJaLGNBQVFDLEdBQVIsd0JBQWtCVyxNQUFsQixnQ0FBK0JELE1BQS9CO0FBQ0Q7QUFISyxHO09BTVJFLE8sR0FBVTtBQUNSQyxRQURRLGtCQUNEO0FBQ0wsV0FBS3BCLEdBQUwsR0FBVyxLQUFLQSxHQUFMLEdBQVcsQ0FBdEI7QUFDQU0sY0FBUUMsR0FBUixDQUFZLEtBQUtNLEtBQUwsR0FBYSxXQUF6Qjs7QUFFQSxXQUFLUSxLQUFMLENBQVcsWUFBWCxFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQjtBQUNELEtBTk87QUFPUkMsU0FQUSxtQkFPQTtBQUNOLFdBQUt0QixHQUFMLEdBQVcsS0FBS0EsR0FBTCxHQUFXLENBQXRCO0FBQ0FNLGNBQVFDLEdBQVIsQ0FBWSxLQUFLTSxLQUFMLEdBQWEsWUFBekI7QUFDRDtBQVZPLEc7OztrQkE1QlNoQixPIiwiZmlsZSI6ImNvdW50ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gXCJ3ZXB5XCI7XG4vLyBpbXBvcnQgYWJjIGZyb20gJ2FiYydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ291bnRlciBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgcHJvcHMgPSB7XG4gICAgbnVtOiB7XG4gICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgICAgY29lcmNlOiBmdW5jdGlvbih2KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdudW0nLCB2KVxuICAgICAgICByZXR1cm4gK3Y7XG4gICAgICB9LFxuICAgICAgZGVmYXVsdDogNTBcbiAgICB9XG4gIH07XG5cbiAgZGF0YSA9IHt9O1xuICBldmVudHMgPSB7XG4gICAgXCJpbmRleC1icm9hZGNhc3RcIjogKC4uLmFyZ3MpID0+IHtcbiAgICAgIGxldCAkZXZlbnQgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV07XG4gICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgYCR7dGhpcy4kbmFtZX0gcmVjZWl2ZSAkeyRldmVudC5uYW1lfSBmcm9tICR7JGV2ZW50LnNvdXJjZS4kbmFtZX1gXG4gICAgICApO1xuICAgIH1cbiAgfTtcblxuICB3YXRjaCA9IHtcbiAgICBudW0oY3VyVmFsLCBvbGRWYWwpIHtcbiAgICAgIGNvbnNvbGUubG9nKGDml6flgLzvvJoke29sZFZhbH3vvIzmlrDlgLzvvJoke2N1clZhbH1gKTtcbiAgICB9XG4gIH07XG5cbiAgbWV0aG9kcyA9IHtcbiAgICBwbHVzKCkge1xuICAgICAgdGhpcy5udW0gPSB0aGlzLm51bSArIDE7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLiRuYW1lICsgXCIgcGx1cyB0YXBcIik7XG5cbiAgICAgIHRoaXMuJGVtaXQoXCJpbmRleC1lbWl0XCIsIDEsIDIsIDMpO1xuICAgIH0sXG4gICAgbWludXMoKSB7XG4gICAgICB0aGlzLm51bSA9IHRoaXMubnVtIC0gMTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuJG5hbWUgKyBcIiBtaW51cyB0YXBcIik7XG4gICAgfVxuICB9O1xufVxuIl19