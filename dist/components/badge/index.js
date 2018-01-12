'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

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
            badge: {
                type: [Number, String],
                default: 99
            },
            icon: {
                type: String
            }
        }, _this.data = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Badge, [{
        key: 'onload',
        value: function onload() {}
    }]);

    return Badge;
}(_wepy2.default.component);

exports.default = Badge;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkJhZGdlIiwicHJvcHMiLCJiYWRnZSIsInR5cGUiLCJOdW1iZXIiLCJTdHJpbmciLCJkZWZhdWx0IiwiaWNvbiIsImRhdGEiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O3dMQUNqQkMsSyxHQUFRO0FBQ0pDLG1CQUFPO0FBQ0hDLHNCQUFNLENBQUNDLE1BQUQsRUFBU0MsTUFBVCxDQURIO0FBRUhDLHlCQUFTO0FBRk4sYUFESDtBQUtKQyxrQkFBTTtBQUNGSixzQkFBTUU7QUFESjtBQUxGLFMsUUFTUkcsSSxHQUFPLEU7Ozs7O2lDQUNFLENBQUU7Ozs7RUFYb0IsZUFBS0MsUzs7a0JBQW5CVCxLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhZGdlIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xyXG4gICAgcHJvcHMgPSB7XHJcbiAgICAgICAgYmFkZ2U6IHtcclxuICAgICAgICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcclxuICAgICAgICAgICAgZGVmYXVsdDogOTlcclxuICAgICAgICB9LFxyXG4gICAgICAgIGljb246IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZGF0YSA9IHt9XHJcbiAgICBvbmxvYWQoKSB7fVxyXG59XHJcbiJdfQ==