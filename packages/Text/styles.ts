import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'
import { system } from '@welcome-ui/system'

import { TextOptions } from './index'

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

export const Text = styled.p<TextOptions>(
  ({ lines, variant }) => css`
    ${th(`texts.${variant}`)};

    /* Start fallback for non-webkit */
    display: block;
    ${lines && lines !== Infinity && getBlockHeight(lines)};
    /* End fallback for non-webkit */

    ${system}
  `
)
