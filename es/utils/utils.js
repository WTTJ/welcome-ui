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

function _templateObject() {
  var data = _taggedTemplateLiteral(["background-image: url('", "');"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import { css } from 'styled-components';
import { breakpoint, boxShadow, transition, rgba } from './helpers'; // Custom scrollbar mixin

export var scrollbar = function scrollbar(width, thumbColor, trackColor) {
  return "\n    &::-webkit-scrollbar {\n        width:  ".concat(width, ";\n        height: ").concat(width, ";\n    }\n\n    &::-webkit-scrollbar-thumb {\n        background: ").concat(thumbColor, ";\n        border-radius: 10px;\n    }\n\n    &::-webkit-scrollbar-track {\n        background: ").concat(trackColor, ";\n        border-radius: 10px;\n    }\n\n    & {\n      scrollbar-face-color: ").concat(thumbColor, ";\n      scrollbar-track-color: ").concat(trackColor, ";\n    }\n  ");
};
export var getBackgroundImage = function getBackgroundImage(image) {
  return image ? css(_templateObject(), image) : null;
};
export var media = {
  print: function print() {
    return css(_templateObject2(), css.apply(void 0, arguments));
  },
  mobile: function mobile() {
    return css(_templateObject3(), breakpoint('mobile'), css.apply(void 0, arguments));
  },
  tablet: function tablet() {
    return css(_templateObject4(), breakpoint('tablet'), css.apply(void 0, arguments));
  },
  smallscreen: function smallscreen() {
    return css(_templateObject5(), breakpoint('smallscreen'), css.apply(void 0, arguments));
  },
  mediumscreen: function mediumscreen() {
    return css(_templateObject6(), breakpoint('mediumscreen'), css.apply(void 0, arguments));
  },
  widescreen: function widescreen() {
    return css(_templateObject7(), breakpoint('widescreen'), css.apply(void 0, arguments));
  }
};
export var overflowEllipsis = css(_templateObject8());
export var backgroundCover = css(_templateObject9());
export var bannerMask = css(_templateObject10(), rgba('black', 0.5));
export var printHiddenStyles = css(_templateObject11(), media.print(_templateObject12()));
export var hoverTransformStyles = css(_templateObject13(), transition('md'), boxShadow('articleThumbHover'));