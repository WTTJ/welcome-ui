import styled, { css } from '@xstyled/styled-components'

const TOPNAV_HEIGHT = '60px'

// Mock Box component for testing
const Box = 'div'

type Variant = 'primary' | 'secondary'

export const Wrapper = styled(Box)<{ variant: Variant }>(
  ({ variant }) => css`
    background-color: ${variant === 'primary' ? 'primary-500' : 'secondary-500'};
    padding: xxl 0;
    position: relative;
    isolation: isolate;
    min-height: calc(100vh - ${TOPNAV_HEIGHT});

    @media (min-width: lg) {
      padding: 3xl 0;
    }
  `
)

export const Card = styled(Box)<{ elevated?: boolean }>`
  background: white;
  border-radius: md;
  padding: lg;
  ${({ elevated }) =>
    elevated &&
    css`
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    `}
`

export const Title = styled.h2`
  color: neutral-900;
  font-size: xl;
  margin: 0;
`
