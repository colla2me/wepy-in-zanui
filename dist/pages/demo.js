"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _list = require('./../components/list.js');

var _list2 = _interopRequireDefault(_list);

var _panel = require('./../components/panel.js');

var _panel2 = _interopRequireDefault(_panel);

var _counter = require('./../components/counter.js');

var _counter2 = _interopRequireDefault(_counter);

var _group = require('./../components/group.js');

var _group2 = _interopRequireDefault(_group);

var _wepyComToast = require('./../npm/wepy-com-toast/toast.js');

var _wepyComToast2 = _interopRequireDefault(_wepyComToast);

var _test = require('./../mixins/test.js');

var _test2 = _interopRequireDefault(_test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // alias example
// alias example


var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: "onLoad",
    value: function onLoad() {
      var self = this;
      this.$parent.getUserInfo(function (userInfo) {
        if (userInfo) {
          self.userInfo = userInfo;
        }
        self.normalTitle = "标题已被修改";

        self.setTimeoutTitle = "标题三秒后会被修改";
        setTimeout(function () {
          self.setTimeoutTitle = "到三秒了";
          self.$apply();
        }, 3000);

        self.$apply();
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.config = {
    navigationBarTitleText: "test"
  };
  this.$repeat = { "groupList": { "com": "group", "props": "grouplist" } };
  this.$props = { "group": { "v-bind:grouplist.once": { "value": "item", "type": "item", "for": "groupList", "item": "item", "index": "index", "key": "key" }, "v-bind:indexa.once": { "value": "index", "type": "index", "for": "groupList", "item": "item", "index": "index", "key": "key" } }, "counter1": { "xmlns:v-on": "" }, "counter2": { "xmlns:v-bind": "", "v-bind:num.sync": "mynum" } };
  this.$events = { "counter1": { "v-on:index-emit": "counterEmit" } };
  this.components = {
    panel: _panel2.default,
    counter1: _counter2.default,
    counter2: _counter2.default,
    list: _list2.default,
    group: _group2.default,
    toast: _wepyComToast2.default
  };
  this.mixins = [_test2.default];
  this.data = {
    mynum: 20,
    userInfo: {
      nickName: "加载中..."
    },
    normalTitle: "原始标题",
    setTimeoutTitle: "标题三秒后会被修改",
    count: 0,
    netrst: "",
    groupList: [{
      id: 1,
      name: "点击改变",
      list: [{
        childid: "1.1",
        childname: "子项，点我改变"
      }, {
        childid: "1.2",
        childname: "子项，点我改变"
      }, {
        childid: "1.3",
        childname: "子项，点我改变"
      }]
    }, {
      id: 2,
      name: "点击改变",
      list: [{
        childid: "2.1",
        childname: "子项，点我改变"
      }, {
        childid: "2.2",
        childname: "子项，点我改变"
      }, {
        childid: "2.3",
        childname: "子项，点我改变"
      }]
    }, {
      id: 3,
      name: "点击改变",
      list: [{
        childid: "3.1",
        childname: "子项，点我改变"
      }]
    }]
  };
  this.computed = {
    now: function now() {
      return +new Date();
    }
  };
  this.methods = {
    plus: function plus() {
      this.mynum++;
    },
    toast: function toast() {
      var promise = this.$invoke("toast", "show", {
        title: "自定义标题",
        img: "https://raw.githubusercontent.com/kiinlam/wetoast/master/images/star.png"
      });

      promise.then(function (d) {
        console.log("toast done", d);
      });
    },
    tap: function tap() {
      console.log("do noting from " + this.$name);
    },
    communicate: function communicate() {
      console.log(this.$name + " tap");

      this.$invoke("counter2", "minus", 45, 6);
      this.$invoke("counter1", "plus", 45, 6);

      this.$broadcast("index-broadcast", 1, 3, 4);
    },
    request: function request() {
      var self = this;
      var i = 10;
      var map = ["MA==", "MQo=", "Mg==", "Mw==", "NA==", "NQ==", "Ng==", "Nw==", "OA==", "OQ=="];
      while (i--) {
        _wepy2.default.request({
          url: "https://www.madcoder.cn/tests/sleep.php?time=1&t=css&c=" + map[i] + "&i=" + i,
          success: function success(d) {
            self.netrst += d.data + ".";
            self.$apply();
          }
        });
      }
    },
    counterEmit: function counterEmit() {
      var _ref2;

      var $event = (_ref2 = arguments.length - 1, arguments.length <= _ref2 ? undefined : arguments[_ref2]);
      console.log(this.$name + " receive " + $event.name + " from " + $event.source.$name);
    }
  };
  this.events = {
    "index-emit": function indexEmit() {
      var _ref3;

      var $event = (_ref3 = arguments.length - 1, arguments.length <= _ref3 ? undefined : arguments[_ref3]);
      console.log(_this2.$name + " receive " + $event.name + " from " + $event.source.$name);
    }
  };
};


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/demo'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8uanMiXSwibmFtZXMiOlsiSW5kZXgiLCJzZWxmIiwiJHBhcmVudCIsImdldFVzZXJJbmZvIiwidXNlckluZm8iLCJub3JtYWxUaXRsZSIsInNldFRpbWVvdXRUaXRsZSIsInNldFRpbWVvdXQiLCIkYXBwbHkiLCJwYWdlIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInBhbmVsIiwiY291bnRlcjEiLCJjb3VudGVyMiIsImxpc3QiLCJncm91cCIsInRvYXN0IiwibWl4aW5zIiwiZGF0YSIsIm15bnVtIiwibmlja05hbWUiLCJjb3VudCIsIm5ldHJzdCIsImdyb3VwTGlzdCIsImlkIiwibmFtZSIsImNoaWxkaWQiLCJjaGlsZG5hbWUiLCJjb21wdXRlZCIsIm5vdyIsIkRhdGUiLCJtZXRob2RzIiwicGx1cyIsInByb21pc2UiLCIkaW52b2tlIiwidGl0bGUiLCJpbWciLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsImQiLCJ0YXAiLCIkbmFtZSIsImNvbW11bmljYXRlIiwiJGJyb2FkY2FzdCIsInJlcXVlc3QiLCJpIiwibWFwIiwidXJsIiwic3VjY2VzcyIsImNvdW50ZXJFbWl0IiwiJGV2ZW50IiwibGVuZ3RoIiwic291cmNlIiwiZXZlbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OzsrZUFKd0M7QUFDVDs7O0lBS1ZBLEs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBMkpWO0FBQ1AsVUFBSUMsT0FBTyxJQUFYO0FBQ0EsV0FBS0MsT0FBTCxDQUFhQyxXQUFiLENBQXlCLFVBQVNDLFFBQVQsRUFBbUI7QUFDMUMsWUFBSUEsUUFBSixFQUFjO0FBQ1pILGVBQUtHLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0Q7QUFDREgsYUFBS0ksV0FBTCxHQUFtQixRQUFuQjs7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Q3pCLFVBQUlILGtCQUFjLFVBQUtDLE1BQUwsR0FBYyxDQUE1QiwyREFBSjtBQUNBZCxjQUFRQyxHQUFSLENBQ0ssT0FBS0csS0FEVixpQkFDMkJTLE9BQU8xQixJQURsQyxjQUMrQzBCLE9BQU9FLE1BQVAsQ0FBY1gsS0FEN0Q7QUFHRDtBQU5NLEc7OztrQkFsSlUvQyxLIiwiZmlsZSI6ImRlbW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gXCJ3ZXB5XCI7XG5pbXBvcnQgTGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9saXN0XCI7XG5pbXBvcnQgUGFuZWwgZnJvbSBcIkAvY29tcG9uZW50cy9wYW5lbFwiOyAvLyBhbGlhcyBleGFtcGxlXG5pbXBvcnQgQ291bnRlciBmcm9tIFwiY291bnRlclwiOyAvLyBhbGlhcyBleGFtcGxlXG5pbXBvcnQgR3JvdXAgZnJvbSBcIi4uL2NvbXBvbmVudHMvZ3JvdXBcIjtcbmltcG9ydCBUb2FzdCBmcm9tIFwid2VweS1jb20tdG9hc3RcIjtcbmltcG9ydCB0ZXN0TWl4aW4gZnJvbSBcIi4uL21peGlucy90ZXN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6IFwidGVzdFwiXG4gIH07XG4gJHJlcGVhdCA9IHtcImdyb3VwTGlzdFwiOntcImNvbVwiOlwiZ3JvdXBcIixcInByb3BzXCI6XCJncm91cGxpc3RcIn19O1xyXG4kcHJvcHMgPSB7XCJncm91cFwiOntcInYtYmluZDpncm91cGxpc3Qub25jZVwiOntcInZhbHVlXCI6XCJpdGVtXCIsXCJ0eXBlXCI6XCJpdGVtXCIsXCJmb3JcIjpcImdyb3VwTGlzdFwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImtleVwifSxcInYtYmluZDppbmRleGEub25jZVwiOntcInZhbHVlXCI6XCJpbmRleFwiLFwidHlwZVwiOlwiaW5kZXhcIixcImZvclwiOlwiZ3JvdXBMaXN0XCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwia2V5XCJ9fSxcImNvdW50ZXIxXCI6e1wieG1sbnM6di1vblwiOlwiXCJ9LFwiY291bnRlcjJcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOm51bS5zeW5jXCI6XCJteW51bVwifX07XHJcbiRldmVudHMgPSB7XCJjb3VudGVyMVwiOntcInYtb246aW5kZXgtZW1pdFwiOlwiY291bnRlckVtaXRcIn19O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICBwYW5lbDogUGFuZWwsXG4gICAgY291bnRlcjE6IENvdW50ZXIsXG4gICAgY291bnRlcjI6IENvdW50ZXIsXG4gICAgbGlzdDogTGlzdCxcbiAgICBncm91cDogR3JvdXAsXG4gICAgdG9hc3Q6IFRvYXN0XG4gIH07XG5cbiAgbWl4aW5zID0gW3Rlc3RNaXhpbl07XG5cbiAgZGF0YSA9IHtcbiAgICBteW51bTogMjAsXG4gICAgdXNlckluZm86IHtcbiAgICAgIG5pY2tOYW1lOiBcIuWKoOi9veS4rS4uLlwiXG4gICAgfSxcbiAgICBub3JtYWxUaXRsZTogXCLljp/lp4vmoIfpophcIixcbiAgICBzZXRUaW1lb3V0VGl0bGU6IFwi5qCH6aKY5LiJ56eS5ZCO5Lya6KKr5L+u5pS5XCIsXG4gICAgY291bnQ6IDAsXG4gICAgbmV0cnN0OiBcIlwiLFxuICAgIGdyb3VwTGlzdDogW1xuICAgICAge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgbmFtZTogXCLngrnlh7vmlLnlj5hcIixcbiAgICAgICAgbGlzdDogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNoaWxkaWQ6IFwiMS4xXCIsXG4gICAgICAgICAgICBjaGlsZG5hbWU6IFwi5a2Q6aG577yM54K55oiR5pS55Y+YXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNoaWxkaWQ6IFwiMS4yXCIsXG4gICAgICAgICAgICBjaGlsZG5hbWU6IFwi5a2Q6aG577yM54K55oiR5pS55Y+YXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNoaWxkaWQ6IFwiMS4zXCIsXG4gICAgICAgICAgICBjaGlsZG5hbWU6IFwi5a2Q6aG577yM54K55oiR5pS55Y+YXCJcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAyLFxuICAgICAgICBuYW1lOiBcIueCueWHu+aUueWPmFwiLFxuICAgICAgICBsaXN0OiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2hpbGRpZDogXCIyLjFcIixcbiAgICAgICAgICAgIGNoaWxkbmFtZTogXCLlrZDpobnvvIzngrnmiJHmlLnlj5hcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2hpbGRpZDogXCIyLjJcIixcbiAgICAgICAgICAgIGNoaWxkbmFtZTogXCLlrZDpobnvvIzngrnmiJHmlLnlj5hcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2hpbGRpZDogXCIyLjNcIixcbiAgICAgICAgICAgIGNoaWxkbmFtZTogXCLlrZDpobnvvIzngrnmiJHmlLnlj5hcIlxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDMsXG4gICAgICAgIG5hbWU6IFwi54K55Ye75pS55Y+YXCIsXG4gICAgICAgIGxpc3Q6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjaGlsZGlkOiBcIjMuMVwiLFxuICAgICAgICAgICAgY2hpbGRuYW1lOiBcIuWtkOmhue+8jOeCueaIkeaUueWPmFwiXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9O1xuXG4gIGNvbXB1dGVkID0ge1xuICAgIG5vdygpIHtcbiAgICAgIHJldHVybiArbmV3IERhdGUoKTtcbiAgICB9XG4gIH07XG5cbiAgbWV0aG9kcyA9IHtcbiAgICBwbHVzKCkge1xuICAgICAgdGhpcy5teW51bSsrO1xuICAgIH0sXG4gICAgdG9hc3QoKSB7XG4gICAgICBsZXQgcHJvbWlzZSA9IHRoaXMuJGludm9rZShcInRvYXN0XCIsIFwic2hvd1wiLCB7XG4gICAgICAgIHRpdGxlOiBcIuiHquWumuS5ieagh+mimFwiLFxuICAgICAgICBpbWc6XG4gICAgICAgICAgXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20va2lpbmxhbS93ZXRvYXN0L21hc3Rlci9pbWFnZXMvc3Rhci5wbmdcIlxuICAgICAgfSk7XG5cbiAgICAgIHByb21pc2UudGhlbihkID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0b2FzdCBkb25lXCIsIGQpO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICB0YXAoKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImRvIG5vdGluZyBmcm9tIFwiICsgdGhpcy4kbmFtZSk7XG4gICAgfSxcbiAgICBjb21tdW5pY2F0ZSgpIHtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuJG5hbWUgKyBcIiB0YXBcIik7XG5cbiAgICAgIHRoaXMuJGludm9rZShcImNvdW50ZXIyXCIsIFwibWludXNcIiwgNDUsIDYpO1xuICAgICAgdGhpcy4kaW52b2tlKFwiY291bnRlcjFcIiwgXCJwbHVzXCIsIDQ1LCA2KTtcblxuICAgICAgdGhpcy4kYnJvYWRjYXN0KFwiaW5kZXgtYnJvYWRjYXN0XCIsIDEsIDMsIDQpO1xuICAgIH0sXG4gICAgcmVxdWVzdCgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgIGxldCBpID0gMTA7XG4gICAgICBsZXQgbWFwID0gW1xuICAgICAgICBcIk1BPT1cIixcbiAgICAgICAgXCJNUW89XCIsXG4gICAgICAgIFwiTWc9PVwiLFxuICAgICAgICBcIk13PT1cIixcbiAgICAgICAgXCJOQT09XCIsXG4gICAgICAgIFwiTlE9PVwiLFxuICAgICAgICBcIk5nPT1cIixcbiAgICAgICAgXCJOdz09XCIsXG4gICAgICAgIFwiT0E9PVwiLFxuICAgICAgICBcIk9RPT1cIlxuICAgICAgXTtcbiAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICB1cmw6XG4gICAgICAgICAgICBcImh0dHBzOi8vd3d3Lm1hZGNvZGVyLmNuL3Rlc3RzL3NsZWVwLnBocD90aW1lPTEmdD1jc3MmYz1cIiArXG4gICAgICAgICAgICBtYXBbaV0gK1xuICAgICAgICAgICAgXCImaT1cIiArXG4gICAgICAgICAgICBpLFxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgIHNlbGYubmV0cnN0ICs9IGQuZGF0YSArIFwiLlwiO1xuICAgICAgICAgICAgc2VsZi4kYXBwbHkoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgY291bnRlckVtaXQoLi4uYXJncykge1xuICAgICAgbGV0ICRldmVudCA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXTtcbiAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICBgJHt0aGlzLiRuYW1lfSByZWNlaXZlICR7JGV2ZW50Lm5hbWV9IGZyb20gJHskZXZlbnQuc291cmNlLiRuYW1lfWBcbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG4gIGV2ZW50cyA9IHtcbiAgICBcImluZGV4LWVtaXRcIjogKC4uLmFyZ3MpID0+IHtcbiAgICAgIGxldCAkZXZlbnQgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV07XG4gICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgYCR7dGhpcy4kbmFtZX0gcmVjZWl2ZSAkeyRldmVudC5uYW1lfSBmcm9tICR7JGV2ZW50LnNvdXJjZS4kbmFtZX1gXG4gICAgICApO1xuICAgIH1cbiAgfTtcblxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIHRoaXMuJHBhcmVudC5nZXRVc2VySW5mbyhmdW5jdGlvbih1c2VySW5mbykge1xuICAgICAgaWYgKHVzZXJJbmZvKSB7XG4gICAgICAgIHNlbGYudXNlckluZm8gPSB1c2VySW5mbztcbiAgICAgIH1cbiAgICAgIHNlbGYubm9ybWFsVGl0bGUgPSBcIuagh+mimOW3suiiq+S/ruaUuVwiO1xuXG4gICAgICBzZWxmLnNldFRpbWVvdXRUaXRsZSA9IFwi5qCH6aKY5LiJ56eS5ZCO5Lya6KKr5L+u5pS5XCI7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2VsZi5zZXRUaW1lb3V0VGl0bGUgPSBcIuWIsOS4ieenkuS6hlwiO1xuICAgICAgICBzZWxmLiRhcHBseSgpO1xuICAgICAgfSwgMzAwMCk7XG5cbiAgICAgIHNlbGYuJGFwcGx5KCk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==