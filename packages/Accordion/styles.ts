import styled, { css, system, th } from '@xstyled/styled-components'
import { DisclosureContent, Disclosure as ReakitDisclosure } from 'reakit/Disclosure'
import { Box } from '@welcome-ui/box'

export const Accordion = styled.div`
  ${th('accordions.wrapper')};
  ${system}
  transition: medium;
  &:hover {
    border-color: ${th('colors.light.200')};
  }
`

export const Icon = styled(Box)<{ visible: boolean }>(
  ({ visible }) => css`
    flex-shrink: 0;
    ${th('accordions.icon')};
    transform: ${visible ? 'rotate3d(0, 0, 1, 90deg)' : 'rotate3d(0)'};
    transition: medium;
    --size: 24px;
    width: var(--size);
    height: 24;
    color: inherit;
    display: flex;
    border-radius: 12;
    & *:first-child {
      margin: auto;
    }
  `
)

export const Disclosure = styled(ReakitDisclosure)`
  ${th('texts.h5')};
  ${th('accordions.title')};
  width: 100%;
  padding: ${th('accordions.padding')}; //css du thème ignorés
  // padding: 16;
  background-color: transparent;
  border: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: xxl;
  &:focus,
  &:hover {
    cursor: pointer;
  }

  &:hover {
    border-color: ${th('colors.light.200')};
    ${Icon} {
      background-color: nude.200;
    }
  }

  &:focus {
    outline: 0;
    ${Icon} {
      color: inherit;
    }
  }
`

export const Content = styled(DisclosureContent)(
  ({ visible }) => css`
    ${th('accordions.content')};
    padding-inline: 16px; // Ne fonctionne pas sans le px
    color: ${th('colors.dark.200')};
    ${visible &&
    css`
      padding-bottom: 16;
    `}
  `
)
