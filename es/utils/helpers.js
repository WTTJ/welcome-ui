function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      font-size: ", ";\n      font-weight: ", ";\n      text-transform: ", ";\n      letter-spacing: ", ";\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { css } from 'styled-components';
import get from 'lodash.get';
import concat from 'lodash.concat';
import theme from '../theme/core';
import hexToRGB from './hexToRGB';
var helpers = Object.keys(theme).reduce(function (acc, key) {
  return _objectSpread({}, acc, _defineProperty({}, key, function () {
    for (var _len = arguments.length, path = new Array(_len), _key = 0; _key < _len; _key++) {
      path[_key] = arguments[_key];
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

helpers.rgba = function () {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  return function (props) {
    var opacity = args[args.length - 1];
    var path = args.slice(0, -1);
    var color = get(props, ['theme', 'color'].concat(_toConsumableArray(path))) || args[0]; // Handle rgba('#COFFEE', 0.3)

    return "rgba(".concat(hexToRGB(color), ", ").concat(opacity, ")");
  };
};

helpers.centeredContainerWidth = function () {
  for (var _len3 = arguments.length, path = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    path[_key3] = arguments[_key3];
  }

  return function (props) {
    var basename = ['theme', 'centeredContainerWidth'];
    var pathname = props.width || path.length && [].concat(path) || 'lg';
    return get(props, concat(basename, pathname));
  };
};

helpers.textStyles = function (key) {
  return function (props) {
    var value = get(props, ['theme', 'text', key]);
    var size = value.size,
        weight = value.weight,
        transform = value.transform,
        spacing = value.spacing;
    return css(_templateObject(), size ? helpers.fontSize(size) : 'inherit', weight ? helpers.fontWeight(weight) : 'inherit', transform ? transform : null, spacing ? helpers.letterSpacing(spacing) : null);
  };
};

export var transition = helpers.transition;
export var textStyles = helpers.textStyles;
export var roundedButtonSize = helpers.roundedButtonSize;
export var rgba = helpers.rgba;
export var letterSpacing = helpers.letterSpacing;
export var radius = helpers.radius;
export var gutter = helpers.gutter;
export var color = helpers.color;
export var fontSize = helpers.fontSize;
export var fontFamily = helpers.fontFamily;
export var fontWeight = helpers.fontWeight;
export var breakpoint = helpers.breakpoint;
export var boxShadow = helpers.boxShadow;