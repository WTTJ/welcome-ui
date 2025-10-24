/* eslint-disable no-console */

/**
 * Transform Tooltip components for v9 migration
 * - Remove deprecated withArrow prop
 * @param {string} content - File content
 * @param {string} filePath - Path to the file being transformed
 * @returns {Object} - { content: string, modified: boolean }
 */
export function transform(content, filePath) {
  let modified = false
  let newContent = content

  // Pattern to match Tooltip components with withArrow prop
  // Matches both <Tooltip withArrow> and <Tooltip withArrow={true/false}>
  const tooltipWithArrowPattern = /<Tooltip([^>]*?\s+)withArrow(?:={(?:true|false)})?(\s[^>]*?>|>)/g

  // Find all matches
  const matches = Array.from(newContent.matchAll(tooltipWithArrowPattern))

  if (matches.length > 0) {
    console.log(`Found ${matches.length} Tooltip component(s) with withArrow prop in ${filePath}`)

    // Replace each match by removing the withArrow prop
    newContent = newContent.replace(tooltipWithArrowPattern, (match, beforeProp, afterProp) => {
      // Clean up any extra spaces that might be left
      const cleanedBefore = beforeProp.replace(/\s+$/, ' ')
      const cleanedAfter = afterProp.replace(/^\s+/, '')

      console.log(`Removing withArrow prop from Tooltip`)
      return `<Tooltip${cleanedBefore}${cleanedAfter}`
    })

    modified = true
  }

  // Also handle self-closing tags
  const selfClosingPattern = /<Tooltip([^>]*?\s+)withArrow(?:={(?:true|false)})?(\s[^>]*?\/?>)/g
  const selfClosingMatches = Array.from(newContent.matchAll(selfClosingPattern))

  if (selfClosingMatches.length > 0) {
    console.log(
      `Found ${selfClosingMatches.length} self-closing Tooltip component(s) with withArrow prop in ${filePath}`
    )

    newContent = newContent.replace(selfClosingPattern, (match, beforeProp, afterProp) => {
      const cleanedBefore = beforeProp.replace(/\s+$/, ' ')
      const cleanedAfter = afterProp.replace(/^\s+/, '')

      console.log(`Removing withArrow prop from self-closing Tooltip`)
      return `<Tooltip${cleanedBefore}${cleanedAfter}`
    })

    modified = true
  }

  return {
    content: newContent,
    modified,
  }
}
