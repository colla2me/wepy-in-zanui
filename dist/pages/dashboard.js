'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dashboard = function (_wepy$page) {
  _inherits(Dashboard, _wepy$page);

  function Dashboard() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Dashboard);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      list: [{
        name: 'Dialog、Toast、TopTips',
        path: '/pages/dialog'
      }, {
        name: 'Tabs',
        path: '/pages/tabs'
      }, {
        name: 'Badge',
        path: '/pages/badge'
      }, {
        name: 'Buttons',
        path: '/pages/buttons'
      }, {
        name: 'Layout',
        path: '/pages/layout'
      }, {
        name: 'Panel',
        path: '/pages/panel'
      }, {
        name: 'Popup',
        path: '/pages/popup'
      }, {
        name: 'Switch',
        path: '/pages/switch'
      }, {
        name: 'Stepper',
        path: '/pages/stepper'
      }, {
        name: 'Card',
        path: '/pages/card'
      }]
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Dashboard, [{
    key: 'onLoad',
    value: function onLoad() {
      _wepy2.default.getSystemInfo().then(function (data) {
        if (data.SDKVersion < '1.4.0') {
          _wepy2.default.showModal({ content: 'SDKVersion\u6700\u4F4E\u8981\u6C421.4.0\uFF0C\u5F53\u524D\u7248\u672C' + data.SDKVersion, title: '微信版本过低' });
        }
      });
    }
  }]);

  return Dashboard;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Dashboard , 'pages/dashboard'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5qcyJdLCJuYW1lcyI6WyJEYXNoYm9hcmQiLCJkYXRhIiwibGlzdCIsIm5hbWUiLCJwYXRoIiwibWV0aG9kcyIsImdldFN5c3RlbUluZm8iLCJ0aGVuIiwiU0RLVmVyc2lvbiIsInNob3dNb2RhbCIsImNvbnRlbnQiLCJ0aXRsZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFM7Ozs7Ozs7Ozs7Ozs7OzRMQUNuQkMsSSxHQUFPO0FBQ0xDLFlBQU0sQ0FDSjtBQUNFQyxjQUFNLHNCQURSO0FBRUVDLGNBQU07QUFGUixPQURJLEVBSUY7QUFDQUQsY0FBTSxNQUROO0FBRUFDLGNBQU07QUFGTixPQUpFLEVBT0Y7QUFDQUQsY0FBTSxPQUROO0FBRUFDLGNBQU07QUFGTixPQVBFLEVBVUY7QUFDQUQsY0FBTSxTQUROO0FBRUFDLGNBQU07QUFGTixPQVZFLEVBYUY7QUFDQUQsY0FBTSxRQUROO0FBRUFDLGNBQU07QUFGTixPQWJFLEVBZ0JGO0FBQ0FELGNBQU0sT0FETjtBQUVBQyxjQUFNO0FBRk4sT0FoQkUsRUFtQkY7QUFDQUQsY0FBTSxPQUROO0FBRUFDLGNBQU07QUFGTixPQW5CRSxFQXNCRjtBQUNBRCxjQUFNLFFBRE47QUFFQUMsY0FBTTtBQUZOLE9BdEJFLEVBeUJGO0FBQ0FELGNBQU0sU0FETjtBQUVBQyxjQUFNO0FBRk4sT0F6QkUsRUE0QkY7QUFDQUQsY0FBTSxNQUROO0FBRUFDLGNBQU07QUFGTixPQTVCRTtBQURELEssUUFvQ1BDLE8sR0FBVSxFOzs7Ozs2QkFFRDtBQUNQLHFCQUFLQyxhQUFMLEdBQXFCQyxJQUFyQixDQUEwQixnQkFBUTtBQUNoQyxZQUFJTixLQUFLTyxVQUFMLEdBQWtCLE9BQXRCLEVBQStCO0FBQzdCLHlCQUFLQyxTQUFMLENBQWUsRUFBRUMsbUZBQW9DVCxLQUFLTyxVQUEzQyxFQUF5REcsT0FBTyxRQUFoRSxFQUFmO0FBQ0Q7QUFDRixPQUpEO0FBS0Q7Ozs7RUE3Q29DLGVBQUtDLEk7O2tCQUF2QlosUyIsImZpbGUiOiJkYXNoYm9hcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhc2hib2FyZCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGRhdGEgPSB7XG4gICAgbGlzdDogW1xuICAgICAge1xuICAgICAgICBuYW1lOiAnRGlhbG9n44CBVG9hc3TjgIFUb3BUaXBzJyxcbiAgICAgICAgcGF0aDogJy9wYWdlcy9kaWFsb2cnXG4gICAgICB9LHtcbiAgICAgICAgbmFtZTogJ1RhYnMnLFxuICAgICAgICBwYXRoOiAnL3BhZ2VzL3RhYnMnXG4gICAgICB9LHtcbiAgICAgICAgbmFtZTogJ0JhZGdlJyxcbiAgICAgICAgcGF0aDogJy9wYWdlcy9iYWRnZSdcbiAgICAgIH0se1xuICAgICAgICBuYW1lOiAnQnV0dG9ucycsXG4gICAgICAgIHBhdGg6ICcvcGFnZXMvYnV0dG9ucydcbiAgICAgIH0se1xuICAgICAgICBuYW1lOiAnTGF5b3V0JyxcbiAgICAgICAgcGF0aDogJy9wYWdlcy9sYXlvdXQnXG4gICAgICB9LHtcbiAgICAgICAgbmFtZTogJ1BhbmVsJyxcbiAgICAgICAgcGF0aDogJy9wYWdlcy9wYW5lbCdcbiAgICAgIH0se1xuICAgICAgICBuYW1lOiAnUG9wdXAnLFxuICAgICAgICBwYXRoOiAnL3BhZ2VzL3BvcHVwJ1xuICAgICAgfSx7XG4gICAgICAgIG5hbWU6ICdTd2l0Y2gnLFxuICAgICAgICBwYXRoOiAnL3BhZ2VzL3N3aXRjaCdcbiAgICAgIH0se1xuICAgICAgICBuYW1lOiAnU3RlcHBlcicsXG4gICAgICAgIHBhdGg6ICcvcGFnZXMvc3RlcHBlcidcbiAgICAgIH0se1xuICAgICAgICBuYW1lOiAnQ2FyZCcsXG4gICAgICAgIHBhdGg6ICcvcGFnZXMvY2FyZCdcbiAgICAgIH1cbiAgICBdXG4gIH1cblxuICBtZXRob2RzID0ge31cblxuICBvbkxvYWQoKSB7XG4gICAgd2VweS5nZXRTeXN0ZW1JbmZvKCkudGhlbihkYXRhID0+IHtcbiAgICAgIGlmIChkYXRhLlNES1ZlcnNpb24gPCAnMS40LjAnKSB7XG4gICAgICAgIHdlcHkuc2hvd01vZGFsKHsgY29udGVudDogYFNES1ZlcnNpb27mnIDkvY7opoHmsYIxLjQuMO+8jOW9k+WJjeeJiOacrCR7ZGF0YS5TREtWZXJzaW9ufWAsIHRpdGxlOiAn5b6u5L+h54mI5pys6L+H5L2OJyB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==