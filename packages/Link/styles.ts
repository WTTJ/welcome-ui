import styled, { css, system, th, typography } from '@xstyled/styled-components'
import { UniversalLink } from '@welcome-ui/universal-link'
import { shouldForwardProp } from '@welcome-ui/system'

import { Variant } from './index'

export const Link = styled(UniversalLink).withConfig({ shouldForwardProp })<{
  variant: Variant
  isExternal?: boolean
}>(
  ({ isExternal, variant = 'primary' }) => css`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    opacity: 1;
    line-height: 1.5;
    text-decoration: none;
    cursor: pointer;

    > .wui-text {
      margin-right: -2px;
      margin-left: -2px;
      padding-left: 2px;
      padding-right: 2px;
      ${th('underline.default')};
      ${th('links.default')};
      ${th(`links.${variant}.default`)};
      ${isExternal && th('links.withExternalLink')};
      ${typography};
    }

    &:hover,
    &:focus {
      > .wui-text {
        ${th('underline.hover')};
        ${th(`links.${variant}.hover`)};
        outline: none !important;
      }
    }

    &[disabled] {
      > .wui-text {
        ${th('links.disabled')};
      }
      pointer-events: none;
    }

    ${system};

    & > *:not(:only-child):not(:last-child) {
      margin-right: xs;
    }
  `
)
