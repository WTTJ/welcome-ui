import styled, { css, system, th } from '@xstyled/styled-components'

import { UseSwiperState } from '.'

export const Wrapper = styled.div`
  overflow: hidden;
  position: relative;
  ${system}
`

export const Swiper = styled.ul<Pick<UseSwiperState, 'slidesToShow'> & { translateX: number }>(
  ({ slidesToShow, translateX }) => css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    width: ${100 / slidesToShow}%;
    height: 100%;
    transition: transform 0.5s ease-out;
    transform: translateX(${translateX}%);
  `
)

export const Slide = styled.li`
  width: 100%;
  height: 100%;
  flex: 0 0 auto;
  ${system}
`

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  z-index: 10;
  bottom: 0;
  width: 100%;
  padding: sm;
`

export const Bullet = styled.div<{ active: boolean }>(
  ({ active }) => css`
    height: 10;
    width: 10;
    border-radius: 50%;
    cursor: pointer;
    margin: 0 xxs;
    ${active ? th('swipers.navigation.bullet.active') : th('swipers.navigation.bullet.default')}
    ${system}
  `
)

export interface NavigationStylesProps {
  disabled: boolean
}

const getNavigationStyles = ({ disabled }: NavigationStylesProps) => css`
  position: absolute;
  height: 100%;
  top: 0;
  display: flex;
  align-items: center;
  cursor: ${disabled ? 'not-allowed' : 'pointer'};
  opacity: ${disabled ? 0.25 : 1};
  pointer-events: ${disabled ? 'none' : null};
  z-index: 20;
`

export const Next = styled.div<NavigationStylesProps>(
  props => css`
    ${getNavigationStyles(props)}
    margin-right: sm;
    right: 0;
  `
)

export const Prev = styled.div<NavigationStylesProps>(
  props => css`
    ${getNavigationStyles(props)}
    margin-left: sm;
    left: 0;
  `
)
