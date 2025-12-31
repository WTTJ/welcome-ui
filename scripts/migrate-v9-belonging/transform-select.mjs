/* eslint-disable perfectionist/sort-objects */
/* eslint-disable perfectionist/sort-modules */

/**
 * Mapping from old size names to new size names
 * null means the prop should be removed
 */
export const SIZE_MAPPING = {
  xs: 'sm',
  sm: 'md',
  md: null, // Remove this prop
  lg: null, // Remove this prop
}

/**
 * Transform a Select component's size prop value
 * @param {string} sizeValue - The old size value
 * @returns {string|null} - The new size value, or null if prop should be removed
 */
export function transformSize(sizeValue) {
  return SIZE_MAPPING[sizeValue]
}

/**
 * Check if a size value needs transformation
 * @param {string} sizeValue - The size value to check
 * @returns {boolean} - True if the size needs to be transformed
 */
export function needsTransformation(sizeValue) {
  return sizeValue in SIZE_MAPPING
}

/**
 * Transform Select component usage in a file
 * This function applies size transformations
 *
 * @param {string} content - The file content
 * @returns {Object} - { modified: boolean, content: string }
 */
export function transform(content) {
  let modified = false
  let newContent = content

  // Pattern to match <Select size="..." ...>
  const selectComponentPattern = /<Select\s+([^>]*?)>/g

  newContent = newContent.replace(selectComponentPattern, (match, attributes) => {
    // Extract size prop value
    const sizeMatch = attributes.match(/size=["']([^"']+)["']/)

    if (!sizeMatch) {
      return match // No size prop, skip
    }

    const oldSize = sizeMatch[1]

    if (!needsTransformation(oldSize)) {
      return match // No mapping found, skip
    }

    const newSize = transformSize(oldSize)

    modified = true

    let newAttributes = attributes

    if (newSize === null) {
      // Remove the size prop entirely
      newAttributes = newAttributes.replace(/size=["']([^"']+)["']\s*/, '')
    } else {
      // Replace with new size value
      newAttributes = newAttributes.replace(/size=["']([^"']+)["']/, `size="${newSize}"`)
    }

    return `<Select ${newAttributes.trim()}>`
  })

  return {
    modified,
    content: newContent,
  }
}
