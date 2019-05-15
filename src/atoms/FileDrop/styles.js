import styled, { css } from 'styled-components'

import { get, getCss } from '../../theme/helpers'

const getBorder = ({ isDragAccept, isDragActive, isDragReject }) => {
  let borderStyle = 'dashed'
  let borderColor = null

  if (isDragAccept) {
    borderColor = get('color', 'primary', 'default')
  }
  if (isDragReject) {
    borderColor = get('color', 'danger', 'default')
  }

  return css`
    border: ${get('borderWidth', 'input')} ${borderStyle} ${borderColor};
  `
}

export const Wrapper = styled.div`
  position: relative;
`

export const StyledFileDrop = styled.div(
  props => css`
    ${getCss('fields', 'default')};
    ${getBorder(props)};
    position: relative;
    display: flex;
    justify-content: space-between;
    height: ${get('fileDropHeight')};
    padding: ${get('gutter', 'md')};
    text-align: center;

    h3 {
      ${getCss('text', 'h1')};
      color: ${get('color', 'primary', 'dark')};
    }
  `
)

export const FilePreview = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`

export const FilePreviewImage = styled.img`
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
`

export const Actions = styled.div`
  position: absolute;
  top: ${get('gutter', 'lg')};
  right: ${get('gutter', 'lg')};
`
