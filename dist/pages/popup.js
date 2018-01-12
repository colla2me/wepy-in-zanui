"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Popup = function (_wepy$page) {
  _inherits(Popup, _wepy$page);

  function Popup() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Popup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Popup.__proto__ || Object.getPrototypeOf(Popup)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      showPopup: false,
      showLeftPopup: false,
      showRightPopup: false,
      showTopPopup: false,
      showBottomPopup: false
    }, _this.methods = {
      togglePopup: function togglePopup() {
        this.showPopup = !this.showPopup;
      },
      toggleLeftPopup: function toggleLeftPopup() {
        this.showLeftPopup = !this.showLeftPopup;
      },
      toggleRightPopup: function toggleRightPopup() {
        this.showRightPopup = !this.showRightPopup;
      },
      toggleBottomPopup: function toggleBottomPopup() {
        this.showBottomPopup = !this.showBottomPopup;
      },
      toggleTopPopup: function toggleTopPopup() {
        this.showTopPopup = !this.showTopPopup;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Popup;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Popup , 'pages/popup'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcHVwLmpzIl0sIm5hbWVzIjpbIlBvcHVwIiwiZGF0YSIsInNob3dQb3B1cCIsInNob3dMZWZ0UG9wdXAiLCJzaG93UmlnaHRQb3B1cCIsInNob3dUb3BQb3B1cCIsInNob3dCb3R0b21Qb3B1cCIsIm1ldGhvZHMiLCJ0b2dnbGVQb3B1cCIsInRvZ2dsZUxlZnRQb3B1cCIsInRvZ2dsZVJpZ2h0UG9wdXAiLCJ0b2dnbGVCb3R0b21Qb3B1cCIsInRvZ2dsZVRvcFBvcHVwIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsSSxHQUFPO0FBQ0xDLGlCQUFXLEtBRE47QUFFTEMscUJBQWUsS0FGVjtBQUdMQyxzQkFBZ0IsS0FIWDtBQUlMQyxvQkFBYyxLQUpUO0FBS0xDLHVCQUFpQjtBQUxaLEssUUFRUEMsTyxHQUFVO0FBQ1JDLGlCQURRLHlCQUNNO0FBQ1osYUFBS04sU0FBTCxHQUFpQixDQUFDLEtBQUtBLFNBQXZCO0FBQ0QsT0FITztBQUtSTyxxQkFMUSw2QkFLVTtBQUNoQixhQUFLTixhQUFMLEdBQXFCLENBQUMsS0FBS0EsYUFBM0I7QUFDRCxPQVBPO0FBU1JPLHNCQVRRLDhCQVNXO0FBQ2pCLGFBQUtOLGNBQUwsR0FBc0IsQ0FBQyxLQUFLQSxjQUE1QjtBQUNELE9BWE87QUFhUk8sdUJBYlEsK0JBYVk7QUFDbEIsYUFBS0wsZUFBTCxHQUF1QixDQUFDLEtBQUtBLGVBQTdCO0FBQ0QsT0FmTztBQWlCUk0sb0JBakJRLDRCQWlCUztBQUNmLGFBQUtQLFlBQUwsR0FBb0IsQ0FBQyxLQUFLQSxZQUExQjtBQUNEO0FBbkJPLEs7Ozs7RUFUdUIsZUFBS1EsSTs7a0JBQW5CYixLIiwiZmlsZSI6InBvcHVwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tIFwid2VweVwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXAgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBkYXRhID0ge1xuICAgIHNob3dQb3B1cDogZmFsc2UsXG4gICAgc2hvd0xlZnRQb3B1cDogZmFsc2UsXG4gICAgc2hvd1JpZ2h0UG9wdXA6IGZhbHNlLFxuICAgIHNob3dUb3BQb3B1cDogZmFsc2UsXG4gICAgc2hvd0JvdHRvbVBvcHVwOiBmYWxzZVxuICB9O1xuXG4gIG1ldGhvZHMgPSB7XG4gICAgdG9nZ2xlUG9wdXAoKSB7XG4gICAgICB0aGlzLnNob3dQb3B1cCA9ICF0aGlzLnNob3dQb3B1cDtcbiAgICB9LFxuXG4gICAgdG9nZ2xlTGVmdFBvcHVwKCkge1xuICAgICAgdGhpcy5zaG93TGVmdFBvcHVwID0gIXRoaXMuc2hvd0xlZnRQb3B1cDtcbiAgICB9LFxuXG4gICAgdG9nZ2xlUmlnaHRQb3B1cCgpIHtcbiAgICAgIHRoaXMuc2hvd1JpZ2h0UG9wdXAgPSAhdGhpcy5zaG93UmlnaHRQb3B1cDtcbiAgICB9LFxuXG4gICAgdG9nZ2xlQm90dG9tUG9wdXAoKSB7XG4gICAgICB0aGlzLnNob3dCb3R0b21Qb3B1cCA9ICF0aGlzLnNob3dCb3R0b21Qb3B1cDtcbiAgICB9LFxuXG4gICAgdG9nZ2xlVG9wUG9wdXAoKSB7XG4gICAgICB0aGlzLnNob3dUb3BQb3B1cCA9ICF0aGlzLnNob3dUb3BQb3B1cDtcbiAgICB9XG4gIH07XG59XG4iXX0=