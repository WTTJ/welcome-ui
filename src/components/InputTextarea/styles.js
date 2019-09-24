import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'

import { fieldStyles } from '../../common/styles/form'
import { componentSystem, filterComponent, system } from '../../utils/system'

export const Textarea = styled(filterComponent('textarea'))(
  ({ connected }) => css`
    ${fieldStyles};
    ${th('fields.textarea')};
    line-height: body1;
    padding: sm;
    ${connected ? componentSystem : system};
  `
)
