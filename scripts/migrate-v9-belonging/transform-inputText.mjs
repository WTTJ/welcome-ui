/* eslint-disable perfectionist/sort-objects */

/**
 * Transform InputText component's size prop values
 * For size="lg": remove it (default)
 * size="md" -> "lg"
 * size="sm" -> "md"
 * size="xs" -> "sm"
 */
export function transform(content) {
  let modified = false
  let newContent = content

  const sizeMapping = { md: 'lg', sm: 'md', xs: 'sm' }

  // Match opening or self-closing InputText, DatePicker or DateTimePicker tags,
  // capture component and attributes (including nested JSX in braces)
  const pattern = /<(InputText|DatePicker|DateTimePicker)\b((?:\{[^}]*\}|[^>])*)\/?>>?/g

  newContent = newContent.replace(pattern, (match, component, attributes = '') => {
    // Detect self-closing tag
    const selfClose = match.trim().endsWith('/>')
    // Clean attributes (remove any trailing slash)
    const attrString = attributes.replace(/\s*\/$/, '').trim()
    if (!attrString) return match

    // Find size prop
    const sizeMatch = attrString.match(/\bsize=["']([^"']+)["']/)
    if (!sizeMatch) return match

    const oldSize = sizeMatch[1]
    const newSize = sizeMapping[oldSize]

    let newAttributes = attrString

    if (oldSize === 'lg') {
      // Remove the size prop entirely
      newAttributes = newAttributes.replace(/\bsize=["'][^"']*["']\s*/, '')
      modified = true
    } else if (newSize) {
      // Replace with new size value
      newAttributes = newAttributes.replace(/\bsize=["'][^"']*["']/, `size="${newSize}"`)
      modified = true
    } else {
      return match
    }

    // Reconstruct tag, preserving component name, attrs, and self-close slash
    const outAttrs = newAttributes ? ' ' + newAttributes.trim() : ''
    return `<${component}${outAttrs}${selfClose ? ' /' : ''}>`
  })

  return { modified, content: newContent }
}
