import _get from 'lodash.get'

import { hexToRGB } from '../utils/'

const getThemeValue = (theme, path) => {
  const value = _get(theme, path)
  if (process.env.NODE_ENV !== 'production') {
    if (value === undefined) {
      // eslint-disable-next-line no-console
      console.warn(`${path} is not available in this theme`)
    }
  }

  return value
}

const rgba = (theme, path, opacity) => {
  const value = getThemeValue(theme, `colors.${path.join('.')}`)
  if (value && typeof value === 'string') {
    return `rgba(${hexToRGB(value)}, ${opacity})`
  } else {
    return undefined
  }
}

export const get = (path, fallback) => ({ theme }) => {
  const [key, ...rest] = path.split('.')
  if (key === 'rgba') {
    return rgba(theme, rest, fallback)
  }

  const value = getThemeValue(theme, path, fallback)

  if (
    process.env.NODE_ENV !== 'production' &&
    value &&
    typeof value !== 'string' &&
    typeof value !== 'number'
  ) {
    // eslint-disable-next-line no-console
    console.warn(`${path} is returning an object rather than a value`, value)
  }

  return value
}
