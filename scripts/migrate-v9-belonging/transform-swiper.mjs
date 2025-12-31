/* eslint-disable perfectionist/sort-objects */

/**
 * Transform Swiper component's navigationSize prop values
 *
 * Size transformations:
 * - xs -> sm
 * - sm -> md
 * - md -> removed (becomes default lg)
 * - lg -> removed (already default lg)
 */

export function transform(content) {
  let modified = false
  let newContent = content

  const sizeMapping = { xs: 'sm', sm: 'md' }
  const sizesToRemove = ['md', 'lg']

  // Match opening or self-closing Swiper tags,
  // capture component and attributes (including nested JSX in braces)
  const pattern = /<(Swiper)\b((?:\{[^}]*\}|[^>])*)\/?>>?/g

  newContent = newContent.replace(pattern, (match, component, attributes = '') => {
    // Detect self-closing tag
    const selfClose = match.trim().endsWith('/>')
    // Clean attributes (remove any trailing slash)
    const attrString = attributes.replace(/\s*\/$/, '').trim()
    if (!attrString) return match

    let newAttributes = attrString
    let hasChanges = false

    // Transform or remove navigationSize prop
    const navigationSizeMatch = attrString.match(/\bnavigationSize=["']([^"']+)["']/)
    if (navigationSizeMatch) {
      const oldSize = navigationSizeMatch[1]

      if (sizesToRemove.includes(oldSize)) {
        // Remove the navigationSize prop entirely (including surrounding whitespace)
        newAttributes = newAttributes.replace(/\s*\bnavigationSize=["'][^"']*["']\s*/, ' ').trim()
        hasChanges = true
      } else if (sizeMapping[oldSize]) {
        // Transform to new size
        const newSize = sizeMapping[oldSize]
        newAttributes = newAttributes.replace(
          /\bnavigationSize=["'][^"']*["']/,
          `navigationSize="${newSize}"`
        )
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
