"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var types = ["primary", "danger", "warn", "plain", "loading"];
var sizes = ["small", "mini", "large"];
var classnames = function classnames(cls) {
  var obj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var res = Object.keys(obj).filter(function (key) {
    return obj[key];
  });
  if (cls) {
    res.unshift(cls);
  }
  return res.join(" ");
};

var Button = function (_wepy$component) {
  _inherits(Button, _wepy$component);

  function Button() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Button);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Button.__proto__ || Object.getPrototypeOf(Button)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      type: {
        type: String,
        coerce: function coerce(v) {
          return types.indexOf(v) > -1 ? v : "";
        }
      },
      size: {
        type: String,
        coerce: function coerce(v) {
          return sizes.indexOf(v) > -1 ? v : "";
        }
      },
      title: {
        type: String,
        default: ""
      },
      disabled: {
        type: Boolean,
        coerce: function coerce(v) {
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
    }, _this.data = {}, _this.computed = {
      classes: function classes() {
        var _classnames;

        return classnames("zan-btn", (_classnames = {}, _defineProperty(_classnames, "zan-btn-" + this.type, !!this.type), _defineProperty(_classnames, "zan-btn-" + this.size, !!this.size), _defineProperty(_classnames, "zan-btn-loading", this.loading), _classnames));
      }
    }, _this.methods = {
      handleTap: function handleTap() {
        this.$emit("onClick", "abcz");
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Button;
}(_wepy2.default.component);

exports.default = Button;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ0bi5qcyJdLCJuYW1lcyI6WyJ0eXBlcyIsInNpemVzIiwiY2xhc3NuYW1lcyIsImNscyIsIm9iaiIsInJlcyIsIk9iamVjdCIsImtleXMiLCJmaWx0ZXIiLCJrZXkiLCJ1bnNoaWZ0Iiwiam9pbiIsIkJ1dHRvbiIsInByb3BzIiwidHlwZSIsIlN0cmluZyIsImNvZXJjZSIsInYiLCJpbmRleE9mIiwic2l6ZSIsInRpdGxlIiwiZGVmYXVsdCIsImRpc2FibGVkIiwiQm9vbGVhbiIsImxvYWRpbmciLCJvbkNsaWNrIiwiRnVuY3Rpb24iLCJkYXRhIiwiY29tcHV0ZWQiLCJjbGFzc2VzIiwibWV0aG9kcyIsImhhbmRsZVRhcCIsIiRlbWl0IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBTUEsUUFBUSxDQUFDLFNBQUQsRUFBWSxRQUFaLEVBQXNCLE1BQXRCLEVBQThCLE9BQTlCLEVBQXVDLFNBQXZDLENBQWQ7QUFDQSxJQUFNQyxRQUFRLENBQUMsT0FBRCxFQUFVLE1BQVYsRUFBa0IsT0FBbEIsQ0FBZDtBQUNBLElBQU1DLGFBQWEsU0FBYkEsVUFBYSxDQUFDQyxHQUFELEVBQW1CO0FBQUEsTUFBYkMsR0FBYSx1RUFBUCxFQUFPOztBQUNwQyxNQUFNQyxNQUFNQyxPQUFPQyxJQUFQLENBQVlILEdBQVosRUFBaUJJLE1BQWpCLENBQXdCLGVBQU87QUFDekMsV0FBT0osSUFBSUssR0FBSixDQUFQO0FBQ0QsR0FGVyxDQUFaO0FBR0EsTUFBSU4sR0FBSixFQUFTO0FBQ1BFLFFBQUlLLE9BQUosQ0FBWVAsR0FBWjtBQUNEO0FBQ0QsU0FBT0UsSUFBSU0sSUFBSixDQUFTLEdBQVQsQ0FBUDtBQUNELENBUkQ7O0lBU3FCQyxNOzs7Ozs7Ozs7Ozs7OztzTEFDbkJDLEssR0FBUTtBQUNOQyxZQUFNO0FBQ0pBLGNBQU1DLE1BREY7QUFFSkMsZ0JBQVEsZ0JBQVNDLENBQVQsRUFBWTtBQUNsQixpQkFBT2pCLE1BQU1rQixPQUFOLENBQWNELENBQWQsSUFBbUIsQ0FBQyxDQUFwQixHQUF3QkEsQ0FBeEIsR0FBNEIsRUFBbkM7QUFDRDtBQUpHLE9BREE7QUFPTkUsWUFBTTtBQUNKTCxjQUFNQyxNQURGO0FBRUpDLGdCQUFRLGdCQUFTQyxDQUFULEVBQVk7QUFDbEIsaUJBQU9oQixNQUFNaUIsT0FBTixDQUFjRCxDQUFkLElBQW1CLENBQUMsQ0FBcEIsR0FBd0JBLENBQXhCLEdBQTRCLEVBQW5DO0FBQ0Q7QUFKRyxPQVBBO0FBYU5HLGFBQU87QUFDTE4sY0FBTUMsTUFERDtBQUVMTSxpQkFBUztBQUZKLE9BYkQ7QUFpQk5DLGdCQUFVO0FBQ1JSLGNBQU1TLE9BREU7QUFFUlAsZ0JBQVEsZ0JBQVNDLENBQVQsRUFBWTtBQUNsQixpQkFBTyxDQUFDLENBQUNBLENBQVQ7QUFDRCxTQUpPO0FBS1JJLGlCQUFTO0FBTEQsT0FqQko7QUF3Qk5HLGVBQVM7QUFDUFYsY0FBTVMsT0FEQztBQUVQRixpQkFBUztBQUZGLE9BeEJIO0FBNEJOSSxlQUFTO0FBQ1BYLGNBQU1ZO0FBREM7QUE1QkgsSyxRQWlDUkMsSSxHQUFPLEUsUUFFUEMsUSxHQUFXO0FBQ1RDLGFBRFMscUJBQ0M7QUFBQTs7QUFDUixlQUFPM0IsV0FBVyxTQUFYLCtEQUNPLEtBQUtZLElBRFosRUFDcUIsQ0FBQyxDQUFDLEtBQUtBLElBRDVCLDZDQUVPLEtBQUtLLElBRlosRUFFcUIsQ0FBQyxDQUFDLEtBQUtBLElBRjVCLGdDQUdMLGlCQUhLLEVBR2MsS0FBS0ssT0FIbkIsZ0JBQVA7QUFLRDtBQVBRLEssUUFVWE0sTyxHQUFVO0FBQ1JDLGVBRFEsdUJBQ0k7QUFDVixhQUFLQyxLQUFMLENBQVcsU0FBWCxFQUFzQixNQUF0QjtBQUNEO0FBSE8sSzs7OztFQTlDd0IsZUFBS0MsUzs7a0JBQXBCckIsTSIsImZpbGUiOiJidG4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gXCJ3ZXB5XCI7XG5jb25zdCB0eXBlcyA9IFtcInByaW1hcnlcIiwgXCJkYW5nZXJcIiwgXCJ3YXJuXCIsIFwicGxhaW5cIiwgXCJsb2FkaW5nXCJdO1xuY29uc3Qgc2l6ZXMgPSBbXCJzbWFsbFwiLCBcIm1pbmlcIiwgXCJsYXJnZVwiXTtcbmNvbnN0IGNsYXNzbmFtZXMgPSAoY2xzLCBvYmogPSB7fSkgPT4ge1xuICBjb25zdCByZXMgPSBPYmplY3Qua2V5cyhvYmopLmZpbHRlcihrZXkgPT4ge1xuICAgIHJldHVybiBvYmpba2V5XTtcbiAgfSk7XG4gIGlmIChjbHMpIHtcbiAgICByZXMudW5zaGlmdChjbHMpO1xuICB9XG4gIHJldHVybiByZXMuam9pbihcIiBcIik7XG59O1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV0dG9uIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICBwcm9wcyA9IHtcbiAgICB0eXBlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBjb2VyY2U6IGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVzLmluZGV4T2YodikgPiAtMSA/IHYgOiBcIlwiO1xuICAgICAgfVxuICAgIH0sXG4gICAgc2l6ZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgY29lcmNlOiBmdW5jdGlvbih2KSB7XG4gICAgICAgIHJldHVybiBzaXplcy5pbmRleE9mKHYpID4gLTEgPyB2IDogXCJcIjtcbiAgICAgIH1cbiAgICB9LFxuICAgIHRpdGxlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiBcIlwiXG4gICAgfSxcbiAgICBkaXNhYmxlZDoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGNvZXJjZTogZnVuY3Rpb24odikge1xuICAgICAgICByZXR1cm4gISF2O1xuICAgICAgfSxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgfSxcbiAgICBsb2FkaW5nOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9LFxuICAgIG9uQ2xpY2s6IHtcbiAgICAgIHR5cGU6IEZ1bmN0aW9uXG4gICAgfVxuICB9O1xuXG4gIGRhdGEgPSB7fTtcblxuICBjb21wdXRlZCA9IHtcbiAgICBjbGFzc2VzKCkge1xuICAgICAgcmV0dXJuIGNsYXNzbmFtZXMoXCJ6YW4tYnRuXCIsIHtcbiAgICAgICAgW2B6YW4tYnRuLSR7dGhpcy50eXBlfWBdOiAhIXRoaXMudHlwZSxcbiAgICAgICAgW2B6YW4tYnRuLSR7dGhpcy5zaXplfWBdOiAhIXRoaXMuc2l6ZSxcbiAgICAgICAgXCJ6YW4tYnRuLWxvYWRpbmdcIjogdGhpcy5sb2FkaW5nXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgbWV0aG9kcyA9IHtcbiAgICBoYW5kbGVUYXAoKSB7XG4gICAgICB0aGlzLiRlbWl0KFwib25DbGlja1wiLCBcImFiY3pcIik7XG4gICAgfVxuICB9O1xufVxuIl19