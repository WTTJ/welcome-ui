import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'
import { DisclosureContent, Disclosure as ReakitDisclosure } from 'reakit/Disclosure'
import { Box } from '@welcome-ui/box'
import { system } from '@welcome-ui/system'

export const Accordion = styled.div`
  ${th('accordions.wrapper')};
  ${system}
`

export const Icon = styled(Box)<{ visible: boolean }>(
  ({ visible }) => css`
    flex-shrink: 0;
    ${th('accordions.icon')};
    transform: ${visible ? 'rotate3d(0, 0, 1, 90deg)' : 'rotate3d(0)'};
    transition: medium;
  `
)

export const Disclosure = styled(ReakitDisclosure)`
  ${th('accordions.title')};
  width: 100%;
  padding: ${th('accordions.padding')};
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
`

export const Content = styled(DisclosureContent)(
  ({ visible }) => css`
    ${th('accordions.content')};
    margin-top: -sm;
    padding-left: ${th('accordions.padding')};
    padding-right: ${th('accordions.padding')};
    padding-bottom: sm;

    ${visible &&
    css`
      padding-bottom: ${th('accordions.padding')};
    `}
  `
)
