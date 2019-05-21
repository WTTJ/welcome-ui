import styled, { css } from 'styled-components'
import { alignSelf, color, flex, fontSize, order, space, width } from 'styled-system'

export const Box = styled.div(
  props => css`
    ${alignSelf};
    ${color};
    ${flex};
    ${fontSize};
    ${order};
    ${space};
    ${width};
  `
)
