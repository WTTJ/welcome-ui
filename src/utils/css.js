import { css } from '@xstyled/styled-components'

export const getTransformStyle = transform => ({
  transform,
  MozTransform: transform,
  WebkitTransform: transform,
  OTransform: transform,
  MsTransform: transform
})

export const centerContent = css`
  display: flex;
  align-items: center;
  justify-content: center;
`
