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
const headingsLineHeightFixer = {
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

const fixHeadingsLineHeightStyles = (variant: TextOptions['variant']) => css`
  & {
    line-height: ${headingsLineHeightFixer[variant as keyof typeof headingsLineHeightFixer]};
  }
  &::before {
    content: '';
    vertical-align: text-bottom;
  }
`

export const Text = styled.p<TextOptions>(({ lines, theme, variant, withDash }) => {
  const mobileVariant = MOBILE_VARIANTS[variant as keyof typeof MOBILE_VARIANTS]
  const isHeading = variant?.startsWith('h')
  // only add lineHeight fixer styles when these concditions are fulfilled
  const shouldFixHeadingsLineHeight =
    lines &&
    lines !== Infinity &&
    Object.keys(headingsLineHeightFixer).includes(variant) &&
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
        background-color: primary-500;
        margin-right: md;
      }
    `}

    @media (min-width: lg) {
      ${th(`texts.${variant}`)};
      ${system};
    }

    ${shouldFixHeadingsLineHeight && fixHeadingsLineHeightStyles(variant)};

    ${system};
  `
})
