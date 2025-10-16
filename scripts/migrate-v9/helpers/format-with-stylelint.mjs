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

    // Return the formatted content from stylelint, or original if formatting failed
    return result.code || scssContent
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`Stylelint formatting failed for ${filePath}:`, error.message)
    // Return original content if stylelint fails - final formatDirectory will catch it
    return scssContent
  }
}
