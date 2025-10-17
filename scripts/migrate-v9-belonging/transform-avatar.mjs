/* eslint-disable perfectionist/sort-objects */

/**
 * Transform Avatar component's size and variant prop values
 *
 * Size transformations:
 * - xxl -> lg
 * - xl -> lg
 * - lg -> md
 * - md -> sm
 * - sm -> xs
 */

export function transform(content) {
  let modified = false
  let newContent = content

  const sizeMapping = { xxl: 'lg', xl: 'lg', lg: 'md', md: 'sm', sm: 'xs' }

  // Match opening or self-closing Avatar tags,
  // capture component and attributes (including nested JSX in braces)
  const pattern = /<(Avatar)\b((?:\{[^}]*\}|[^>])*)\/?>>?/g

  newContent = newContent.replace(pattern, (match, component, attributes = '') => {
    // Detect self-closing tag
    const selfClose = match.trim().endsWith('/>')
    // Clean attributes (remove any trailing slash)
    const attrString = attributes.replace(/\s*\/$/, '').trim()
    if (!attrString) return match

    let newAttributes = attrString
    let hasChanges = false

    // Transform size prop
    const sizeMatch = attrString.match(/\bsize=["']([^"']+)["']/)
    if (sizeMatch) {
      const oldSize = sizeMatch[1]
      const newSize = sizeMapping[oldSize]

      if (newSize) {
        newAttributes = newAttributes.replace(/\bsize=["'][^"']*["']/, `size="${newSize}"`)
        hasChanges = true
      }
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
