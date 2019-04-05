import { css } from 'styled-components'
import get from 'lodash.get'
import concat from 'lodash.concat'

import theme from '../theme/core'
import hexToRGB from './hexToRGB'

let themeHelpers = Object.keys(theme).reduce((acc, key) => {
  return {
    ...acc,
    [key]: (...path) => props => {
      props = props.hasOwnProperty() ? props : { theme }
      const value = get(props, ['theme', key, ...path])
      if (process.env.NODE_ENV === 'development' && value === undefined) {
        console.warn(`${key}[${[...path]}] is not available in this theme`)
      }

      return value
    }
  }
}, {})

themeHelpers.rgba = (...args) => {
  return props => {
    const opacity = args[args.length - 1]
    const path = args.slice(0, -1)
    const color = get(props, ['theme', 'color', ...path]) || args[0] // Handle rgba('#COFFEE', 0.3)

    return `rgba(${hexToRGB(color)}, ${opacity})`
  }
}

themeHelpers.centeredContainerWidth = (...path) => {
  return props => {
    const basename = ['theme', 'centeredContainerWidth']
    const pathname = props.width || (path.length && [...path]) || 'lg'
    return get(props, concat(basename, pathname))
  }
}

themeHelpers.textStyles = key => {
  return props => {
    const value = get(props, ['theme', 'text', key])
    const { size, weight, transform, spacing } = value
    return css`
      font-size: ${size ? themeHelpers.fontSize(size) : 'inherit'};
      font-weight: ${weight ? themeHelpers.fontWeight(weight) : 'inherit'};
      text-transform: ${transform ? transform : null};
      letter-spacing: ${spacing ? themeHelpers.letterSpacing(spacing) : null};
    `
  }
}

export const transition = themeHelpers.transition
export const textStyles = themeHelpers.textStyles
export const roundedButtonSize = themeHelpers.roundedButtonSize
export const rgba = themeHelpers.rgba
export const letterSpacing = themeHelpers.letterSpacing
export const radius = themeHelpers.radius
export const gutter = themeHelpers.gutter
export const color = themeHelpers.color
export const fontFace = themeHelpers.fontFace
export const fontSize = themeHelpers.fontSize
export const fontFamily = themeHelpers.fontFamily
export const fontWeight = themeHelpers.breakpoint
export const breakpoint = themeHelpers.breakpoint
export const boxShadow = themeHelpers.boxShadow
