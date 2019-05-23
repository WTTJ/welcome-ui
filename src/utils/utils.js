import { css } from 'styled-components'
import {
  alignContent,
  alignItems,
  alignSelf,
  borders,
  compose,
  flex,
  flexBasis,
  flexDirection,
  flexWrap,
  fontSize,
  fontWeight,
  justifyContent,
  justifySelf,
  order,
  space,
  width
} from 'styled-system'

export const system = compose(
  alignContent,
  alignItems,
  alignSelf,
  borders,
  flex,
  flexBasis,
  flexDirection,
  flexWrap,
  fontSize,
  fontWeight,
  justifyContent,
  justifySelf,
  order,
  space,
  width
)

export const overflowEllipsis = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
