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

var Button = function (_wepy$page) {
  _inherits(Button, _wepy$page);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  return Button;
}(_wepy2.default.page);

/**
const types = ["primary", "danger", "warn", "plain", "loading"];
const sizes = ["small", "mini", "large"];
const classnames = (cls, obj = {}) => {
  const res = Object.keys(obj).filter(key => {
    return obj[key];
  });
  if (cls) {
    res.unshift(cls);
  }
  return res.join(" ");
};
export default class Button extends wepy.component {
  props = {
    type: {
      type: String,
      coerce: function(v) {
        return types.indexOf(v) > -1 ? v : "";
      }
    },
    size: {
      type: String,
      coerce: function(v) {
        return sizes.indexOf(v) > -1 ? v : "";
      }
    },
    title: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      coerce: function(v) {
        return !!v;
      },
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    onClick: {
      type: Function
    }
  };

  data = {};

  computed = {
    classes() {
      return classnames("zan-btn", {
        [`zan-btn-${this.type}`]: !!this.type,
        [`zan-btn-${this.size}`]: !!this.size,
        "zan-btn-loading": this.loading
      });
    }
  };

  methods = {
    handleTap() {
      this.$emit("onClick", "abcz");
    }
  };
} */


exports.default = Button;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ0bi5qcyJdLCJuYW1lcyI6WyJCdXR0b24iLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsTTs7Ozs7Ozs7OztFQUFlLGVBQUtDLEk7O0FBRXpDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBRnFCRCxNIiwiZmlsZSI6ImJ0bi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSBcIndlcHlcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbiBleHRlbmRzIHdlcHkucGFnZSB7fVxuXG4vKipcbmNvbnN0IHR5cGVzID0gW1wicHJpbWFyeVwiLCBcImRhbmdlclwiLCBcIndhcm5cIiwgXCJwbGFpblwiLCBcImxvYWRpbmdcIl07XG5jb25zdCBzaXplcyA9IFtcInNtYWxsXCIsIFwibWluaVwiLCBcImxhcmdlXCJdO1xuY29uc3QgY2xhc3NuYW1lcyA9IChjbHMsIG9iaiA9IHt9KSA9PiB7XG4gIGNvbnN0IHJlcyA9IE9iamVjdC5rZXlzKG9iaikuZmlsdGVyKGtleSA9PiB7XG4gICAgcmV0dXJuIG9ialtrZXldO1xuICB9KTtcbiAgaWYgKGNscykge1xuICAgIHJlcy51bnNoaWZ0KGNscyk7XG4gIH1cbiAgcmV0dXJuIHJlcy5qb2luKFwiIFwiKTtcbn07XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b24gZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gIHByb3BzID0ge1xuICAgIHR5cGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGNvZXJjZTogZnVuY3Rpb24odikge1xuICAgICAgICByZXR1cm4gdHlwZXMuaW5kZXhPZih2KSA+IC0xID8gdiA6IFwiXCI7XG4gICAgICB9XG4gICAgfSxcbiAgICBzaXplOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBjb2VyY2U6IGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgcmV0dXJuIHNpemVzLmluZGV4T2YodikgPiAtMSA/IHYgOiBcIlwiO1xuICAgICAgfVxuICAgIH0sXG4gICAgdGl0bGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6IFwiXCJcbiAgICB9LFxuICAgIGRpc2FibGVkOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgY29lcmNlOiBmdW5jdGlvbih2KSB7XG4gICAgICAgIHJldHVybiAhIXY7XG4gICAgICB9LFxuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9LFxuICAgIGxvYWRpbmc6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH0sXG4gICAgb25DbGljazoge1xuICAgICAgdHlwZTogRnVuY3Rpb25cbiAgICB9XG4gIH07XG5cbiAgZGF0YSA9IHt9O1xuXG4gIGNvbXB1dGVkID0ge1xuICAgIGNsYXNzZXMoKSB7XG4gICAgICByZXR1cm4gY2xhc3NuYW1lcyhcInphbi1idG5cIiwge1xuICAgICAgICBbYHphbi1idG4tJHt0aGlzLnR5cGV9YF06ICEhdGhpcy50eXBlLFxuICAgICAgICBbYHphbi1idG4tJHt0aGlzLnNpemV9YF06ICEhdGhpcy5zaXplLFxuICAgICAgICBcInphbi1idG4tbG9hZGluZ1wiOiB0aGlzLmxvYWRpbmdcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBtZXRob2RzID0ge1xuICAgIGhhbmRsZVRhcCgpIHtcbiAgICAgIHRoaXMuJGVtaXQoXCJvbkNsaWNrXCIsIFwiYWJjelwiKTtcbiAgICB9XG4gIH07XG59ICovXG4iXX0=