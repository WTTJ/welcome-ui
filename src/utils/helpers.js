import { css } from 'styled-components'
import get from 'lodash.get'
import concat from 'lodash.concat'

import hexToRGB from './hexToRGB'

let helpers = {}

helpers.rgba = (...args) => {
  return props => {
    const opacity = args[args.length - 1]
    const path = args.slice(0, -1)
    const color = get(props, ['theme', 'color', ...path]) || args[0] // Handle rgba('#COFFEE', 0.3)

    return `rgba(${hexToRGB(color)}, ${opacity})`
  }
}

helpers.centeredContainerWidth = (...path) => {
  return props => {
    const basename = ['theme', 'centeredContainerWidth']
    const pathname = props.width || (path.length && [...path]) || 'lg'
    return get(props, concat(basename, pathname))
  }
}

helpers.textStyles = key => {
  return props => {
    const { fontSize, fontWeight, letterSpacing } = props.theme
    let defaultValues = {
      size: 'inherit',
      weight: 'inherit',
      transform: null,
      spacing: null
    }
    const value = get(props, ['theme', 'text', key])
    if (value) {
      const { size, weight, transform, spacing } = value
      defaultValues = {
        ...defaultValues,
        size: fontSize[size],
        weight: fontWeight[weight],
        transform: transform,
        spacing: letterSpacing[spacing]
      }
    }
    return css`
      font-size: ${defaultValues.size};
      font-weight: ${defaultValues.weight};
      text-transform: ${defaultValues.transform};
      letter-spacing: ${defaultValues.spacing};
    `
  }
}
export const createHelpers = theme => {
  const defaultHelpers = Object.keys(theme).reduce((acc, key) => {
    return {
      ...acc,
      [key]: (...path) => props => {
        if (!props.theme) {
          props = { ...props, theme }
        }
        const value = get(props, ['theme', key, ...path])
        if (process.env.NODE_ENV === 'development' && value === undefined) {
          console.warn(`${key}[${[...path]}] is not available in this theme`)
        }

        return value
      }
    }
  }, {})

  return { ...defaultHelpers, ...helpers }
}

export const { centeredContainerWidth, rgba, textStyles } = helpers

export default createHelpers
