import styled, { css, system, th } from '@xstyled/styled-components'

import { HintOptions } from '.'

export const Hint = styled.div<{ variant: HintOptions['variant'] }>(
  ({ variant }) => css`
    ${th('hints.default')};
    ${variant && th(`hints.${variant}`)};
    margin-top: xs;
    display: flex;
    align-items: center;
    ${system};
  `
)
