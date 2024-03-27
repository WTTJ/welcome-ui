import styled, { css, th } from '@wttj/xstyled-styled-components'
import { getVariantColor } from '@welcome-ui/utils'

export interface StyledFileDropProps {
  disabled?: boolean
  isDragAccept?: boolean
  isDragReject?: boolean
}

export const FileDrop = styled.divBox(
  ({ disabled, isDragAccept, isDragReject }: StyledFileDropProps) => css`
    ${th('defaultFields.default')};
    ${th('filedrops.default')};
    ${isDragAccept && th('filedrops.dragAccept')};
    ${isDragReject &&
    css`
      border-color: ${getVariantColor('error')};
      ${th('filedrops.dragReject')}
    `};
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: md;
    transition: medium;

    &:focus {
      ${th('defaultFields.focused.default')};
    }

    ${disabled &&
    css`
      ${th('defaultFields.disabled')};
      ${th('filedrops.disabled')};
    `};
  `
)

export const FilePreview = styled.divBox`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ImagePreview = styled.imgBox`
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
`

export const Actions = styled.divBox`
  position: absolute;
  top: ${th.space('md')};
  right: ${th.space('md')};
  display: flex;
  gap: xs;
`
