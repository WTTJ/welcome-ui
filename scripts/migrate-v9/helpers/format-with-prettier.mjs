// Helper to format code with Prettier, supporting both ESM and CJS usage.
/**
 * Formats code using Prettier with resolved config for the given file path.
 * @param {string} code - The code to format.
 * @param {string} filePath - The file path (used to resolve config and parser).
 * @returns {Promise<string>} - The formatted code.
 */
export async function formatWithPrettier(code, filePath) {
  let prettier
  try {
    // Dynamic import for ESM compatibility
    prettier = await import('prettier')
  } catch (e) {
    throw new Error('Prettier could not be imported: ' + e)
  }
  const config = await prettier.resolveConfig(filePath)
  // Infer parser from file extension if not set in config
  let parser = config && config.parser
  if (!parser) {
    if (filePath.endsWith('.ts') || filePath.endsWith('.tsx')) parser = 'typescript'
    else if (filePath.endsWith('.js') || filePath.endsWith('.jsx')) parser = 'babel'
    else if (filePath.endsWith('.json')) parser = 'json'
    else if (filePath.endsWith('.scss')) parser = 'scss'
    else if (filePath.endsWith('.css')) parser = 'css'
    else parser = 'babel'
  }
  return prettier.format(code, { ...config, filepath: filePath, parser })
}
