import styled, { th } from '@xstyled/styled-components'
import * as Ariakit from '@ariakit/react'
import { Box } from '@welcome-ui/box'

export const Accordion = styled.divBox`
  ${th('accordions.wrapper')};
  transition: medium;

  &:hover {
    border-color: dark-400;
  }
`

export const Icon = styled(Box)`
  flex-shrink: 0;
  ${th('accordions.icon')};
  transform: rotate3d(0);
  transition: medium;
  width: 24;
  height: 24;
  color: inherit;
  display: flex;
  border-radius: 12;

  & *:first-child {
    margin: auto;
  }
`

export const Disclosure = styled(Ariakit.Disclosure)`
  ${th('accordions.title')};
  width: 100%;
  padding: ${th('accordions.padding')};
  background-color: transparent;
  border: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: xxl;

  &[aria-expanded='true'] {
    ${Icon} {
      transform: rotate3d(0, 0, 1, 90deg);
    }
  }

  &:focus,
  &:hover {
    cursor: pointer;
    ${Icon} {
      background-color: dark-100;
    }
  }

  &:focus {
    outline: 0;
    ${Icon} {
      color: inherit;
    }
  }
`
export const Content = styled(Ariakit.DisclosureContent)`
  display: grid;
  grid-template-rows: 0fr;
  transition-property: grid-template-rows;
  transition-timing-function: linear;
  transition-duration: 200ms;
  animation-duration: 200ms;

  > * {
    overflow: hidden;
    padding: 0;
  }

  &[data-enter] {
    grid-template-rows: 1fr;
  }
`

export const ContentChild = styled.div`
  ${th('accordions.content')};
  padding: ${th('accordions.padding')};
  padding-top: 0;
  color: dark-700;
`
