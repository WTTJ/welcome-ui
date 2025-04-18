import styled, { css, th } from '@xstyled/styled-components'

import { shouldForwardProp } from '@/System'

import { defaultFieldStyles } from '../../utils/field-styles'

import type { TextareaOptions } from './index'

export const Textarea = styled.textareaBox.withConfig({ shouldForwardProp })<TextareaOptions>(
  ({ size, variant }) => css`
    ${defaultFieldStyles({ size, variant })};
    ${th('textareas')};
    line-height: lg;
  `
)
