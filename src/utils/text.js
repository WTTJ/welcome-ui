export const truncate = (string, maxLength = 150, ellipsisCharacter = '…') => {
  if (string) {
    let ellipsis = string.length > maxLength ? ellipsisCharacter : ''
    return ellipsis ? `${string.substring(0, maxLength)}${ellipsis}` : string
  }
}

export const salaryToK = (salary, currency, formatNumber) => {
  if (salary && `${salary}`.length > 3) {
    return formatNumber(salary / 1000, {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 1
    }).replace(/(\d*?([\d\s,.]+)?\d+)/gm, `$1K`)
  }
  return formatNumber(salary, {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  })
}
