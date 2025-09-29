// Value transformation helpers for upgrade-v9.mjs

export function transform(key, value, forceValue = false) {
  if (typeof value === 'string') {
    if (!value.startsWith('{') && value.includes(':') && !value.includes('?')) {
      value = `{${value}}`
    }
    if (value.startsWith('{')) {
      try {
        let cleanValue = value
          .replace(/\n\s*/g, ' ')
          .replace(/'/g, '"')
          .replace(/([\w_]+):/g, '"$1":')
          .replace(/:\s*([a-zA-Z_][a-zA-Z0-9_\s]*)\s*([,}])/g, (match, p1) => {
            const valueWithUnderscores = p1.replace(/\s+/g, '_')
            return `:"${valueWithUnderscores}"${match.slice(-1)}`
          })
          .replace(/,\s*}/g, '}')
          .trim()
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
        // eslint-disable-next-line no-console
        console.warn(`Failed to parse object value for ${key}:`, value, error.message)
        return undefined
      }
    }
    if (value.includes('?') || value.includes(':')) {
      return `${key}_{{ ${value} }}_CSS_TO_EDIT`
    }
  }
  if (value === '100%') {
    return `${key}-full`
  } else if (value.includes('calc')) {
    return `${key}_${value}_CSS_TO_EDIT`
  } else if (value === null || value === '') {
    return key
  } else if (!isNaN(value)) {
    const isNumber = !isNaN(parseFloat(value))
    if (value === 0 || value === '0') {
      return `${key}-0`
    }
    if (value === 1 || value === '1') {
      return `${key}-1`
    }
    if (isNumber) {
      let keyFormatted = key
      let valueFormatted = value
      if (value < 0) {
        keyFormatted = `-${key}`
        valueFormatted = value.substring(1)
      }
      return `${keyFormatted}-[${valueFormatted / 16}rem]`
    }
    return `${key}-[${value}]`
  } else {
    return transformSpecificValue(`${key ? `${key}-` : ''}${value}`)
  }
}

export function transformSpecificValue(value) {
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

export const valueMap = {
  align: value => transform('items', value),
  alignItems: value => transform('items', value).replace('flex-', ''),
  background: value => `background_${value}_CSS_TO_EDIT`,
  backgroundColor: value => transform('bg', value),
  backgroundSize: value => transform('bg-size', value),
  basis: value => transform('basis', value),
  border: value => {
    if (value === '1px solid') return 'border'
    if (value === 'none') return 'border-[none]'
    return `border_${value}_CSS_TO_EDIT`
  },
  borderBottom: value => {
    if (value === '1px solid') return 'border-b'
    if (value === 'none') return 'border-b-[none]'
    return `borderBottom_${value}_CSS_TO_EDIT`
  },
  borderBottomColor: value => transform(`border-b`, value),
  borderColor: value => transform('border', value),
  borderRadius: value => transform('rounded', value),
  borderTop: value => {
    if (value === '1px solid') return 'border-t'
    if (value === 'none') return 'border-t-[none]'
    return `borderTop_${value}_CSS_TO_EDIT`
  },
  borderTopColor: value => transform(`border-t`, value),
  bottom: value => transform('bottom', value),
  br: value => transform('rounded', value),
  color: value => transform('text', value),
  column: value => transform('cols', value),
  columnGap: value => transform('gap-x', value),
  cursor: value => transform('cursor', value),
  direction: value => transform(`flex`, value.replace('column', 'col')),
  display: value => {
    if (value === 'none') return 'hidden'
    return transform(null, value)
  },
  flex: value => {
    if (value === '0 0 auto') return 'flex-initial'
    return transform('flex', value)
  },
  flexDirection: value => transform(`flex`, value.replace('column', 'col')),
  flexGrow: value => transform('grow', value.replace(/^1$/, '')),
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
  h: value => transform('h', value),
  justify: value => transform('justify', value),
  justifyContent: value => transform('justify', value.replace('space-', '').replace('flex-', '')),
  left: value => transform('left', value),
  lineHeight: value => transform('leading', value),
  listStyleType: value => transform('list', value),
  m: value => (value === '0 auto' ? 'mx-auto' : transform('m', value)),
  margin: value => (value === '0 auto' ? 'mx-auto' : transform('m', value)),
  maxH: value => transform('max-h', value),
  maxHeight: value => transform('max-h', value),
  maxW: value => transform('max-w', value),
  maxWidth: value => transform('max-w', value),
  mb: value => transform('mb', value),
  minH: value => transform('min-h', value),
  minHeight: value => transform('min-h', value),
  minW: value => transform('min-w', value),
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
  row: value => transform('row', value),
  rowGap: value => transform('gap-y', value),
  shrink: value => transform('shrink', value),
  spacing: value => transform('gap', value),
  templateColumns: value => transform('grid-cols', value, true),
  textAlign: value => transform('text', value),
  textDecoration: value => `textDecoration_${value}_CSS_TO_EDIT`,
  top: value => transform('top', value),
  transition: value => `transition_${value}_CSS_TO_EDIT`,
  w: value => transform('w', value),
  whiteSpace: value => transform('whitespace', value),
  wrap: value => transform('flex', value),
}

export function transformValue(key, value) {
  const transformer = valueMap[key]
  return transformer?.(value)
}
