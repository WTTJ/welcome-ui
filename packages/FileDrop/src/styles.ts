import styled, { css, system, th } from '@xstyled/styled-components'
import { shouldForwardProp } from '@welcome-ui/system'
import { getVariantColor } from '@welcome-ui/utils'

export interface StyledFileDropProps {
  disabled?: boolean
  isDragAccept?: boolean
  isDragReject?: boolean
}

export const FileDrop = styled('div').withConfig({ shouldForwardProp })<StyledFileDropProps>(
  ({ disabled, isDragAccept, isDragReject }) => css`
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
    ${system};

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

export const FilePreview = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ImagePreview = styled.img`
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
