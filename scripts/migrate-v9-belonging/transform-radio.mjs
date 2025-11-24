/* eslint-disable perfectionist/sort-objects */

/**
 * Transform Radio component's props
 *
 * Main changes:
 * - remove deprecated `variant` prop (no replacement)
 */

export function transform(content) {
  let modified = false
  let newContent = content

  // Match opening or self-closing Radio tags,
  // capture component and attributes (including nested JSX in braces)
  const pattern = /<(Radio)\b((?:\{[^}]*\}|[^>])*)\/?>>?/g

  newContent = newContent.replace(pattern, (match, component, attributes = '') => {
    // Detect self-closing tag
    const selfClose = match.trim().endsWith('/>')
    // Clean attributes (remove any trailing slash)
    const attrString = attributes.replace(/\s*\/$/, '').trim()
    if (!attrString) return match

    let newAttributes = attrString
    let hasChanges = false

    // Remove variant prop entirely (no longer supported)
    if (/\bvariant=/.test(attrString)) {
      newAttributes = newAttributes
        .replace(/\s*\bvariant=(?:\{[^}]*\}|"[^"]*"|'[^']*')\s*/g, ' ')
        .trim()
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
