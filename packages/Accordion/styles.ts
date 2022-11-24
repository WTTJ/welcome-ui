import styled, { css } from 'styled-components'
import { DisclosureContent, Disclosure as ReakitDisclosure } from 'reakit/Disclosure'
import { Box } from '@welcome-ui/box'

export const Accordion = styled(Box)(
  ({ theme }) => css`
    ${theme.accordions.wrapper};
    transition: ${theme.transitions.medium};

    &:hover {
      border-color: ${theme.colors['dark-400']};
    }
  `
)

export const Icon = styled(Box)<{ visible: boolean }>(
  ({ theme, visible }) => css`
    flex-shrink: 0;
    ${theme.accordions.icon};
    transform: ${visible ? 'rotate3d(0, 0, 1, 90deg)' : 'rotate3d(0)'};
    transition: ${theme.transitions.medium};
    width: 24px;
    height: 24px;
    color: inherit;
    display: flex;
    border-radius: 12px;

    & *:first-child {
      margin: auto;
    }
  `
)

export const Disclosure = styled(ReakitDisclosure)(
  ({ theme }) =>
    css`
      ${theme.accordions.title};
      width: 100%;
      padding: ${theme.accordions.padding};
      background-color: transparent;
      border: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: ${theme.spaces.xxl};

      &:focus,
      &:hover {
        cursor: pointer;
        ${Icon} {
          background-color: ${theme.colors['dark-100']};
        }
      }

      &:focus {
        outline: 0;
        ${Icon} {
          color: inherit;
        }
      }
    `
)

export const Content = styled(DisclosureContent)(
  ({ theme, visible }) => css`
    ${theme.accordions.content};
    padding-inline: ${theme.accordions.padding};
    color: ${theme.colors['dark-700']};

    ${visible &&
    css`
      padding-bottom: ${theme.accordions.padding};
    `}
  `
)
