import styled from '@xstyled/styled-components'
import { th } from '@xstyled/system'

import { headerHeight } from '../Header/styles'

const navigationWidth = '16.875rem' // 270

export const Layout = styled.div`
  background-color: light.900;
`

export const Navigation = styled.nav`
  display: none;
  position: fixed;
  width: ${navigationWidth};
  top: ${headerHeight};
  left: 0;
  bottom: 0;
  background-color: light.900;
  border-right: 1px solid ${th('colors.light.800')};
  padding: xl;
  overflow: auto;

  @media (min-width: md) {
    display: block;
  }
`

export const Content = styled.main`
  width: 100%;
  min-height: ${`calc(100vh - ${headerHeight})`};

  > :not(footer) {
    max-width: 970;
    padding-left: md;
    padding-right: md;
    margin: 0 auto;
  }

  @media (min-width: md) {
    padding-left: ${navigationWidth};
  }
`
