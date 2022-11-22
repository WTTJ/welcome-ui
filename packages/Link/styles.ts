import styled, { css } from 'styled-components'
import { system } from '@welcome-ui/system'
import { UniversalLink } from '@welcome-ui/universal-link'

import { Variant } from './index'

export const Link = styled(UniversalLink)<{ variant: Variant }>(
  ({ theme, variant }) => css`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    opacity: 1;
    line-height: 1.5;
    text-decoration: none;
    cursor: pointer;

    &:hover,
    &:focus {
      ${theme.links[variant || 'primary'].hover};
      outline: none !important; /* important for firefox */
    }

    &[disabled] {
      opacity: 0.5;
      pointer-events: none;
    }

    ${theme.links.default};
    ${theme.links[variant || 'primary'].default};
    ${system};

    & > *:not(:only-child):not(:last-child) {
      margin-right: xs;
    }
  `
)
