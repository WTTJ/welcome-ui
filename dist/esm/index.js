import React, { PureComponent } from 'react';
import { oneOf, string } from 'prop-types';
import styled, { css, keyframes, createGlobalStyle } from 'styled-components';
import get from 'lodash.get';
import concat from 'lodash.concat';
import merge from 'lodash.merge';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var getHexValueAtLocation = function getHexValueAtLocation(value, start, count) {
  return parseInt(value.substring(start, count), 16);
};

var isValidHex = function isValidHex(hex) {
  return /(^[0-9a-fA-F]{6}$)|(^[0-9a-fA-F]{3}$)/.test(hex);
};

var hexToRGB = function hexToRGB(hex) {
  if (!hex) {
    return;
  }

  hex = hex.replace('#', '');

  if (!isValidHex(hex)) {
    return;
  }

  if (hex.length === 3) {
    hex = "".concat(hex[0]).concat(hex[0]).concat(hex[1]).concat(hex[1]).concat(hex[2]).concat(hex[2]);
  }

  var hexToR = function hexToR(hex) {
    return getHexValueAtLocation(hex, 0, 2);
  };

  var hexToG = function hexToG(hex) {
    return getHexValueAtLocation(hex, 2, 4);
  };

  var hexToB = function hexToB(hex) {
    return getHexValueAtLocation(hex, 4, 6);
  };

  return "".concat(hexToR(hex), ", ").concat(hexToG(hex), ", ").concat(hexToB(hex));
};

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      font-size: ", ";\n      font-weight: ", ";\n      text-transform: ", ";\n      letter-spacing: ", ";\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var helpers = {};

helpers.rgba = function () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return function (props) {
    var opacity = args[args.length - 1];
    var path = args.slice(0, -1);
    var color = get(props, ['theme', 'color'].concat(_toConsumableArray(path))) || args[0]; // Handle rgba('#COFFEE', 0.3)

    return "rgba(".concat(hexToRGB(color), ", ").concat(opacity, ")");
  };
};

helpers.centeredContainerWidth = function () {
  for (var _len2 = arguments.length, path = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    path[_key2] = arguments[_key2];
  }

  return function (props) {
    var basename = ['theme', 'centeredContainerWidth'];
    var pathname = props.width || path.length && [].concat(path) || 'lg';
    return get(props, concat(basename, pathname));
  };
};

helpers.textStyles = function (key) {
  return function (props) {
    var _props$theme = props.theme,
        fontSize = _props$theme.fontSize,
        fontWeight = _props$theme.fontWeight,
        letterSpacing = _props$theme.letterSpacing;
    var defaultValues = {
      size: 'inherit',
      weight: 'inherit',
      transform: null,
      spacing: null
    };
    var value = get(props, ['theme', 'text', key]);

    if (value) {
      var size = value.size,
          weight = value.weight,
          transform = value.transform,
          spacing = value.spacing;
      defaultValues = _objectSpread({}, defaultValues, {
        size: fontSize[size],
        weight: fontWeight[weight],
        transform: transform,
        spacing: letterSpacing[spacing]
      });
    }

    return css(_templateObject(), defaultValues.size, defaultValues.weight, defaultValues.transform, defaultValues.spacing);
  };
};

var createHelpers = function createHelpers(theme) {
  var defaultHelpers = Object.keys(theme).reduce(function (acc, key) {
    return _objectSpread({}, acc, _defineProperty({}, key, function () {
      for (var _len3 = arguments.length, path = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        path[_key3] = arguments[_key3];
      }

      return function (props) {
        if (!props.theme) {
          props = _objectSpread({}, props, {
            theme: theme
          });
        }

        var value = get(props, ['theme', key].concat(path));

        if (process.env.NODE_ENV === 'development' && value === undefined) {
          console.warn("".concat(key, "[").concat([].concat(path), "] is not available in this theme"));
        }

        return value;
      };
    }));
  }, {});
  return _objectSpread({}, defaultHelpers, helpers);
};
var rgba = helpers.rgba;

