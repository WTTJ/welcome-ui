import styled, { css } from 'styled-components'
import { DisclosureContent, Disclosure as ReakitDisclosure } from 'reakit/Disclosure'
import { Box } from '@welcome-ui/box'
import { system } from '@welcome-ui/system'

export const Accordion = styled(Box)`
  ${({ theme }) => theme.accordions.wrapper};
`

export const Icon = styled(Box)<{ visible: boolean }>(
  ({ theme, visible }) => css`
    flex-shrink: 0;
    ${theme.accordions.icon};
    transform: ${visible ? 'rotate3d(0, 0, 1, 90deg)' : 'rotate3d(0)'};
    transition: ${theme.transitions.medium};
  `
)

export const Disclosure = styled(ReakitDisclosure)(
  ({ theme }) => css`
    ${theme.accordions.title};
    width: 100%;
    padding: ${theme.accordions.padding};
    background-color: transparent;
    border: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:focus,
    &:hover {
      cursor: pointer;
    }

    &:focus {
      outline: 0;

      ${Icon} {
        color: inherit;
      }
    }

    ${system};
  `
)

export const Content = styled(DisclosureContent)(
  ({ theme, visible }) => css`
    ${theme.accordions.content};
    margin-top: -${theme.space.sm};
    padding-left: ${theme.accordions.padding};
    padding-right: ${theme.accordions.padding};
    padding-bottom: ${theme.space.sm};

    ${visible &&
    css`
      padding-bottom: ${theme.accordions.padding};
    `}

    ${system};
  `
)
