import styled, { css } from '@wttj/xstyled-styled-components'
import { defaultFieldStyles } from '@welcome-ui/utils'

import { InputTextOptions } from './index'

export const InputText = styled.inputBox(
  ({
    iconPlacement,
    isClearable,
    size,
    transparent,
    variant,
  }: Pick<
    InputTextOptions,
    'iconPlacement' | 'isClearable' | 'transparent' | 'variant' | 'size'
  >) => css`
    ${defaultFieldStyles({
      size,
      variant,
      transparent,
      isClearable,
      iconPlacement,
    })};
    text-overflow: ellipsis;
  `
)

export const Wrapper = styled.divBox`
  position: relative;
`
