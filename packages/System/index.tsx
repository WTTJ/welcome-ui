import { compose } from '@xstyled/system'
import { getPx, getTransition, getZIndex, style } from '@xstyled/styled-components'
import * as S from '@xstyled/system'

// Those are styles that were in v1 but not in v2
const oldProps = compose(
  style({ prop: 'opacity' }),
  style({ prop: 'overflow' }),
  style({ prop: 'transition', themeGet: getTransition }),
  style({ prop: 'position' }),
  style({ prop: 'zIndex', themeGet: getZIndex }),
  style({ prop: 'top', themeGet: getPx }),
  style({ prop: 'right', themeGet: getPx }),
  style({ prop: 'bottom', themeGet: getPx }),
  style({ prop: 'left', themeGet: getPx })
)

const SYSTEM_PROPS = Object.freeze([
  S.backgrounds,
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
  S.space,
  S.typography,
  S.verticalAlign,
  S.width,
  oldProps
])

const WRAPPER_PROPS = Object.freeze([
  S.margin,
  S.marginBottom,
  S.marginLeft,
  S.marginRight,
  S.marginTop,
  S.mx,
  S.my,
  S.width,
  oldProps
])

export const system = compose(...SYSTEM_PROPS)
export const wrapperSystem = compose(...WRAPPER_PROPS)
const componentProps = system.meta.props
  .filter(prop => !wrapperSystem.meta.props.includes(prop))
  .map(prop => {
    if (prop === 'w') return S['width']
    if (prop === 'h') return S['height']
    // @ts-ignore
    return S[prop]
  })
  .filter(Boolean)
export const componentSystem = compose(...componentProps)

export const filterSystemProps = (prop: string) => !system.meta.props.includes(prop)
export const shouldForwardProp = (prop: string, defaultValidatorFn: (prop: string) => boolean) =>
  defaultValidatorFn(prop)
