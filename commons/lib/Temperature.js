"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Reading2 = _interopRequireDefault(require("./Reading"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/** Class representing a Temperature reading. */
var Temperature =
/*#__PURE__*/
function (_Reading) {
  _inherits(Temperature, _Reading);

  /**
   * @param {Date} readTime
   * @param {number} temperatureC 
   */
  function Temperature(readTime, temperatureC) {
    var _this;

    _classCallCheck(this, Temperature);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Temperature).call(this, readTime));
    _this.temperatureC = temperatureC;
    return _this;
  }

  return Temperature;
}(_Reading2.default);

var _default = Temperature;
exports.default = _default;
//# sourceMappingURL=Temperature.js.map