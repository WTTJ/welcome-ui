/* eslint-disable no-console */
import fs from 'fs'
import path from 'path'
import readline from 'readline'

// Find components who changed to an html element
const componentTypes = ['Box', 'Flex', 'Grid', 'Stack']

// Find components who did not changed of element but only move props style to className
const componentTypesUnchanged = [
  'Accordion',
  'Alert',
  'AspectRatio',
  'Avatar',
  'Badge',
  'Breadcrumb',
  'Button',
  'ButtonGroup',
  'Card',
  'Checkbox',
  'CloseButton',
  'Drawer',
  'DropdownMenu',
  'FileDrop',
  'Files',
  'Form',
  'Hint',
  'InputText',
  'Label',
  'Link',
  'Modal',
  'Pagination',
  'Popover',
  'Radio',
  'Select',
  'Swiper',
  'Table',
  'Tabs',
  'Tag',
  'Text',
  'Textarea',
  'Toast',
  'Toggle',
  'Tooltip',
  'UniversalLink',
]

// Create readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

function askUser(question) {
  return new Promise(resolve => {
    rl.question(question, answer => {
      resolve(answer.toLowerCase().trim())
    })
  })
}

function findBoxComponents(directory) {
  const results = []

  function searchFiles(dir) {
    const files = fs.readdirSync(dir)

    files.forEach(file => {
      const filePath = path.join(dir, file)
      const stat = fs.statSync(filePath)

      if (stat.isDirectory()) {
        searchFiles(filePath)
      } else if (file.endsWith('.ts') || file.endsWith('.tsx')) {
        const content = fs.readFileSync(filePath, 'utf8')

        const components = [...componentTypes, ...componentTypesUnchanged]

        for (const componentType of components) {
          // Skip if component already has a className prop
          if (
            content.includes(`<${componentType}`) &&
            content.match(new RegExp(`<${componentType}[^>]*className=`))
          ) {
            continue
          }
          let startIndex = 0
          while (true) {
            const componentStart = content.indexOf(`<${componentType}`, startIndex)
            if (componentStart === -1) break

            // Find the end of the component tag
            let depth = 0
            let inString = false
            let stringChar = null
            let inTemplate = false
            let templateDepth = 0
            let i = componentStart + componentType.length + 1 // Start after '<ComponentType'

            while (i < content.length) {
              const char = content[i]
              const prevChar = content[i - 1]

              if (!inString && !inTemplate) {
                if (char === '"' || char === "'") {
                  inString = true
                  stringChar = char
                } else if (char === '`') {
                  inTemplate = true
                  templateDepth = 0
                } else if (char === '{') {
                  depth++
                } else if (char === '}') {
                  depth--
                } else if ((char === '>' && depth === 0) || (char === '>' && prevChar === '/')) {
                  // Found the end of the component tag
                  const fullMatch = content.substring(componentStart, i + 1)

                  // Extract props from the full match
                  const propsString = fullMatch
                    .replace(new RegExp(`<${componentType}\\s*`), '')
                    .replace(/\s*\/?>\s*$/, '')

                  const props = {}

                  // Handle both single-line and multi-line prop extraction
                  if (propsString.includes('\n')) {
                    // Multi-line component - use improved parsing similar to single-line
                    let index = 0
                    while (index < propsString.length) {
                      // Skip whitespace and newlines
                      while (index < propsString.length && /\s/.test(propsString[index])) {
                        index++
                      }

                      if (index >= propsString.length) break

                      // Find prop name
                      const propNameMatch = propsString.substring(index).match(/^([\w-]+)=/)
                      if (!propNameMatch) break

                      const propName = propNameMatch[1]
                      index += propNameMatch[0].length

                      // Extract prop value
                      let propValue = ''
                      let isExpression = false

                      if (propsString[index] === '{') {
                        // Handle braced expressions with proper nesting (including multi-line)
                        let braceDepth = 0
                        let valueStart = index
                        isExpression = true

                        do {
                          if (propsString[index] === '{') braceDepth++
                          if (propsString[index] === '}') braceDepth--
                          index++
                        } while (index < propsString.length && braceDepth > 0)

                        // Keep the inner content but mark as expression
                        propValue = propsString.substring(valueStart + 1, index - 1).trim()

                        // If it's a double-braced object {{...}}, remove the outer braces
                        if (propValue.startsWith('{') && propValue.endsWith('}')) {
                          propValue = propValue.slice(1, -1).trim()
                        }
                      } else if (propsString[index] === '"' || propsString[index] === "'") {
                        // Handle quoted strings
                        const quote = propsString[index]
                        index++ // skip opening quote
                        const valueStart = index

                        while (index < propsString.length && propsString[index] !== quote) {
                          if (propsString[index] === '\\') index++ // skip escaped chars
                          index++
                        }

                        propValue = propsString.substring(valueStart, index)
                        index++ // skip closing quote
                      } else {
                        // Handle unquoted values
                        const valueStart = index
                        while (index < propsString.length && !/\s/.test(propsString[index])) {
                          index++
                        }
                        propValue = propsString.substring(valueStart, index)
                      }

                      props[propName] = {
                        isExpression: isExpression,
                        value: propValue,
                      }
                    }
                  } else {
                    // Single-line component - use improved parsing for nested braces
                    let index = 0
                    while (index < propsString.length) {
                      // Skip whitespace
                      while (index < propsString.length && /\s/.test(propsString[index])) {
                        index++
                      }

                      if (index >= propsString.length) break

                      // Find prop name
                      const propNameMatch = propsString.substring(index).match(/^([\w-]+)=/)
                      if (!propNameMatch) break

                      const propName = propNameMatch[1]
                      index += propNameMatch[0].length

                      // Extract prop value
                      let propValue = ''
                      let isExpression = false

                      if (propsString[index] === '{') {
                        // Handle braced expressions with proper nesting
                        let braceDepth = 0
                        let valueStart = index
                        isExpression = true

                        do {
                          if (propsString[index] === '{') braceDepth++
                          if (propsString[index] === '}') braceDepth--
                          index++
                        } while (index < propsString.length && braceDepth > 0)

                        // Keep the inner content but mark as expression
                        propValue = propsString.substring(valueStart + 1, index - 1)
                      } else if (propsString[index] === '"' || propsString[index] === "'") {
                        // Handle quoted strings
                        const quote = propsString[index]
                        index++ // skip opening quote
                        const valueStart = index

                        while (index < propsString.length && propsString[index] !== quote) {
                          if (propsString[index] === '\\') index++ // skip escaped chars
                          index++
                        }

                        propValue = propsString.substring(valueStart, index)
                        index++ // skip closing quote
                      } else {
                        // Handle unquoted values
                        const valueStart = index
                        while (index < propsString.length && !/\s/.test(propsString[index])) {
                          index++
                        }
                        propValue = propsString.substring(valueStart, index)
                      }

                      // Store both value and type information
                      props[propName] = {
                        isExpression: isExpression,
                        value: propValue,
                      }
                    }
                  }

                  results.push({
                    componentType: componentType,
                    file: filePath,
                    line: content.substring(0, componentStart).split('\n').length,
                    matchIndex: componentStart,
                    originalMatch: fullMatch,
                    props: props,
                  })

                  startIndex = i + 1
                  break
                }
              } else if (inString) {
                if (char === stringChar && prevChar !== '\\') {
                  inString = false
                  stringChar = null
                }
              } else if (inTemplate) {
                if (char === '`' && prevChar !== '\\') {
                  inTemplate = false
                } else if (char === '{') {
                  templateDepth++
                } else if (char === '}') {
                  // eslint-disable-next-line @typescript-eslint/no-unused-vars
                  templateDepth--
                }
              }

              i++
            }

            if (i >= content.length) break
          }
        }
      }
    })
  }

  searchFiles(directory)
  return results
}

