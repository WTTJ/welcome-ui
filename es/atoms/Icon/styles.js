function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  g,\n  path {\n    fill: inherit;\n    stroke: none;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  g,\n  path {\n    stroke: inherit;\n    fill: none;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled, { css } from 'styled-components';
var iconSvgStrokedStyles = css(_templateObject());
var iconSvgFilledStyles = css(_templateObject2());
export var IconSvg = styled.svg(_templateObject3(), function (_ref) {
  var stroked = _ref.stroked;
  return stroked ? iconSvgStrokedStyles : iconSvgFilledStyles;
});