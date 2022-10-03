import styled, { css, system, th } from '@xstyled/styled-components'
import { shouldForwardProp } from '@welcome-ui/system'
import { defaultFieldStyles } from '@welcome-ui/utils'

import { TextareaOptions } from './index'

export const Textarea = styled('textarea').withConfig({ shouldForwardProp })<TextareaOptions>(
  ({ size, variant }) => css`
    ${defaultFieldStyles({ size, variant })};
    ${th('textareas')};
    line-height: lg;
    ${system};
  `
)
