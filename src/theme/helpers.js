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
  const value = getThemeValue(theme, ['text', ...path])
  const props = { ...DEFAULT_TEXT_STYLES, ...value }
  const styles = css`
    font-family: ${getThemeValue(theme, ['fontFamily', props.family])};
    font-size: ${getThemeValue(theme, ['fontSize', props.size])};
    font-weight: ${getThemeValue(theme, ['fontWeight', props.weight])};
    text-transform: ${props.transform};
    letter-spacing: ${getThemeValue(theme, ['letterSpacing', props.spacing])};
  `
  return styles
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
