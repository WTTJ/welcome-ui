import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'
import { UniversalLink } from '@welcome-ui/universal-link'
import { filterComponent, system } from '@welcome-ui/system'

export const Link = styled(filterComponent(UniversalLink))(
  ({ applyOn, variant }) => css`
    opacity: 1;
    text-decoration: none;
    cursor: pointer;
    transition: medium;
    transition-property: opacity;

    &:hover,
    &:focus {
      ${applyOn &&
        css`
          > ${applyOn} {
            ${th(`links.${variant || 'primary'}.hover`)};
          }
        `}
      ${!applyOn && th(`links.${variant || 'primary'}.hover`)};
      outline: none !important; /* important for firefox */
    }

    &[disabled] {
      opacity: 0.5;
      pointer-events: none;
    }

    ${th('links.default')};
    ${applyOn &&
      css`
        > ${applyOn} {
          transition: inherit;
          ${th(`links.${variant || 'primary'}.default`)};
        }
      `}
    ${!applyOn && th(`links.${variant || 'primary'}.default`)}
    ${system};

    & > *:not(:only-child):not(:last-child) {
      margin-right: xs;
    }
  `
)
