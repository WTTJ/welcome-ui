import styled, { th } from '@xstyled/styled-components'
import { Text } from '@welcome-ui/text'

const contentWidthDesktop = 'calc(100vw - 2 * 2rem);'
const contentWidthMobile = 'calc(100vw - 2 * 1rem);'
const contentHeight = 'calc(100vh - 2 * 5rem);'

export const Iframe = styled.div`
  width: ${contentWidthMobile};
  max-height: ${contentHeight};
  flex: 1;

  @media (min-width: md) {
    aspect-ratio: 16 / 9;
    width: ${contentWidthDesktop};
  }

  // for big screens
  @media (min-width: 1700px) {
    max-width: 1600;
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

    // for big screens
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
