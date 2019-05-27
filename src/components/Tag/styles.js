import styled, { css } from 'styled-components'

import { system } from '../../utils/utils'
import { getVariantColor } from '../../utils/variants'
import { get, getCss } from '../../theme/helpers'

const oneCharacterStyles = size => css`
  ${getCss(`tags.oneCharacter.${size}`)}
  padding: 0;
`

export const Tag = styled.div(
  props => css`
    ${getCss('tags.default')};
    ${getCss(`tags.sizes.${props.size}`)}
    ${props.variant !== 'default' && getCss('tags.variants')};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: ${getVariantColor(props.variant)};
    border-radius: ${props.rounded ? '1em' : get('radii.md')};
    ${system};
    ${props.length === 1 && oneCharacterStyles(props.size)};
  `
)
