import styled, { th } from '@xstyled/styled-components'

const contentWidthDesktop = 'calc(100vw - 2 * 2rem);'
const contentWidthMobile = 'calc(100vw - 2 * 1rem);'
const contentHeight = 'calc(100vh - 2 * 5rem);'

export const Iframe = styled.div`
  width: ${contentWidthMobile};
  max-height: ${contentHeight};
  flex: 1;
  max-width: 1600;

  @media (min-width: md) {
    aspect-ratio: 16 / 9;
    width: ${contentWidthDesktop};
  }

  iframe {
    width: 100%;
    height: 100%;
  }
`

export const Content = styled.div`
  display: block;
  transition: margin-top 250ms ease-in-out;

  > img,
  > div {
    max-width: ${contentWidthMobile};
    max-height: ${contentHeight};

    @media (min-width: md) {
      max-width: ${contentWidthDesktop};
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

  &[data-enter] {
    opacity: 1;

    ${Content} {
      margin-top: 0;
    }
  }
`
