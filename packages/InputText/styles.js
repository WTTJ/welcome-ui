import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'
import { componentSystem, filterFieldComponent, system } from '@welcome-ui/system'
import { fieldStyles } from '@welcome-ui/utils'

export const InputText = styled(filterFieldComponent('input'))(
  ({ connected, icon, iconPlacement, isClearable, size, ...rest }) => css`
    ${fieldStyles};
    text-overflow: ellipsis;

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
