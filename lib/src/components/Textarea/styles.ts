import styled, { css, system, th } from '@xstyled/styled-components'

import { shouldForwardProp } from '../System'
import { defaultFieldStyles } from '../../utils/field-styles'

import { TextareaOptions } from './index'

export const Textarea = styled('textarea').withConfig({ shouldForwardProp })<TextareaOptions>(
  ({ size, variant }) => css`
    ${defaultFieldStyles({ size, variant })};
    ${th('textareas')};
    line-height: lg;
    ${system};
  `
)
