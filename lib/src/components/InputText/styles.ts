import styled, { css, system } from '@xstyled/styled-components'

import { defaultFieldStyles } from '../../utils/field-styles'

import { InputTextOptions } from './index'

import { shouldForwardProp } from '@/System'

export const InputText = styled('input').withConfig({ shouldForwardProp })<
  Pick<InputTextOptions, 'iconPlacement' | 'isClearable' | 'transparent' | 'variant' | 'size'>
>(
  ({ iconPlacement, isClearable, size, transparent, variant }) => css`
    ${defaultFieldStyles({
      size,
      variant,
      transparent,
      isClearable,
      iconPlacement,
    })};
    text-overflow: ellipsis;

    ${system};
  `
)

export const Wrapper = styled.div`
  position: relative;
`
