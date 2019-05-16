import styled, { css } from 'styled-components'

import { get, getCss } from '../../theme/helpers'
import { StyledButton } from '../Button/styles'

const getBorder = ({ isDragAccept, isDragActive, isDragReject }) => {
  let borderStyle = 'dashed'
  let borderColor = null

  if (isDragAccept) {
    borderColor = get('color.primary.500')
  }
  if (isDragReject) {
    borderColor = get('color.danger.500')
  }

  return css`
    border: ${get('borderWidth.input')} ${borderStyle} ${borderColor};
  `
}

export const Wrapper = styled.div`
  position: relative;
`

const disabledStyles = css`
  background: ${get('color.light.500')};

  h3,
  p {
    color: ${get('color.dark.200')};
  }
`

export const StyledFileUpload = styled.div(
  props => css`
    ${getCss('fields.default')};
    ${getBorder(props)};
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: ${get('fileDropHeight')};
    padding: ${get('gutter.md')};

    h3 {
      ${getCss('text.h1')};
      color: ${get('color.primary.700')};
    }

    ${props.disabled && disabledStyles};
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
  top: ${get('gutter.lg')};
  right: ${get('gutter.lg')};
  display: flex;
  flex-direction: column;

  ${StyledButton} {
    margin-bottom: ${get('gutter.sm')};
  }
`
