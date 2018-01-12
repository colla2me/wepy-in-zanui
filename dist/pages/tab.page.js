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
      tabChange: function tabChange(_ref2) {
        var componentId = _ref2.componentId,
            selectedId = _ref2.selectedId;

        console.log(componentId, selectedId, this);
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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Example , 'pages/tab.page'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYi5wYWdlLmpzIl0sIm5hbWVzIjpbIkV4YW1wbGUiLCJjb25maWciLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJkYXRhIiwidGFiMSIsImxpc3QiLCJpZCIsInRpdGxlIiwic2VsZWN0ZWRJZCIsInRhYjIiLCJzY3JvbGwiLCJoZWlnaHQiLCJ0YWIzIiwiZXZlbnRzIiwidGFiQ2hhbmdlIiwiY29tcG9uZW50SWQiLCJjb25zb2xlIiwibG9nIiwiJGFwcGx5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxPOzs7Ozs7Ozs7Ozs7Ozt3TEFDbkJDLE0sR0FBUyxFLFFBQ1ZDLE8sR0FBVSxFLFFBQ1hDLE0sR0FBUyxFQUFDLFlBQVcsRUFBQyxnQkFBZSxFQUFoQixFQUFtQixtQkFBa0IsTUFBckMsRUFBNEMsZUFBYyxNQUExRCxFQUFaLEVBQThFLFlBQVcsRUFBQyxtQkFBa0IsTUFBbkIsRUFBMEIsZUFBYyxNQUF4QyxFQUF6RixFQUF5SSxZQUFXLEVBQUMsbUJBQWtCLE1BQW5CLEVBQTBCLGVBQWMsTUFBeEMsRUFBcEosRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDViwrQkFEVTtBQUVWLCtCQUZVO0FBR1Y7QUFIVSxLLFFBS1pDLEksR0FBTztBQUNMQyxZQUFNO0FBQ0pDLGNBQU0sQ0FBQztBQUNMQyxjQUFJLEtBREM7QUFFTEMsaUJBQU87QUFGRixTQUFELEVBR0g7QUFDREQsY0FBSSxPQURIO0FBRURDLGlCQUFPO0FBRk4sU0FIRyxFQU1IO0FBQ0RELGNBQUksUUFESDtBQUVEQyxpQkFBTztBQUZOLFNBTkcsRUFTSDtBQUNERCxjQUFJLE1BREg7QUFFREMsaUJBQU87QUFGTixTQVRHLEVBWUg7QUFDREQsY0FBSSxNQURIO0FBRURDLGlCQUFPO0FBRk4sU0FaRyxDQURGO0FBaUJKQyxvQkFBWTtBQWpCUixPQUREO0FBb0JMQyxZQUFNO0FBQ0pKLGNBQU0sQ0FBQztBQUNMQyxjQUFJLEdBREM7QUFFTEMsaUJBQU87QUFGRixTQUFELEVBR0g7QUFDREQsY0FBSSxHQURIO0FBRURDLGlCQUFPO0FBRk4sU0FIRyxFQU1IO0FBQ0RELGNBQUksR0FESDtBQUVEQyxpQkFBTztBQUZOLFNBTkcsRUFTSDtBQUNERCxjQUFJLEdBREg7QUFFREMsaUJBQU87QUFGTixTQVRHLEVBWUg7QUFDREQsY0FBSSxHQURIO0FBRURDLGlCQUFPO0FBRk4sU0FaRyxFQWVIO0FBQ0RELGNBQUksR0FESDtBQUVEQyxpQkFBTztBQUZOLFNBZkcsQ0FERjtBQW9CSkMsb0JBQVksR0FwQlI7QUFxQkpFLGdCQUFRLElBckJKO0FBc0JKQyxnQkFBUTtBQXRCSixPQXBCRDtBQTRDTEMsWUFBTTtBQUNKUCxjQUFNLENBQUM7QUFDTEMsY0FBSSxHQURDO0FBRUxDLGlCQUFPO0FBRkYsU0FBRCxFQUdIO0FBQ0RELGNBQUksR0FESDtBQUVEQyxpQkFBTztBQUZOLFNBSEcsRUFNSDtBQUNERCxjQUFJLEdBREg7QUFFREMsaUJBQU87QUFGTixTQU5HLEVBU0g7QUFDREQsY0FBSSxHQURIO0FBRURDLGlCQUFPO0FBRk4sU0FURyxFQVlIO0FBQ0RELGNBQUksR0FESDtBQUVEQyxpQkFBTztBQUZOLFNBWkcsRUFlSDtBQUNERCxjQUFJLEdBREg7QUFFREMsaUJBQU87QUFGTixTQWZHLENBREY7QUFvQkpDLG9CQUFZLEdBcEJSO0FBcUJKRSxnQkFBUSxJQXJCSjtBQXNCSkMsZ0JBQVE7QUF0Qko7QUE1Q0QsSyxRQXNFUEUsTSxHQUFTO0FBQ1BDLGVBRE8sNEJBQzhCO0FBQUEsWUFBMUJDLFdBQTBCLFNBQTFCQSxXQUEwQjtBQUFBLFlBQWJQLFVBQWEsU0FBYkEsVUFBYTs7QUFDbkNRLGdCQUFRQyxHQUFSLENBQVlGLFdBQVosRUFBeUJQLFVBQXpCLEVBQXFDLElBQXJDO0FBQ0EsYUFBS08sV0FBTCxFQUFrQlAsVUFBbEIsR0FBK0JBLFVBQS9CO0FBQ0EsYUFBS1UsTUFBTDtBQUNEO0FBTE0sSzs7Ozs7NkJBUUEsQ0FDUjs7OztFQXpGa0MsZUFBS0MsSTs7a0JBQXJCdEIsTyIsImZpbGUiOiJ0YWIucGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSBcIndlcHlcIjtcbmltcG9ydCBUYWIgZnJvbSBcIi4uL2NvbXBvbmVudHMvdGFiXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4YW1wbGUgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7fVxuICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiemFuLXRhYjFcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnRhYi5vbmNlXCI6XCJ0YWIxXCIsXCJjb21wb25lbnRJZFwiOlwidGFiMVwifSxcInphbi10YWIyXCI6e1widi1iaW5kOnRhYi5vbmNlXCI6XCJ0YWIyXCIsXCJjb21wb25lbnRJZFwiOlwidGFiMlwifSxcInphbi10YWIzXCI6e1widi1iaW5kOnRhYi5vbmNlXCI6XCJ0YWIzXCIsXCJjb21wb25lbnRJZFwiOlwidGFiM1wifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgJ3phbi10YWIxJzogVGFiLFxuICAgICd6YW4tdGFiMic6IFRhYixcbiAgICAnemFuLXRhYjMnOiBUYWJcbiAgfVxuICBkYXRhID0ge1xuICAgIHRhYjE6IHtcbiAgICAgIGxpc3Q6IFt7XG4gICAgICAgIGlkOiAnYWxsJyxcbiAgICAgICAgdGl0bGU6ICflhajpg6gnXG4gICAgICB9LCB7XG4gICAgICAgIGlkOiAndG9wYXknLFxuICAgICAgICB0aXRsZTogJ+W+heS7mOasvidcbiAgICAgIH0sIHtcbiAgICAgICAgaWQ6ICd0b3NlbmQnLFxuICAgICAgICB0aXRsZTogJ+W+heWPkei0pydcbiAgICAgIH0sIHtcbiAgICAgICAgaWQ6ICdzZW5kJyxcbiAgICAgICAgdGl0bGU6ICflvoXmlLbotKcnXG4gICAgICB9LCB7XG4gICAgICAgIGlkOiAnc2lnbicsXG4gICAgICAgIHRpdGxlOiAn5bey5a6M5oiQ6K6i5Y2VJ1xuICAgICAgfV0sXG4gICAgICBzZWxlY3RlZElkOiAnYWxsJ1xuICAgIH0sXG4gICAgdGFiMjoge1xuICAgICAgbGlzdDogW3tcbiAgICAgICAgaWQ6ICcxJyxcbiAgICAgICAgdGl0bGU6ICfmnIDmlrDllYblk4ExJ1xuICAgICAgfSwge1xuICAgICAgICBpZDogJzInLFxuICAgICAgICB0aXRsZTogJ+acgOaWsOWVhuWTgTInXG4gICAgICB9LCB7XG4gICAgICAgIGlkOiAnMycsXG4gICAgICAgIHRpdGxlOiAn5pyA5paw5ZWG5ZOBMydcbiAgICAgIH0sIHtcbiAgICAgICAgaWQ6ICc0JyxcbiAgICAgICAgdGl0bGU6ICfmnIDmlrDllYblk4E0J1xuICAgICAgfSwge1xuICAgICAgICBpZDogJzUnLFxuICAgICAgICB0aXRsZTogJ+acgOaWsOWVhuWTgTUnXG4gICAgICB9LCB7XG4gICAgICAgIGlkOiAnNicsXG4gICAgICAgIHRpdGxlOiAn5pyA5paw5ZWG5ZOBNidcbiAgICAgIH1dLFxuICAgICAgc2VsZWN0ZWRJZDogJzEnLFxuICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgaGVpZ2h0OiA0NVxuICAgIH0sXG4gICAgdGFiMzoge1xuICAgICAgbGlzdDogW3tcbiAgICAgICAgaWQ6ICcxJyxcbiAgICAgICAgdGl0bGU6ICfllYblk4ExJ1xuICAgICAgfSwge1xuICAgICAgICBpZDogJzInLFxuICAgICAgICB0aXRsZTogJ+WVhuWTgTInXG4gICAgICB9LCB7XG4gICAgICAgIGlkOiAnMycsXG4gICAgICAgIHRpdGxlOiAn5ZWG5ZOBMydcbiAgICAgIH0sIHtcbiAgICAgICAgaWQ6ICc0JyxcbiAgICAgICAgdGl0bGU6ICfllYblk4E0J1xuICAgICAgfSwge1xuICAgICAgICBpZDogJzUnLFxuICAgICAgICB0aXRsZTogJ+WVhuWTgTUnXG4gICAgICB9LCB7XG4gICAgICAgIGlkOiAnNicsXG4gICAgICAgIHRpdGxlOiAn5ZWG5ZOBNidcbiAgICAgIH1dLFxuICAgICAgc2VsZWN0ZWRJZDogJzEnLFxuICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgaGVpZ2h0OiA0NVxuICAgIH1cbiAgfVxuXG4gIGV2ZW50cyA9IHtcbiAgICB0YWJDaGFuZ2Uoe2NvbXBvbmVudElkLCBzZWxlY3RlZElkfSkge1xuICAgICAgY29uc29sZS5sb2coY29tcG9uZW50SWQsIHNlbGVjdGVkSWQsIHRoaXMpO1xuICAgICAgdGhpc1tjb21wb25lbnRJZF0uc2VsZWN0ZWRJZCA9IHNlbGVjdGVkSWQ7XG4gICAgICB0aGlzLiRhcHBseSgpO1xuICAgIH1cbiAgfVxuXG4gIG9uTG9hZCgpIHtcbiAgfVxufVxuIl19