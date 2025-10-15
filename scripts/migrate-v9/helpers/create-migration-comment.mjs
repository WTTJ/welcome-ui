/**
 * Create a migration comment for CSS that cannot be automatically transformed
 * @param {string} content - The CSS content to comment out
 * @returns {string}
 */
export function createMigrationComment(content) {
  // For CSS blocks, format according to migration.md:
  // /* WUI V9 TO MIGRATE */
  // /*
  // ${content}
  // */
  if (content.includes('th')) {
    return `/* WUI V9 TO MIGRATE */\n/* ${content} */`
  } else if (content.includes('{') && content.includes('}')) {
    // Multi-line CSS block
    return `/* WUI V9 TO MIGRATE */\n/*\n${content} `
  } else {
    // Single line or simple expression
    return `/* WUI V9 TO MIGRATE */\n/* ${content} */`
  }
}
