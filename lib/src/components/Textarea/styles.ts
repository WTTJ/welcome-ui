import styled, { css, th } from '@xstyled/styled-components'

import { shouldForwardProp } from '@/System'

import type { TextareaOptions } from './index'

import { defaultFieldStyles } from '../../utils/field-styles'

export const Textarea = styled.textareaBox.withConfig({ shouldForwardProp })<TextareaOptions>(
  ({ size, variant }) => css`
    ${defaultFieldStyles({ size, variant })};
    ${th('textareas')};
    line-height: lg;
  `
)
