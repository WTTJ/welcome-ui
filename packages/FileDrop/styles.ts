import styled, { css } from 'styled-components'
import { Box } from '@welcome-ui/box'
import { getVariantColor } from '@welcome-ui/utils'

export interface StyledFileDropProps {
  disabled?: boolean
  isDragAccept?: boolean
  isDragReject?: boolean
}

export const FileDrop = styled(Box)<StyledFileDropProps>(
  ({ disabled, isDragAccept, isDragReject, theme }) => css`
    ${theme.defaultFields.default};
    ${theme.filedrops.default};
    ${isDragAccept && theme.filedrops.dragAccept};
    ${isDragReject &&
    css`
      border-color: ${getVariantColor('error')};
      ${theme.filedrops.dragReject}
    `};
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${theme.space.md};
    transition: medium;

    &:focus {
      ${theme.defaultFields.focused.default};
    }

    ${disabled &&
    css`
      ${theme.defaultFields.disabled};
      ${theme.filedrops.disabled};
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

export const Actions = styled.div(
  ({ theme }) => css`
    position: absolute;
    top: ${theme.space.md};
    right: ${theme.space.md};
    display: flex;
    gap: ${theme.space.xs};
  `
)
