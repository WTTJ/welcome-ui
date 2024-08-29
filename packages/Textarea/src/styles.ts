import styled, { css, th } from '@xstyled/styled-components'
import { defaultFieldStyles } from '@welcome-ui/utils'

import { TextareaOptions } from './index'

export const Textarea = styled.textareaBox<TextareaOptions>(
  ({ size, variant }) => css`
    ${defaultFieldStyles({ size, variant })};
    ${th('textareas')};
    line-height: lg;
  `
)
