"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _tab = require('./../components/tab.js');

var _tab2 = _interopRequireDefault(_tab);

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Example.__proto__ || Object.getPrototypeOf(Example)).call.apply(_ref, [this].concat(args))), _this), _this.config = {}, _this.$repeat = {}, _this.$props = { "zan-tab1": { "xmlns:v-bind": "", "v-bind:tab.once": "tab1", "componentId": "tab1" }, "zan-tab2": { "v-bind:tab.once": "tab2", "componentId": "tab2" }, "zan-tab3": { "v-bind:tab.once": "tab3", "componentId": "tab3" } }, _this.$events = {}, _this.components = {
      'zan-tab1': _tab2.default,
      'zan-tab2': _tab2.default,
      'zan-tab3': _tab2.default
    }, _this.data = {
      tab1: {
        list: [{
          id: 'all',
          title: '全部'
        }, {
          id: 'topay',
          title: '待付款'
        }, {
          id: 'tosend',
          title: '待发货'
        }, {
          id: 'send',
          title: '待收货'
        }, {
          id: 'sign',
          title: '已完成订单'
        }],
        selectedId: 'all'
      },
      tab2: {
        list: [{
          id: '1',
          title: '最新商品1'
        }, {
          id: '2',
          title: '最新商品2'
        }, {
          id: '3',
          title: '最新商品3'
        }, {
          id: '4',
          title: '最新商品4'
        }, {
          id: '5',
          title: '最新商品5'
        }, {
          id: '6',
          title: '最新商品6'
        }],
        selectedId: '1',
        scroll: true,
        height: 45
      },
      tab3: {
        list: [{
          id: '1',
          title: '商品1'
        }, {
          id: '2',
          title: '商品2'
        }, {
          id: '3',
          title: '商品3'
        }, {
          id: '4',
          title: '商品4'
        }, {
          id: '5',
          title: '商品5'
        }, {
          id: '6',
          title: '商品6'
        }],
        selectedId: '1',
        scroll: true,
        height: 45
      }
    }, _this.events = {
      tabChange: function tabChange(_ref2, event) {
        var componentId = _ref2.componentId,
            selectedId = _ref2.selectedId;

        console.log(componentId, selectedId, event);
        this[componentId].selectedId = selectedId;
        this.$apply();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Example, [{
    key: "onLoad",
    value: function onLoad() {}
  }]);

  return Example;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Example , 'pages/tabs'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYnMuanMiXSwibmFtZXMiOlsiRXhhbXBsZSIsImNvbmZpZyIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImRhdGEiLCJ0YWIxIiwibGlzdCIsImlkIiwidGl0bGUiLCJzZWxlY3RlZElkIiwidGFiMiIsInNjcm9sbCIsImhlaWdodCIsInRhYjMiLCJldmVudHMiLCJ0YWJDaGFuZ2UiLCJldmVudCIsImNvbXBvbmVudElkIiwiY29uc29sZSIsImxvZyIsIiRhcHBseSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsTzs7Ozs7Ozs7Ozs7Ozs7d0xBQ25CQyxNLEdBQVMsRSxRQUNWQyxPLEdBQVUsRSxRQUNYQyxNLEdBQVMsRUFBQyxZQUFXLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsbUJBQWtCLE1BQXJDLEVBQTRDLGVBQWMsTUFBMUQsRUFBWixFQUE4RSxZQUFXLEVBQUMsbUJBQWtCLE1BQW5CLEVBQTBCLGVBQWMsTUFBeEMsRUFBekYsRUFBeUksWUFBVyxFQUFDLG1CQUFrQixNQUFuQixFQUEwQixlQUFjLE1BQXhDLEVBQXBKLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1YsK0JBRFU7QUFFViwrQkFGVTtBQUdWO0FBSFUsSyxRQUtaQyxJLEdBQU87QUFDTEMsWUFBTTtBQUNKQyxjQUFNLENBQUM7QUFDTEMsY0FBSSxLQURDO0FBRUxDLGlCQUFPO0FBRkYsU0FBRCxFQUdIO0FBQ0RELGNBQUksT0FESDtBQUVEQyxpQkFBTztBQUZOLFNBSEcsRUFNSDtBQUNERCxjQUFJLFFBREg7QUFFREMsaUJBQU87QUFGTixTQU5HLEVBU0g7QUFDREQsY0FBSSxNQURIO0FBRURDLGlCQUFPO0FBRk4sU0FURyxFQVlIO0FBQ0RELGNBQUksTUFESDtBQUVEQyxpQkFBTztBQUZOLFNBWkcsQ0FERjtBQWlCSkMsb0JBQVk7QUFqQlIsT0FERDtBQW9CTEMsWUFBTTtBQUNKSixjQUFNLENBQUM7QUFDTEMsY0FBSSxHQURDO0FBRUxDLGlCQUFPO0FBRkYsU0FBRCxFQUdIO0FBQ0RELGNBQUksR0FESDtBQUVEQyxpQkFBTztBQUZOLFNBSEcsRUFNSDtBQUNERCxjQUFJLEdBREg7QUFFREMsaUJBQU87QUFGTixTQU5HLEVBU0g7QUFDREQsY0FBSSxHQURIO0FBRURDLGlCQUFPO0FBRk4sU0FURyxFQVlIO0FBQ0RELGNBQUksR0FESDtBQUVEQyxpQkFBTztBQUZOLFNBWkcsRUFlSDtBQUNERCxjQUFJLEdBREg7QUFFREMsaUJBQU87QUFGTixTQWZHLENBREY7QUFvQkpDLG9CQUFZLEdBcEJSO0FBcUJKRSxnQkFBUSxJQXJCSjtBQXNCSkMsZ0JBQVE7QUF0QkosT0FwQkQ7QUE0Q0xDLFlBQU07QUFDSlAsY0FBTSxDQUFDO0FBQ0xDLGNBQUksR0FEQztBQUVMQyxpQkFBTztBQUZGLFNBQUQsRUFHSDtBQUNERCxjQUFJLEdBREg7QUFFREMsaUJBQU87QUFGTixTQUhHLEVBTUg7QUFDREQsY0FBSSxHQURIO0FBRURDLGlCQUFPO0FBRk4sU0FORyxFQVNIO0FBQ0RELGNBQUksR0FESDtBQUVEQyxpQkFBTztBQUZOLFNBVEcsRUFZSDtBQUNERCxjQUFJLEdBREg7QUFFREMsaUJBQU87QUFGTixTQVpHLEVBZUg7QUFDREQsY0FBSSxHQURIO0FBRURDLGlCQUFPO0FBRk4sU0FmRyxDQURGO0FBb0JKQyxvQkFBWSxHQXBCUjtBQXFCSkUsZ0JBQVEsSUFyQko7QUFzQkpDLGdCQUFRO0FBdEJKO0FBNUNELEssUUFzRVBFLE0sR0FBUztBQUNQQyxlQURPLDRCQUM4QkMsS0FEOUIsRUFDcUM7QUFBQSxZQUFqQ0MsV0FBaUMsU0FBakNBLFdBQWlDO0FBQUEsWUFBcEJSLFVBQW9CLFNBQXBCQSxVQUFvQjs7QUFDMUNTLGdCQUFRQyxHQUFSLENBQVlGLFdBQVosRUFBeUJSLFVBQXpCLEVBQXFDTyxLQUFyQztBQUNBLGFBQUtDLFdBQUwsRUFBa0JSLFVBQWxCLEdBQStCQSxVQUEvQjtBQUNBLGFBQUtXLE1BQUw7QUFDRDtBQUxNLEs7Ozs7OzZCQVFBLENBQ1I7Ozs7RUF6RmtDLGVBQUtDLEk7O2tCQUFyQnZCLE8iLCJmaWxlIjoidGFicy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSBcIndlcHlcIjtcbmltcG9ydCBUYWIgZnJvbSBcIi4uL2NvbXBvbmVudHMvdGFiXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4YW1wbGUgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7fVxuICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiemFuLXRhYjFcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnRhYi5vbmNlXCI6XCJ0YWIxXCIsXCJjb21wb25lbnRJZFwiOlwidGFiMVwifSxcInphbi10YWIyXCI6e1widi1iaW5kOnRhYi5vbmNlXCI6XCJ0YWIyXCIsXCJjb21wb25lbnRJZFwiOlwidGFiMlwifSxcInphbi10YWIzXCI6e1widi1iaW5kOnRhYi5vbmNlXCI6XCJ0YWIzXCIsXCJjb21wb25lbnRJZFwiOlwidGFiM1wifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgJ3phbi10YWIxJzogVGFiLFxuICAgICd6YW4tdGFiMic6IFRhYixcbiAgICAnemFuLXRhYjMnOiBUYWJcbiAgfVxuICBkYXRhID0ge1xuICAgIHRhYjE6IHtcbiAgICAgIGxpc3Q6IFt7XG4gICAgICAgIGlkOiAnYWxsJyxcbiAgICAgICAgdGl0bGU6ICflhajpg6gnXG4gICAgICB9LCB7XG4gICAgICAgIGlkOiAndG9wYXknLFxuICAgICAgICB0aXRsZTogJ+W+heS7mOasvidcbiAgICAgIH0sIHtcbiAgICAgICAgaWQ6ICd0b3NlbmQnLFxuICAgICAgICB0aXRsZTogJ+W+heWPkei0pydcbiAgICAgIH0sIHtcbiAgICAgICAgaWQ6ICdzZW5kJyxcbiAgICAgICAgdGl0bGU6ICflvoXmlLbotKcnXG4gICAgICB9LCB7XG4gICAgICAgIGlkOiAnc2lnbicsXG4gICAgICAgIHRpdGxlOiAn5bey5a6M5oiQ6K6i5Y2VJ1xuICAgICAgfV0sXG4gICAgICBzZWxlY3RlZElkOiAnYWxsJ1xuICAgIH0sXG4gICAgdGFiMjoge1xuICAgICAgbGlzdDogW3tcbiAgICAgICAgaWQ6ICcxJyxcbiAgICAgICAgdGl0bGU6ICfmnIDmlrDllYblk4ExJ1xuICAgICAgfSwge1xuICAgICAgICBpZDogJzInLFxuICAgICAgICB0aXRsZTogJ+acgOaWsOWVhuWTgTInXG4gICAgICB9LCB7XG4gICAgICAgIGlkOiAnMycsXG4gICAgICAgIHRpdGxlOiAn5pyA5paw5ZWG5ZOBMydcbiAgICAgIH0sIHtcbiAgICAgICAgaWQ6ICc0JyxcbiAgICAgICAgdGl0bGU6ICfmnIDmlrDllYblk4E0J1xuICAgICAgfSwge1xuICAgICAgICBpZDogJzUnLFxuICAgICAgICB0aXRsZTogJ+acgOaWsOWVhuWTgTUnXG4gICAgICB9LCB7XG4gICAgICAgIGlkOiAnNicsXG4gICAgICAgIHRpdGxlOiAn5pyA5paw5ZWG5ZOBNidcbiAgICAgIH1dLFxuICAgICAgc2VsZWN0ZWRJZDogJzEnLFxuICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgaGVpZ2h0OiA0NVxuICAgIH0sXG4gICAgdGFiMzoge1xuICAgICAgbGlzdDogW3tcbiAgICAgICAgaWQ6ICcxJyxcbiAgICAgICAgdGl0bGU6ICfllYblk4ExJ1xuICAgICAgfSwge1xuICAgICAgICBpZDogJzInLFxuICAgICAgICB0aXRsZTogJ+WVhuWTgTInXG4gICAgICB9LCB7XG4gICAgICAgIGlkOiAnMycsXG4gICAgICAgIHRpdGxlOiAn5ZWG5ZOBMydcbiAgICAgIH0sIHtcbiAgICAgICAgaWQ6ICc0JyxcbiAgICAgICAgdGl0bGU6ICfllYblk4E0J1xuICAgICAgfSwge1xuICAgICAgICBpZDogJzUnLFxuICAgICAgICB0aXRsZTogJ+WVhuWTgTUnXG4gICAgICB9LCB7XG4gICAgICAgIGlkOiAnNicsXG4gICAgICAgIHRpdGxlOiAn5ZWG5ZOBNidcbiAgICAgIH1dLFxuICAgICAgc2VsZWN0ZWRJZDogJzEnLFxuICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgaGVpZ2h0OiA0NVxuICAgIH1cbiAgfVxuXG4gIGV2ZW50cyA9IHtcbiAgICB0YWJDaGFuZ2Uoe2NvbXBvbmVudElkLCBzZWxlY3RlZElkfSwgZXZlbnQpIHtcbiAgICAgIGNvbnNvbGUubG9nKGNvbXBvbmVudElkLCBzZWxlY3RlZElkLCBldmVudCk7XG4gICAgICB0aGlzW2NvbXBvbmVudElkXS5zZWxlY3RlZElkID0gc2VsZWN0ZWRJZDtcbiAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgfVxuICB9XG5cbiAgb25Mb2FkKCkge1xuICB9XG59XG4iXX0=