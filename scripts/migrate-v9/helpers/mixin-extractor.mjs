/**
 * Phase 3: Mixin Generation - CSS Variable Declaration Extractor
 *
 * This module identifies and extracts CSS variable declarations from JavaScript/TypeScript files
 * Patterns: const variableName = css`...`
 */

/**
 * Extract CSS variable declarations and convert to SCSS mixins
 *
 * @param {string} fileContent - The full TypeScript/JavaScript file content
 * @returns {Object} { mixins: Map, processedContent: string }
 */
export function extractCssVariableDeclarations(fileContent) {
  const mixins = new Map()

  // Task 3.1: Identify CSS variable declarations
  // Pattern: const variableName = css`...` (with proper template literal handling)
  const cssVariableRegex = /const\s+([a-zA-Z][a-zA-Z0-9]*)\s*=\s*css`((?:[^`\\]|\\.|`(?!`))*)`/g

  let processedContent = fileContent
  const matches = []

  // Collect all matches first to avoid issues with global regex
  let match
  while ((match = cssVariableRegex.exec(fileContent)) !== null) {
    matches.push(match)
  }

  // Process matches in reverse order to avoid index shifting issues
  for (let i = matches.length - 1; i >= 0; i--) {
    const [fullMatch, variableName, cssContent] = matches[i]

    console.log(`📋 Found CSS variable declaration: ${variableName}`)

    // Task 3.2: Convert to SCSS mixin
    const mixinName = camelToKebab(variableName)
    const mixinDefinition = generateScssMinxin(mixinName, cssContent)

    // Store in mixins Map
    mixins.set(mixinName, mixinDefinition)

    // Task 3.3: Replace in content with mixin reference
    // Remove the original declaration
    processedContent = processedContent.replace(
      fullMatch,
      `// MIXIN: ${mixinName} (extracted to SCSS)`
    )
  }

  return { mixins, processedContent }
}

/**
 * Task 3.4: Handle mixin parameters (for future enhancement)
 *
 * Some mixins might need parameters like: shapeStyles(size, shape)
 * This is a placeholder for more advanced mixin parameter handling
 */
export function extractMixinWithParameters(declaration) {
  // TODO: Implement parameter extraction for function-style CSS declarations
  // Pattern: const shapeStyles = (size, shape) => css`...`
  return null // Not implemented yet
}

/**
 * Task 3.3: Replace mixin references in styled components
 *
 * This function finds references to the extracted CSS variables and replaces them
 * with @include statements
 */
export function replaceMixinReferences(cssContent, mixins) {
  let processedCss = cssContent

  // Look for mixin references in the CSS (identifier names that match our mixins)
  for (const [mixinName, mixinDefinition] of mixins) {
    // Convert kebab-case back to camelCase to find original references
    const originalName = mixinName.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase())

    // Pattern: ${variableName} or just variableName in CSS context
    const referenceRegex = new RegExp(
      `\\$\\{${originalName}\\}|${originalName}(?=\\s|$|;|\\})`,
      'g'
    )

    processedCss = processedCss.replace(referenceRegex, `@include ${mixinName};`)
  }

  return processedCss
}

/**
 * Convert camelCase to kebab-case
 */
function camelToKebab(str) {
  return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
}

/**
 * Task 3.2: Generate SCSS mixin from CSS content
 *
 * @param {string} mixinName - The kebab-case mixin name
 * @param {string} cssContent - The CSS content from the template literal
 * @returns {string} SCSS mixin definition
 */
function generateScssMinxin(mixinName, cssContent) {
  // Clean up the CSS content (remove extra whitespace, etc.)
  const cleanCss = cssContent
    .trim()
    .split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 0)
    .map(line => `  ${line}`)
    .join('\n')

  return `@mixin ${mixinName} {\n${cleanCss}\n}`
}
