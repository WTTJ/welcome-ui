import styled, { css, system, th } from '@wttj/xstyled-styled-components'
import { Button } from '@welcome-ui/button'
import { CreateWuiProps } from '@welcome-ui/system'

import { UseSwiper } from '.'

const getSlideWidth = (slidesPerView = 3, spaceBetween: number, toRem: (px: number) => void) => {
  if (spaceBetween === 0) {
    return `${100 / slidesPerView}%`
  }

  const space = slidesPerView === 1 ? 4 : 2
  const spaceCss = toRem(spaceBetween * space)

  return `calc(${100 / slidesPerView}% - ${spaceCss})`
}

export const Swiper = styled.div<CreateWuiProps<'div'>>`
  overflow-y: hidden;
  position: relative;
  width: 100%;
  height: 100%;

  ${system}
`

export const Arrow = styled(Button)<
  { disabled: boolean } & Pick<UseSwiper, 'withNavigation' | 'withDarkUI'>
>(
  ({ disabled, withDarkUI, withNavigation: { desktop, mobile } }) => css`
    top: 50%;
    transform: translate3d(0, -50%, 0);
    z-index: ${mobile ? 1 : -1};
    display: ${mobile ? 'flex' : 'none'};

    ${!withDarkUI &&
    css`
      background-color: light-900 !important;

      &:hover {
        background-color: light-700 !important;
      }
    `}

    @media (min-width: md) {
      z-index: ${desktop ? 1 : -1};
      display: ${desktop ? 'flex' : 'none'};
    }

    ${disabled &&
    css`
      opacity: 0;
      z-index: -1;
    `};
  `
)

export const Pagination = styled.div<Pick<UseSwiper, 'withPagination'>>(
  ({ withPagination: { desktop, mobile } }) => css`
    justify-content: center;
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: sm;

    z-index: ${mobile ? 1 : -1};
    display: ${mobile ? 'flex' : 'none'};

    @media (min-width: md) {
      z-index: ${desktop ? 1 : -1};
      display: ${desktop ? 'flex' : 'none'};
    }
  `
)

export const Bullet = styled.div<{ active: boolean } & Pick<UseSwiper, 'withDarkUI'>>(
  ({ active, withDarkUI }) => css`
    height: 10;
    width: 10;
    border-radius: 50%;
    cursor: pointer;
    margin: 0 xxs;
    ${active ? th('swipers.navigation.bullet.active') : th('swipers.navigation.bullet.default')}
    ${withDarkUI &&
    css`
      background-color: ${active ? 'dark-900' : 'dark-400'};
    `}
    ${system}
  `
)

export const Container = styled.ul<Pick<UseSwiper, 'slidesPerView' | 'spaceBetween' | 'fullWidth'>>(
  ({ fullWidth, slidesPerView: { desktop, mobile, tablet }, spaceBetween, theme }) => {
    return css`
      scroll-snap-type: x mandatory;
      display: flex;
      -webkit-overflow-scrolling: touch;
      overflow-x: scroll;
      margin: 0;

      /* Hide scrollbar */
      -ms-overflow-style: none;
      scrollbar-width: none;
      &::-webkit-scrollbar {
        display: none;
      }
      height: 100%;
      padding: 0;

      > [aria-roledescription='slide'][aria-hidden='true'] {
        pointer-events: none;
      }

      > * {
        list-style-type: none;
        margin-right: ${spaceBetween};
        min-width: ${getSlideWidth(mobile, spaceBetween, theme.toRem)};
        flex: 1;

        &:last-child {
          margin-right: 0;
        }
      }

      @media (min-width: sm) {
        ${mobile &&
        css`
          > * {
            min-width: ${getSlideWidth(mobile, spaceBetween, theme.toRem)};

            &:nth-of-type(${mobile}n + 1) {
              scroll-snap-align: start;
            }
          }
        `}
      }

      @media (min-width: md) {
        ${tablet &&
        css`
          > * {
            min-width: ${getSlideWidth(tablet, spaceBetween, theme.toRem)};

            &:nth-of-type(${tablet}n + 1) {
              scroll-snap-align: start;
            }
          }
        `}
      }

      @media (min-width: lg) {
        ${desktop &&
        css`
          > * {
            min-width: ${getSlideWidth(desktop, spaceBetween, theme.toRem)};
            scroll-snap-align: unset;

            &:nth-of-type(${desktop}n + 1) {
              scroll-snap-align: start;
            }

            &:not(:nth-of-type(${desktop}n + 1)) {
              scroll-snap-align: unset;
            }
          }
        `}
      }

      @media (min-width: 1920px) {
        ${desktop &&
        fullWidth &&
        css`
          > * {
            min-width: ${getSlideWidth(desktop + 2, spaceBetween, theme.toRem)};
          }
        `}
      }
    `
  }
)
