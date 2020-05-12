import styled, { css } from '@xstyled/styled-components'
import { system, th } from '@xstyled/system'

export const SwiperWrapper = styled.div`
  ${system}
  overflow: hidden;
  position: relative;
`

export const Swiper = styled.ul(
  ({ translateX }) => css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    width: 100%;
    height: 100%;
    transition: transform 0.5s ease-out;
    transform: translateX(${translateX}%);
  `
)

export const SwiperPage = styled.li`
  width: 100%;
  height: 100%;
  flex: 0 0 auto;
`

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  z-index: 10;
  bottom: 0;
  width: 100%;
  margin-bottom: sm;
`

export const PaginationBullet = styled.div(
  ({ active }) => css`
    height: 10px;
    width: 10px;
    border-radius: 50%;
    cursor: pointer;
    margin: 0 5px 0 5px;
    ${active ? th('swipers.navigationActiveBullet') : th('swipers.navigationBullet')}
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
  margin-right: sm;
  right: 0;
`

export const PrevWrapper = styled.div`
  ${NavigationStyles}
  margin-left: sm;
  left: 0;
`