async function processComponents(components, shouldReplace = false) {
  if (components.length === 0) {
    console.log('No migrated components found.')
    rl.close()
    return
  }

  const fileChanges = {}
  const componentsByFile = {}

  // Group components by file
  components.forEach(component => {
    if (!componentsByFile[component.file]) {
      componentsByFile[component.file] = []
    }
    componentsByFile[component.file].push(component)
  })

  console.log(
    '\n🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀\n\nMigration V9 of Welcome UI\nStyled component to TailwindCss class\n\n🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀\n\n\n===================='
  )

  console.log(shouldReplace ? '🔄 Interactive  component replacement...' : '👀 Preview mode:')
  console.log('====================')

  let totalProcessed = 0
  let totalReplaced = 0
  let totalSkipped = 0

  for (const [filePath, fileComponents] of Object.entries(componentsByFile)) {
    let content = fs.readFileSync(filePath, 'utf8')
    let fileModified = false

    // Sort components by position (reverse order to maintain indices when replacing)
    fileComponents.sort((a, b) => b.matchIndex - a.matchIndex)

    console.log('\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
    console.log(`🔵 Processing file: ${filePath}`)
    console.log(`Found ${fileComponents.length} component(s)`)

    for (let i = 0; i < fileComponents.length; i++) {
      const component = fileComponents[i]
      totalProcessed++

      let classnames = []
      let valuesNotTransformed = []

      if (component.componentType === 'Flex') {
        classnames.push('flex')
      }

      if (component.componentType === 'Grid') {
        classnames.push('grid')
      }

      Object.entries(component.props).forEach(([key, propData]) => {
        const value = propData.value
        const transformedValue = transformValue(key, value)

        // Skip event handlers and special props from being marked as "not transformed"
        if (
          transformedValue === undefined &&
          !key.startsWith('on') &&
          ![
            'aria-label',
            'as',
            'data-testid',
            'href',
            'id',
            'key',
            'ref',
            'rel',
            'src',
            'style',
            'target',
          ].includes(key)
        ) {
          const displayValue = propData.isExpression ? `{${value}}` : `"${value}"`
          valuesNotTransformed.push(`${key}=${displayValue}`)
        }

        if (transformedValue) classnames.push(transformedValue)

        // Special handling for Stack component to ensure flex and direction classes
        if (component.componentType === 'Stack') {
          // Ensure Stack has not already a flex direction class
          if (!classnames.includes('flex')) {
            classnames.push('flex')

            // Default to column if no direction is specified (like the Stack behavior)
            if (!classnames.includes('flex-row')) {
              classnames.push(`flex-col`)
            } else {
              // Remove flex-row if present to avoid useless classes
              classnames = classnames.filter(cn => cn !== 'flex-row')
            }
          }
        }
      })

      const element = componentTypesUnchanged.includes(component.componentType)
        ? component.componentType
        : (component.props.as && component.props.as.value) || 'div'
      const otherProps = Object.entries(component.props)
        .filter(([key]) => {
          // Keep 'as' property for componentTypesUnchanged, filter it out for others
          if (key === 'as') {
            return componentTypesUnchanged.includes(component.componentType)
          }
          return !Object.keys(valueMap).includes(key)
        })
        .map(([key, propData]) => {
          const value = propData.value
          // Handle function expressions and template literals
          if (
            propData.isExpression ||
            value.includes('=>') ||
            value.includes('${') ||
            value.includes('`')
          ) {
            return ` ${key}={${value}}`
          }
          return ` ${key}="${value}"`
        })
        .join('')

      const classAttribute =
        classnames.length > 0 ? ` className="${classnames.sort().join(' ')}"` : ''
      const transformedElement = `<${element}${classAttribute}${otherProps}>`

      // Show transformation details
      console.log(`\n🕵️‍♀️ [${i + 1}/${fileComponents.length}] Line ${component.line}`)
      console.log('━━━━━━━━━━━━━━━━')

      // Convert props back to display format for readable output
      const displayProps = {}
      Object.entries(component.props).forEach(([key, propData]) => {
        displayProps[key] = propData.isExpression ? `{${propData.value}}` : propData.value
      })
      console.log(`🔷 Original: ${component.componentType}`)
      console.log('📋 Properties:', JSON.parse(JSON.stringify(displayProps, null, 2)))
      console.log(`2️⃣  Transformed: ${transformedElement}`)

      if (valuesNotTransformed.length > 0) {
        console.log(`❌ Values not transformed: ${valuesNotTransformed.join(', ')}`)
      }

      if (shouldReplace) {
        console.log('\n🤔 What would you like to do?')
        console.log('  r) Replace this component')
        console.log('  s) Skip this component')
        console.log('  q) Quit the script')

        const answer = await askUser('Your choice (r/s/q): ')

        if (answer === 'q' || answer === 'quit') {
          console.log('\n🛑 Script stopped by user.')
          if (fileModified) {
            console.log(`💾 Saving changes to ${filePath}...`)
            fileChanges[filePath] = content
          }
          break
        } else if (answer === 's' || answer === 'skip') {
          console.log('⏭️  Skipped this component.')
          totalSkipped++
          continue
        } else if (answer === 'r' || answer === 'replace') {
          // Apply the transformation
          const startIndex = component.matchIndex
          const originalMatch = component.originalMatch

          // Check if it's a self-closing component
          const isSelfClosing = originalMatch.endsWith('/>')

          if (isSelfClosing) {
            // Handle self-closing Box components
            const selfClosingElement =
              element === 'div'
                ? `<${element}${classAttribute}${otherProps}></${element}>`
                : `<${element}${classAttribute}${otherProps} />`

            content =
              content.substring(0, startIndex) +
              selfClosingElement +
              content.substring(startIndex + originalMatch.length)
            fileModified = true
          } else {
            // Handle regular components with children
            // Find the matching closing tag
            let depth = 0
            let searchIndex = startIndex + originalMatch.length
            let endIndex = -1
            const componentType = component.componentType

            while (searchIndex < content.length) {
              const remainingContent = content.substring(searchIndex)
              const openComponentMatch = remainingContent.match(
                new RegExp(`^<${componentType}(\\s|>)`)
              )
              const closeComponentMatch = remainingContent.match(
                new RegExp(`^<\\/${componentType}>`)
              )

              if (openComponentMatch) {
                depth++
                searchIndex += openComponentMatch[0].length
              } else if (closeComponentMatch) {
                if (depth === 0) {
                  endIndex = searchIndex
                  break
                }
                depth--
                searchIndex += closeComponentMatch[0].length
              } else {
                searchIndex++
              }
            }

            if (endIndex !== -1) {
              // Extract the content between opening and closing tags
              const componentContent = content.substring(
                startIndex + originalMatch.length,
                endIndex
              )
              const replacement = `${transformedElement}${componentContent}</${element}>`
              const closingTagLength = componentType.length + 3 // +3 for "</" and ">"

              content =
                content.substring(0, startIndex) +
                replacement +
                content.substring(endIndex + closingTagLength)
              fileModified = true
            } else {
              console.log(`❌ Could not find matching closing tag for ${componentType} component`)
              totalSkipped++
              continue
            }
          }

          console.log('✅ Component replaced!')
          totalReplaced++
        } else {
          console.log('❓ Invalid choice. Skipping this component.')
          totalSkipped++
        }
      }
    }

    // If we're in replace mode and file was modified, save it
    if (shouldReplace && fileModified) {
      fileChanges[filePath] = content
    }
  }

  // Write all changes
  if (shouldReplace && Object.keys(fileChanges).length > 0) {
    console.log('\n💾 Saving changes to files...')
    Object.entries(fileChanges).forEach(([filePath, content]) => {
      fs.writeFileSync(filePath, content, 'utf8')
      console.log(`✅ Updated: ${filePath}`)
    })
  }

  // Show summary
  console.log('\n📊 Summary:')
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
  console.log(`📦 Total components processed: ${totalProcessed}`)
  if (shouldReplace) {
    console.log(`✅ Components replaced: ${totalReplaced}`)
    console.log(`⏭️  Components skipped: ${totalSkipped}`)
    console.log(`📁 Files updated: ${Object.keys(fileChanges).length}`)
  }

  if (!shouldReplace) {
    console.log('\n💡 Use --replace to start interactive replacement mode')
  }

  rl.close()
}

function transform(key, value, forceValue = false) {
  if (typeof value === 'string') {
    // Check if this looks like responsive object content without braces
    if (!value.startsWith('{') && value.includes(':') && !value.includes('?')) {
      value = `{${value}}`
    }

    if (value.startsWith('{')) {
      try {
        let cleanValue = value
          .replace(/\n\s*/g, ' ') // Replace newlines and indentation with spaces
          .replace(/'/g, '"')
          .replace(/([\w_]+):/g, '"$1":')
          .replace(/:\s*([a-zA-Z_][a-zA-Z0-9_\s]*)\s*([,}])/g, (match, p1) => {
            // Replace spaces with underscores in the value part
            const valueWithUnderscores = p1.replace(/\s+/g, '_')
            return `:"${valueWithUnderscores}"${match.slice(-1)}`
          })
          .replace(/,\s*}/g, '}') // Remove trailing commas before closing braces
          .trim()

        // Wrap in braces if not already wrapped
        if (!cleanValue.startsWith('{')) {
          cleanValue = `{${cleanValue}}`
        }

        const parsedValue = JSON.parse(cleanValue)
        return Object.entries(parsedValue)
          .map(([breakpoint, val]) => {
            if (breakpoint === '_' || breakpoint === 'xs') {
              return transform(key, val, forceValue)
            }
            return `${breakpoint}:${transform(key, val, forceValue)}`
          })
          .join(' ')
      } catch (error) {
        console.warn(`Failed to parse object value for ${key}:`, value, error.message)
        return undefined
      }
    }

    if (value.includes('?') || value.includes(':')) {
      return `${key}_{{ ${value} }}_CSS_TO_EDIT`
    }
  }

  if (value === '100%') {
    // If the value is '100%', return a full width class
    return `${key}-full`
  } else if (value.includes('calc')) {
    return `${key}_${value}_CSS_TO_EDIT`
  } else if (!isNaN(value)) {
    const isNumber = !isNaN(parseFloat(value))

    // If the value is 0 or '0', return a specific class
    if (value === 0 || value === '0') {
      return `${key}-0`
    }

    // Convert pixel values to rem for num values
    // Tailwind uses 1rem = 16px by default
    // Handle negative values for positioning
    if (isNumber) {
      let keyFormatted = key
      let valueFormatted = value

      if (value < 0) {
        keyFormatted = `-${key}`
        valueFormatted = value.substring(1)
      }

      return `${keyFormatted}-[${valueFormatted / 16}rem]`
    }
    // For other numeric values, return as is with the key
    return `${key}-[${value}]`
  } else {
    return transformSpecificValue(`${key ? `${key}-` : ''}${value}`)
  }
}

