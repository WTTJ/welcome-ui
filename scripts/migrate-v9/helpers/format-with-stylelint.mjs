/**
 * Format SCSS content with stylelint auto-fix using project configuration
 * enhanced with formatting rules
 * @param {string} scssContent - The SCSS content to format
 * @param {string} filePath - The file path (for context)
 * @returns {Promise<string>} - The formatted SCSS content
 */
export async function formatScssContent(scssContent, filePath) {
  try {
    // Import stylelint dynamically
    const stylelint = await import('stylelint')

    // Load the project's config and enhance it with formatting rules
    const projectConfig = await stylelint.default.resolveConfig(filePath)

    const enhancedConfig = {
      ...projectConfig,
      rules: {
        ...projectConfig?.rules,
        // Ensure SCSS at-rules are handled properly
        'at-rule-no-unknown': [
          true,
          {
            ignoreAtRules: ['apply', 'theme', 'mixin', 'source', 'use', 'include'],
          },
        ],
        // Add fixable formatting rules for SCSS migration
        'block-closing-brace-newline-after': 'always',
        'block-opening-brace-newline-after': 'always',
        'block-opening-brace-space-before': 'always',
        'declaration-block-semicolon-newline-after': 'always',
        'declaration-block-trailing-semicolon': 'always',
        'declaration-colon-space-after': 'always',
        'declaration-colon-space-before': 'never',
        indentation: 2,
        'rule-empty-line-before': ['always', { except: ['first-nested'] }],
        'selector-list-comma-newline-after': 'always',
      },
    }

    const result = await stylelint.default.lint({
      code: scssContent,
      config: enhancedConfig,
      customSyntax: 'postcss-scss',
      fix: true,
    })

    // Get the stylelint result or original content
    const styleLintedContent = result.code || scssContent

    // Apply manual indentation fix as a post-processing step
    return fixIndentation(styleLintedContent)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`Stylelint formatting failed for ${filePath}:`, error.message)
    // Still apply manual indentation fix even if stylelint fails
    return fixIndentation(scssContent)
  }
}

/**
 * Simple post-processing to fix indentation issues that stylelint might miss
 * @param {string} scssContent - The SCSS content to fix
 * @returns {string} - The SCSS content with proper indentation
 */
function fixIndentation(scssContent) {
  const lines = scssContent.split('\n')
  const result = []
  let indentLevel = 0

  for (const line of lines) {
    const trimmedLine = line.trim()

    // Skip empty lines
    if (!trimmedLine) {
      result.push('')
      continue
    }

    // Decrease indent for closing braces
    if (trimmedLine.startsWith('}')) {
      indentLevel = Math.max(0, indentLevel - 1)
    }

    // Add the line with proper indentation
    result.push('  '.repeat(indentLevel) + trimmedLine)

    // Increase indent for opening braces
    if (trimmedLine.endsWith('{')) {
      indentLevel++
    }
  }

  return result.join('\n')
}
