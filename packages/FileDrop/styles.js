import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'
import { componentSystem, filterFieldComponent, system } from '@welcome-ui/system'

const FILTER_PROPS = [
  'onAddFile',
  'onRemoveFile',
  'isDragAccept',
  'isDragActive',
  'isDragReject',
  'forceFileType'
]

export const FileDrop = styled(filterFieldComponent('div', FILTER_PROPS))(
  ({ connected, disabled, isDragAccept, isDragReject }) => css`
    ${th('defaultFields.default')};
    ${th('filedrops.default')};
    ${isDragAccept && th('filedrops.dragAccept')};
    ${isDragReject && th('filedrops.dragReject')};
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: md;
    transition: medium;
    ${connected ? componentSystem : system};

    &:focus {
      ${th('defaultFields.focused')};
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
  flex-direction: column;
`
