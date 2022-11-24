import styled, { css } from 'styled-components'
import { system } from '@welcome-ui/system'

import { TextOptions } from './index'

const MOBILE_VARIANTS = {
  h0: 'h1',
  h1: 'h2',
  h2: 'h3',
  h3: 'h4',
  h4: 'h5',
  h5: 'h6',
}

const getBlockHeight = (lines: number) => css`
  /* stylelint-disable-next-line value-no-vendor-prefix */
  display: -webkit-box;
  /* stylelint-disable-next-line property-no-vendor-prefix */
  -webkit-box-orient: vertical;
  /* stylelint-disable-next-line property-no-vendor-prefix */
  -webkit-line-clamp: ${lines || 'none'};
  line-height: normal;
  overflow: hidden;
  word-break: ${lines === 1 ? 'break-all' : null};
`

export const Text = styled.p<TextOptions>(({ lines, theme, variant }) => {
  const mobileVariant = MOBILE_VARIANTS[variant as keyof typeof MOBILE_VARIANTS]

  return css`
    ${theme.texts[mobileVariant || variant]};

    /* Start fallback for non-webkit */
    display: block;
    ${lines && lines !== Infinity && getBlockHeight(lines)};
    /* End fallback for non-webkit */

    @media (min-width: ${theme.breakpoints.lg}px) {
      ${theme.texts[variant]};
    }

    ${system};
  `
})
