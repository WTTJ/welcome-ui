import { css } from 'styled-components'
import _get from 'lodash.get'

import { hexToRGB } from '../utils/hexToRGB'

const getThemeValue = (theme, path) => {
  const value = _get(theme, path)
  if (process.env.NODE_ENV !== 'production') {
    if (value === undefined) {
      // eslint-disable-next-line no-console
      console.warn(`${path} is not available in this theme`)
    } else if (typeof value !== 'string' && typeof value !== 'number') {
      // eslint-disable-next-line no-console
      console.warn(`${path} is returning an object rather than a value`, value)
    }
  }

  return value
}

const rgba = (theme, path, opacity) => {
  const value = getThemeValue(theme, `colors.${path.join('.')}`)
  return `rgba(${hexToRGB(value)}, ${opacity})`
}

export const get = (path, fallback) => ({ theme }) => {
  const [key, ...rest] = path.split('.')
  if (key === 'rgba') {
    return rgba(theme, rest, fallback)
  }

  const value = getThemeValue(theme, path, fallback)
  return value
}

export const getCss = (path, fallback) => ({ theme }) => {
  const value = getThemeValue(theme, path)
  if (!value) {
    return fallback
  }

  if (typeof value !== 'string') {
    return css`
      ${value}
    `
  }

  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    console.warn(`${path} is returning a value rather than CSS`, value)
  }

  return value
}
