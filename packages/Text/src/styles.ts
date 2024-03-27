import styled, { css, th } from '@wttj/xstyled-styled-components'

import { TextOptions } from './index'

const MOBILE_VARIANTS = {
  h0: 'h1',
  h1: 'h2',
  h2: 'h3',
  h3: 'h4',
  h4: 'h5',
  h5: 'h6',
}

const lineHeightHeadingsFixer = {
  h0: 0.825,
  h1: 0.75,
  h2: 0.825,
  h3: 1.075,
  h4: 1,
  h5: 0.9,
  h6: 0.9,
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

const fixLineHeightStyles = (variant: TextOptions['variant']) => css`
  & {
    line-height: ${lineHeightHeadingsFixer[variant as keyof typeof lineHeightHeadingsFixer]};
  }

  &::before {
    content: '';
    vertical-align: text-bottom;
  }
`

export const Text = styled.pBox(({ lines, variant }: TextOptions) => {
  const mobileVariant = MOBILE_VARIANTS[variant as keyof typeof MOBILE_VARIANTS]

  return css`
    ${th(`texts.${mobileVariant || variant}`)};

    /* Start fallback for non-webkit */
    display: block;
    ${lines && lines !== Infinity && getBlockHeight(lines)};
    /* End fallback for non-webkit */

    @media (min-width: lg) {
      ${th(`texts.${variant}`)};
    }

    ${lines &&
    lines !== Infinity &&
    Object.keys(lineHeightHeadingsFixer).includes(variant) &&
    fixLineHeightStyles(variant)};
  `
})
