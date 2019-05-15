import styled, { css } from 'styled-components'

import { get } from '../../theme/helpers'

const getBorder = ({ isDragAccept, isDragActive, isDragReject, alertMode }) => {
  let borderStyle = 'dashed'
  let borderColor = null

  if (isDragActive) {
    borderColor = get('color', 'gray', 400)
  }
  if (isDragAccept) {
    borderStyle = 'solid'
    borderColor = get('color', 'green', 400)
  }
  if (isDragReject) {
    borderStyle = 'solid'
    borderColor = get('color', 'red', 400)
  }

  return css`
    border: ${get('borderWidth', 'input')} ${borderStyle} ${borderColor};
  `
}

export const StyledFileDrop = styled.div(
  props => css`
    position: relative;
    height: ${get('headerHeight')};
    padding: ${get('gutter', 'md')};
    text-align: center;
    background: ${get('color', 'gray', 100)};
    ${getBorder(props)};
    border-radius: ${get('radius', 'sm')};

    h3 {
      font-size: ${get('fontSize', 'lg')};
    }

    p {
      color: ${get('color', 'gray', 300)};
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
