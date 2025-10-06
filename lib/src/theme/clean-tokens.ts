/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const TOKENS_ASSETS_DIR = path.join(__dirname, 'tokens', '_assets')
const TOKENS_OUTPUT_DIR = path.join(__dirname, 'tokens')

/**
 * Cleans token references by removing "px" suffix from references
 * Example: "{size.icon.md}px" becomes "{size.icon.md}"
 */
function cleanTokenReferences(obj: any): any {
  if (typeof obj !== 'object' || obj === null) {
    return obj
  }

  if (Array.isArray(obj)) {
    return obj.map(cleanTokenReferences)
  }

  const cleaned: any = {}
  for (const [key, value] of Object.entries(obj)) {
    if (key === 'value' && typeof value === 'string') {
      // Check if the value is a token reference ending with }px
      if (value.match(/^\{[^}]+\}px$/)) {
        cleaned[key] = value.replace(/px$/, '')
      } else {
        cleaned[key] = value
      }
    } else {
      cleaned[key] = cleanTokenReferences(value)
    }
  }

  return cleaned
}

/**
 * Main function to process all token files
 */
function cleanTokens(): void {
  if (!fs.existsSync(TOKENS_ASSETS_DIR)) {
    console.error(`Tokens assets directory not found: ${TOKENS_ASSETS_DIR}`)
    process.exit(1)
  }

  if (!fs.existsSync(TOKENS_OUTPUT_DIR)) {
    fs.mkdirSync(TOKENS_OUTPUT_DIR, { recursive: true })
  }

  const files = fs.readdirSync(TOKENS_ASSETS_DIR)
  const jsonFiles = files.filter(file => file.endsWith('.json'))

  if (jsonFiles.length === 0) {
    console.log('No JSON files found in tokens assets directory')
    return
  }

  console.log(`Found ${jsonFiles.length} token file(s) to process\n`)

  jsonFiles.forEach(file => {
    const filePath = path.join(TOKENS_ASSETS_DIR, file)

    if (file === 'foundations.json') {
      processFoundationsFile(filePath)
    } else {
      processTokenFile(filePath, file)
    }
  })

  console.log('\n✓ All token files processed successfully')
}

/**
 * Normalizes keys by:
 * - Replacing multiple dashes with a single dash
 * - Removing "-mode 1" suffix
 */
function normalizeKeys(obj: any): any {
  if (typeof obj !== 'object' || obj === null) {
    return obj
  }

  if (Array.isArray(obj)) {
    return obj.map(normalizeKeys)
  }

  const normalized: any = {}
  for (const [key, value] of Object.entries(obj)) {
    // Replace multiple consecutive dashes with a single dash
    let normalizedKey = key.replace(/-+/g, '-')
    // Remove "-mode 1" suffix
    normalizedKey = normalizedKey.replace(/-mode\s+\d+$/i, '')
    normalized[normalizedKey] = normalizeKeys(value)
  }

  return normalized
}

/**
 * Processes the foundations.json file specially
 */
function processFoundationsFile(filePath: string): void {
  try {
    console.log(`Processing ${path.basename(filePath)} (special handling)...`)

    const content = fs.readFileSync(filePath, 'utf-8')
    const tokens = JSON.parse(content)

    console.log('  Available keys:', Object.keys(tokens))

    // Extract primitives - look for keys that match primitives pattern
    const primitivesKey = Object.keys(tokens).find(
      key => key.toLowerCase().includes('primitives') && key.toLowerCase().includes('default')
    )

    if (primitivesKey) {
      console.log(`  Found primitives key: ${primitivesKey}`)
      let primitives = tokens[primitivesKey]
      primitives = normalizeKeys(primitives)
      primitives = removeExtensions(primitives)
      primitives = cleanTokenReferences(primitives)

      const primitivesPath = path.join(TOKENS_OUTPUT_DIR, 'primitives.json')
      fs.writeFileSync(primitivesPath, JSON.stringify(primitives, null, 2) + '\n', 'utf-8')
      console.log(`  ✓ Created primitives.json`)
    } else {
      console.log('  ⚠ No primitives key found')
    }

    // Extract semantics - look for keys that match semantic patterns (excluding dark mode)
    const semantics: any = {}
    const semanticKeys = Object.keys(tokens).filter(
      key =>
        key.toLowerCase().includes('semantic') &&
        key.toLowerCase().includes('default') &&
        !key.toLowerCase().includes('dark')
    )

    console.log(`  Found semantic keys: ${semanticKeys.join(', ')}`)

    semanticKeys.forEach(key => {
      console.log(`  Processing semantic key: ${key}`)
      Object.assign(semantics, tokens[key])
    })

    if (Object.keys(semantics).length > 0) {
      let processedSemantics = normalizeKeys(semantics)
      processedSemantics = removeExtensions(processedSemantics)
      processedSemantics = cleanTokenReferences(processedSemantics)

      const semanticsPath = path.join(TOKENS_OUTPUT_DIR, 'semantics.json')
      fs.writeFileSync(semanticsPath, JSON.stringify(processedSemantics, null, 2) + '\n', 'utf-8')
      console.log(`  ✓ Created semantics.json`)
    } else {
      console.log('  ⚠ No semantic content found')
    }

    console.log(`✓ Successfully split ${path.basename(filePath)}`)
  } catch (error) {
    console.error(`✗ Error processing ${path.basename(filePath)}:`, error)
  }
}

/**
 * Processes a single token file
 */
function processTokenFile(filePath: string, fileName: string): void {
  try {
    console.log(`Processing ${fileName}...`)

    const content = fs.readFileSync(filePath, 'utf-8')
    const tokens = JSON.parse(content)

    // First normalize keys, then remove extensions, then clean token references
    let processed = normalizeKeys(tokens)
    processed = removeExtensions(processed)
    processed = cleanTokenReferences(processed)

    // Write to output directory
    const outputPath = path.join(TOKENS_OUTPUT_DIR, fileName)
    fs.writeFileSync(outputPath, JSON.stringify(processed, null, 2) + '\n', 'utf-8')

    console.log(`✓ Successfully processed ${fileName}`)
  } catch (error) {
    console.error(`✗ Error processing ${fileName}:`, error)
  }
}

/**
 * Recursively removes all $extensions properties from an object
 */
function removeExtensions(obj: any): any {
  if (typeof obj !== 'object' || obj === null) {
    return obj
  }

  if (Array.isArray(obj)) {
    return obj.map(removeExtensions)
  }

  const cleaned: any = {}
  for (const [key, value] of Object.entries(obj)) {
    if (key === '$extensions' || key.includes('strings-')) {
      continue
    }
    cleaned[key] = removeExtensions(value)
  }

  return cleaned
}

// Run the script
cleanTokens()
