import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'

import { system } from '../../utils/utils'
import { getVariantColor } from '../../utils/variants'

const oneCharacterStyles = size => css`
  ${th(`tags.oneCharacter.${size}`)}
  padding: 0;
`

export const Tag = styled.div(
  props => css`
    ${th('tags.default')};
    ${th(`tags.sizes.${props.size}`)}
    ${props.variant !== 'default' && th('tags.variants')};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: ${getVariantColor(props.variant)};
    border-radius: ${props.rounded ? '1em' : 'md'};
    ${system};
    ${props.length === 1 && oneCharacterStyles(props.size)};
  `
)
