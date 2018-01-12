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

var Dialog = function (_wepy$component) {
  _inherits(Dialog, _wepy$component);

  function Dialog() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Dialog);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Dialog.__proto__ || Object.getPrototypeOf(Dialog)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      dialog: {}
    }, _this.methods = {
      _onClick: function _onClick(type) {
        var _dialog = this.dialog,
            resolve = _dialog.resolve,
            reject = _dialog.reject,
            showCustomBtns = _dialog.showCustomBtns;

        this.dialog = { appear: false };
        if (showCustomBtns || type === 'confirm') {
          resolve({ type: type });
        } else {
          reject({ type: type });
        }
      },
      show: function show(options) {
        var _this2 = this;

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

        return new Promise(function (resolve, reject) {
          _this2.dialog = {
            appear: true,
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
            cancelColor: cancelColor,
            resolve: resolve,
            reject: reject
          };
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Dialog;
}(_wepy2.default.component);

exports.default = Dialog;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpYWxvZy5qcyJdLCJuYW1lcyI6WyJEaWFsb2ciLCJkYXRhIiwiZGlhbG9nIiwibWV0aG9kcyIsIl9vbkNsaWNrIiwidHlwZSIsInJlc29sdmUiLCJyZWplY3QiLCJzaG93Q3VzdG9tQnRucyIsImFwcGVhciIsInNob3ciLCJvcHRpb25zIiwiYnV0dG9ucyIsInRpdGxlIiwiY29udGVudCIsImJ1dHRvbnNTaG93VmVydGljYWwiLCJzaG93Q29uZmlybSIsImNvbmZpcm1UZXh0IiwiY29uZmlybUNvbG9yIiwic2hvd0NhbmNlbCIsImNhbmNlbFRleHQiLCJjYW5jZWxDb2xvciIsImxlbmd0aCIsInB1c2giLCJ0ZXh0IiwiY29sb3IiLCJjYW5jZWxCdXR0b24iLCJ1bnNoaWZ0IiwiUHJvbWlzZSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLE07Ozs7Ozs7Ozs7Ozs7O3NMQUNuQkMsSSxHQUFPO0FBQ0xDLGNBQVE7QUFESCxLLFFBSVBDLE8sR0FBVTtBQUNSQyxjQURRLG9CQUNDQyxJQURELEVBQ087QUFBQSxzQkFDK0IsS0FBS0gsTUFEcEM7QUFBQSxZQUNMSSxPQURLLFdBQ0xBLE9BREs7QUFBQSxZQUNJQyxNQURKLFdBQ0lBLE1BREo7QUFBQSxZQUNZQyxjQURaLFdBQ1lBLGNBRFo7O0FBRWIsYUFBS04sTUFBTCxHQUFjLEVBQUVPLFFBQVEsS0FBVixFQUFkO0FBQ0EsWUFBSUQsa0JBQWtCSCxTQUFTLFNBQS9CLEVBQTBDO0FBQ3hDQyxrQkFBUSxFQUFFRCxVQUFGLEVBQVI7QUFDRCxTQUZELE1BRU87QUFDTEUsaUJBQU8sRUFBRUYsVUFBRixFQUFQO0FBQ0Q7QUFDRixPQVRPO0FBV1JLLFVBWFEsZ0JBV0hDLE9BWEcsRUFXTTtBQUFBOztBQUFBLCtCQXVCUkEsT0F2QlEsQ0FJVkMsT0FKVTtBQUFBLFlBSVZBLE9BSlUsb0NBSUEsRUFKQTtBQUFBLDZCQXVCUkQsT0F2QlEsQ0FNVkUsS0FOVTtBQUFBLFlBTVZBLEtBTlUsa0NBTUYsRUFORTtBQUFBLCtCQXVCUkYsT0F2QlEsQ0FRVkcsT0FSVTtBQUFBLFlBUVZBLE9BUlUsb0NBUUEsR0FSQTtBQUFBLG9DQXVCUkgsT0F2QlEsQ0FVVkksbUJBVlU7QUFBQSxZQVVWQSxtQkFWVSx5Q0FVWSxLQVZaO0FBQUEsbUNBdUJSSixPQXZCUSxDQVlWSyxXQVpVO0FBQUEsWUFZVkEsV0FaVSx3Q0FZSSxJQVpKO0FBQUEsbUNBdUJSTCxPQXZCUSxDQWNWTSxXQWRVO0FBQUEsWUFjVkEsV0FkVSx3Q0FjSSxJQWRKO0FBQUEsb0NBdUJSTixPQXZCUSxDQWdCVk8sWUFoQlU7QUFBQSxZQWdCVkEsWUFoQlUseUNBZ0JLLFNBaEJMO0FBQUEsa0NBdUJSUCxPQXZCUSxDQWtCVlEsVUFsQlU7QUFBQSxZQWtCVkEsVUFsQlUsdUNBa0JHLEtBbEJIO0FBQUEsa0NBdUJSUixPQXZCUSxDQW9CVlMsVUFwQlU7QUFBQSxZQW9CVkEsVUFwQlUsdUNBb0JHLElBcEJIO0FBQUEsbUNBdUJSVCxPQXZCUSxDQXNCVlUsV0F0QlU7QUFBQSxZQXNCVkEsV0F0QlUsd0NBc0JJLE1BdEJKOztBQXlCWjtBQUNBOztBQUNBLFlBQUliLGlCQUFpQixLQUFyQjtBQUNBLFlBQUlJLFFBQVFVLE1BQVIsS0FBbUIsQ0FBdkIsRUFBMEI7QUFDeEIsY0FBSU4sV0FBSixFQUFpQjtBQUNmSixvQkFBUVcsSUFBUixDQUFhO0FBQ1hsQixvQkFBTSxTQURLO0FBRVhtQixvQkFBTVAsV0FGSztBQUdYUSxxQkFBT1A7QUFISSxhQUFiO0FBS0Q7O0FBRUQsY0FBSUMsVUFBSixFQUFnQjtBQUNkLGdCQUFNTyxlQUFlO0FBQ25CckIsb0JBQU0sUUFEYTtBQUVuQm1CLG9CQUFNSixVQUZhO0FBR25CSyxxQkFBT0o7QUFIWSxhQUFyQjtBQUtBLGdCQUFJTixtQkFBSixFQUF5QjtBQUN2Qkgsc0JBQVFXLElBQVIsQ0FBYUcsWUFBYjtBQUNELGFBRkQsTUFFTztBQUNMZCxzQkFBUWUsT0FBUixDQUFnQkQsWUFBaEI7QUFDRDtBQUNGO0FBQ0YsU0FyQkQsTUFxQk87QUFDTGxCLDJCQUFpQixJQUFqQjtBQUNEOztBQUVELGVBQU8sSUFBSW9CLE9BQUosQ0FBWSxVQUFDdEIsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDLGlCQUFLTCxNQUFMLEdBQWM7QUFDWk8sb0JBQVEsSUFESTtBQUVaRCwwQ0FGWTtBQUdaSSw0QkFIWTtBQUlaQyx3QkFKWTtBQUtaQyw0QkFMWTtBQU1aQyxvREFOWTtBQU9aQyxvQ0FQWTtBQVFaQyxvQ0FSWTtBQVNaQyxzQ0FUWTtBQVVaQyxrQ0FWWTtBQVdaQyxrQ0FYWTtBQVlaQyxvQ0FaWTtBQWFaZiw0QkFiWTtBQWNaQztBQWRZLFdBQWQ7QUFnQkQsU0FqQk0sQ0FBUDtBQWtCRDtBQWxGTyxLOzs7O0VBTHdCLGVBQUtzQixTOztrQkFBcEI3QixNIiwiZmlsZSI6ImRpYWxvZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSBcIndlcHlcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpYWxvZyBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgZGF0YSA9IHtcbiAgICBkaWFsb2c6IHt9XG4gIH1cblxuICBtZXRob2RzID0ge1xuICAgIF9vbkNsaWNrKHR5cGUpIHtcbiAgICAgIGNvbnN0IHsgcmVzb2x2ZSwgcmVqZWN0LCBzaG93Q3VzdG9tQnRucyB9ID0gdGhpcy5kaWFsb2c7XG4gICAgICB0aGlzLmRpYWxvZyA9IHsgYXBwZWFyOiBmYWxzZSB9O1xuICAgICAgaWYgKHNob3dDdXN0b21CdG5zIHx8IHR5cGUgPT09ICdjb25maXJtJykge1xuICAgICAgICByZXNvbHZlKHsgdHlwZSB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlamVjdCh7IHR5cGUgfSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIHNob3cob3B0aW9ucykge1xuICAgICAgY29uc3Qge1xuICAgICAgICAvLyDoh6rlrprkuYkgYnRuIOWIl+ihqFxuICAgICAgICAvLyB7IHR5cGU6IOaMiemSruexu+Wei++8jOWbnuiwg+aXtuS7peatpOS9nOS4uuWMuuWIhuS+neaNru+8jHRleHQ6IOaMiemSruaWh+ahiCwgY29sb3I6IOaMiemSruaWh+Wtl+minOiJsiB9XG4gICAgICAgIGJ1dHRvbnMgPSBbXSxcbiAgICAgICAgLy8g5qCH6aKYXG4gICAgICAgIHRpdGxlID0gJycsXG4gICAgICAgIC8vIOWGheWuuVxuICAgICAgICBjb250ZW50ID0gJyAnLFxuICAgICAgICAvLyDmjInpkq7mmK/lkKblsZXnpLrkuLrnurXlkJFcbiAgICAgICAgYnV0dG9uc1Nob3dWZXJ0aWNhbCA9IGZhbHNlLFxuICAgICAgICAvLyDmmK/lkKblsZXnpLrnoa7lrppcbiAgICAgICAgc2hvd0NvbmZpcm0gPSB0cnVlLFxuICAgICAgICAvLyDnoa7orqTmjInpkq7mlofmoYhcbiAgICAgICAgY29uZmlybVRleHQgPSAn56Gu5a6aJyxcbiAgICAgICAgLy8g56Gu6K6k5oyJ6ZKu6aKc6ImyXG4gICAgICAgIGNvbmZpcm1Db2xvciA9ICcjM0NDNTFGJyxcbiAgICAgICAgLy8g5piv5ZCm5bGV56S65Y+W5raIXG4gICAgICAgIHNob3dDYW5jZWwgPSBmYWxzZSxcbiAgICAgICAgLy8g5Y+W5raI5oyJ6ZKu5paH5qGIXG4gICAgICAgIGNhbmNlbFRleHQgPSAn5Y+W5raIJyxcbiAgICAgICAgLy8g5Y+W5raI5oyJ6ZKu6aKc6ImyXG4gICAgICAgIGNhbmNlbENvbG9yID0gJyMzMzMnXG4gICAgICB9ID0gb3B0aW9ucztcblxuICAgICAgLy8g5aSE55CG6buY6K6k5oyJ6ZKu55qE5bGV56S6XG4gICAgICAvLyDnurXlkJHmjpLluIPnoa7orqTmjInpkq7lnKjkuIrmlrlcbiAgICAgIGxldCBzaG93Q3VzdG9tQnRucyA9IGZhbHNlO1xuICAgICAgaWYgKGJ1dHRvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGlmIChzaG93Q29uZmlybSkge1xuICAgICAgICAgIGJ1dHRvbnMucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnY29uZmlybScsXG4gICAgICAgICAgICB0ZXh0OiBjb25maXJtVGV4dCxcbiAgICAgICAgICAgIGNvbG9yOiBjb25maXJtQ29sb3JcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzaG93Q2FuY2VsKSB7XG4gICAgICAgICAgY29uc3QgY2FuY2VsQnV0dG9uID0ge1xuICAgICAgICAgICAgdHlwZTogJ2NhbmNlbCcsXG4gICAgICAgICAgICB0ZXh0OiBjYW5jZWxUZXh0LFxuICAgICAgICAgICAgY29sb3I6IGNhbmNlbENvbG9yXG4gICAgICAgICAgfTtcbiAgICAgICAgICBpZiAoYnV0dG9uc1Nob3dWZXJ0aWNhbCkge1xuICAgICAgICAgICAgYnV0dG9ucy5wdXNoKGNhbmNlbEJ1dHRvbik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJ1dHRvbnMudW5zaGlmdChjYW5jZWxCdXR0b24pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2hvd0N1c3RvbUJ0bnMgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB0aGlzLmRpYWxvZyA9IHtcbiAgICAgICAgICBhcHBlYXI6IHRydWUsXG4gICAgICAgICAgc2hvd0N1c3RvbUJ0bnMsXG4gICAgICAgICAgYnV0dG9ucyxcbiAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICBjb250ZW50LFxuICAgICAgICAgIGJ1dHRvbnNTaG93VmVydGljYWwsXG4gICAgICAgICAgc2hvd0NvbmZpcm0sXG4gICAgICAgICAgY29uZmlybVRleHQsXG4gICAgICAgICAgY29uZmlybUNvbG9yLFxuICAgICAgICAgIHNob3dDYW5jZWwsXG4gICAgICAgICAgY2FuY2VsVGV4dCxcbiAgICAgICAgICBjYW5jZWxDb2xvcixcbiAgICAgICAgICByZXNvbHZlLFxuICAgICAgICAgIHJlamVjdFxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==