'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dialog = function (_wepy$component) {
  _inherits(Dialog, _wepy$component);

  function Dialog() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Dialog);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Dialog.__proto__ || Object.getPrototypeOf(Dialog)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      handler: {
        type: Function
      }
    }, _this.data = {
      dialog: {}
    }, _this.methods = {
      _onClick: function _onClick(type) {
        this.dialog = { show: false };
        this.$emit('handler', type);
      },
      showDialog: function showDialog(options) {
        var _options$buttons = options.buttons,
            buttons = _options$buttons === undefined ? [] : _options$buttons,
            _options$title = options.title,
            title = _options$title === undefined ? '' : _options$title,
            _options$content = options.content,
            content = _options$content === undefined ? ' ' : _options$content,
            _options$buttonsShowV = options.buttonsShowVertical,
            buttonsShowVertical = _options$buttonsShowV === undefined ? false : _options$buttonsShowV,
            _options$showConfirm = options.showConfirm,
            showConfirm = _options$showConfirm === undefined ? true : _options$showConfirm,
            _options$confirmText = options.confirmText,
            confirmText = _options$confirmText === undefined ? '确定' : _options$confirmText,
            _options$confirmColor = options.confirmColor,
            confirmColor = _options$confirmColor === undefined ? '#3CC51F' : _options$confirmColor,
            _options$showCancel = options.showCancel,
            showCancel = _options$showCancel === undefined ? false : _options$showCancel,
            _options$cancelText = options.cancelText,
            cancelText = _options$cancelText === undefined ? '取消' : _options$cancelText,
            _options$cancelColor = options.cancelColor,
            cancelColor = _options$cancelColor === undefined ? '#333' : _options$cancelColor;

        // 处理默认按钮的展示
        // 纵向排布确认按钮在上方

        var showCustomBtns = false;
        if (buttons.length === 0) {
          if (showConfirm) {
            buttons.push({
              type: 'confirm',
              text: confirmText,
              color: confirmColor
            });
          }

          if (showCancel) {
            var cancelButton = {
              type: 'cancel',
              text: cancelText,
              color: cancelColor
            };
            if (buttonsShowVertical) {
              buttons.push(cancelButton);
            } else {
              buttons.unshift(cancelButton);
            }
          }
        } else {
          showCustomBtns = true;
        }

        this.dialog = {
          show: true,
          showCustomBtns: showCustomBtns,
          buttons: buttons,
          title: title,
          content: content,
          buttonsShowVertical: buttonsShowVertical,
          showConfirm: showConfirm,
          confirmText: confirmText,
          confirmColor: confirmColor,
          showCancel: showCancel,
          cancelText: cancelText,
          cancelColor: cancelColor
        };
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Dialog;
}(_wepy2.default.component);

exports.default = Dialog;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkRpYWxvZyIsInByb3BzIiwiaGFuZGxlciIsInR5cGUiLCJGdW5jdGlvbiIsImRhdGEiLCJkaWFsb2ciLCJtZXRob2RzIiwiX29uQ2xpY2siLCJzaG93IiwiJGVtaXQiLCJzaG93RGlhbG9nIiwib3B0aW9ucyIsImJ1dHRvbnMiLCJ0aXRsZSIsImNvbnRlbnQiLCJidXR0b25zU2hvd1ZlcnRpY2FsIiwic2hvd0NvbmZpcm0iLCJjb25maXJtVGV4dCIsImNvbmZpcm1Db2xvciIsInNob3dDYW5jZWwiLCJjYW5jZWxUZXh0IiwiY2FuY2VsQ29sb3IiLCJzaG93Q3VzdG9tQnRucyIsImxlbmd0aCIsInB1c2giLCJ0ZXh0IiwiY29sb3IiLCJjYW5jZWxCdXR0b24iLCJ1bnNoaWZ0IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsTTs7Ozs7Ozs7Ozs7Ozs7c0xBQ25CQyxLLEdBQVE7QUFDTkMsZUFBUztBQUNQQyxjQUFNQztBQURDO0FBREgsSyxRQU1SQyxJLEdBQU87QUFDTEMsY0FBUTtBQURILEssUUFJUEMsTyxHQUFVO0FBQ1JDLGNBRFEsb0JBQ0NMLElBREQsRUFDTztBQUNiLGFBQUtHLE1BQUwsR0FBYyxFQUFDRyxNQUFNLEtBQVAsRUFBZDtBQUNBLGFBQUtDLEtBQUwsQ0FBVyxTQUFYLEVBQXNCUCxJQUF0QjtBQUNELE9BSk87QUFNUlEsZ0JBTlEsc0JBTUdDLE9BTkgsRUFNWTtBQUFBLCtCQXVCZEEsT0F2QmMsQ0FJaEJDLE9BSmdCO0FBQUEsWUFJaEJBLE9BSmdCLG9DQUlOLEVBSk07QUFBQSw2QkF1QmRELE9BdkJjLENBTWhCRSxLQU5nQjtBQUFBLFlBTWhCQSxLQU5nQixrQ0FNUixFQU5RO0FBQUEsK0JBdUJkRixPQXZCYyxDQVFoQkcsT0FSZ0I7QUFBQSxZQVFoQkEsT0FSZ0Isb0NBUU4sR0FSTTtBQUFBLG9DQXVCZEgsT0F2QmMsQ0FVaEJJLG1CQVZnQjtBQUFBLFlBVWhCQSxtQkFWZ0IseUNBVU0sS0FWTjtBQUFBLG1DQXVCZEosT0F2QmMsQ0FZaEJLLFdBWmdCO0FBQUEsWUFZaEJBLFdBWmdCLHdDQVlGLElBWkU7QUFBQSxtQ0F1QmRMLE9BdkJjLENBY2hCTSxXQWRnQjtBQUFBLFlBY2hCQSxXQWRnQix3Q0FjRixJQWRFO0FBQUEsb0NBdUJkTixPQXZCYyxDQWdCaEJPLFlBaEJnQjtBQUFBLFlBZ0JoQkEsWUFoQmdCLHlDQWdCRCxTQWhCQztBQUFBLGtDQXVCZFAsT0F2QmMsQ0FrQmhCUSxVQWxCZ0I7QUFBQSxZQWtCaEJBLFVBbEJnQix1Q0FrQkgsS0FsQkc7QUFBQSxrQ0F1QmRSLE9BdkJjLENBb0JoQlMsVUFwQmdCO0FBQUEsWUFvQmhCQSxVQXBCZ0IsdUNBb0JILElBcEJHO0FBQUEsbUNBdUJkVCxPQXZCYyxDQXNCaEJVLFdBdEJnQjtBQUFBLFlBc0JoQkEsV0F0QmdCLHdDQXNCRixNQXRCRTs7QUF5QmxCO0FBQ0E7O0FBQ0EsWUFBSUMsaUJBQWlCLEtBQXJCO0FBQ0EsWUFBSVYsUUFBUVcsTUFBUixLQUFtQixDQUF2QixFQUEwQjtBQUN4QixjQUFJUCxXQUFKLEVBQWlCO0FBQ2ZKLG9CQUFRWSxJQUFSLENBQWE7QUFDWHRCLG9CQUFNLFNBREs7QUFFWHVCLG9CQUFNUixXQUZLO0FBR1hTLHFCQUFPUjtBQUhJLGFBQWI7QUFLRDs7QUFFRCxjQUFJQyxVQUFKLEVBQWdCO0FBQ2QsZ0JBQU1RLGVBQWU7QUFDbkJ6QixvQkFBTSxRQURhO0FBRW5CdUIsb0JBQU1MLFVBRmE7QUFHbkJNLHFCQUFPTDtBQUhZLGFBQXJCO0FBS0EsZ0JBQUlOLG1CQUFKLEVBQXlCO0FBQ3ZCSCxzQkFBUVksSUFBUixDQUFhRyxZQUFiO0FBQ0QsYUFGRCxNQUVPO0FBQ0xmLHNCQUFRZ0IsT0FBUixDQUFnQkQsWUFBaEI7QUFDRDtBQUNGO0FBQ0YsU0FyQkQsTUFxQk87QUFDTEwsMkJBQWlCLElBQWpCO0FBQ0Q7O0FBRUQsYUFBS2pCLE1BQUwsR0FBYztBQUNaRyxnQkFBTSxJQURNO0FBRVpjLHdDQUZZO0FBR1pWLDBCQUhZO0FBSVpDLHNCQUpZO0FBS1pDLDBCQUxZO0FBTVpDLGtEQU5ZO0FBT1pDLGtDQVBZO0FBUVpDLGtDQVJZO0FBU1pDLG9DQVRZO0FBVVpDLGdDQVZZO0FBV1pDLGdDQVhZO0FBWVpDO0FBWlksU0FBZDtBQWNEO0FBekVPLEs7Ozs7RUFYd0IsZUFBS1EsUzs7a0JBQXBCOUIsTSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSBcIndlcHlcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpYWxvZyBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgcHJvcHMgPSB7XG4gICAgaGFuZGxlcjoge1xuICAgICAgdHlwZTogRnVuY3Rpb25cbiAgICB9XG4gIH1cblxuICBkYXRhID0ge1xuICAgIGRpYWxvZzoge31cbiAgfVxuXG4gIG1ldGhvZHMgPSB7XG4gICAgX29uQ2xpY2sodHlwZSkge1xuICAgICAgdGhpcy5kaWFsb2cgPSB7c2hvdzogZmFsc2V9O1xuICAgICAgdGhpcy4kZW1pdCgnaGFuZGxlcicsIHR5cGUpO1xuICAgIH0sXG5cbiAgICBzaG93RGlhbG9nKG9wdGlvbnMpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgLy8g6Ieq5a6a5LmJIGJ0biDliJfooahcbiAgICAgICAgLy8geyB0eXBlOiDmjInpkq7nsbvlnovvvIzlm57osIPml7bku6XmraTkvZzkuLrljLrliIbkvp3mja7vvIx0ZXh0OiDmjInpkq7mlofmoYgsIGNvbG9yOiDmjInpkq7mloflrZfpopzoibIgfVxuICAgICAgICBidXR0b25zID0gW10sXG4gICAgICAgIC8vIOagh+mimFxuICAgICAgICB0aXRsZSA9ICcnLFxuICAgICAgICAvLyDlhoXlrrlcbiAgICAgICAgY29udGVudCA9ICcgJyxcbiAgICAgICAgLy8g5oyJ6ZKu5piv5ZCm5bGV56S65Li657q15ZCRXG4gICAgICAgIGJ1dHRvbnNTaG93VmVydGljYWwgPSBmYWxzZSxcbiAgICAgICAgLy8g5piv5ZCm5bGV56S656Gu5a6aXG4gICAgICAgIHNob3dDb25maXJtID0gdHJ1ZSxcbiAgICAgICAgLy8g56Gu6K6k5oyJ6ZKu5paH5qGIXG4gICAgICAgIGNvbmZpcm1UZXh0ID0gJ+ehruWumicsXG4gICAgICAgIC8vIOehruiupOaMiemSruminOiJslxuICAgICAgICBjb25maXJtQ29sb3IgPSAnIzNDQzUxRicsXG4gICAgICAgIC8vIOaYr+WQpuWxleekuuWPlua2iFxuICAgICAgICBzaG93Q2FuY2VsID0gZmFsc2UsXG4gICAgICAgIC8vIOWPlua2iOaMiemSruaWh+ahiFxuICAgICAgICBjYW5jZWxUZXh0ID0gJ+WPlua2iCcsXG4gICAgICAgIC8vIOWPlua2iOaMiemSruminOiJslxuICAgICAgICBjYW5jZWxDb2xvciA9ICcjMzMzJ1xuICAgICAgfSA9IG9wdGlvbnM7XG5cbiAgICAgIC8vIOWkhOeQhum7mOiupOaMiemSrueahOWxleekulxuICAgICAgLy8g57q15ZCR5o6S5biD56Gu6K6k5oyJ6ZKu5Zyo5LiK5pa5XG4gICAgICBsZXQgc2hvd0N1c3RvbUJ0bnMgPSBmYWxzZTtcbiAgICAgIGlmIChidXR0b25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBpZiAoc2hvd0NvbmZpcm0pIHtcbiAgICAgICAgICBidXR0b25zLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ2NvbmZpcm0nLFxuICAgICAgICAgICAgdGV4dDogY29uZmlybVRleHQsXG4gICAgICAgICAgICBjb2xvcjogY29uZmlybUNvbG9yXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2hvd0NhbmNlbCkge1xuICAgICAgICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IHtcbiAgICAgICAgICAgIHR5cGU6ICdjYW5jZWwnLFxuICAgICAgICAgICAgdGV4dDogY2FuY2VsVGV4dCxcbiAgICAgICAgICAgIGNvbG9yOiBjYW5jZWxDb2xvclxuICAgICAgICAgIH07XG4gICAgICAgICAgaWYgKGJ1dHRvbnNTaG93VmVydGljYWwpIHtcbiAgICAgICAgICAgIGJ1dHRvbnMucHVzaChjYW5jZWxCdXR0b24pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBidXR0b25zLnVuc2hpZnQoY2FuY2VsQnV0dG9uKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNob3dDdXN0b21CdG5zID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5kaWFsb2cgPSB7XG4gICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgIHNob3dDdXN0b21CdG5zLFxuICAgICAgICBidXR0b25zLFxuICAgICAgICB0aXRsZSxcbiAgICAgICAgY29udGVudCxcbiAgICAgICAgYnV0dG9uc1Nob3dWZXJ0aWNhbCxcbiAgICAgICAgc2hvd0NvbmZpcm0sXG4gICAgICAgIGNvbmZpcm1UZXh0LFxuICAgICAgICBjb25maXJtQ29sb3IsXG4gICAgICAgIHNob3dDYW5jZWwsXG4gICAgICAgIGNhbmNlbFRleHQsXG4gICAgICAgIGNhbmNlbENvbG9yXG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=