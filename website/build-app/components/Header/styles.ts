import styled, { th } from '@xstyled/styled-components'
import Link from 'next/link'

export const Header = styled.header`
  height: 70;
  box-shadow: ${th('colors.dark-100')} 0px -1px 0px inset;
  background-color: light-900;
  position: sticky;
  top: 0;
  z-index: 1;
`

export const A = styled(Link)`
  height: 100%;
  display: flex;
  align-items: center;
  color: dark-500;
  border-bottom: 2px solid;
  border-bottom-color: transparent;
  transition: border-bottom-color ${th.transition('medium')}, color ${th.transition('medium')};

  &:hover,
  &:focus {
    color: dark-900;
  }

  &[aria-current='page'] {
    color: dark-900;
    border-bottom-color: primary-500;
  }
`
