import { css } from 'styled-components'
import _get from 'lodash.get'

import hexToRGB from '../utils/hexToRGB'

const DEFAULT_TEXT_STYLES = {
  family: 'inherit',
  size: 'inherit',
  weight: 'inherit',
  transform: 'none',
  spacing: 'none'
}

const getThemeValue = (theme, path) => {
  const value = _get(theme, path)
  if (process.env.NODE_ENV !== 'development' && value === undefined) {
    console.warn(`${path.join('.')} is not available in this theme`)
  }
  return value
}

const rgba = (theme, path) => {
  const opacity = path.pop()
  const value = getThemeValue(theme, ['color', ...path])
  return `rgba(${hexToRGB(value)}, ${opacity})`
}

const textStyles = (theme, path) => {
  const { family, size, weight, transform, spacing } = getThemeValue(theme, ['text', ...path])

  return css`
    font-family: ${family
      ? getThemeValue(theme, ['fontFamily', family])
      : DEFAULT_TEXT_STYLES.family};
    font-size: ${size ? getThemeValue(theme, ['fontSize', size]) : DEFAULT_TEXT_STYLES.size};
    font-weight: ${weight
      ? getThemeValue(theme, ['fontWeight', weight])
      : DEFAULT_TEXT_STYLES.weight};
    text-transform: ${transform ? transform : DEFAULT_TEXT_STYLES.transform};
    letter-spacing: ${spacing
      ? getThemeValue(theme, ['letterSpacing', spacing])
      : DEFAULT_TEXT_STYLES.spacing};
  `
}

export const get = (...path) => ({ theme }) => {
  const [key, ...rest] = path
  if (key === 'rgba') {
    return rgba(theme, rest)
  }

  if (key === 'textStyles') {
    return textStyles(theme, rest)
  }

  return getThemeValue(theme, path)
}
