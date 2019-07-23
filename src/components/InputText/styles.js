import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'

import { fieldStyles } from '../../common/styles/form'
import { system } from '../../utils/'

// TODO: Remove magic number
export const InputText = styled.input(
  ({ icon, iconPlacement, size, ...rest }) => css`
    ${fieldStyles};
    ${system};

    ${icon &&
      iconPlacement === 'left' &&
      css`
        padding-left: ${icon ? th(`fields.sizes.${size}.height`)(rest) : null};
      `}
    ${icon &&
      iconPlacement === 'right' &&
      css`
        padding-right: ${icon ? th(`fields.sizes.${size}.height`)(rest) : null};
      `}
  `
)

export const Wrapper = styled.div`
  position: relative;
`
