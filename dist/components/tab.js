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

var Tab = function (_wepy$component) {
  _inherits(Tab, _wepy$component);

  function Tab() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Tab);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Tab.__proto__ || Object.getPrototypeOf(Tab)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      tab: Object,
      componentId: String
    }, _this.methods = {
      _handleTabChange: function _handleTabChange(itemId) {
        console.info('[zan:tab:change]', itemId);
        this.$emit('tabChange', {
          selectedId: itemId,
          componentId: this.componentId
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Tab;
}(_wepy2.default.component);

exports.default = Tab;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYi5qcyJdLCJuYW1lcyI6WyJUYWIiLCJwcm9wcyIsInRhYiIsIk9iamVjdCIsImNvbXBvbmVudElkIiwiU3RyaW5nIiwibWV0aG9kcyIsIl9oYW5kbGVUYWJDaGFuZ2UiLCJpdGVtSWQiLCJjb25zb2xlIiwiaW5mbyIsIiRlbWl0Iiwic2VsZWN0ZWRJZCIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEc7Ozs7Ozs7Ozs7Ozs7O2dMQUNuQkMsSyxHQUFRO0FBQ05DLFdBQUtDLE1BREM7QUFFTkMsbUJBQWFDO0FBRlAsSyxRQUtSQyxPLEdBQVU7QUFDUkMsc0JBRFEsNEJBQ1NDLE1BRFQsRUFDaUI7QUFDdkJDLGdCQUFRQyxJQUFSLENBQWEsa0JBQWIsRUFBaUNGLE1BQWpDO0FBQ0EsYUFBS0csS0FBTCxDQUFXLFdBQVgsRUFBd0I7QUFDdEJDLHNCQUFZSixNQURVO0FBRXRCSix1QkFBYSxLQUFLQTtBQUZJLFNBQXhCO0FBSUQ7QUFQTyxLOzs7O0VBTnFCLGVBQUtTLFM7O2tCQUFqQmIsRyIsImZpbGUiOiJ0YWIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gXCJ3ZXB5XCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWIgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gIHByb3BzID0ge1xuICAgIHRhYjogT2JqZWN0LFxuICAgIGNvbXBvbmVudElkOiBTdHJpbmdcbiAgfVxuXG4gIG1ldGhvZHMgPSB7XG4gICAgX2hhbmRsZVRhYkNoYW5nZShpdGVtSWQpIHtcbiAgICAgIGNvbnNvbGUuaW5mbygnW3phbjp0YWI6Y2hhbmdlXScsIGl0ZW1JZCk7XG4gICAgICB0aGlzLiRlbWl0KCd0YWJDaGFuZ2UnLCB7XG4gICAgICAgIHNlbGVjdGVkSWQ6IGl0ZW1JZCxcbiAgICAgICAgY29tcG9uZW50SWQ6IHRoaXMuY29tcG9uZW50SWRcbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG4iXX0=