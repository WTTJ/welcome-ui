import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'

import { fieldStyles } from '../common/styles/form'
import { componentSystem, filterComponent, system } from '../utils/system'

export const InputText = styled(filterComponent('input'))(
  ({ connected, icon, iconPlacement, isClearable, size, ...rest }) => css`
    ${fieldStyles};

    ${icon &&
      iconPlacement === 'left' &&
      css`
        padding-left: ${icon ? th(`fields.sizes.${size}.height`)(rest) : null};
      `}
    ${((icon && iconPlacement === 'right') || isClearable) &&
      css`
        padding-right: ${icon ? th(`fields.sizes.${size}.height`)(rest) : null};
      `}

    ${connected ? componentSystem : system};
  `
)

export const Wrapper = styled.div`
  position: relative;
`
