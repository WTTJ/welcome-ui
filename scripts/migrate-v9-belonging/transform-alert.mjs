/* eslint-disable perfectionist/sort-objects */

/**
 * Transform Alert component's size
 *
 * Size transformations:
 * - md -> lg
 * - sm -> md
 */

/* Variant transformations:
 * - beige -> brand
 */

export function transform(content) {
  let modified = false
  let newContent = content

  const sizeMapping = { sm: 'md', md: 'lg' }
  const variantMapping = { beige: 'brand' }

  // Match opening or self-closing Avatar tags,
  // capture component and attributes (including nested JSX in braces)
  const pattern = /<(Alert)\b((?:\{[^}]*\}|[^>])*)\/?>>?/g

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

    // Transform variant prop
    const variantMatch = attrString.match(/\bvariant=["']([^"']+)["']/)
    if (variantMatch) {
      const oldVariant = variantMatch[1]
      const newVariant = variantMapping[oldVariant]

      if (newVariant) {
        newAttributes = newAttributes.replace(/\bvariant=["'][^"']*["']/, `variant="${newVariant}"`)
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
