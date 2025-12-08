/* eslint-disable perfectionist/sort-objects */

/**
 * Transform Tabs component's size prop and component's name
 *
 * Size transformations:
 * - md -> lg (becomes default)
 * - sm -> md
 */

export function transform(content) {
  let modified = false
  let newContent = content

  const sizeMapping = { md: 'lg', sm: 'md' }
  const nameMapping = {
    'Tab.List': 'Tabs',
    Tab: 'Tabs.Tab',
    'Tab.Panel': 'Tabs.Panel',
  }

  // Match opening or self-closing tabs components tags,
  // capture component and attributes (including nested JSX in braces)
  const pattern = /<(Tab\.List|Tab|Tab\.Panel)\b((?:\{[^}]*\}|[^>])*)\/?>>?/g

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
    if (sizeMatch && component === 'Tab.List') {
      const oldSize = sizeMatch[1]
      const newSize = sizeMapping[oldSize]

      if (newSize) {
        newAttributes = newAttributes.replace(/\bsize=["'][^"']*["']/, `size="${newSize}"`)
        hasChanges = true
      }
    }

    // Transform component name
    const newComponent = nameMapping[component]
    if (newComponent) {
      component = newComponent
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

  // Match closing tabs components tags
  const closingPattern = /<\/(Tab\.List|Tab|Tab\.Panel)>/g

  newContent = newContent.replace(closingPattern, (match, component) => {
    const newComponent = nameMapping[component]

    if (newComponent) {
      modified = true
      return `</${newComponent}>`
    }

    return match
  })

  return { modified, content: newContent }
}
