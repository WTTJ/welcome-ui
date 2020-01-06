import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'
import { componentSystem, filterFieldComponent, system } from '@welcome-ui/system'
import { fieldStyles } from '@welcome-ui/utils'

export const Textarea = styled(filterFieldComponent('textarea'))(
  ({ connected }) => css`
    ${fieldStyles};
    ${th('fields.textarea')};
    line-height: body1;
    padding: sm;
    ${connected ? componentSystem : system};
  `
)
