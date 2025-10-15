/**
 * Helper functions for detecting and analyzing styled component patterns
 *
 * This module provides utilities for identifying different patterns of styled-components
 * usage in AST nodes and extracting relevant information for transformation.
 */

/**
 * Detect and categorize styled component patterns
 * Returns pattern information including type and relevant nodes for processing
 *
 * @param {Object} node - AST node to analyze
 * @returns {Object|null} Pattern analysis result or null if not a styled component
 */
export function analyzeStyledComponentPattern(node) {
  // Pattern 1: styled.div`css` (simple TaggedTemplateExpression)
  if (
    node.type === 'TaggedTemplateExpression' &&
    node.tag.type === 'MemberExpression' &&
    node.tag.object.name === 'styled'
  ) {
    return {
      pattern: 'simple-tagged',
      quasi: node.quasi,
      type: 'TaggedTemplateExpression',
    }
  }

  // Pattern 2: styled(Box)`css` (TaggedTemplateExpression with CallExpression)
  if (
    node.type === 'TaggedTemplateExpression' &&
    node.tag.type === 'CallExpression' &&
    (node.tag.callee.name === 'styled' || node.tag.callee?.object.callee.name === 'styled')
  ) {
    return {
      pattern: 'component-tagged',
      quasi: node.quasi,
      type: 'TaggedTemplateExpression',
    }
  }

  // Pattern 3: styled(Box)((props) => css`...`) (CallExpression with function)
  if (
    node.type === 'CallExpression' &&
    node.callee.type === 'CallExpression' &&
    node.callee.callee.name === 'styled'
  ) {
    return {
      functionArg: node.arguments[0],
      pattern: 'function-wrapped',
      type: 'CallExpression',
    }
  }

  return null
}

/**
 * Extract the template literal node from a styled component pattern
 * Returns the TemplateLiteral node that contains the CSS content
 *
 * @param {Object} node - AST node representing a styled component
 * @returns {Object|null} TemplateLiteral node or null if not found
 */
export function extractTemplateLiteralFromStyled(node) {
  const pattern = analyzeStyledComponentPattern(node)
  if (!pattern) return null

  switch (pattern.pattern) {
    case 'component-tagged':
    case 'simple-tagged':
      return pattern.quasi

    case 'function-wrapped': {
      const funcArg = pattern.functionArg
      if (
        funcArg &&
        (funcArg.type === 'ArrowFunctionExpression' || funcArg.type === 'FunctionExpression')
      ) {
        // Look for css`` template literal in the function body
        if (funcArg.body.type === 'TaggedTemplateExpression' && funcArg.body.tag.name === 'css') {
          return funcArg.body.quasi
        }
      }
      return null
    }

    default:
      return null
  }
}

/**
 * Check if a node represents a styled component
 * Handles: styled.div``, styled(Box)``, and styled(Box)(() => css``) patterns
 *
 * @param {Object} node - AST node to check
 * @returns {boolean} True if node is a styled component
 */
export function isStyledComponent(node) {
  return analyzeStyledComponentPattern(node) !== null
}
