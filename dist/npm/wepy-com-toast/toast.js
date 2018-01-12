"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Panel = function (_wepy$component) {
  _inherits(Panel, _wepy$component);

  function Panel() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Panel);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Panel.__proto__ || Object.getPrototypeOf(Panel)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      reveal: false,
      img: "",
      animationData: "",
      imgClassName: "",
      imgMode: "scaleToFill",
      title: "载入中...",
      titleClassName: ""
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Panel, [{
    key: "onLoad",
    value: function onLoad() {
      this.hasPromise = (typeof Promise === "undefined" ? "undefined" : _typeof(Promise)) !== undefined;
    }
  }, {
    key: "show",
    value: function show() {
      var _this2 = this;

      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      this.reveal = true;
      for (var k in data) {
        this[k] = data[k];
      }
      this.$apply();

      clearTimeout(this.__timeout);

      setTimeout(function () {
        var animation = wx.createAnimation();
        animation.opacity(1).step();
        _this2.animationData = animation.export();
        _this2.reveal = true;
        _this2.$apply();
      }, 30);

      if (data.duration === 0) {
        // success callback after toast showed
        if (this.hasPromise) {
          return new Promise(function (resolve, reject) {
            setTimeout(function () {
              resolve(data);
            }, 430);
          });
        } else {
          setTimeout(function () {
            return typeof data.success === "function" ? data.success(data) : data;
          }, 430);
        }
      } else {
        if (this.hasPromise) {
          return new Promise(function (resolve, reject) {
            _this2.__timeout = setTimeout(function () {
              _this2.toast();
              resolve(data);
            }, (data.duration || 1500) + 400);
          });
        } else {
          this.__timeout = setTimeout(function () {
            _this2.toast();

            // success callback
            typeof data.success === "function" && data.success(data);
          }, (data.duration || 1500) + 400);
        }
      }
    }
  }, {
    key: "toast",
    value: function toast(data) {
      var err = false;
      try {
        if (!data) {
          this.hide();
        } else {
          this.show(data);
        }
      } catch (e) {
        err = e;
      }

      if (this.hasPromise) {
        return new Promise(function (resolve, reject) {
          if (!err) {
            resolve(data);
          } else reject(data);
        });
      } else {
        if (err) {
          typeof data.fail === "function" && data.fail(data);
        } else {
          typeof data.success === "function" && data.success(data);
        }
      }
    }
  }, {
    key: "hide",
    value: function hide() {
      clearTimeout(this.__timeout);
      this.reveal = false;

      var animation = wx.createAnimation();
      animation.opacity(0).step();
      this.animationData = animation.export();

      this.$apply();

      if (this.hasPromise) {
        return new Promise(function (resolve, reject) {
          resolve();
        });
      } else {
        if (typeof data.success === "function") {
          return data.success(data);
        }
      }
    }
  }]);

  return Panel;
}(_wepy2.default.component);

