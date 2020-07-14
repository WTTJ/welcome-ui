export const toCamelCase = str => str.replace(/_(\w)/g, ($, $1) => $1.toUpperCase())

export const toPascalCase = str => {
  const camelCase = toCamelCase(str)
  return `${camelCase.charAt(0).toUpperCase()}${camelCase.substr(1)}`
}

export const toKebabCase = str => {
  const type = typeof str
  if (type === 'number') {
    return String(str)
  }
  if (type !== 'string') {
    return str
  }
  const match = str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
  return match && match.map(x => x.toLowerCase()).join('-')
}