var DEFAULT_FONT_SIZE = 50;
var DEFAULT_FONT_FAMILY = 'Arial';
var HEADING_FONT_FAMILY = 'Times';

var coreTheme = function coreTheme() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _options$defaultFontS = options.defaultFontSize,
      defaultFontSize = _options$defaultFontS === void 0 ? DEFAULT_FONT_SIZE : _options$defaultFontS,
      _options$defaultFontF = options.defaultFontFamily,
      defaultFontFamily = _options$defaultFontF === void 0 ? DEFAULT_FONT_FAMILY : _options$defaultFontF,
      _options$headingFontF = options.headingFontFamily,
      headingFontFamily = _options$headingFontF === void 0 ? HEADING_FONT_FAMILY : _options$headingFontF,
      rest = _objectWithoutProperties(options, ["defaultFontSize", "defaultFontFamily", "headingFontFamily"]);

  var toEm = function toEm(px) {
    return "".concat(px / defaultFontSize, "em");
  };

  var toRem = function toRem(px) {
    return "".concat(px / defaultFontSize, "rem");
  };

  var getFontSizes = function getFontSizes(unit) {
    var convert = unit === 'em' ? toEm : toRem;
    return {
      html: "".concat(defaultFontSize, "px"),
      body: convert(16),
      xs: convert(11),
      sm: convert(13),
      "default": convert(14),
      md: convert(16),
      mdlg: convert(18),
      lg: convert(19),
      xl: convert(22),
      xxl: convert(32),
      xxxl: convert(50)
    };
  };

  var theme = {};
  theme.colors = {
    primary: '#333333',
    secondary: '#999999',
    success: '#00FFFF',
    danger: '#FF0000',
    warning: '#FFFF00',
    info: '#999999',
    light: '#EEEEEE',
    dark: '#222222',
    white: '#FFFFFF',
    text: {
      primary: '#333333',
      secondary: '#999999',
      success: '#00FFFF',
      danger: '#FF0000',
      warning: '#FFFF00',
      info: '#999999',
      light: '#EEEEEE',
      dark: '#222222',
      white: '#FFFFFF'
    },
    bg: {
      primary: '#333333',
      secondary: '#999999',
      success: '#00FFFF',
      danger: '#FF0000',
      warning: '#FFFF00',
      info: '#999999',
      light: '#EEEEEE',
      dark: '#222222',
      white: '#FFFFFF'
    }
  };
  theme.palette = {};
  theme.text = {
    primary: {
      size: 'md',
      weight: 'regular'
    },
    secondary: {
      size: 'xs',
      weight: 'medium',
      transform: 'none'
    },
    label: {
      size: 'md',
      weight: 'bold'
    },
    button: {
      size: 'xs',
      weight: 'bold',
      transform: 'uppercase',
      spacing: 'md'
    },
    button_small: {
      size: 'xs',
      weight: 'regular',
      transform: 'uppercase',
      spacing: 'md'
    }
  };
  theme.borderWidth = {
    input: '1px'
  };
  theme.fontSize = getFontSizes('rem');
  theme.fontSizeEm = getFontSizes('em');
  theme.letterSpacing = {
    sm: '0.5px',
    md: '1px',
    lg: '2px'
  };
  theme.padding = {
    xxs: toRem(8),
    xs: toRem(10),
    sm: toRem(12),
    md: toRem(15)
  };
  theme.gutter = {
    xxxs: toRem(1.6),
    xxs: toRem(4.8),
    xs: toRem(10),
    sm: toRem(12),
    md: toRem(15),
    lg: toRem(24),
    mdx2: toRem(32),
    xl: toRem(50),
    xxl: toRem(64),
    xxxl: toRem(110)
  };
  theme.fontFamily = {
    texts: defaultFontFamily,
    headings: headingFontFamily,
    icons: 'Material-design-iconic-font'
  };
  theme.fontWeight = {
    regular: '400',
    medium: '500',
    bold: '600',
    black: '700'
  };
  theme.transition = {
    sm: 'all .2s cubic-bezier(0.41, 0.094, 0.54, 0.07)',
    md: 'all .3s cubic-bezier(0.41, 0.094, 0.54, 0.07)',
    lg: 'all 1s cubic-bezier(0.41, 0.094, 0.54, 0.07)'
  };
  theme.centeredContainerWidth = {
    sm: toRem(640),
    md: toRem(896),
    mdlg: toRem(1029),
    lg: toRem(1248),
    movies: {
      md: toRem(1024)
    }
  };
  theme.ratio = {
    '720p': 1280 / 720
  };
  theme.shareButtonSize = {
    sm: 16,
    md: 32,
    lg: 46
  };
  theme.roundedButtonSize = {
    xs: toRem(19),
    sm: toRem(26),
    md: toRem(35),
    lg: toRem(70)
  };
  theme.buttonIconWidth = toRem(46);
  theme.modalSize = {
    xs: toRem(480),
    sm: toRem(640),
    md: toRem(800),
    lg: toRem(960)
  };
  theme.radius = {
    sm: '3px',
    md: '6px',
    lg: '10px'
  };
  theme.boxShadow = {
    xs: '0 1px 2px rgba(0,0,0,.1)',
    sm: '0 2px 2px rgba(0,0,0,.1)',
    md: '0 3px 10px rgba(0,0,0,.08)',
    lg: '0 4px 15px rgba(0,0,0,.2)',
    xl: '0 8px 20px rgba(0,0,0,.2)',
    xxl: '0 20px 50px rgba(0,0,0,.7)'
  };
  theme.breakpoint = {
    widescreen: '1650px',
    mediumscreen: '1300px',
    smallscreen: '1100px',
    tablet: '900px',
    mobile: '670px'
  };
  theme.checkboxSize = {
    desktop: toRem(16),
    mobile: toRem(22)
  };
  theme.fonts = {};
  return merge(theme, rest);
};