exports.default = Panel;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvYXN0LmpzIl0sIm5hbWVzIjpbIlBhbmVsIiwiZGF0YSIsInJldmVhbCIsImltZyIsImFuaW1hdGlvbkRhdGEiLCJpbWdDbGFzc05hbWUiLCJpbWdNb2RlIiwidGl0bGUiLCJ0aXRsZUNsYXNzTmFtZSIsIm1ldGhvZHMiLCJoYXNQcm9taXNlIiwiUHJvbWlzZSIsInVuZGVmaW5lZCIsImsiLCIkYXBwbHkiLCJjbGVhclRpbWVvdXQiLCJfX3RpbWVvdXQiLCJzZXRUaW1lb3V0IiwiYW5pbWF0aW9uIiwid3giLCJjcmVhdGVBbmltYXRpb24iLCJvcGFjaXR5Iiwic3RlcCIsImV4cG9ydCIsImR1cmF0aW9uIiwicmVzb2x2ZSIsInJlamVjdCIsInN1Y2Nlc3MiLCJ0b2FzdCIsImVyciIsImhpZGUiLCJzaG93IiwiZSIsImZhaWwiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxJLEdBQU87QUFDTEMsY0FBUSxLQURIO0FBRUxDLFdBQUssRUFGQTtBQUdMQyxxQkFBZSxFQUhWO0FBSUxDLG9CQUFjLEVBSlQ7QUFLTEMsZUFBUyxhQUxKO0FBTUxDLGFBQU8sUUFORjtBQU9MQyxzQkFBZ0I7QUFQWCxLLFFBVVBDLE8sR0FBVSxFOzs7Ozs2QkFFRDtBQUNQLFdBQUtDLFVBQUwsR0FBa0IsUUFBT0MsT0FBUCx5Q0FBT0EsT0FBUCxPQUFtQkMsU0FBckM7QUFDRDs7OzJCQUVlO0FBQUE7O0FBQUEsVUFBWFgsSUFBVyx1RUFBSixFQUFJOztBQUNkLFdBQUtDLE1BQUwsR0FBYyxJQUFkO0FBQ0EsV0FBSyxJQUFJVyxDQUFULElBQWNaLElBQWQsRUFBb0I7QUFDbEIsYUFBS1ksQ0FBTCxJQUFVWixLQUFLWSxDQUFMLENBQVY7QUFDRDtBQUNELFdBQUtDLE1BQUw7O0FBRUFDLG1CQUFhLEtBQUtDLFNBQWxCOztBQUVBQyxpQkFBVyxZQUFNO0FBQ2YsWUFBSUMsWUFBWUMs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QUNuQixlQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDYyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdENEO0FBQ0QsU0FGTSxDQUFQO0FBR0QsT0FKRCxNQUlPO0FBQ0wsWUFBSSxPQUFPeEIsS0FBSzBCLE9BQVosS0FBd0IsVUFBNUIsRUFBd0M7QUFDdEMsaUJBQU8xQixLQUFLMEIsT0FBTCxDQUFhMUIsSUFBYixDQUFQO0FBQ0Q7QUFDRjtBQUNGOzs7O0VBaEhnQyxlQUFLaUMsUzs7a0JBQW5CbEMsSyIsImZpbGUiOiJ0b2FzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSBcIndlcHlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFuZWwgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gIGRhdGEgPSB7XG4gICAgcmV2ZWFsOiBmYWxzZSxcbiAgICBpbWc6IFwiXCIsXG4gICAgYW5pbWF0aW9uRGF0YTogXCJcIixcbiAgICBpbWdDbGFzc05hbWU6IFwiXCIsXG4gICAgaW1nTW9kZTogXCJzY2FsZVRvRmlsbFwiLFxuICAgIHRpdGxlOiBcIui9veWFpeS4rS4uLlwiLFxuICAgIHRpdGxlQ2xhc3NOYW1lOiBcIlwiXG4gIH07XG5cbiAgbWV0aG9kcyA9IHt9O1xuXG4gIG9uTG9hZCgpIHtcbiAgICB0aGlzLmhhc1Byb21pc2UgPSB0eXBlb2YgUHJvbWlzZSAhPT0gdW5kZWZpbmVkO1xuICB9XG5cbiAgc2hvdyhkYXRhID0ge30pIHtcbiAgICB0aGlzLnJldmVhbCA9IHRydWU7XG4gICAgZm9yIChsZXQgayBpbiBkYXRhKSB7XG4gICAgICB0aGlzW2tdID0gZGF0YVtrXTtcbiAgICB9XG4gICAgdGhpcy4kYXBwbHkoKTtcblxuICAgIGNsZWFyVGltZW91dCh0aGlzLl9fdGltZW91dCk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGxldCBhbmltYXRpb24gPSB3eC5jcmVhdGVBbmltYXRpb24oKTtcbiAgICAgIGFuaW1hdGlvbi5vcGFjaXR5KDEpLnN0ZXAoKTtcbiAgICAgIHRoaXMuYW5pbWF0aW9uRGF0YSA9IGFuaW1hdGlvbi5leHBvcnQoKTtcbiAgICAgIHRoaXMucmV2ZWFsID0gdHJ1ZTtcbiAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgfSwgMzApO1xuXG4gICAgaWYgKGRhdGEuZHVyYXRpb24gPT09IDApIHtcbiAgICAgIC8vIHN1Y2Nlc3MgY2FsbGJhY2sgYWZ0ZXIgdG9hc3Qgc2hvd2VkXG4gICAgICBpZiAodGhpcy5oYXNQcm9taXNlKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAgICAgICAgIH0sIDQzMCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHR5cGVvZiBkYXRhLnN1Y2Nlc3MgPT09IFwiZnVuY3Rpb25cIiA/IGRhdGEuc3VjY2VzcyhkYXRhKSA6IGRhdGE7XG4gICAgICAgIH0sIDQzMCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmhhc1Byb21pc2UpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICB0aGlzLl9fdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy50b2FzdCgpO1xuICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgICB9LCAoZGF0YS5kdXJhdGlvbiB8fCAxNTAwKSArIDQwMCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fX3RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLnRvYXN0KCk7XG5cbiAgICAgICAgICAvLyBzdWNjZXNzIGNhbGxiYWNrXG4gICAgICAgICAgdHlwZW9mIGRhdGEuc3VjY2VzcyA9PT0gXCJmdW5jdGlvblwiICYmIGRhdGEuc3VjY2VzcyhkYXRhKTtcbiAgICAgICAgfSwgKGRhdGEuZHVyYXRpb24gfHwgMTUwMCkgKyA0MDApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHRvYXN0KGRhdGEpIHtcbiAgICBsZXQgZXJyID0gZmFsc2U7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghZGF0YSkge1xuICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2hvdyhkYXRhKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBlcnIgPSBlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmhhc1Byb21pc2UpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGlmICghZXJyKSB7XG4gICAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgfSBlbHNlIHJlamVjdChkYXRhKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIHR5cGVvZiBkYXRhLmZhaWwgPT09IFwiZnVuY3Rpb25cIiAmJiBkYXRhLmZhaWwoZGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0eXBlb2YgZGF0YS5zdWNjZXNzID09PSBcImZ1bmN0aW9uXCIgJiYgZGF0YS5zdWNjZXNzKGRhdGEpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuX190aW1lb3V0KTtcbiAgICB0aGlzLnJldmVhbCA9IGZhbHNlO1xuXG4gICAgbGV0IGFuaW1hdGlvbiA9IHd4LmNyZWF0ZUFuaW1hdGlvbigpO1xuICAgIGFuaW1hdGlvbi5vcGFjaXR5KDApLnN0ZXAoKTtcbiAgICB0aGlzLmFuaW1hdGlvbkRhdGEgPSBhbmltYXRpb24uZXhwb3J0KCk7XG5cbiAgICB0aGlzLiRhcHBseSgpO1xuXG4gICAgaWYgKHRoaXMuaGFzUHJvbWlzZSkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0eXBlb2YgZGF0YS5zdWNjZXNzID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGRhdGEuc3VjY2VzcyhkYXRhKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==