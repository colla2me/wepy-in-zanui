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

var Switch = function (_wepy$component) {
  _inherits(Switch, _wepy$component);

  function Switch() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Switch);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Switch.__proto__ || Object.getPrototypeOf(Switch)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      checked: {
        type: Boolean,
        default: false
      },
      loading: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      componentId: {
        type: String,
        default: ''
      }
    }, _this.methods = {
      _handleSwitchChange: function _handleSwitchChange() {
        console.log(333434);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Switch;
}(_wepy2.default.component);

exports.default = Switch;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN3aXRjaC5qcyJdLCJuYW1lcyI6WyJTd2l0Y2giLCJwcm9wcyIsImNoZWNrZWQiLCJ0eXBlIiwiQm9vbGVhbiIsImRlZmF1bHQiLCJsb2FkaW5nIiwiZGlzYWJsZWQiLCJjb21wb25lbnRJZCIsIlN0cmluZyIsIm1ldGhvZHMiLCJfaGFuZGxlU3dpdGNoQ2hhbmdlIiwiY29uc29sZSIsImxvZyIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLE07Ozs7Ozs7Ozs7Ozs7O3NMQUNuQkMsSyxHQUFRO0FBQ05DLGVBQVM7QUFDUEMsY0FBTUMsT0FEQztBQUVQQyxpQkFBUztBQUZGLE9BREg7QUFLTkMsZUFBUztBQUNQSCxjQUFNQyxPQURDO0FBRVBDLGlCQUFTO0FBRkYsT0FMSDtBQVNORSxnQkFBVTtBQUNSSixjQUFNQyxPQURFO0FBRVJDLGlCQUFTO0FBRkQsT0FUSjtBQWFORyxtQkFBYTtBQUNYTCxjQUFNTSxNQURLO0FBRVhKLGlCQUFTO0FBRkU7QUFiUCxLLFFBbUJSSyxPLEdBQVU7QUFDUkMseUJBRFEsaUNBQ2M7QUFDcEJDLGdCQUFRQyxHQUFSLENBQVksTUFBWjtBQUNEO0FBSE8sSzs7OztFQXBCd0IsZUFBS0MsUzs7a0JBQXBCZCxNIiwiZmlsZSI6InN3aXRjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSBcIndlcHlcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN3aXRjaCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgcHJvcHMgPSB7XG4gICAgY2hlY2tlZDoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgfSxcbiAgICBsb2FkaW5nOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9LFxuICAgIGRpc2FibGVkOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9LFxuICAgIGNvbXBvbmVudElkOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJ1xuICAgIH1cbiAgfVxuXG4gIG1ldGhvZHMgPSB7XG4gICAgX2hhbmRsZVN3aXRjaENoYW5nZSgpIHtcbiAgICAgIGNvbnNvbGUubG9nKDMzMzQzNClcbiAgICB9XG4gIH1cbn1cbiJdfQ==