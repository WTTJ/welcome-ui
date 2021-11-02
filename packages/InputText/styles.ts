import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'
import { componentSystem, shouldForwardProp, system } from '@welcome-ui/system'
import { defaultFieldStyles } from '@welcome-ui/utils'

import { InputTextOptions } from './index'

export const InputText = styled('input').withConfig({ shouldForwardProp })<InputTextOptions>(
  ({ connected, icon, iconPlacement, isClearable, size, variant }) => css`
    ${defaultFieldStyles({ size, variant })};
    text-overflow: ellipsis;

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

    ${connected ? componentSystem : system};
  `
)

export const Wrapper = styled.div`
  position: relative;
`
