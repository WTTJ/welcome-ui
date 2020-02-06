import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'
import { UniversalLink } from '@welcome-ui/universal-link'
import { system } from '@welcome-ui/system'

export const Link = styled(UniversalLink)(
  ({ variant }) => css`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    opacity: 1;
    text-decoration: none;
    cursor: pointer;
    transition: opacity 300ms;

    &:hover,
    &:focus {
      opacity: 0.6;
      outline: none !important; /* important for firefox */
    }

    &[disabled] {
      opacity: 0.5;
      pointer-events: none;
    }

    ${th('links.default')};
    ${th(`links.${variant || 'primary'}`)};
    ${system};

    & > *:not(:only-child):not(:last-child) {
      margin-right: xs;
    }
  `
)
