import styled, { css, th } from '@xstyled/styled-components'

import type { HintOptions } from '.'

export const Hint = styled.divBox<{ variant: HintOptions['variant'] }>(
  ({ variant }) => css`
    ${th('hints.default')};
    ${variant && th(`hints.${variant}`)};
    margin-top: xs;
    display: flex;
    align-items: center;
  `
)