function transformSpecificValue(value) {
  // Handle specific cases for grid-cols to match Tailwind's grid system
  if (value.includes('grid-cols')) {
    if (value === 'grid-cols-1fr') return 'grid-cols-1'
    if (value === 'grid-cols-1fr 1fr') return 'grid-cols-2'
    if (value === 'grid-cols-1fr 1fr 1fr') return 'grid-cols-3'
    if (value === 'grid-cols-1fr 1fr 1fr 1fr') return 'grid-cols-4'
    return `grid-cols_${value}_CSS_TO_EDIT`
  } else {
    return value
  }
}

const valueMap = {
  // <Flex />
  align: value => transform('items', value),
  alignItems: value => transform('items', value).replace('flex-', ''),
  background: value => `background_${value}_CSS_TO_EDIT`,
  backgroundColor: value => transform('bg', value),
  backgroundSize: value => transform('bg-size', value),
  // <Flex />
  basis: value => transform('basis', value),
  border: value => {
    if (value === '1px solid') return transform('border', value.replace('1px solid', ''))
    if (value === 'none') return transform('border', value.replace('1px solid', '[none]'))
    return `border_${value}_CSS_TO_EDIT`
  },
  borderBottom: value => {
    if (value === '1px solid') return transform('border', value.replace('1px solid', 'b'))
    if (value === 'none') return transform('border', value.replace('1px solid', 'b-[none]'))
    return `borderBottom_${value}_CSS_TO_EDIT`
  },
  borderBottomColor: value => transform(`border-b`, value),
  borderColor: value => transform('border', value),
  borderRadius: value => transform('rounded', value),
  borderTop: value => {
    if (value === '1px solid') return transform('border', value.replace('1px solid', 't'))
    if (value === 'none') return transform('border', value.replace('1px solid', 't-[none]'))
    return `borderBottom_${value}_CSS_TO_EDIT`
  },
  borderTopColor: value => transform(`border-t`, value),
  bottom: value => transform('bottom', value),
  br: value => transform('rounded', value),
  color: value => transform('text', value),
  // <Grid />
  column: value => transform('cols', value),
  // <Grid />
  columnGap: value => transform('gap-x', value),
  cursor: value => transform('cursor', value),
  // <Flex />
  direction: value => transform(`flex`, value.replace('column', 'col')),
  display: value => {
    return transform(null, value.replace('none', 'hidden'))
  },
  flex: value => {
    if (value === '0 0 auto') return 'flex-initial'
    return transform('flex', value)
  },
  flexDirection: value => transform(`flex`, value.replace('column', 'col')),
  flexShrink: value => transform('shrink', value),
  flexWrap: value => transform('flex', value),
  fontSize: value => transform('text', value),
  fontWeight: value => {
    if (value.toString() === '400') return 'font-normal'
    if (value.toString() === '500') return 'font-medium'
    if (value.toString() === '600') return 'font-bold'
    return transform('font', value)
  },
  gap: value => transform('gap', value),
  gridTemplateColumns: value => transform('grid-cols', value, true),
  // <Flex />
  grow: value => transform('grow', value),
  h: value => transform('h', value),
  // <Flex />
  justify: value => transform('justify', value),
  justifyContent: value => transform('justify', value.replace('space-', '').replace('flex-', '')),
  left: value => transform('left', value),
  lineHeight: value => transform('leading', value),
  listStyleType: value => transform('list', value),
  m: value => (value === '0 auto' ? 'mx-auto' : transform('m', value)),
  margin: value => (value === '0 auto' ? 'mx-auto' : transform('m', value)),
  maxW: value => transform('max-w', value),
  maxWidth: value => transform('max-w', value),
  mb: value => transform('mb', value),
  minWidth: value => transform('min-w', value),
  ml: value => transform('ml', value),
  mr: value => transform('mr', value),
  mt: value => transform('mt', value),
  opacity: value => transform('opacity', value * 100),
  overflow: value => transform('overflow', value),
  overflowX: value => transform('overflow-x', value),
  overflowY: value => transform('overflow-y', value),
  p: value => transform('p', value),
  padding: value => transform('p', value),
  pb: value => transform('pb', value),
  pl: value => transform('pl', value),
  position: value => value,
  pr: value => transform('pr', value),
  pt: value => transform('pt', value),
  px: value => transform('px', value),
  py: value => transform('py', value),
  right: value => transform('right', value),
  // <Grid />
  row: value => transform('row', value),
  // <Grid />
  rowGap: value => transform('gap-y', value),
  // <Flex />
  shrink: value => transform('shrink', value),
  // <Stack />
  spacing: value => transform('gap', value),
  // <Grid />
  templateColumns: value => transform('grid-cols', value, true),
  textAlign: value => transform('text', value),
  textDecoration: value => `textDecoration_${value}_CSS_TO_EDIT`,
  top: value => transform('top', value),
  transition: value => `transition_${value}_CSS_TO_EDIT'`,
  w: value => transform('w', value),
  whiteSpace: value => transform('whitespace', value),
  // <Flex />
  wrap: value => transform('flex', value),
}

// Run the script
async function main() {
  const searchDirectory = process.argv[2] || './src'
  const shouldReplace = process.argv[3] === '--replace'

  const components = findBoxComponents(searchDirectory)
  await processComponents(components, shouldReplace)
}

function transformValue(key, value) {
  const transformer = valueMap[key]
  return transformer ? transformer(value) : undefined
}

main().catch(error => {
  console.error('Script failed:', error)
  rl.close()
  process.exit(1)
})
