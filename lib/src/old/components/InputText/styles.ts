import styled, { css } from '@xstyled/styled-components'

import { shouldForwardProp } from '@old/System'

import { defaultFieldStyles } from '../../../utils/field-styles'

import type { InputTextOptions } from './index'

export const InputText = styled.inputBox.withConfig({ shouldForwardProp })<
  Pick<InputTextOptions, 'iconPlacement' | 'isClearable' | 'size' | 'transparent' | 'variant'>
>(
  ({ iconPlacement, isClearable, size, transparent, variant }) => css`
    ${defaultFieldStyles({
      iconPlacement,
      isClearable,
      size,
      transparent,
      variant,
    })};
    text-overflow: ellipsis;
  `
)
