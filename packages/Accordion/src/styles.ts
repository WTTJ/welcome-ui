import styled, { css, system, th } from '@xstyled/styled-components'
import * as Ariakit from '@ariakit/react'
import { Box } from '@welcome-ui/box'
import { cva } from '@welcome-ui/panda/css'
import { styled as styledPanda } from '@welcome-ui/panda/jsx'

import { UseAccordionState } from '.'

export const Accordion = styled.div`
  ${th('accordions.wrapper')};
  ${system}
  transition: medium;

  &:hover {
    border-color: dark-400;
  }
`

export const Icon = styled(Box)<{ isOpen: Ariakit.DisclosureStoreState['open'] }>(
  ({ isOpen }) => css`
    flex-shrink: 0;
    ${th('accordions.icon')};
    transform: ${isOpen ? 'rotate3d(0, 0, 1, 90deg)' : 'rotate3d(0)'};
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
)

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

export const Content = styled(Ariakit.DisclosureContent)(
  ({ isOpen }: { isOpen: UseAccordionState['open'] }) => css`
    ${th('accordions.content')};
    padding-inline: ${th('accordions.padding')};
    color: dark-700;

    ${isOpen &&
    css`
      padding-bottom: ${th('accordions.padding')};
    `}
  `
)

export const accordionStyles = cva({
  base: {
    backgroundColor: 'light-900',
    transition: 'all',
    transitionDuration: 'medium',
    transitionTimingFunction: 'medium',
    border: 'sm',
    borderStyle: 'solid',
    borderColor: 'border',
    '&:hover': {
      borderColor: 'dark-400',
    },
  },
})

export const DisclosurePanda = styledPanda(Ariakit.Disclosure, {
  base: {
    textStyle: 'h5',
    width: '100%',
    padding: 'lg',
    backgroundColor: 'transparent',
    border: '0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 'xxl',
    '&:focus, &:hover': {
      cursor: 'pointer',
      // Icon: {
      // backgroundColor: 'dark-100'
      // }
    },
    '&:focus': {
      outline: '0',
      // ${Icon} {
      //   color: inherit;
      // }
    },
  },
})

export const ContentPanda = styledPanda(Ariakit.DisclosureContent, {
  base: {
    fontSize: 'sm',
    paddingInline: 'lg',
    color: 'dark-700',
    '&[data-open="true"]': {
      paddingBottom: 'lg',
    },
  },
})

export const IconPanda = styledPanda('div', {
  base: {
    flexShrink: '0',
    color: 'dark-900',
    transform: 'rotate3d(0)',
    width: '24px',
    height: '24px',
    display: 'flex',
    borderRadius: '12px',
    transition: 'all',
    transitionDuration: 'medium',
    transitionTimingFunction: 'medium',
    '&[data-open="true"]': {
      transform: 'rotate3d(0, 0, 1, 90deg)',
    },
    '& *:first-child': {
      margin: 'auto',
    },
    '.Discolsure:focus &': {
      outline: '0',
    },
    '.Discolsure:hover &': {
      backgroundColor: 'dark-100',
    },
  },
})
