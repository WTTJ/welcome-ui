/* eslint-disable perfectionist/sort-objects */
/* eslint-disable perfectionist/sort-modules */

/**
 * Mapping from old variant names to new variant names based on styling equivalence
 */
export const VARIANT_MAPPING = {
  h0: 'display-md',
  h1: 'display-sm',
  h2: 'heading-xl',
  h3: 'heading-lg',
  h4: 'heading-md-strong',
  h5: 'heading-sm-strong',
  h6: 'heading-xs-strong',
  lg: 'body-xl',
  md: 'body-lg',
  sm: 'body-md',
  xs: 'body-sm',
  'subtitle-md': 'label-lg',
  'subtitle-sm': 'label-md',
}

/**
 * Mapping from old variant names to semantic HTML tags
 * For variants that should have specific semantic tags (headings)
 */
export const VARIANT_TO_TAG = {
  h0: 'h1',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  // Other variants default to 'p' or whatever was specified
}

/**
 * Transform a Text component's variant prop value
 * @param {string} variantValue - The old variant value
 * @returns {string|null} - The new variant value, or null if no mapping found
 */
export function transformVariant(variantValue) {
  return VARIANT_MAPPING[variantValue] || null
}

/**
 * Get the semantic tag that should be used for a given old variant
 * @param {string} variantValue - The old variant value
 * @returns {string|null} - The semantic tag (h1, h2, etc.), or null if no specific tag needed
 */
export function getSemanticTag(variantValue) {
  return VARIANT_TO_TAG[variantValue] || null
}

/**
 * Check if a variant value needs transformation
 * @param {string} variantValue - The variant value to check
 * @returns {boolean} - True if the variant needs to be transformed
 */
export function needsTransformation(variantValue) {
  return variantValue in VARIANT_MAPPING
}

/**
 * Transform Text component usage in a file
 * This function applies variant transformations and adds appropriate 'as' props
 *
 * @param {string} content - The file content
 * @returns {Object} - { modified: boolean, content: string }
 */
export function transform(content) {
  let modified = false
  let newContent = content

  // Pattern to match <Text variant="..." ...>
  // This is a simple approach - for complex JSX parsing, consider using a proper parser
  const textComponentPattern = /<Text\s+([^>]*?)>/g

  newContent = newContent.replace(textComponentPattern, (match, attributes) => {
    // Extract variant prop value
    const variantMatch = attributes.match(/variant=["']([^"']+)["']/)

    if (!variantMatch) {
      return match // No variant prop, skip
    }

    const oldVariant = variantMatch[1]
    const newVariant = transformVariant(oldVariant)

    if (!newVariant) {
      return match // No mapping found, skip
    }

    modified = true

    // Get semantic tag if needed
    const semanticTag = getSemanticTag(oldVariant)

    // Replace the variant value and add 'as' prop in the correct order (as before variant)
    let newAttributes = attributes

    // Remove old variant prop
    newAttributes = newAttributes.replace(/variant=["']([^"']+)["']\s*/, '')

    // Check if 'as' prop already exists
    const hasAsProp = /\bas=/.test(newAttributes)

    // Build the new props in correct order: as before variant
    const asAttr = semanticTag && !hasAsProp ? `as="${semanticTag}" ` : ''
    const variantAttr = `variant="${newVariant}"`

    // Prepend as and variant at the beginning of attributes
    newAttributes = `${asAttr}${variantAttr}${newAttributes ? ' ' + newAttributes : ''}`

    return `<Text ${newAttributes.trim()}>`
  })

  // Also handle Text.variant syntax (e.g., <Text.h1>)
  const textDotPattern = /<Text\.([a-z0-9-]+)(\s+[^>]*)?>/gi

  newContent = newContent.replace(textDotPattern, (match, variant, attributes = '') => {
    const newVariant = transformVariant(variant)

    if (!newVariant) {
      return match // No mapping found, skip
    }

    modified = true

    // Convert Text.h1 to <Text as="h1" variant="display-lg"> (as before variant)
    const semanticTag = getSemanticTag(variant)
    const asAttr = semanticTag ? `as="${semanticTag}" ` : ''

    return `<Text ${asAttr}variant="${newVariant}"${attributes}>`
  })

  // Also handle closing tags like </Text.h1>
  const textDotClosingPattern = /<\/Text\.([a-z0-9-]+)>/gi
  newContent = newContent.replace(textDotClosingPattern, () => {
    modified = true
    return '</Text>'
  })

  return {
    modified,
    content: newContent,
  }
}
