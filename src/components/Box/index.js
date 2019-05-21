import styled from 'styled-components'
import { color, flex, fontSize, order, space, width } from 'styled-system'

export const Box = styled.div(
  props => css`
    ${color};
    ${flex};
    ${fontSize};
    ${order};
    ${space};
    ${width};
  `
)
