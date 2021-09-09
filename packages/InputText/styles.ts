import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'
import { componentSystem, shouldForwardProp, system } from '@welcome-ui/system'
import { defaultFieldStyles } from '@welcome-ui/utils'

import { InputTextOptions } from './index'

export const InputText = styled('input').withConfig({ shouldForwardProp })<InputTextOptions>(
  ({ connected, icon, iconPlacement, isClearable, size, ...rest }) => css`
    ${defaultFieldStyles};
    text-overflow: ellipsis;

    ${icon &&
    iconPlacement === 'left' &&
    css`
      padding-left: ${icon ? th(`defaultFields.sizes.${size}.height`)(rest) : null};
    `}
    ${((icon && iconPlacement === 'right') || isClearable) &&
    css`
      padding-right: ${icon ? th(`defaultFields.sizes.${size}.height`)(rest) : null};
    `}

    ${connected ? componentSystem : system};
  `
)

export const Wrapper = styled.div`
  position: relative;
`
