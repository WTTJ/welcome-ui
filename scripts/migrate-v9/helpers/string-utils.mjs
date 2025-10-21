/**
 * Convert string to camelCase (utility function)
 */
export function camelCase(str) {
  return str.charAt(0).toLowerCase() + str.slice(1)
}

/**
 * Convert camelCase to kebab-case
 */
export function camelToKebab(str) {
  return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
}

/**
 * Convert theme path to CSS variable
 * Examples: 'space.md' → 'var(--spacing-md)'
 */
export function convertThemePathToCssVar(themePath) {
  if (!themePath) {
    return '/* WUI V9 TO MIGRATE */'
  }

  const parts = themePath.split('.')

  // Special mappings for theme sections
  const sectionMappings = {
    colors: 'color',
    space: 'spacing',
    texts: 'text',
  }

  if (parts.length >= 2) {
    const section = sectionMappings[parts[0]] || parts[0]
    const rest = parts.slice(1).join('-')
    return `var(--${section}-${rest})`
  }

  return `var(--${themePath})`
}

/**
 * Convert prop name to CSS class name
 */
export function propToClassName(propName) {
  // Remove $ prefix if present
  const cleanName = propName.replace(/^\$/, '')

  return camelToKebab(cleanName)
}
