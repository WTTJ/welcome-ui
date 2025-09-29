/**
 * Ensure Stack component has correct classnames (flex, flex-col).
 * @param {string[]} classnames
 * @returns {string[]}
 */
export function getStackClassnames(classnames) {
  let result = [...classnames]
  if (!result.includes('flex')) {
    result.push('flex')
    if (!result.includes('flex-row')) {
      result.push('flex-col')
    } else {
      result = result.filter(cn => cn !== 'flex-row')
    }
  }
  return result
}

/**
 * Parse a JSX props string into an object.
 * Handles expressions, quoted, and unquoted values.
 * @param {string} propsString
 * @returns {Record<string, {isExpression: boolean, value: string}>}
 */
export function parsePropsString(propsString) {
  const props = {}
  let charIndex = 0
  while (charIndex < propsString.length) {
    // Skip whitespace and newlines
    while (charIndex < propsString.length && /\s/.test(propsString[charIndex])) {
      charIndex++
    }
    if (charIndex >= propsString.length) break
    const propNameMatch = propsString.substring(charIndex).match(/^([\w-]+)=/)
    if (!propNameMatch) break
    const propName = propNameMatch[1]
    charIndex += propNameMatch[0].length
    let propValue = ''
    let isExpression = false
    if (propsString[charIndex] === '{') {
      let braceDepth = 0
      let valueStart = charIndex
      isExpression = true
      do {
        if (propsString[charIndex] === '{') braceDepth++
        if (propsString[charIndex] === '}') braceDepth--
        charIndex++
      } while (charIndex < propsString.length && braceDepth > 0)
      propValue = propsString.substring(valueStart + 1, charIndex - 1).trim()
      if (propValue.startsWith('{') && propValue.endsWith('}')) {
        propValue = propValue.slice(1, -1).trim()
      }
    } else if (propsString[charIndex] === '"' || propsString[charIndex] === "'") {
      const quote = propsString[charIndex]
      charIndex++
      const valueStart = charIndex
      while (charIndex < propsString.length && propsString[charIndex] !== quote) {
        if (propsString[charIndex] === '\\') charIndex++
        charIndex++
      }
      propValue = propsString.substring(valueStart, charIndex)
      charIndex++
    } else {
      const valueStart = charIndex
      while (charIndex < propsString.length && !/\s/.test(propsString[charIndex])) {
        charIndex++
      }
      propValue = propsString.substring(valueStart, charIndex)
    }
    props[propName] = {
      isExpression: isExpression,
      value: propValue,
    }
  }

  return props
}
