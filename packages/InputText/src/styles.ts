import styled, { css, system } from '@wttj/xstyled-styled-components'
import { defaultFieldStyles } from '@welcome-ui/utils'

import { InputTextOptions } from './index'

export const InputText = styled('input')<
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
