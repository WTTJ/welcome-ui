import styled, { css, system, th } from '@xstyled/styled-components'

import { TextOptions } from './index'

const MOBILE_VARIANTS = {
  h0: 'h1',
  h1: 'h2',
  h2: 'h3',
  h3: 'h4',
  h4: 'h5',
  h5: 'h6',
  h6: 'h6',
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

export const Text = styled.p<TextOptions>(({ lines, theme, variant, withDash }) => {
  const mobileVariant = MOBILE_VARIANTS[variant as keyof typeof MOBILE_VARIANTS]
  const isHeading = variant?.startsWith('h')
  // only add lineHeight fixer styles when these conditions are fulfilled
  const shouldFixHeadingsLineHeight =
    lines &&
    lines !== Infinity &&
    variant.startsWith('h') &&
    theme.fonts.headings.includes('welcome-font')

  return css`
    ${th(`texts.${mobileVariant || variant}`)};

    /* Start fallback for non-webkit */
    display: block;
    ${lines && lines !== Infinity && getBlockHeight(lines)};
    /* End fallback for non-webkit */

    ${withDash &&
    isHeading &&
    css`
      display: flex;

      &:before {
        content: '';
        width: 16;
        height: 4;
        display: flex;
        align-self: center;
        flex-shrink: 0;
        background-color: primary-40;
        margin-right: md;
      }
    `}

    @media (min-width: lg) {
      ${th(`texts.${variant}`)};
      ${system};
    }

    ${shouldFixHeadingsLineHeight &&
    css`
      & {
        line-height: 1.4;
      }
    `}

    ${system};
  `
})
