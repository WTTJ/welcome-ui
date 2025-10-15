/* eslint-disable perfectionist/sort-objects */
/* eslint-disable perfectionist/sort-modules */

/**
 * Mapping from old variant names to new variant names based on styling equivalence
 */
export const VARIANT_MAPPING = {
  // Old headings to new variants
  h0: 'display-xl', // h0: 60px/7xl black → display-xl: 7xl black
  h1: 'display-lg', // h1: 48px/3xl black → display-lg: 6xl black
  h2: 'display-md', // h2: 4xl/40 black → display-md: 5xl black
  h3: 'display-sm', // h3: 24px/2xl black → display-sm: 4xl black
  h4: 'heading-xl', // h4: xl/2xl black → heading-xl: 3xl bold
  h5: 'heading-lg', // h5: 16px/xl black → heading-lg: 2xl bold
  h6: 'heading-md', // h6: sm/lg black → heading-md: xl medium

  // Old body text sizes to new body variants
  xs: 'body-sm', // xs: 12px/sm regular → body-sm: xs regular
  sm: 'body-md', // sm: 14px/lg regular → body-md: sm regular
  md: 'body-lg', // md: 16px/lg regular → body-lg: md regular
  lg: 'body-xl', // lg: 18px/2xl regular → body-xl: lg regular

  // Old subtitles to new label variants
  'subtitle-sm': 'label-sm', // subtitle-sm: 12px/xl medium uppercase → label-sm: xs medium
  'subtitle-md': 'label-md', // subtitle-md: 12px/xl black uppercase → label-md: sm medium
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

    // For subtitle variants, ensure uppercase className is applied
    if (oldVariant === 'subtitle-sm' || oldVariant === 'subtitle-md') {
      // Regex to find existing className attribute
      const classPattern = /className\s*=\s*(\{[^}]*\}|"[^"]*"|'[^']*')/
      const classMatch = newAttributes.match(classPattern)
      if (classMatch) {
        const value = classMatch[1]
        if (value.startsWith('{')) {
          // Handle expression, e.g., {cx(...)}
          newAttributes = newAttributes.replace(
            value,
            value.replace(/cx\(([^)]*)\)/, (m, args) => `cx(${args.trim()}, 'uppercase')`)
          )
        } else {
          // Handle string literal
          const quote = value[0]
          const content = value.slice(1, -1)
          newAttributes = newAttributes.replace(value, `${quote}${content} uppercase${quote}`)
        }
      } else {
        // No className present, insert after variant
        newAttributes = newAttributes.replace(variantAttr, `${variantAttr} className="uppercase"`)
      }
    }

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
