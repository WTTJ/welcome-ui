/* eslint-disable perfectionist/sort-objects */

/**
 * Transform Toggle component's size and icon prop values
 *
 * Size transformations:
 * - xs -> sm
 * - sm -> md (remove since md is default)
 * - md -> lg
 *
 * Icon transformations:
 * - checkedIcon and uncheckedIcon -> withVisibilityIcon
 */

export function transform(content) {
  let modified = false
  let newContent = content

  const sizeMapping = { xs: 'sm', sm: 'md', md: 'lg' }

  // Match opening or self-closing Toggle tags,
  // capture component and attributes (including nested JSX in braces)
  const pattern = /<(Toggle)\b((?:\{[^}]*\}|[^>])*)\/?>>?/g

  newContent = newContent.replace(pattern, (match, component, attributes = '') => {
    // Detect self-closing tag
    const selfClose = match.trim().endsWith('/>')
    // Clean attributes (remove any trailing slash)
    const attrString = attributes.replace(/\s*\/$/, '').trim()
    if (!attrString) return match

    let newAttributes = attrString
    let hasChanges = false

    // Transform size prop - remove if it would be md (new default)
    const sizeMatch = attrString.match(/\bsize=["']([^"']+)["']/)
    if (sizeMatch) {
      const oldSize = sizeMatch[1]
      const newSize = sizeMapping[oldSize]

      if (newSize) {
        if (newSize === 'md') {
          // Remove size prop entirely since md is now the default
          newAttributes = newAttributes.replace(/\s*\bsize=["'][^"']*["']/, '')
        } else {
          // Keep the size prop with the new value
          newAttributes = newAttributes.replace(/\bsize=["'][^"']*["']/, `size="${newSize}"`)
        }
        hasChanges = true
      }
    }

    // Transform icon props - replace checkedIcon and uncheckedIcon with withVisibilityIcon
    const hasCheckedIcon = /\bcheckedIcon=/.test(attrString)
    const hasUncheckedIcon = /\buncheckedIcon=/.test(attrString)

    if (hasCheckedIcon || hasUncheckedIcon) {
      // Remove both checkedIcon and uncheckedIcon props
      newAttributes = newAttributes.replace(/\s*\bcheckedIcon=(?:\{[^}]*\}|"[^"]*"|'[^']*')/g, '')
      newAttributes = newAttributes.replace(/\s*\buncheckedIcon=(?:\{[^}]*\}|"[^"]*"|'[^']*')/g, '')

      // Add withVisibilityIcon if not already present
      if (!/\bwithVisibilityIcon=/.test(newAttributes)) {
        newAttributes = newAttributes.trim() + ' withVisibilityIcon'
      }

      hasChanges = true
    }

    if (hasChanges) {
      modified = true
      // Reconstruct tag, preserving component name, attrs, and self-close slash
      const outAttrs = newAttributes ? ' ' + newAttributes.trim() : ''
      return `<${component}${outAttrs}${selfClose ? ' /' : ''}>`
    }

    return match
  })

  return { modified, content: newContent }
}
