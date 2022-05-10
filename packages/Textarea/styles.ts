import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'
import { shouldForwardProp, system } from '@welcome-ui/system'
import { defaultFieldStyles } from '@welcome-ui/utils'

import { TextareaOptions } from './index'

export const Textarea = styled('textarea').withConfig({ shouldForwardProp })<TextareaOptions>(
  ({ size, variant }) => css`
    ${defaultFieldStyles({ size, variant })};
    ${th('textareas')};
    line-height: lg;
    padding: sm;
    ${system};
  `
)
