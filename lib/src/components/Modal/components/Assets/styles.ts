import styled, { css, system, th } from '@xstyled/styled-components'

import { Text } from '@/components/Text'
import { StyledSwiper } from '@/old/components/Swiper'
import { Button } from '@old/Button'

const contentWidthDesktop = 'calc(100vw - 2 * 2rem);'
const contentWidthMobile = 'calc(100vw - 2 * 1rem);'
const contentHeight = 'calc(100vh - 2 * 5rem);'

const sizeOfElements = css`
  width: ${contentWidthMobile};
  max-height: ${contentHeight};

  @media (min-width: md) {
    width: ${contentWidthDesktop};
  }

  /* for big screens */
  @media (min-width: 1700px) {
    max-width: 1600;
  }
`

export const CloseButton = styled(Button)`
  position: absolute;
  right: xl;
  top: xl;

  /* Hack for secondary variant on dark mode */
  color: neutral-90;
  border-color: neutral-10;
  background-color: neutral-10;

  &:hover {
    background-color: neutral-40;
  }

  ${system}
`

export const Iframe = styled.div`
  ${sizeOfElements};
  flex: 1;

  @media (min-width: md) {
    aspect-ratio: 16 / 9;
  }

  iframe {
    width: 100%;
    height: 100%;
  }
`

export const Content = styled.divBox`
  transition: margin-top 250ms ease-in-out;

  > img,
  > div {
    max-width: ${contentWidthMobile};
    max-height: ${contentHeight};

    @media (min-width: md) {
      max-width: ${contentWidthDesktop};
    }

    /* for big screens */
    @media (min-width: 1700px) {
      max-width: 1600;
    }
  }
`

export const Dialog = styled.div`
  ${th('modals.default')};
  position: fixed;
  inset: 0;
  margin: auto;
  display: flex;
  height: fit-content;
  width: fit-content;
  flex-direction: column;
  opacity: 0;
  transition: opacity 250ms ease-in-out;

  &:has(${StyledSwiper}) {
    ${sizeOfElements};
  }

  ${Content} {
    margin-top: xl;
  }

  &[data-enter] {
    opacity: 1;

    ${Content} {
      margin-top: 0;
    }
  }
`

export const Title = styled(Text).attrs({ lines: 2, variant: 'h4' })`
  margin: 0;
`

export const Wrapper = styled.divBox<{
  $titleBlockDesktop: string
  $titleBlockMobile: string
}>(
  ({ $titleBlockDesktop, $titleBlockMobile }) => css`
    display: flex;
    flex-direction: column;
    border-radius: xxl;
    overflow: hidden;

    > img {
      width: auto;
      max-width: fit-content;
      max-height: calc(100vh - 2 * 5rem - ${$titleBlockMobile});
      flex-shrink: 0;

      @media (min-width: md) {
        max-height: calc(100vh - 2 * 5rem - ${$titleBlockDesktop});
      }
    }

    ${Iframe} {
      background-color: neutral-90;
      max-height: calc(100vh - 2 * 5rem - ${$titleBlockMobile});

      @media (min-width: md) {
        max-height: calc(100vh - 2 * 5rem - ${$titleBlockDesktop});
      }
    }
  `
)
