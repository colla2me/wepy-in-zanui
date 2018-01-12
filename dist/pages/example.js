"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _dialog = require('./../components/dialog.js');

var _dialog2 = _interopRequireDefault(_dialog);

var _toast = require('./../components/toast.js');

var _toast2 = _interopRequireDefault(_toast);

var _toptips = require('./../components/toptips.js');

var _toptips2 = _interopRequireDefault(_toptips);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Example = function (_wepy$page) {
  _inherits(Example, _wepy$page);

  function Example() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Example);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Example.__proto__ || Object.getPrototypeOf(Example)).call.apply(_ref, [this].concat(args))), _this), _this.config = {}, _this.components = {
      dialog: _dialog2.default,
      toast: _toast2.default,
      toptips: _toptips2.default
    }, _this.props = {
      test: {
        type: String,
        default: '1213test'
      }
    }, _this.data = {
      show: false
    }, _this.events = {
      handleDialogClick: function handleDialogClick(type) {
        console.log('handleDialogClick', type);
      }
    }, _this.methods = {
      showTopTips: function showTopTips() {
        this.$invoke("toptips", 'showTopTips', 'toptips的内容', 4000);
      },
      showToast: function showToast() {
        this.$invoke("toast", 'showToast', 'toast的内容', 2000);
      },
      toggleBaseDialog: function toggleBaseDialog() {
        this.$invoke("dialog", 'showDialog', {
          title: '弹窗',
          content: '这是一个模态弹窗',
          showCancel: true
        });
      },
      toggleWithoutTitleDialog: function toggleWithoutTitleDialog() {
        this.$invoke("dialog", 'showDialog', {
          content: '这是一个模态弹窗',
          showCancel: true
        });
      },
      toggleButtonDialog: function toggleButtonDialog() {
        this.$invoke("dialog", 'showDialog', {
          title: '弹窗',
          content: '这是一个模态弹窗',
          buttons: [{
            text: '现金支付',
            color: 'red',
            type: 'cash'
          }, {
            text: '微信支付',
            color: '#3CC51F',
            type: 'wechat'
          }, {
            text: '取消',
            type: 'cancel'
          }]
        });
      },
      toggleVerticalDialog: function toggleVerticalDialog() {
        this.$invoke("dialog", 'showDialog', {
          title: '弹窗',
          content: '这是一个模态弹窗',
          buttonsShowVertical: true,
          buttons: [{
            text: '现金支付',
            color: 'red',
            type: 'cash'
          }, {
            text: '微信支付',
            color: '#3CC51F',
            type: 'wechat'
          }, {
            text: '取消',
            type: 'cancel'
          }]
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Example, [{
    key: "onLoad",
    value: function onLoad() {}
  }]);

  return Example;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Example , 'pages/example'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGUuanMiXSwibmFtZXMiOlsiRXhhbXBsZSIsImNvbmZpZyIsImNvbXBvbmVudHMiLCJkaWFsb2ciLCJ0b2FzdCIsInRvcHRpcHMiLCJwcm9wcyIsInRlc3QiLCJ0eXBlIiwiU3RyaW5nIiwiZGVmYXVsdCIsImRhdGEiLCJzaG93IiwiZXZlbnRzIiwiaGFuZGxlRGlhbG9nQ2xpY2siLCJjb25zb2xlIiwibG9nIiwibWV0aG9kcyIsInNob3dUb3BUaXBzIiwiJGludm9rZSIsInNob3dUb2FzdCIsInRvZ2dsZUJhc2VEaWFsb2ciLCJ0aXRsZSIsImNvbnRlbnQiLCJzaG93Q2FuY2VsIiwidG9nZ2xlV2l0aG91dFRpdGxlRGlhbG9nIiwidG9nZ2xlQnV0dG9uRGlhbG9nIiwiYnV0dG9ucyIsInRleHQiLCJjb2xvciIsInRvZ2dsZVZlcnRpY2FsRGlhbG9nIiwiYnV0dG9uc1Nob3dWZXJ0aWNhbCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLE87Ozs7Ozs7Ozs7Ozs7O3dMQUNuQkMsTSxHQUFTLEUsUUFDVEMsVSxHQUFhO0FBQ1hDLDhCQURXO0FBRVhDLDRCQUZXO0FBR1hDO0FBSFcsSyxRQUtiQyxLLEdBQVE7QUFDTkMsWUFBTTtBQUNKQyxjQUFNQyxNQURGO0FBRUpDLGlCQUFTO0FBRkw7QUFEQSxLLFFBTVJDLEksR0FBTztBQUNMQyxZQUFNO0FBREQsSyxRQUlQQyxNLEdBQVM7QUFDUEMsdUJBRE8sNkJBQ1dOLElBRFgsRUFDaUI7QUFDdEJPLGdCQUFRQyxHQUFSLENBQVksbUJBQVosRUFBaUNSLElBQWpDO0FBQ0Q7QUFITSxLLFFBTVRTLE8sR0FBVTtBQUNSQyxpQkFEUSx5QkFDTTtBQUNaLGFBQUtDLE9BQUwsQ0FBYSxTQUFiLEVBQXdCLGFBQXhCLEVBQXVDLFlBQXZDLEVBQXFELElBQXJEO0FBQ0QsT0FITztBQUtSQyxlQUxRLHVCQUtJO0FBQ1YsYUFBS0QsT0FBTCxDQUFhLE9BQWIsRUFBc0IsV0FBdEIsRUFBbUMsVUFBbkMsRUFBK0MsSUFBL0M7QUFDRCxPQVBPO0FBU1JFLHNCQVRRLDhCQVNXO0FBQ2pCLGFBQUtGLE9BQUwsQ0FBYSxRQUFiLEVBQXVCLFlBQXZCLEVBQXFDO0FBQ25DRyxpQkFBTyxJQUQ0QjtBQUVuQ0MsbUJBQVMsVUFGMEI7QUFHbkNDLHNCQUFZO0FBSHVCLFNBQXJDO0FBS0QsT0FmTztBQWlCUkMsOEJBakJRLHNDQWlCbUI7QUFDekIsYUFBS04sT0FBTCxDQUFhLFFBQWIsRUFBdUIsWUFBdkIsRUFBcUM7QUFDbkNJLG1CQUFTLFVBRDBCO0FBRW5DQyxzQkFBWTtBQUZ1QixTQUFyQztBQUlELE9BdEJPO0FBd0JSRSx3QkF4QlEsZ0NBd0JhO0FBQ25CLGFBQUtQLE9BQUwsQ0FBYSxRQUFiLEVBQXVCLFlBQXZCLEVBQXFDO0FBQ25DRyxpQkFBTyxJQUQ0QjtBQUVuQ0MsbUJBQVMsVUFGMEI7QUFHbkNJLG1CQUFTLENBQUM7QUFDUkMsa0JBQU0sTUFERTtBQUVSQyxtQkFBTyxLQUZDO0FBR1JyQixrQkFBTTtBQUhFLFdBQUQsRUFJTjtBQUNEb0Isa0JBQU0sTUFETDtBQUVEQyxtQkFBTyxTQUZOO0FBR0RyQixrQkFBTTtBQUhMLFdBSk0sRUFRTjtBQUNEb0Isa0JBQU0sSUFETDtBQUVEcEIsa0JBQU07QUFGTCxXQVJNO0FBSDBCLFNBQXJDO0FBZ0JELE9BekNPO0FBMkNSc0IsMEJBM0NRLGtDQTJDZTtBQUNyQixhQUFLWCxPQUFMLENBQWEsUUFBYixFQUF1QixZQUF2QixFQUFxQztBQUNuQ0csaUJBQU8sSUFENEI7QUFFbkNDLG1CQUFTLFVBRjBCO0FBR25DUSwrQkFBcUIsSUFIYztBQUluQ0osbUJBQVMsQ0FBQztBQUNSQyxrQkFBTSxNQURFO0FBRVJDLG1CQUFPLEtBRkM7QUFHUnJCLGtCQUFNO0FBSEUsV0FBRCxFQUlOO0FBQ0RvQixrQkFBTSxNQURMO0FBRURDLG1CQUFPLFNBRk47QUFHRHJCLGtCQUFNO0FBSEwsV0FKTSxFQVFOO0FBQ0RvQixrQkFBTSxJQURMO0FBRURwQixrQkFBTTtBQUZMLFdBUk07QUFKMEIsU0FBckM7QUFpQkQ7QUE3RE8sSzs7Ozs7NkJBZ0VELENBQ1I7Ozs7RUF4RmtDLGVBQUt3QixJOztrQkFBckJoQyxPIiwiZmlsZSI6ImV4YW1wbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gXCJ3ZXB5XCI7XG5pbXBvcnQgRGlhbG9nIGZyb20gXCIuLi9jb21wb25lbnRzL2RpYWxvZ1wiO1xuaW1wb3J0IFRvYXN0IGZyb20gXCIuLi9jb21wb25lbnRzL3RvYXN0XCI7XG5pbXBvcnQgVG9wVGlwcyBmcm9tIFwiLi4vY29tcG9uZW50cy90b3B0aXBzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4YW1wbGUgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7fVxuICBjb21wb25lbnRzID0ge1xuICAgIGRpYWxvZzogRGlhbG9nLFxuICAgIHRvYXN0OiBUb2FzdCxcbiAgICB0b3B0aXBzOiBUb3BUaXBzXG4gIH1cbiAgcHJvcHMgPSB7XG4gICAgdGVzdDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJzEyMTN0ZXN0J1xuICAgIH1cbiAgfVxuICBkYXRhID0ge1xuICAgIHNob3c6IGZhbHNlXG4gIH1cblxuICBldmVudHMgPSB7XG4gICAgaGFuZGxlRGlhbG9nQ2xpY2sodHlwZSkge1xuICAgICAgY29uc29sZS5sb2coJ2hhbmRsZURpYWxvZ0NsaWNrJywgdHlwZSlcbiAgICB9XG4gIH1cblxuICBtZXRob2RzID0ge1xuICAgIHNob3dUb3BUaXBzKCkge1xuICAgICAgdGhpcy4kaW52b2tlKFwidG9wdGlwc1wiLCAnc2hvd1RvcFRpcHMnLCAndG9wdGlwc+eahOWGheWuuScsIDQwMDApXG4gICAgfSxcblxuICAgIHNob3dUb2FzdCgpIHtcbiAgICAgIHRoaXMuJGludm9rZShcInRvYXN0XCIsICdzaG93VG9hc3QnLCAndG9hc3TnmoTlhoXlrrknLCAyMDAwKVxuICAgIH0sXG5cbiAgICB0b2dnbGVCYXNlRGlhbG9nKCkge1xuICAgICAgdGhpcy4kaW52b2tlKFwiZGlhbG9nXCIsICdzaG93RGlhbG9nJywge1xuICAgICAgICB0aXRsZTogJ+W8ueeqlycsXG4gICAgICAgIGNvbnRlbnQ6ICfov5nmmK/kuIDkuKrmqKHmgIHlvLnnqpcnLFxuICAgICAgICBzaG93Q2FuY2VsOiB0cnVlXG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgdG9nZ2xlV2l0aG91dFRpdGxlRGlhbG9nKCkge1xuICAgICAgdGhpcy4kaW52b2tlKFwiZGlhbG9nXCIsICdzaG93RGlhbG9nJywge1xuICAgICAgICBjb250ZW50OiAn6L+Z5piv5LiA5Liq5qih5oCB5by556qXJyxcbiAgICAgICAgc2hvd0NhbmNlbDogdHJ1ZVxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIHRvZ2dsZUJ1dHRvbkRpYWxvZygpIHtcbiAgICAgIHRoaXMuJGludm9rZShcImRpYWxvZ1wiLCAnc2hvd0RpYWxvZycsIHtcbiAgICAgICAgdGl0bGU6ICflvLnnqpcnLFxuICAgICAgICBjb250ZW50OiAn6L+Z5piv5LiA5Liq5qih5oCB5by556qXJyxcbiAgICAgICAgYnV0dG9uczogW3tcbiAgICAgICAgICB0ZXh0OiAn546w6YeR5pSv5LuYJyxcbiAgICAgICAgICBjb2xvcjogJ3JlZCcsXG4gICAgICAgICAgdHlwZTogJ2Nhc2gnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICB0ZXh0OiAn5b6u5L+h5pSv5LuYJyxcbiAgICAgICAgICBjb2xvcjogJyMzQ0M1MUYnLFxuICAgICAgICAgIHR5cGU6ICd3ZWNoYXQnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICB0ZXh0OiAn5Y+W5raIJyxcbiAgICAgICAgICB0eXBlOiAnY2FuY2VsJ1xuICAgICAgICB9XVxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIHRvZ2dsZVZlcnRpY2FsRGlhbG9nKCkge1xuICAgICAgdGhpcy4kaW52b2tlKFwiZGlhbG9nXCIsICdzaG93RGlhbG9nJywge1xuICAgICAgICB0aXRsZTogJ+W8ueeqlycsXG4gICAgICAgIGNvbnRlbnQ6ICfov5nmmK/kuIDkuKrmqKHmgIHlvLnnqpcnLFxuICAgICAgICBidXR0b25zU2hvd1ZlcnRpY2FsOiB0cnVlLFxuICAgICAgICBidXR0b25zOiBbe1xuICAgICAgICAgIHRleHQ6ICfnjrDph5HmlK/ku5gnLFxuICAgICAgICAgIGNvbG9yOiAncmVkJyxcbiAgICAgICAgICB0eXBlOiAnY2FzaCdcbiAgICAgICAgfSwge1xuICAgICAgICAgIHRleHQ6ICflvq7kv6HmlK/ku5gnLFxuICAgICAgICAgIGNvbG9yOiAnIzNDQzUxRicsXG4gICAgICAgICAgdHlwZTogJ3dlY2hhdCdcbiAgICAgICAgfSwge1xuICAgICAgICAgIHRleHQ6ICflj5bmtognLFxuICAgICAgICAgIHR5cGU6ICdjYW5jZWwnXG4gICAgICAgIH1dXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBvbkxvYWQoKSB7XG4gIH1cbn1cbiJdfQ==