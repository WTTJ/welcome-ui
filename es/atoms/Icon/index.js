function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { PureComponent } from 'react';
import { string, oneOf } from 'prop-types';
import { IconSvg } from './styles';
import icons from './icons';
export var Icon =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Icon, _PureComponent);

  function Icon(props) {
    var _this;

    _classCallCheck(this, Icon);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Icon).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "setIconSize", function () {
      var size = _this.props.size;

      switch (size) {
        case 'xl':
          _this.w = 48;
          _this.h = 48;
          break;

        case 'lg':
          _this.w = 32;
          _this.h = 32;
          break;

        case 'sm':
          _this.w = 16;
          _this.h = 16;
          break;

        case 'md':
        default:
          _this.w = 24;
          _this.h = 24;
      }
    });

    var icon = _this.props.icon;
    var iconConfig = icons[icon.toLowerCase()];

    if (!iconConfig) {
      return _possibleConstructorReturn(_this);
    }

    _this.setIconSize();

    _this.iconConfig = iconConfig;
    _this.viewBox = "0 0 ".concat(iconConfig.width, " ").concat(iconConfig.height);

    if (iconConfig.viewBox) {
      _this.viewBox = iconConfig.viewBox;
    }

    return _this;
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      if (!this.iconConfig) return null;
      return React.createElement(IconSvg, {
        viewBox: this.viewBox,
        width: this.w,
        height: this.h,
        stroked: this.iconConfig.stroked,
        dangerouslySetInnerHTML: {
          __html: this.iconConfig.block
        }
      });
    }
  }]);

  return Icon;
}(PureComponent);
Icon.propTypes = {
  /** Icon name */
  icon: string,

  /** Icon size` */
  size: oneOf(['sm', 'md', 'lg', 'xl']) // Specifies the default values for props:

};
Icon.defaultProps = {
  size: 'md'
};
export default Icon;