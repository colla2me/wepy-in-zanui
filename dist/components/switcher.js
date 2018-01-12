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

var Switcher = function (_wepy$component) {
  _inherits(Switcher, _wepy$component);

  function Switcher() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Switcher);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Switcher.__proto__ || Object.getPrototypeOf(Switcher)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      checked: {
        type: [Boolean, String],
        coerce: function coerce(v) {
          if (v === 'false') {
            return false;
          }
          return !!v;
        },
        default: false
      },
      loading: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: [Boolean, String],
        coerce: function coerce(v) {
          if (v === 'false') {
            return false;
          }
          return !!v;
        },
        default: false
      },
      componentId: String
    }, _this.methods = {
      _handleSwitchChange: function _handleSwitchChange() {
        if (this.disabled) {
          return;
        }
        this.$emit('switchChange', { checked: !this.checked, componentId: this.componentId });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Switcher;
}(_wepy2.default.component);

exports.default = Switcher;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN3aXRjaGVyLmpzIl0sIm5hbWVzIjpbIlN3aXRjaGVyIiwicHJvcHMiLCJjaGVja2VkIiwidHlwZSIsIkJvb2xlYW4iLCJTdHJpbmciLCJjb2VyY2UiLCJ2IiwiZGVmYXVsdCIsImxvYWRpbmciLCJkaXNhYmxlZCIsImNvbXBvbmVudElkIiwibWV0aG9kcyIsIl9oYW5kbGVTd2l0Y2hDaGFuZ2UiLCIkZW1pdCIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLFE7Ozs7Ozs7Ozs7Ozs7OzBMQUNuQkMsSyxHQUFRO0FBQ05DLGVBQVM7QUFDUEMsY0FBTSxDQUFDQyxPQUFELEVBQVVDLE1BQVYsQ0FEQztBQUVQQyxnQkFBUSxnQkFBU0MsQ0FBVCxFQUFZO0FBQ2xCLGNBQUlBLE1BQU0sT0FBVixFQUFtQjtBQUFFLG1CQUFPLEtBQVA7QUFBZTtBQUNwQyxpQkFBTyxDQUFDLENBQUNBLENBQVQ7QUFDRCxTQUxNO0FBTVBDLGlCQUFTO0FBTkYsT0FESDtBQVNOQyxlQUFTO0FBQ1BOLGNBQU1DLE9BREM7QUFFUEksaUJBQVM7QUFGRixPQVRIO0FBYU5FLGdCQUFVO0FBQ1JQLGNBQU0sQ0FBQ0MsT0FBRCxFQUFVQyxNQUFWLENBREU7QUFFUkMsZ0JBQVEsZ0JBQVNDLENBQVQsRUFBWTtBQUNsQixjQUFJQSxNQUFNLE9BQVYsRUFBbUI7QUFBRSxtQkFBTyxLQUFQO0FBQWU7QUFDcEMsaUJBQU8sQ0FBQyxDQUFDQSxDQUFUO0FBQ0QsU0FMTztBQU1SQyxpQkFBUztBQU5ELE9BYko7QUFxQk5HLG1CQUFhTjtBQXJCUCxLLFFBd0JSTyxPLEdBQVU7QUFDUkMseUJBRFEsaUNBQ2M7QUFDcEIsWUFBSSxLQUFLSCxRQUFULEVBQW1CO0FBQUU7QUFBUztBQUM5QixhQUFLSSxLQUFMLENBQVcsY0FBWCxFQUEyQixFQUFDWixTQUFTLENBQUMsS0FBS0EsT0FBaEIsRUFBeUJTLGFBQWEsS0FBS0EsV0FBM0MsRUFBM0I7QUFDRDtBQUpPLEs7Ozs7RUF6QjBCLGVBQUtJLFM7O2tCQUF0QmYsUSIsImZpbGUiOiJzd2l0Y2hlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSBcIndlcHlcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN3aXRjaGVyIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICBwcm9wcyA9IHtcbiAgICBjaGVja2VkOiB7XG4gICAgICB0eXBlOiBbQm9vbGVhbiwgU3RyaW5nXSxcbiAgICAgIGNvZXJjZTogZnVuY3Rpb24odikge1xuICAgICAgICBpZiAodiA9PT0gJ2ZhbHNlJykgeyByZXR1cm4gZmFsc2U7IH1cbiAgICAgICAgcmV0dXJuICEhdjtcbiAgICAgIH0sXG4gICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH0sXG4gICAgbG9hZGluZzoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgfSxcbiAgICBkaXNhYmxlZDoge1xuICAgICAgdHlwZTogW0Jvb2xlYW4sIFN0cmluZ10sXG4gICAgICBjb2VyY2U6IGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgaWYgKHYgPT09ICdmYWxzZScpIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgICAgIHJldHVybiAhIXY7XG4gICAgICB9LFxuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9LFxuICAgIGNvbXBvbmVudElkOiBTdHJpbmdcbiAgfVxuXG4gIG1ldGhvZHMgPSB7XG4gICAgX2hhbmRsZVN3aXRjaENoYW5nZSgpIHtcbiAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7IHJldHVybjsgfVxuICAgICAgdGhpcy4kZW1pdCgnc3dpdGNoQ2hhbmdlJywge2NoZWNrZWQ6ICF0aGlzLmNoZWNrZWQsIGNvbXBvbmVudElkOiB0aGlzLmNvbXBvbmVudElkfSk7XG4gICAgfVxuICB9XG59XG4iXX0=