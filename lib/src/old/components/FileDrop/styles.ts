import styled, { css, th } from '@xstyled/styled-components'

import { shouldForwardProp } from '@old/System'

export interface StyledFileDropProps {
  disabled?: boolean
  isDragAccept?: boolean
  isDragReject?: boolean
}

export const FileDrop = styled.divBox.withConfig({ shouldForwardProp })<StyledFileDropProps>(
  ({ disabled, isDragAccept, isDragReject }) => css`
    ${th('defaultFields.default')};
    ${th('fileDrops.default')};
    ${isDragAccept && th('fileDrops.dragAccept')};
    ${isDragReject &&
    css`
      border-color: ${th('defaultFields.variants.danger.borderColor')};
      ${th('fileDrops.dragReject')}
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
      ${th('fileDrops.disabled')};
    `};
  `
)

export const FilePreview = styled.div`
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

export const Actions = styled.div`
  position: absolute;
  top: ${th.space('md')};
  right: ${th.space('md')};
  display: flex;
  gap: xs;
`