var theme = coreTheme();
var createTheme = function createTheme(options) {
  theme = coreTheme(options);
  return theme;
};
var theme$1 = theme;

var helpers$1 = createHelpers(theme$1);
var helpers$2 = _objectSpread({}, helpers$1);

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  transition: ", ";\n\n  &:hover {\n    transform: translate3d(0, -5px, 0);\n    box-shadow: ", ";\n  }\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n    display: none;\n  "]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n\n  &::after {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    background-color: ", ";\n    content: ' ';\n  }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    @media (max-width: ", ") {\n      ", ";\n    }\n  "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    @media (max-width: ", ") {\n      ", ";\n    }\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    @media (max-width: ", ") {\n      ", ";\n    }\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    @media (max-width: ", ") {\n      ", ";\n    }\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    @media (max-width: ", ") {\n      ", ";\n    }\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    @media print {\n      ", ";\n    }\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}
var media = {
  print: function print() {
    return css(_templateObject2(), css.apply(void 0, arguments));
  },
  mobile: function mobile() {
    return css(_templateObject3(), function (props) {
      return props.theme.breakpoint.mobile;
    }, css.apply(void 0, arguments));
  },
  tablet: function tablet() {
    return css(_templateObject4(), function (props) {
      return props.theme.breakpoint.tablet;
    }, css.apply(void 0, arguments));
  },
  smallscreen: function smallscreen() {
    return css(_templateObject5(), function (props) {
      return props.theme.breakpoint.smallscreen;
    }, css.apply(void 0, arguments));
  },
  mediumscreen: function mediumscreen() {
    return css(_templateObject6(), function (props) {
      return props.theme.breakpoint.mediumscreen;
    }, css.apply(void 0, arguments));
  },
  widescreen: function widescreen() {
    return css(_templateObject7(), function (props) {
      return props.theme.breakpoint.widescreen;
    }, css.apply(void 0, arguments));
  }
};
var overflowEllipsis = css(_templateObject8());
var backgroundCover = css(_templateObject9());
var bannerMask = css(_templateObject10(), rgba('black', 0.5));
var printHiddenStyles = css(_templateObject11(), media.print(_templateObject12()));
var hoverTransformStyles = css(_templateObject13(), function (props) {
  return props.theme.transition.md;
}, function (props) {
  return props.theme.boxShadow.articleThumbHover;
});

