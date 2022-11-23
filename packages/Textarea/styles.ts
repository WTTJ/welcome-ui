import styled, { css } from 'styled-components'
import { defaultFieldStyles } from '@welcome-ui/utils'
import { system } from '@welcome-ui/system'

import { TextareaOptions } from './index'

export const Textarea = styled('textarea')<TextareaOptions>(
  ({ size, theme, variant }) => css`
    ${defaultFieldStyles({ size, variant })};
    ${theme.textareas};
    line-height: ${theme.lineHeights.lg};
    ${system};
  `
)
