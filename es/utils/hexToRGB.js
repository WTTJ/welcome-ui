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

export default hexToRGB;