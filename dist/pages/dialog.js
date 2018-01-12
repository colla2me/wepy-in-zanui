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
      onClickDlgBtns: function onClickDlgBtns(type) {
        console.log('onClickDlgBtns', type);
      }
    }, _this.methods = {
      showTopTips: function showTopTips() {
        this.$invoke("toptips", 'show', 'toptips的内容', 4000);
      },
      showToast: function showToast() {
        this.$invoke("toast", 'show', 'toast的内容', 2000);
      },
      toggleBaseDialog: function toggleBaseDialog() {
        this.$invoke("dialog", 'show', {
          title: '弹窗',
          content: '这是一个模态弹窗',
          showCancel: true
        }).then(function (data) {
          console.log('ok:', data);
        }).catch(function (data) {
          console.log('cancel:', data);
        });
      },
      toggleWithoutTitleDialog: function toggleWithoutTitleDialog() {
        this.$invoke("dialog", 'show', {
          content: '这是一个模态弹窗',
          showCancel: true
        }).then(function (data) {
          console.log('ok:', data);
        }).catch(function (data) {
          console.log('cancel:', data);
        });
      },
      toggleButtonDialog: function toggleButtonDialog() {
        this.$invoke("dialog", 'show', {
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
        }).then(function (data) {
          console.log('ok:', data);
        }).catch(function (data) {
          console.log('cancel:', data);
        });
      },
      toggleVerticalDialog: function toggleVerticalDialog() {
        this.$invoke("dialog", 'show', {
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
        }).then(function (data) {
          console.log('ok:', data);
        }).catch(function (data) {
          console.log('cancel:', data);
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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Example , 'pages/dialog'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpYWxvZy5qcyJdLCJuYW1lcyI6WyJFeGFtcGxlIiwiY29uZmlnIiwiY29tcG9uZW50cyIsImRpYWxvZyIsInRvYXN0IiwidG9wdGlwcyIsInByb3BzIiwidGVzdCIsInR5cGUiLCJTdHJpbmciLCJkZWZhdWx0IiwiZGF0YSIsInNob3ciLCJldmVudHMiLCJvbkNsaWNrRGxnQnRucyIsImNvbnNvbGUiLCJsb2ciLCJtZXRob2RzIiwic2hvd1RvcFRpcHMiLCIkaW52b2tlIiwic2hvd1RvYXN0IiwidG9nZ2xlQmFzZURpYWxvZyIsInRpdGxlIiwiY29udGVudCIsInNob3dDYW5jZWwiLCJ0aGVuIiwiY2F0Y2giLCJ0b2dnbGVXaXRob3V0VGl0bGVEaWFsb2ciLCJ0b2dnbGVCdXR0b25EaWFsb2ciLCJidXR0b25zIiwidGV4dCIsImNvbG9yIiwidG9nZ2xlVmVydGljYWxEaWFsb2ciLCJidXR0b25zU2hvd1ZlcnRpY2FsIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsTzs7Ozs7Ozs7Ozs7Ozs7d0xBQ25CQyxNLEdBQVMsRSxRQUNUQyxVLEdBQWE7QUFDWEMsOEJBRFc7QUFFWEMsNEJBRlc7QUFHWEM7QUFIVyxLLFFBS2JDLEssR0FBUTtBQUNOQyxZQUFNO0FBQ0pDLGNBQU1DLE1BREY7QUFFSkMsaUJBQVM7QUFGTDtBQURBLEssUUFNUkMsSSxHQUFPO0FBQ0xDLFlBQU07QUFERCxLLFFBSVBDLE0sR0FBUztBQUNQQyxvQkFETywwQkFDUU4sSUFEUixFQUNjO0FBQ25CTyxnQkFBUUMsR0FBUixDQUFZLGdCQUFaLEVBQThCUixJQUE5QjtBQUNEO0FBSE0sSyxRQU1UUyxPLEdBQVU7QUFDUkMsaUJBRFEseUJBQ007QUFDWixhQUFLQyxPQUFMLENBQWEsU0FBYixFQUF3QixNQUF4QixFQUFnQyxZQUFoQyxFQUE4QyxJQUE5QztBQUNELE9BSE87QUFLUkMsZUFMUSx1QkFLSTtBQUNWLGFBQUtELE9BQUwsQ0FBYSxPQUFiLEVBQXNCLE1BQXRCLEVBQThCLFVBQTlCLEVBQTBDLElBQTFDO0FBQ0QsT0FQTztBQVNSRSxzQkFUUSw4QkFTVztBQUNqQixhQUFLRixPQUFMLENBQWEsUUFBYixFQUF1QixNQUF2QixFQUErQjtBQUM3QkcsaUJBQU8sSUFEc0I7QUFFN0JDLG1CQUFTLFVBRm9CO0FBRzdCQyxzQkFBWTtBQUhpQixTQUEvQixFQUlHQyxJQUpILENBSVEsZ0JBQVE7QUFDZFYsa0JBQVFDLEdBQVIsQ0FBWSxLQUFaLEVBQW1CTCxJQUFuQjtBQUNELFNBTkQsRUFNR2UsS0FOSCxDQU1TLGdCQUFRO0FBQ2ZYLGtCQUFRQyxHQUFSLENBQVksU0FBWixFQUF1QkwsSUFBdkI7QUFDRCxTQVJEO0FBU0QsT0FuQk87QUFxQlJnQiw4QkFyQlEsc0NBcUJtQjtBQUN6QixhQUFLUixPQUFMLENBQWEsUUFBYixFQUF1QixNQUF2QixFQUErQjtBQUM3QkksbUJBQVMsVUFEb0I7QUFFN0JDLHNCQUFZO0FBRmlCLFNBQS9CLEVBR0dDLElBSEgsQ0FHUSxnQkFBUTtBQUNkVixrQkFBUUMsR0FBUixDQUFZLEtBQVosRUFBbUJMLElBQW5CO0FBQ0QsU0FMRCxFQUtHZSxLQUxILENBS1MsZ0JBQVE7QUFDZlgsa0JBQVFDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCTCxJQUF2QjtBQUNELFNBUEQ7QUFRRCxPQTlCTztBQWdDUmlCLHdCQWhDUSxnQ0FnQ2E7QUFDbkIsYUFBS1QsT0FBTCxDQUFhLFFBQWIsRUFBdUIsTUFBdkIsRUFBK0I7QUFDN0JHLGlCQUFPLElBRHNCO0FBRTdCQyxtQkFBUyxVQUZvQjtBQUc3Qk0sbUJBQVMsQ0FBQztBQUNSQyxrQkFBTSxNQURFO0FBRVJDLG1CQUFPLEtBRkM7QUFHUnZCLGtCQUFNO0FBSEUsV0FBRCxFQUlOO0FBQ0RzQixrQkFBTSxNQURMO0FBRURDLG1CQUFPLFNBRk47QUFHRHZCLGtCQUFNO0FBSEwsV0FKTSxFQVFOO0FBQ0RzQixrQkFBTSxJQURMO0FBRUR0QixrQkFBTTtBQUZMLFdBUk07QUFIb0IsU0FBL0IsRUFlR2lCLElBZkgsQ0FlUSxnQkFBUTtBQUNkVixrQkFBUUMsR0FBUixDQUFZLEtBQVosRUFBbUJMLElBQW5CO0FBQ0QsU0FqQkQsRUFpQkdlLEtBakJILENBaUJTLGdCQUFRO0FBQ2ZYLGtCQUFRQyxHQUFSLENBQVksU0FBWixFQUF1QkwsSUFBdkI7QUFDRCxTQW5CRDtBQW9CRCxPQXJETztBQXVEUnFCLDBCQXZEUSxrQ0F1RGU7QUFDckIsYUFBS2IsT0FBTCxDQUFhLFFBQWIsRUFBdUIsTUFBdkIsRUFBK0I7QUFDN0JHLGlCQUFPLElBRHNCO0FBRTdCQyxtQkFBUyxVQUZvQjtBQUc3QlUsK0JBQXFCLElBSFE7QUFJN0JKLG1CQUFTLENBQUM7QUFDUkMsa0JBQU0sTUFERTtBQUVSQyxtQkFBTyxLQUZDO0FBR1J2QixrQkFBTTtBQUhFLFdBQUQsRUFJTjtBQUNEc0Isa0JBQU0sTUFETDtBQUVEQyxtQkFBTyxTQUZOO0FBR0R2QixrQkFBTTtBQUhMLFdBSk0sRUFRTjtBQUNEc0Isa0JBQU0sSUFETDtBQUVEdEIsa0JBQU07QUFGTCxXQVJNO0FBSm9CLFNBQS9CLEVBZ0JHaUIsSUFoQkgsQ0FnQlEsZ0JBQVE7QUFDZFYsa0JBQVFDLEdBQVIsQ0FBWSxLQUFaLEVBQW1CTCxJQUFuQjtBQUNELFNBbEJELEVBa0JHZSxLQWxCSCxDQWtCUyxnQkFBUTtBQUNmWCxrQkFBUUMsR0FBUixDQUFZLFNBQVosRUFBdUJMLElBQXZCO0FBQ0QsU0FwQkQ7QUFxQkQ7QUE3RU8sSzs7Ozs7NkJBZ0ZELENBQ1I7Ozs7RUF4R2tDLGVBQUt1QixJOztrQkFBckJsQyxPIiwiZmlsZSI6ImRpYWxvZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSBcIndlcHlcIjtcbmltcG9ydCBEaWFsb2cgZnJvbSBcIi4uL2NvbXBvbmVudHMvZGlhbG9nXCI7XG5pbXBvcnQgVG9hc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvdG9hc3RcIjtcbmltcG9ydCBUb3BUaXBzIGZyb20gXCIuLi9jb21wb25lbnRzL3RvcHRpcHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhhbXBsZSBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHt9XG4gIGNvbXBvbmVudHMgPSB7XG4gICAgZGlhbG9nOiBEaWFsb2csXG4gICAgdG9hc3Q6IFRvYXN0LFxuICAgIHRvcHRpcHM6IFRvcFRpcHNcbiAgfVxuICBwcm9wcyA9IHtcbiAgICB0ZXN0OiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnMTIxM3Rlc3QnXG4gICAgfVxuICB9XG4gIGRhdGEgPSB7XG4gICAgc2hvdzogZmFsc2VcbiAgfVxuXG4gIGV2ZW50cyA9IHtcbiAgICBvbkNsaWNrRGxnQnRucyh0eXBlKSB7XG4gICAgICBjb25zb2xlLmxvZygnb25DbGlja0RsZ0J0bnMnLCB0eXBlKVxuICAgIH1cbiAgfVxuXG4gIG1ldGhvZHMgPSB7XG4gICAgc2hvd1RvcFRpcHMoKSB7XG4gICAgICB0aGlzLiRpbnZva2UoXCJ0b3B0aXBzXCIsICdzaG93JywgJ3RvcHRpcHPnmoTlhoXlrrknLCA0MDAwKVxuICAgIH0sXG5cbiAgICBzaG93VG9hc3QoKSB7XG4gICAgICB0aGlzLiRpbnZva2UoXCJ0b2FzdFwiLCAnc2hvdycsICd0b2FzdOeahOWGheWuuScsIDIwMDApXG4gICAgfSxcblxuICAgIHRvZ2dsZUJhc2VEaWFsb2coKSB7XG4gICAgICB0aGlzLiRpbnZva2UoXCJkaWFsb2dcIiwgJ3Nob3cnLCB7XG4gICAgICAgIHRpdGxlOiAn5by556qXJyxcbiAgICAgICAgY29udGVudDogJ+i/meaYr+S4gOS4quaooeaAgeW8ueeqlycsXG4gICAgICAgIHNob3dDYW5jZWw6IHRydWVcbiAgICAgIH0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdvazonLCBkYXRhKTtcbiAgICAgIH0pLmNhdGNoKGRhdGEgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnY2FuY2VsOicsIGRhdGEpO1xuICAgICAgfSk7XG4gICAgfSxcblxuICAgIHRvZ2dsZVdpdGhvdXRUaXRsZURpYWxvZygpIHtcbiAgICAgIHRoaXMuJGludm9rZShcImRpYWxvZ1wiLCAnc2hvdycsIHtcbiAgICAgICAgY29udGVudDogJ+i/meaYr+S4gOS4quaooeaAgeW8ueeqlycsXG4gICAgICAgIHNob3dDYW5jZWw6IHRydWVcbiAgICAgIH0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdvazonLCBkYXRhKTtcbiAgICAgIH0pLmNhdGNoKGRhdGEgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnY2FuY2VsOicsIGRhdGEpO1xuICAgICAgfSk7XG4gICAgfSxcblxuICAgIHRvZ2dsZUJ1dHRvbkRpYWxvZygpIHtcbiAgICAgIHRoaXMuJGludm9rZShcImRpYWxvZ1wiLCAnc2hvdycsIHtcbiAgICAgICAgdGl0bGU6ICflvLnnqpcnLFxuICAgICAgICBjb250ZW50OiAn6L+Z5piv5LiA5Liq5qih5oCB5by556qXJyxcbiAgICAgICAgYnV0dG9uczogW3tcbiAgICAgICAgICB0ZXh0OiAn546w6YeR5pSv5LuYJyxcbiAgICAgICAgICBjb2xvcjogJ3JlZCcsXG4gICAgICAgICAgdHlwZTogJ2Nhc2gnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICB0ZXh0OiAn5b6u5L+h5pSv5LuYJyxcbiAgICAgICAgICBjb2xvcjogJyMzQ0M1MUYnLFxuICAgICAgICAgIHR5cGU6ICd3ZWNoYXQnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICB0ZXh0OiAn5Y+W5raIJyxcbiAgICAgICAgICB0eXBlOiAnY2FuY2VsJ1xuICAgICAgICB9XVxuICAgICAgfSkudGhlbihkYXRhID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ29rOicsIGRhdGEpO1xuICAgICAgfSkuY2F0Y2goZGF0YSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjYW5jZWw6JywgZGF0YSk7XG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgdG9nZ2xlVmVydGljYWxEaWFsb2coKSB7XG4gICAgICB0aGlzLiRpbnZva2UoXCJkaWFsb2dcIiwgJ3Nob3cnLCB7XG4gICAgICAgIHRpdGxlOiAn5by556qXJyxcbiAgICAgICAgY29udGVudDogJ+i/meaYr+S4gOS4quaooeaAgeW8ueeqlycsXG4gICAgICAgIGJ1dHRvbnNTaG93VmVydGljYWw6IHRydWUsXG4gICAgICAgIGJ1dHRvbnM6IFt7XG4gICAgICAgICAgdGV4dDogJ+eOsOmHkeaUr+S7mCcsXG4gICAgICAgICAgY29sb3I6ICdyZWQnLFxuICAgICAgICAgIHR5cGU6ICdjYXNoJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgdGV4dDogJ+W+ruS/oeaUr+S7mCcsXG4gICAgICAgICAgY29sb3I6ICcjM0NDNTFGJyxcbiAgICAgICAgICB0eXBlOiAnd2VjaGF0J1xuICAgICAgICB9LCB7XG4gICAgICAgICAgdGV4dDogJ+WPlua2iCcsXG4gICAgICAgICAgdHlwZTogJ2NhbmNlbCdcbiAgICAgICAgfV1cbiAgICAgIH0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdvazonLCBkYXRhKTtcbiAgICAgIH0pLmNhdGNoKGRhdGEgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnY2FuY2VsOicsIGRhdGEpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgb25Mb2FkKCkge1xuICB9XG59XG4iXX0=