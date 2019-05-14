import { css } from 'styled-components'
import _get from 'lodash.get'

import hexToRGB from '../utils/hexToRGB'

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

export const get = (...path) => ({ theme }) => {
  const [key, ...rest] = path
  if (key === 'rgba') {
    return rgba(theme, rest)
  }

  return getThemeValue(theme, path)
}

export const getCss = (...path) => ({ theme }) => {
  const value = getThemeValue(theme, path)
  if (typeof value !== 'string') {
    return css`
      ${value}
    `
  }
  if (process.env.NODE_ENV !== 'development') {
    console.warn(`${path.join('.')} is not returning CSS but a value`)
  }
  return value
}
