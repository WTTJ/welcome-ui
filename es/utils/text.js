export var truncate = function truncate(string) {
  var maxLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 150;
  var ellipsisCharacter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '…';

  if (string) {
    var ellipsis = string.length > maxLength ? ellipsisCharacter : '';
    return ellipsis ? "".concat(string.substring(0, maxLength)).concat(ellipsis) : string;
  }
};
export var salaryToK = function salaryToK(salary, currency, formatNumber) {
  if (salary && "".concat(salary).length > 3) {
    return formatNumber(salary / 1000, {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 1
    }).replace(/(\d*?([\d\s,.]+)?\d+)/gm, "$1K");
  }

  return formatNumber(salary, {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });
};