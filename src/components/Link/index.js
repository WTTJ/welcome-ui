import styled from '@xstyled/styled-components'
import { th } from '@xstyled/system'

import { system } from '../../utils/'
import { UniversalLink } from '../UniversalLink'

export const Link = styled(UniversalLink)`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  opacity: 1;
  text-decoration: none;
  cursor: pointer;
  transition: opacity 300ms;

  &:hover,
  &:focus {
    opacity: 0.6;
    outline: none;
  }

  ${th('links.default')};
  ${props => th(`links.${props.variant || 'primary'}`)};
  ${system};

  & > *:not(:only-child):not(:last-child) {
    margin-right: xs;
  }
`
