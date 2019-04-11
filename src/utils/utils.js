import { css } from 'styled-components'
import { breakpoint, boxShadow, transition, rgba } from './helpers'

// Custom scrollbar mixin
export const scrollbar = (width, thumbColor, trackColor) => {
  return `
    &::-webkit-scrollbar {
        width:  ${width};
        height: ${width};
    }

    &::-webkit-scrollbar-thumb {
        background: ${thumbColor};
        border-radius: 10px;
    }

    &::-webkit-scrollbar-track {
        background: ${trackColor};
        border-radius: 10px;
    }

    & {
      scrollbar-face-color: ${thumbColor};
      scrollbar-track-color: ${trackColor};
    }
  `
}

export const getBackgroundImage = image => {
  return image ? css`background-image: url('${image}');` : null
}

export const media = {
  print: (...args) => css`
    @media print {
      ${css(...args)};
    }
  `,
  mobile: (...args) => css`
    @media (max-width: ${breakpoint('mobile')}) {
      ${css(...args)};
    }
  `,
  tablet: (...args) => css`
    @media (max-width: ${breakpoint('tablet')}) {
      ${css(...args)};
    }
  `,
  smallscreen: (...args) => css`
    @media (max-width: ${breakpoint('smallscreen')}) {
      ${css(...args)};
    }
  `,
  mediumscreen: (...args) => css`
    @media (max-width: ${breakpoint('mediumscreen')}) {
      ${css(...args)};
    }
  `,
  widescreen: (...args) => css`
    @media (max-width: ${breakpoint('widescreen')}) {
      ${css(...args)};
    }
  `
}

export const overflowEllipsis = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const backgroundCover = css`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

export const bannerMask = css`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &::after {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: ${rgba('black', 0.5)};
    content: ' ';
  }
`

export const printHiddenStyles = css`
  ${media.print`
    display: none;
  `};
`

export const hoverTransformStyles = css`
  transition: ${transition('md')};

  &:hover {
    transform: translate3d(0, -5px, 0);
    box-shadow: ${boxShadow('articleThumbHover')};
  }
`
