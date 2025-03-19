import styled, { css } from '@xstyled/styled-components'

import type { AspectRatioOptions } from '.'

export const AspectRatio = styled.divBox<AspectRatioOptions>(
  ({ ratio = 4 / 3 }) => css`
    position: relative;

    & > * {
      overflow: hidden;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
    }

    & > img,
    & > video {
      object-fit: cover;
    }

    &:before {
      height: 0;
      content: '';
      display: block;
      padding-bottom: ${(1 / ratio) * 100}%;
    }
  `
)
