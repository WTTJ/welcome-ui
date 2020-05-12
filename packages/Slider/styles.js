import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  z-index: 10;
  bottom: 0;
  width: 100%;
`

export const PaginationBullet = styled.div(
  ({ active }) => css`
    height: 8px;
    width: 8px;
    border-radius: 50%;
    cursor: pointer;
    margin: 0 2px 0 2px;
    ${active ? th('sliders.navigationActiveBullet') : th('sliders.navigationBullet')}
  `
)

const NavigationStyles = css`
  position: absolute;
  height: 100%;
  top: 0;
  display: flex;
  align-items: center;
  cursor: pointer;
  z-index: 20;
`

export const NextWrapper = styled.div`
  ${NavigationStyles}
  right: 0;
`

export const PrevWrapper = styled.div`
  ${NavigationStyles}
  left: 0;
`
