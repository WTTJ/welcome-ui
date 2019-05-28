import { css } from 'styled-components'
import {
  alignContent,
  alignItems,
  alignSelf,
  background,
  backgroundColor,
  borders,
  compose,
  display,
  flex,
  flexBasis,
  flexDirection,
  flexWrap,
  fontSize,
  fontWeight,
  height,
  justifyContent,
  justifySelf,
  order,
  space,
  textAlign,
  width
} from 'styled-system'

export const system = compose(
  alignContent,
  alignItems,
  alignSelf,
  background,
  backgroundColor,
  borders,
  display,
  flex,
  flexBasis,
  flexDirection,
  flexWrap,
  fontSize,
  fontWeight,
  height,
  justifyContent,
  justifySelf,
  order,
  space,
  textAlign,
  width
)

export const overflowEllipsis = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
