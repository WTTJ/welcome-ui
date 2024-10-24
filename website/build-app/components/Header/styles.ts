import styled, { th } from '@xstyled/styled-components'
import Link from 'next/link'

export const Header = styled.header`
  height: 70;
  box-shadow: ${th('colors.neutral-30')} 0px -1px 0px inset;
  background-color: neutral-10;
  position: sticky;
  top: 0;
  z-index: 2;
`

export const A = styled(Link)`
  height: 100%;
  display: flex;
  align-items: center;
  color: neutral-60;
  border-bottom: 2px solid;
  border-bottom-color: transparent;
  transition:
    border-bottom-color ${th.transition('medium')},
    color ${th.transition('medium')};

  &:hover,
  &:focus {
    color: neutral-90;
  }

  &[aria-current='page'] {
    color: neutral-90;
    border-bottom-color: primary-40;
  }
`
