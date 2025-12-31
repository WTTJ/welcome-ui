/* eslint-disable perfectionist/sort-objects */

/**
 * Transform Button and CloseButton components' size prop values, variant prop values, and remove deprecated props
 *
 * Size transformations:
 * - xs -> sm
 * - sm -> md
 * - md -> removed (becomes default lg)
 * - lg -> removed (already default lg)
 *
 * Variant transformations:
 * - primary -> primary (unchanged, but primary-danger if danger attr exists)
 * - secondary -> primary-neutral (or primary-danger if danger attr exists)
 * - tertiary -> secondary (or secondary-danger if danger attr exists)
 * - ghost -> tertiary (or tertiary-danger if danger attr exists)
 *
 * Attribute removals:
 * - shape -> removed (no longer supported)
 * - danger -> removed (incorporated into variant as -danger suffix)
 * - ai -> removed (variant becomes primary-ai)
 */

export function transform(content) {
  let modified = false
  let newContent = content

  const sizeMapping = { xs: 'sm', sm: 'md' }
  const sizesToRemove = ['md', 'lg']

  // Match opening or self-closing Button or CloseButton tags,
  // capture component and attributes (including nested JSX in braces)
  const pattern = /<(Button|CloseButton)\b((?:\{[^}]*\}|[^>])*)\/?>>?/g

  newContent = newContent.replace(pattern, (match, component, attributes = '') => {
    // Detect self-closing tag
    const selfClose = match.trim().endsWith('/>')
    // Clean attributes (remove any trailing slash)
    const attrString = attributes.replace(/\s*\/$/, '').trim()
    if (!attrString) return match

    let newAttributes = attrString
    let hasChanges = false

    // Transform or remove size prop
    const sizeMatch = attrString.match(/\bsize=["']([^"']+)["']/)
    if (sizeMatch) {
      const oldSize = sizeMatch[1]

      if (sizesToRemove.includes(oldSize)) {
        // Remove the size prop entirely (including surrounding whitespace)
        newAttributes = newAttributes.replace(/\s*\bsize=["'][^"']*["']\s*/, ' ').trim()
        hasChanges = true
      } else if (sizeMapping[oldSize]) {
        // Transform to new size
        const newSize = sizeMapping[oldSize]
        newAttributes = newAttributes.replace(/\bsize=["'][^"']*["']/, `size="${newSize}"`)
        hasChanges = true
      }
    }

    // Remove shape prop entirely (no longer supported)
    const shapeMatch = attrString.match(/\bshape=["']([^"']+)["']/)
    if (shapeMatch) {
      newAttributes = newAttributes.replace(/\s*\bshape=["'][^"']*["']\s*/, ' ').trim()
      hasChanges = true
    }

    // Check for ai attribute (takes precedence over other variant transformations)
    const aiMatch = newAttributes.match(/\bai(?:=["']?[^"'\s]*["']?)?/)
    if (aiMatch) {
      // Remove ai attribute
      newAttributes = newAttributes.replace(/\s*\bai(?:=["']?[^"'\s]*["']?)?\s*/, ' ').trim()
      // Set variant to primary-ai (replace existing variant or add new one)
      if (newAttributes.match(/\bvariant=["'][^"']*["']/)) {
        newAttributes = newAttributes.replace(/\bvariant=["'][^"']*["']/, 'variant="primary-ai"')
      } else {
        newAttributes = newAttributes + ' variant="primary-ai"'
      }
      hasChanges = true
    } else {
      // Handle variant transformations (only if no ai attribute)
      const variantMatch = newAttributes.match(/\bvariant=["']([^"']+)["']/)
      const dangerMatch = newAttributes.match(/\bdanger(?:=["']?[^"'\s]*["']?)?/)

      if (variantMatch || dangerMatch) {
        const currentVariant = variantMatch ? variantMatch[1] : 'primary' // default variant
        const hasDanger = !!dangerMatch

        let newVariant = currentVariant

        // Apply variant mappings
        const variantMapping = {
          primary: 'primary',
          secondary: 'primary-neutral',
          tertiary: 'secondary',
          ghost: 'tertiary',
        }

        if (variantMapping[currentVariant]) {
          newVariant = variantMapping[currentVariant]
        }

        // Apply danger suffix if danger attribute exists
        if (hasDanger) {
          if (newVariant === 'primary' || newVariant === 'primary-neutral') {
            newVariant = 'primary-danger'
          } else if (newVariant === 'secondary') {
            newVariant = 'secondary-danger'
          } else if (newVariant === 'tertiary') {
            newVariant = 'tertiary-danger'
          }
        }

        // Remove danger attribute if it exists
        if (dangerMatch) {
          newAttributes = newAttributes
            .replace(/\s*\bdanger(?:=["']?[^"'\s]*["']?)?\s*/, ' ')
            .trim()
          hasChanges = true
        }

        // Update or add variant
        if (variantMatch && newVariant !== currentVariant) {
          newAttributes = newAttributes.replace(
            /\bvariant=["'][^"']*["']/,
            `variant="${newVariant}"`
          )
          hasChanges = true
        } else if (!variantMatch && newVariant !== 'primary') {
          // Add variant if it doesn't exist and is not the default
          newAttributes = newAttributes + ` variant="${newVariant}"`
          hasChanges = true
        }
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
