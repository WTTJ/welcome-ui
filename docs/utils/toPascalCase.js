export const toCamelCase = str => str.replace(/_(\w)/g, ($, $1) => $1.toUpperCase())

export const toPascalCase = str => {
  const camelCase = toCamelCase(str)
  return `${camelCase.charAt(0).toUpperCase()}${camelCase.substr(1)}`
}
