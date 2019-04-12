function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var createUrl = function createUrl(url, extension) {
  return "url('".concat(url, ".").concat(extension, "') format('").concat(extension === 'ttf' ? 'truetype' : extension, "')");
};

var createSrc = function createSrc(font) {
  return font.extensions.map(function (extension) {
    return createUrl(font.url, extension);
  }).join(', ');
};

var getFontFace = function getFontFace(name, font) {
  return "\n    @font-face {\n      font-family: '".concat(name, "';\n      src: ").concat(createSrc(font), ";\n      ").concat(font.weight ? "font-weight: ".concat(font.weight, ";") : '', "\n      ").concat(font.style ? "font-style: ".concat(font.style, ";") : '', "\n    }\n  ");
};

export var fontFace = function fontFace(theme) {
  return Object.entries(theme.fonts).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        name = _ref2[0],
        variations = _ref2[1];

    return variations.map(function (font) {
      return getFontFace(name, font);
    }).join('');
  }).join('');
};