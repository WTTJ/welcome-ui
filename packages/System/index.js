import { compose } from '@xstyled/system'
import * as S from '@xstyled/system'

const SYSTEM_PROPS = Object.freeze([
  S.backgrounds,
  S.basics,
  S.borders,
  S.boxShadow,
  S.color,
  S.display,
  S.flexboxes,
  S.grids,
  S.height,
  S.maxHeight,
  S.maxWidth,
  S.minHeight,
  S.minWidth,
  S.positioning,
  S.space,
  S.typography,
  S.verticalAlign,
  S.width
])

const WRAPPER_PROPS = Object.freeze([
  S.margin,
  S.marginBottom,
  S.marginLeft,
  S.marginRight,
  S.marginTop,
  S.mx,
  S.my,
  S.positioning,
  S.width
])

export const system = compose(...SYSTEM_PROPS)
export const wrapperSystem = compose(...WRAPPER_PROPS)
const componentProps = system.meta.props
  .filter(prop => !wrapperSystem.meta.props.includes(prop))
  .map(prop => S[prop])
  .filter(Boolean)
export const componentSystem = compose(...componentProps)

export const filterSystemProps = prop => !system.meta.props.includes(prop)
export const shouldForwardProp = (prop, defaultValidatorFn) => defaultValidatorFn(prop)
