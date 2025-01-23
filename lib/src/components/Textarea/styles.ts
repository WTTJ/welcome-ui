import styled, { css, system, th } from '@xstyled/styled-components'

import { defaultFieldStyles } from '../../utils/field-styles'

import { TextareaOptions } from './index'

import { shouldForwardProp } from '@/System'

export const Textarea = styled('textarea').withConfig({ shouldForwardProp })<TextareaOptions>(
  ({ size, variant }) => css`
    ${defaultFieldStyles({ size, variant })};
    ${th('textareas')};
    line-height: lg;
    ${system};
  `
)
