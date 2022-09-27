import styled, { css, system, th } from '@xstyled/styled-components'
import { shouldForwardProp } from '@welcome-ui/system'
import { defaultFieldStyles } from '@welcome-ui/utils'

import { InputTextOptions } from './index'

export const InputText = styled('input').withConfig({ shouldForwardProp })<InputTextOptions>(
  ({ icon, iconPlacement, isClearable, size, variant }) => css`
    ${defaultFieldStyles({ size, variant })};
    text-overflow: ellipsis;
    border-radius: 0;

    /* With icon */
    ${icon &&
    iconPlacement === 'left' &&
    css`
      padding-left: ${th(`defaultFields.sizes.${size}.height`)};
    `};
    ${icon &&
    iconPlacement === 'right' &&
    css`
      padding-right: ${th(`defaultFields.sizes.${size}.height`)};
    `};

    /* With clear button */
    ${isClearable &&
    css`
      padding-right: ${th(`defaultFields.sizes.${size}.height`)};
    `};

    ${system};
  `
)

export const Wrapper = styled.div`
  position: relative;
`