function _templateObject13$1() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n"]);

  _templateObject13$1 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12$1() {
  var data = _taggedTemplateLiteral(["\n      transform: translateY(2px);\n    "]);

  _templateObject12$1 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11$1() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  align-self: ", ";\n  justify-content: ", ";\n  width: auto;\n  text-align: ", ";\n  ", ";\n  white-space: nowrap;\n  cursor: pointer;\n  outline: none;\n  border-width: 1px;\n  border-style: solid;\n  border-radius: ", ";\n  box-shadow: ", ";\n  appearance: none;\n  overflow: hidden;\n  transition: ", ";\n  line-height: 1rem;\n\n  ", ";\n\n  &:active {\n    transform: translateY(2px);\n    box-shadow: 0 0 4px ", ";\n  }\n\n  &::before {\n    background: ", ";\n  }\n\n  &:hover {\n    ", "\n  }\n\n  &[disabled] {\n    color: ", ";\n    background-color: ", ";\n    pointer-events: none;\n  }\n\n  ", ";\n  ", ";\n  ", ";\n\n  ", ";\n"]);

  _templateObject11$1 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10$1() {
  var data = _taggedTemplateLiteral(["\n  overflow: visible;\n\n  &::before {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    content: ' ';\n    background: inherit;\n    opacity: 0.1;\n    border-radius: 50%;\n    transform-origin: center;\n    // animation: ", " 1.5s ease infinite alternate;\n  }\n"]);

  _templateObject10$1 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9$1() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  &:not(:last-child) {\n    margin-bottom: ", ";\n  }\n"]);

  _templateObject9$1 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8$1() {
  var data = _taggedTemplateLiteral(["\n    padding: ", " ", ";\n  "]);

  _templateObject8$1 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7$1() {
  var data = _taggedTemplateLiteral(["\n      padding: ", ";\n    "]);

  _templateObject7$1 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6$1() {
  var data = _taggedTemplateLiteral(["\n    padding: ", " ", ";\n\n    ", ";\n  "]);

  _templateObject6$1 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$1() {
  var data = _taggedTemplateLiteral(["\n    padding: ", " ", ";\n  "]);

  _templateObject5$1 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$1() {
  var data = _taggedTemplateLiteral(["\n    color: ", ";\n    background: ", ";\n    border-color: ", ";\n\n    &::before {\n      background: ", ";\n    }\n\n    svg path {\n      fill: ", ";\n    }\n  "]);

  _templateObject4$1 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$1() {
  var data = _taggedTemplateLiteral(["\n  &::before {\n    content: ' ';\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: ", ";\n    transform: scaleX(0);\n    transform-origin: 0;\n    transition: ", ";\n  }\n\n  &:hover::before {\n    transform: scaleX(1);\n  }\n"]);

  _templateObject3$1 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$1() {
  var data = _taggedTemplateLiteral(["\n  ", " 0.2s linear both;\n"]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n  from {\n    transform: scale(1);\n    opacity: .1;\n  }\n  to {\n    transform: scale(1.8);\n    opacity: .2;\n  }\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var boxShadow = helpers$2.boxShadow,
    colors = helpers$2.colors,
    padding = helpers$2.padding,
    gutter = helpers$2.gutter,
    radius = helpers$2.radius,
    rgba$1 = helpers$2.rgba,
    textStyles = helpers$2.textStyles,
    transition = helpers$2.transition;
var pulsing = keyframes(_templateObject$1());
var pulsingRule = css(_templateObject2$1(), pulsing);
var slidingBackgroundStyles = css(_templateObject3$1(), rgba$1('white', 0.15), transition('md'));

var getVariant = function getVariant(foreground, background, border) {
  return css(_templateObject4$1(), colors('text', foreground), colors('bg', background), colors('bg', border), rgba$1(background, 0.05), colors(foreground));
};

var variants = {
  primary: getVariant('white', 'primary', 'primary'),
  secondary: getVariant('secondary', 'white', 'secondary'),
  tertiary: getVariant('white', 'secondary', 'secondary'),
  disabled: getVariant('dark', 'light', 'light'),
  'primary-warning': getVariant('white', 'warning', 'warning'),
  'secondary-warning': getVariant('warning', 'white', 'warning'),
  'primary-danger': getVariant('white', 'danger', 'danger'),
  'secondary-danger': getVariant('danger', 'white', 'danger')
};

function getButtonVariant(variant) {
  return variants[variant] || variants['primary'];
}

var sizes = {
  sm: css(_templateObject5$1(), padding('xxs'), padding('xs')),
  md: css(_templateObject6$1(), padding('xs'), padding('sm'), media.mobile(_templateObject7$1(), padding('md'))),
  lg: css(_templateObject8$1(), padding('sm'), padding('md'))
};

function getButtonSize(size) {
  return sizes[size] || sizes['md'];
}

var fullWidthStyles = css(_templateObject9$1(), gutter('lg'));
var pulsingStyles = css(_templateObject10$1(), pulsingRule);
var buttonStyles = css(_templateObject11$1(), function (_ref) {
  var alignself = _ref.alignself;
  return alignself || null;
}, function (_ref2) {
  var align = _ref2.align;
  return align || 'center';
}, function (_ref3) {
  var align = _ref3.align;
  return align || 'center';
}, textStyles('button'), function (props) {
  return props.radius || radius('md');
}, function (props) {
  return props.shadow || boxShadow('buttons');
}, transition('sm'), function (props) {
  return props.effect ? slidingBackgroundStyles : null;
}, rgba$1('black', 0.2), rgba$1('white', 0.05), media.mobile(_templateObject12$1()), colors('white'), colors('light'), function (props) {
  return getButtonSize(props.size, props.rounded);
}, function (props) {
  return getButtonVariant(props.variant);
}, function (props) {
  return props.span === 'full' ? fullWidthStyles : null;
}, function (props) {
  return props.styles;
});
var Button = styled.button(_templateObject13$1(), buttonStyles);

var Button$1 =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Button$1, _PureComponent);

  function Button$1() {
    _classCallCheck(this, Button$1);

    return _possibleConstructorReturn(this, _getPrototypeOf(Button$1).apply(this, arguments));
  }

  _createClass(Button$1, [{
    key: "render",
    value: function render() {
      return React.createElement(Button, this.props, this.props.children);
    }
  }]);

  return Button$1;
}(PureComponent);
Button$1.propTypes = {
  /** To set the button size */
  variant: oneOf(['primary', 'secondary', 'tertiary', 'disabled', 'primary-warning', 'secondary-warning', 'primary-danger', 'secondary-danger']),

  /** To set the button size */
  size: oneOf(['auto', 'sm', 'md', 'lg']),

  /** To set the button width */
  span: oneOf(['full', 'half']),

  /** To set a rounded button */
  radius: string // Specifies the default values for props:

};
Button$1.defaultProps = {
  variant: 'primary',
  size: 'auto',
  span: 'auto'
};

function _templateObject$2() {
  var data = _taggedTemplateLiteral(["\n  html,\n  body,\n  div,\n  span,\n  applet,\n  object,\n  iframe,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  p,\n  blockquote,\n  pre,\n  a,\n  abbr,\n  acronym,\n  address,\n  big,\n  cite,\n  code,\n  del,\n  dfn,\n  em,\n  img,\n  ins,\n  kbd,\n  q,\n  s,\n  samp,\n  small,\n  strike,\n  strong,\n  sub,\n  sup,\n  tt,\n  var,\n  b,\n  u,\n  i,\n  center,\n  dl,\n  dt,\n  dd,\n  ol,\n  ul,\n  li,\n  fieldset,\n  form,\n  label,\n  legend,\n  table,\n  caption,\n  tbody,\n  tfoot,\n  thead,\n  tr,\n  th,\n  td,\n  article,\n  aside,\n  canvas,\n  details,\n  embed,\n  figure,\n  figcaption,\n  footer,\n  header,\n  hgroup,\n  menu,\n  nav,\n  output,\n  ruby,\n  section,\n  summary,\n  time,\n  mark,\n  audio,\n  video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n  }\n  article,\n  aside,\n  details,\n  figcaption,\n  figure,\n  footer,\n  header,\n  hgroup,\n  menu,\n  nav,\n  section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n  }\n  ol,\n  ul {\n    list-style: none;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: '';\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    text-decoration: none;\n  }\n  img {\n    overflow: hidden;\n  }\n  input {\n    appearance: none;\n    &::-webkit-search-cancel-button {\n      display: none;\n    }\n  }\n  :focus {\n    outline: none;\n  }\n  *,\n  *::after,\n  *::before {\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  html {\n    height: 100%;\n  }\n  body {\n    min-height: 100%;\n    padding-top: 1px;\n    margin-top: -1px;\n  }\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var reset = css(_templateObject$2());

var createUrl = function createUrl(url, extension) {
  return "url('".concat(url, ".").concat(extension, "') format('").concat(extension === 'ttf' ? 'truetype' : extension, "')");
};

var createSrc = function createSrc(font) {
  return font.extensions.map(function (extension) {
    return createUrl(font.url, extension);
  }).join(', ');
};

var getFontFace = function getFontFace(name, font) {
  return "\n    @font-face {\n      font-family: '".concat(name, "';\n      src: ").concat(createSrc(font), ";\n      ").concat(font.weight ? "font-weight: ".concat(font.weight, ";") : '', "\n      ").concat(font.style ? "font-style: ".concat(font.style, ";") : '', "\n      font-display: fallback;\n    }\n  ");
};

var fontFace = function fontFace(theme) {
  return Object.entries(theme.fonts).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        name = _ref2[0],
        variations = _ref2[1];

    return variations.map(function (font) {
      return getFontFace(name, font);
    }).join('');
  }).join('');
};

function _templateObject2$2() {
  var data = _taggedTemplateLiteral(["\n  ", "\n\n  ", "\n\n  html {\n    font-size: ", ";\n  }\n\n  body, button, input, select, textarea {\n    font-family: ", ";\n    -webkit-font-smoothing: antialiased;\n  }\n\n  h1, h2, h3, h4, h5, h6 {\n    font-family: ", ";\n  }\n\n  h1, h2, h3{\n    line-height: 1.3;\n  }\n\n  h4, h5, h6, p, li{\n    line-height: 1.4;\n  }\n\n  ::selection {\n    background-color: ", ";\n    color: ", ";\n  }\n\n  ", "\n"]);

  _templateObject2$2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$3() {
  var data = _taggedTemplateLiteral(["\n  @media (max-width: 1200px) {\n    html {\n      font-size: 14px;\n    }\n  }\n\n  @media (max-width: 1300px) and (max-height: 700px) {\n    html {\n      font-size: 14px;\n    }\n  }\n\n  @media (max-width: 600px) {\n    html {\n      font-size: 16px;\n    }\n  }\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}
var baseResponsiveStyles = css(_templateObject$3());
var getBaseStyles = function getBaseStyles(theme) {
  return createGlobalStyle(_templateObject2$2(), reset, fontFace(theme), theme.fontSize.html, [theme.fontFamily.texts, 'sans-serif'].join(', '), [theme.fontFamily.headings, theme.fontFamily.texts, 'serif'].join(', '), theme.colors.primary, theme.colors.white, baseResponsiveStyles);
};

var palette = {
  richblack: '#050506',
  //#050506
  smokyblack: '#0B0B0D',
  //#0B0B0D
  licorice: '#101013',
  //#101013
  eerieblack: '#16161A',
  //#16161A
  moodyblack: '#1B1C20',
  //#1B1C20
  raisinblack: '#212227',
  //#212227
  charcoal: '#26272E',
  //#26272E
  gunmetal: '#2C2D34',
  //#2C2D34
  metal: '#31333B',
  //#31333B
  onyx: '#373942',
  //#373942
  darkliver: '#4B4D55',
  //#4B4D55
  granite: '#5F6067',
  //#5F6067
  battleship: '#73747B',
  //#73747B
  steel: '#87888D',
  //#87888D
  silverchalice: '#AFAFB3',
  //#AFAFB3
  silver: '#C3C3C6',
  //#C3C3C6
  timberwolf: '#D7D7D9',
  //#D7D7D9
  isabelline: '#EEEEEE',
  //#EEEEEE
  snow: '#F9F9F9',
  //#F9F9F9
  white: '#FFFFFF',
  //#FFFFFF
  iceberg: '#71A6DE',
  //#71A6DE
  lightcyan: '#E1F0FF',
  //#E1F0FF
  pastelorange: '#FFAF51',
  //#FFAF51
  lemonchiffon: '#FFF2E3',
  //#FFF2E3
  seafoamblue: '#00C29A',
  //#00C29A
  carribeangreen: '#66C8AB',
  //#66C8AB
  pastelmint: '#E3F8F4',
  //#E3F8F4
  alabamacrimson: '#F35454',
  //#F35454
  mistryrose: '#FEE6E6',
  //#FEE6E6
  linkedin: '#0077B5' // #0077B5

};
var welcomeTheme = {
  colors: {
    primary: palette.seafoamblue,
    secondary: palette.cadet,
    danger: palette.alabamacrimson,
    success: palette.seafoamblue,
    warning: palette.pastelorange,
    info: palette.carribeangreen,
    light: palette.isabelline,
    dark: palette.charcoal,
    white: palette.white,
    text: {
      primary: palette.seafoamblue,
      secondary: palette.cadet,
      danger: palette.alabamacrimson,
      success: palette.seafoamblue,
      warning: palette.pastelorange,
      info: palette.carribeangreen,
      light: palette.isabelline,
      dark: palette.charcoal,
      white: palette.white
    },
    bg: {
      primary: palette.seafoamblue,
      secondary: palette.cadet,
      danger: palette.alabamacrimson,
      success: palette.seafoamblue,
      warning: palette.pastelorange,
      info: palette.carribeangreen,
      light: palette.isabelline,
      dark: palette.charcoal,
      white: palette.white
    }
  },
  palette: palette,
  defaultFontSize: 16,
  defaultFontFamily: 'welcomeweb',
  headingFontFamily: 'welcomeweb',
  fonts: {
    welcomeweb: [{
      url: 'https://cdn.welcometothejungle.co/common/assets/fonts/welcomeweb-regular',
      weight: '400',
      extensions: ['woff2', 'woff', 'ttf']
    }, {
      url: 'https://cdn.welcometothejungle.co/common/assets/fonts/welcomeweb-medium',
      weight: '500',
      extensions: ['woff2', 'woff', 'ttf']
    }, {
      url: 'https://cdn.welcometothejungle.co/common/assets/fonts/welcomeweb-bold',
      weight: '600',
      extensions: ['woff2', 'woff', 'ttf']
    }, {
      url: 'https://cdn.welcometothejungle.co/common/assets/fonts/welcomeweb-black',
      weight: '700',
      extensions: ['woff2', 'woff', 'ttf']
    }, {
      url: 'https://cdn.welcometothejungle.co/common/assets/fonts/welcomeweb-regularitalic',
      weight: '400',
      style: 'italic',
      extensions: ['woff2', 'woff', 'ttf']
    }, {
      url: 'https://cdn.welcometothejungle.co/common/assets/fonts/welcomeweb-mediumitalic',
      weight: '500',
      style: 'italic',
      extensions: ['woff2', 'woff', 'ttf']
    }, {
      url: 'https://cdn.welcometothejungle.co/common/assets/fonts/welcomeweb-bolditalic',
      weight: '600',
      style: 'italic',
      extensions: ['woff2', 'woff', 'ttf']
    }, {
      url: 'https://cdn.welcometothejungle.co/common/assets/fonts/welcomeweb-blackitalic',
      weight: '700',
      style: 'italic',
      extensions: ['woff2', 'woff', 'ttf']
    }]
  }
};

export { Button$1 as Button, createHelpers, createTheme, getBaseStyles, welcomeTheme };
