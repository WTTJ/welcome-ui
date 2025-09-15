import styled, { css, th } from '@xstyled/styled-components'

import { shouldForwardProp } from '@old/System'
import { defaultFieldStyles } from '@old/utils'

import type { TextareaOptions } from './index'

export const Textarea = styled.textareaBox.withConfig({ shouldForwardProp })<TextareaOptions>(
  ({ size, variant }) => css`
    ${defaultFieldStyles({ size, variant })};
    ${th('textareas')};
    line-height: lg;
  `
)
