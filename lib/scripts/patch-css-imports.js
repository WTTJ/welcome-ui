/* eslint-disable no-console */
import { existsSync, readdirSync, readFileSync, writeFileSync } from 'fs'
import { basename, join } from 'path'

// This script scans the /dist directory for *.js files
// For each JS file, if a matching CSS file exists, ensures an import statement for the CSS file is present right after "use client"; (if present) or at the top.
// Example: For Tag.js, only add import './Tag.css'; if Tag.css exists in dist.

const distPath = join(import.meta.dirname ?? '.', '../dist')

const allBuildedFiles = readdirSync(distPath)

// Only .js files (ignore .map)
const buildedJsFiles = allBuildedFiles.filter(f => f.endsWith('.js'))

// Only .css files for fast lookup
const cssFilesSet = new Set(allBuildedFiles.filter(f => f.endsWith('.css')))

for (const buildedJsFile of buildedJsFiles) {
  const fileName = basename(buildedJsFile, '.js')
  const associatedCssFile = `${fileName}.css`

  // Only continue if matching CSS file exists
  if (!cssFilesSet.has(associatedCssFile)) {
    console.log(`No CSS file for ${buildedJsFile}, skipping.`)
    continue
  }

  const jsEntry = join(distPath, buildedJsFile)
  const importStatement = `import './${associatedCssFile}';\n`

  if (!existsSync(jsEntry)) {
    console.error(`JS entrypoint not found: ${jsEntry}`)
    continue
  }

  let jsContent = readFileSync(jsEntry, 'utf-8')

  // Prevent duplicate import
  if (jsContent.includes(importStatement)) {
    console.log(`Import already present in ${buildedJsFile}, skipping.`)
    continue
  }

  // Insert after "use client"
  const useClientRegex = /^(["']use client["'];\s*)/
  const match = jsContent.match(useClientRegex)

  if (match) {
    // Insert CSS import right after "use client";
    const newContent = jsContent.replace(useClientRegex, `${match[1]}${importStatement}`)
    writeFileSync(jsEntry, newContent, 'utf-8')
    console.log(`Added CSS import after "use client"; in ${buildedJsFile}`)
  } else {
    // Insert at the very top
    writeFileSync(jsEntry, importStatement + jsContent, 'utf-8')
    console.log(`Added CSS import at top in ${buildedJsFile}`)
  }
}
