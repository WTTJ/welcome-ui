import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'
import { system } from '@welcome-ui/system'

const getBlockHeight = lines => css`
  /* stylelint-disable-next-line value-no-vendor-prefix */
  display: -webkit-box;
  /* stylelint-disable-next-line property-no-vendor-prefix */
  -webkit-box-orient: vertical;
  /* stylelint-disable-next-line property-no-vendor-prefix */
  -webkit-line-clamp: ${lines || 'none'};
  overflow: hidden;
`

export const Text = styled.p(
  ({ lines, underline, variant }) => css`
    ${th(`texts.${variant}`)};

    /* to get the same style as a primary link */
    ${underline &&
      css`
        font-weight: ${th('links.default.font-weight')};
        ${th('underline.default')};

        &:hover {
          ${th('underline.hover')};
        }
      `}

    /* Start fallback for non-webkit */
    display: block;
    ${lines && lines !== Infinity && getBlockHeight(lines)};
    /* End fallback for non-webkit */

    ${system};
  `
)
