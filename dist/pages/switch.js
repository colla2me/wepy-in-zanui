'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _switcher = require('./../components/switcher.js');

var _switcher2 = _interopRequireDefault(_switcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Switch = function (_wepy$page) {
  _inherits(Switch, _wepy$page);

  function Switch() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Switch);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Switch.__proto__ || Object.getPrototypeOf(Switch)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      syncChecked: false,
      asyncChecked: true,
      loading: false,
      disabled1: true,
      disable2: true,
      checked1: false,
      checked2: false
    }, _this.$repeat = {}, _this.$props = { "switch1": { "componentId": "sync", "xmlns:v-bind": "", "v-bind:checked.sync": "syncChecked" }, "switch2": { "componentId": "async", "v-bind:checked.sync": "asyncChecked", "v-bind:loading.sync": "loading" }, "switch3": { "checked": "false", "disabled": "true" }, "switch4": { "checked": "", "disabled": "true" } }, _this.$events = {}, _this.components = {
      switch1: _switcher2.default,
      switch2: _switcher2.default,
      switch3: _switcher2.default,
      switch4: _switcher2.default
    }, _this.events = {
      switchChange: function switchChange(data) {
        var _this2 = this;

        if (data.componentId === 'sync') {
          this.syncChecked = data.checked;
        } else {
          this.loading = true;
          setTimeout(function () {
            _this2.asyncChecked = data.checked;
            _this2.loading = false;
            _this2.$apply();
          }, 500);
        }
        console.log('swich change:', data);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Switch;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Switch , 'pages/switch'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN3aXRjaC5qcyJdLCJuYW1lcyI6WyJTd2l0Y2giLCJkYXRhIiwic3luY0NoZWNrZWQiLCJhc3luY0NoZWNrZWQiLCJsb2FkaW5nIiwiZGlzYWJsZWQxIiwiZGlzYWJsZTIiLCJjaGVja2VkMSIsImNoZWNrZWQyIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwic3dpdGNoMSIsInN3aXRjaDIiLCJzd2l0Y2gzIiwic3dpdGNoNCIsImV2ZW50cyIsInN3aXRjaENoYW5nZSIsImNvbXBvbmVudElkIiwiY2hlY2tlZCIsInNldFRpbWVvdXQiLCIkYXBwbHkiLCJjb25zb2xlIiwibG9nIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsTTs7Ozs7Ozs7Ozs7Ozs7c0xBQ25CQyxJLEdBQU87QUFDTEMsbUJBQWEsS0FEUjtBQUVMQyxvQkFBYyxJQUZUO0FBR0xDLGVBQVMsS0FISjtBQUlMQyxpQkFBVyxJQUpOO0FBS0xDLGdCQUFVLElBTEw7QUFNTEMsZ0JBQVUsS0FOTDtBQU9MQyxnQkFBVTtBQVBMLEssUUFVUkMsTyxHQUFVLEUsUUFDWEMsTSxHQUFTLEVBQUMsV0FBVSxFQUFDLGVBQWMsTUFBZixFQUFzQixnQkFBZSxFQUFyQyxFQUF3Qyx1QkFBc0IsYUFBOUQsRUFBWCxFQUF3RixXQUFVLEVBQUMsZUFBYyxPQUFmLEVBQXVCLHVCQUFzQixjQUE3QyxFQUE0RCx1QkFBc0IsU0FBbEYsRUFBbEcsRUFBK0wsV0FBVSxFQUFDLFdBQVUsT0FBWCxFQUFtQixZQUFXLE1BQTlCLEVBQXpNLEVBQStPLFdBQVUsRUFBQyxXQUFVLEVBQVgsRUFBYyxZQUFXLE1BQXpCLEVBQXpQLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1ZDLGlDQURVO0FBRVZDLGlDQUZVO0FBR1ZDLGlDQUhVO0FBSVZDO0FBSlUsSyxRQU9aQyxNLEdBQVM7QUFDUEMsa0JBRE8sd0JBQ01qQixJQUROLEVBQ1k7QUFBQTs7QUFDakIsWUFBSUEsS0FBS2tCLFdBQUwsS0FBcUIsTUFBekIsRUFBaUM7QUFDL0IsZUFBS2pCLFdBQUwsR0FBbUJELEtBQUttQixPQUF4QjtBQUNELFNBRkQsTUFFTztBQUNMLGVBQUtoQixPQUFMLEdBQWUsSUFBZjtBQUNBaUIscUJBQVcsWUFBTTtBQUNmLG1CQUFLbEIsWUFBTCxHQUFvQkYsS0FBS21CLE9BQXpCO0FBQ0EsbUJBQUtoQixPQUFMLEdBQWUsS0FBZjtBQUNBLG1CQUFLa0IsTUFBTDtBQUNELFdBSkQsRUFJRyxHQUpIO0FBS0Q7QUFDREMsZ0JBQVFDLEdBQVIsQ0FBWSxlQUFaLEVBQTZCdkIsSUFBN0I7QUFDRDtBQWJNLEs7Ozs7RUFyQnlCLGVBQUt3QixJOztrQkFBcEJ6QixNIiwiZmlsZSI6InN3aXRjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5pbXBvcnQgU3dpdGNoZXIgZnJvbSAnLi4vY29tcG9uZW50cy9zd2l0Y2hlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN3aXRjaCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGRhdGEgPSB7XG4gICAgc3luY0NoZWNrZWQ6IGZhbHNlLFxuICAgIGFzeW5jQ2hlY2tlZDogdHJ1ZSxcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICBkaXNhYmxlZDE6IHRydWUsXG4gICAgZGlzYWJsZTI6IHRydWUsXG4gICAgY2hlY2tlZDE6IGZhbHNlLFxuICAgIGNoZWNrZWQyOiBmYWxzZVxuICB9XG5cbiAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcInN3aXRjaDFcIjp7XCJjb21wb25lbnRJZFwiOlwic3luY1wiLFwieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpjaGVja2VkLnN5bmNcIjpcInN5bmNDaGVja2VkXCJ9LFwic3dpdGNoMlwiOntcImNvbXBvbmVudElkXCI6XCJhc3luY1wiLFwidi1iaW5kOmNoZWNrZWQuc3luY1wiOlwiYXN5bmNDaGVja2VkXCIsXCJ2LWJpbmQ6bG9hZGluZy5zeW5jXCI6XCJsb2FkaW5nXCJ9LFwic3dpdGNoM1wiOntcImNoZWNrZWRcIjpcImZhbHNlXCIsXCJkaXNhYmxlZFwiOlwidHJ1ZVwifSxcInN3aXRjaDRcIjp7XCJjaGVja2VkXCI6XCJcIixcImRpc2FibGVkXCI6XCJ0cnVlXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICBzd2l0Y2gxOiBTd2l0Y2hlcixcbiAgICBzd2l0Y2gyOiBTd2l0Y2hlcixcbiAgICBzd2l0Y2gzOiBTd2l0Y2hlcixcbiAgICBzd2l0Y2g0OiBTd2l0Y2hlcixcbiAgfVxuXG4gIGV2ZW50cyA9IHtcbiAgICBzd2l0Y2hDaGFuZ2UoZGF0YSkge1xuICAgICAgaWYgKGRhdGEuY29tcG9uZW50SWQgPT09ICdzeW5jJykge1xuICAgICAgICB0aGlzLnN5bmNDaGVja2VkID0gZGF0YS5jaGVja2VkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5hc3luY0NoZWNrZWQgPSBkYXRhLmNoZWNrZWQ7XG4gICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgfSwgNTAwKTtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKCdzd2ljaCBjaGFuZ2U6JywgZGF0YSlcbiAgICB9XG4gIH1cbn1cbiJdfQ==