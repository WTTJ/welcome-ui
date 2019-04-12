function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  ", "\n\n  ", "\n\n  html {\n    font-size: ", ";\n  }\n\n  body {\n    font-family: ", ";\n    -webkit-font-smoothing: antialiased;\n  }\n\n  button, input, select, textarea {\n    font-family: inherit;\n  }\n\n  h1, h2, h3, h4, h5, h6 {\n    font-family: ", ";\n  }\n\n  h1, h2, h3{\n    line-height: 1.3;\n  }\n\n  h4, h5, h6, p, li{\n    line-height: 1.4;\n  }\n\n  ::selection {\n    background-color: ", ";\n    color: ", ";\n  }\n\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  @media (max-width: 1200px) {\n    html {\n      font-size: 14px;\n    }\n  }\n\n  @media (max-width: 1300px) and (max-height: 700px) {\n    html {\n      font-size: 14px;\n    }\n  }\n\n  @media (max-width: 600px) {\n    html {\n      font-size: 16px;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import { createGlobalStyle, css } from 'styled-components';
import reset from './reset';
import { fontFace } from './font';
import { color, fontSize, fontFamily } from './helpers';
var baseResponsiveStyles = css(_templateObject());
export var getBaseStyles = function getBaseStyles(theme) {
  return createGlobalStyle(_templateObject2(), reset, fontFace(theme), fontSize('html')({
    theme: theme
  }), [fontFamily('texts')({
    theme: theme
  }), 'sans-serif'].join(', '), [fontFamily('headings')({
    theme: theme
  }), fontFamily('texts')({
    theme: theme
  }), 'serif'].join(', '), color('seafoamblue'), color('white'), baseResponsiveStyles);
};
export default getBaseStyles;