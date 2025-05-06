import styled, { css, th } from '@xstyled/styled-components'

import type { IconBlockProps } from './Header'

export const Content = styled.divBox`
  flex: 1;
  margin: 0 auto;
  width: 100%;
`

export const IconBlock = styled.divBox<Pick<IconBlockProps, 'size'>>(
  ({ size }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    height: 48;
    width: 48;
    border-radius: md;
    background-color: beige-20;
    transition: background-color ${th('transitions.medium')};

    ${size === 'sm' &&
    css`
      height: 32;
      width: 32;
    `}
  `
)
