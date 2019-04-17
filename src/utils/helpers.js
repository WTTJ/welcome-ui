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
    const value = get(props, ['theme', 'text', key])
    const { size, weight, transform, spacing } = value
    const { fontSize, fontWeight, letterSpacing } = props.theme
    return css`
      font-size: ${size && fontSize ? fontSize[size] : 'inherit'};
      font-weight: ${weight && fontWeight ? fontWeight[weight] : 'inherit'};
      text-transform: ${transform ? transform : null};
      letter-spacing: ${spacing && letterSpacing ? letterSpacing[spacing] : null};
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
