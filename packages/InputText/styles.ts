import styled, { css, system } from '@xstyled/styled-components'
import { shouldForwardProp } from '@welcome-ui/system'
import { defaultFieldStyles } from '@welcome-ui/utils'

import { InputTextOptions } from './index'

export const InputText = styled('input').withConfig({ shouldForwardProp })<InputTextOptions>(
  ({ icon, iconPlacement, isClearable, size, variant }) => css`
    ${defaultFieldStyles({ size, variant })};
    text-overflow: ellipsis;

    /* With icon */
    ${icon &&
    iconPlacement === 'left' &&
    css`
      padding-left: 36;
    `};

    /* With clear button or right icon */
    ${(isClearable || (icon && iconPlacement === 'right')) &&
    css`
      padding-right: 36;
    `};

    /* With clear button and right icon */
    ${isClearable &&
    icon &&
    iconPlacement === 'right' &&
    css`
      padding-right: 4xl;
    `};

    ${system};
  `
)

export const Wrapper = styled.div`
  position: relative;
`
