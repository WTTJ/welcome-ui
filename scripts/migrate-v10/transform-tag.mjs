/* eslint-disable perfectionist/sort-objects */

/**
 * Transform Tag component's size and variant prop values
 *
 * Size transformations:
 * - md -> lg (becomes default)
 * - sm -> md
 *
 * Variant transformations:
 * - beige -> warm (becomes default)
 * - primary -> brand
 * - success -> green
 * - information -> blue
 * - warning -> orange
 * - danger -> red
 * - New variants: dash, teal, violet, pink (no changes needed)
 */

export function transform(content) {
  let modified = false
  let newContent = content

  const sizeMapping = { md: 'lg', sm: 'md' }
  const variantMapping = {
    beige: 'warm',
    primary: 'brand',
    success: 'green',
    information: 'blue',
    warning: 'orange',
    danger: 'red',
  }

  // Match opening or self-closing Tag tags,
  // capture component and attributes (including nested JSX in braces)
  const pattern = /<(Tag)\b((?:\{[^}]*\}|[^>])*)\/?>>?/g

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
