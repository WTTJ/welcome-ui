'use client'
import styled, { th } from '@xstyled/styled-components'
import NextLink from 'next/link'

export const Link = styled(NextLink)`
  color: neutral-70;
  position: relative;
  transition: color ${th('transitions.medium')}, padding-left ${th('transitions.medium')};

  &:hover,
  &:focus {
    color: neutral-90;
  }

  &::before {
    content: ' ';
    width: 2px;
    height: calc(100% - 1px);
    position: absolute;
    left: 0;
    background-color: transparent;
    transition: background-color ${th('transitions.medium')};
  }

  &[aria-current='page'] {
    padding-left: sm;
    color: neutral-90;

    &::before {
      background-color: ${th('colors.primary-40')};
    }
  }
`
