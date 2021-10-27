import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'
import { componentSystem, shouldForwardProp, system } from '@welcome-ui/system'
import { defaultFieldStyles, Variant } from '@welcome-ui/utils'

import { TextareaOptions } from './index'

export const Textarea = styled('textarea').withConfig({ shouldForwardProp })<
  Pick<TextareaOptions, 'connected' | 'size' | 'variant'>
>(
  ({ connected, size, variant }) => css`
    ${defaultFieldStyles({ size, variant: variant as Variant })};
    ${th('textareas')};
    line-height: body1;
    padding: sm;
    ${connected ? componentSystem : system};
  `
)
