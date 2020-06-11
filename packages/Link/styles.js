import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'
import { UniversalLink } from '@welcome-ui/universal-link'
import { filterComponent, system } from '@welcome-ui/system'

export const Link = styled(filterComponent(UniversalLink))(
  ({ variant }) => css`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    opacity: 1;
    line-height: 1.5;
    text-decoration: none;
    cursor: pointer;

    &:hover,
    &:focus {
      ${th(`links.${variant || 'primary'}.hover`)};
      outline: none !important; /* important for firefox */
    }

    &[disabled] {
      opacity: 0.5;
      pointer-events: none;
    }

    ${th('links.default')};
    ${th(`links.${variant || 'primary'}.default`)}
    ${system};

    .wui-text {
      font-weight: inherit;
      line-height: inherit;
    }

    & > *:not(:only-child):not(:last-child) {
      margin-right: xs;
    }
  `
)
