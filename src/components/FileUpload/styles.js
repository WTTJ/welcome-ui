import styled, { css } from 'styled-components'

import { get, getCss } from '../../theme/helpers'
import { Wrapper as StyledButton } from '../Button/styles'

const getBorderColor = ({ isDragAccept, isDragActive, isDragReject }) => {
  if (isDragAccept) {
    return get('colors.primary.default')
  }
  if (isDragReject) {
    return get('colors.danger.default')
  }

  return null
}

const disabledStyles = css`
  background: ${get('colors.light.500')};

  h3,
  p {
    color: ${get('colors.nude.300')};
  }
`

export const StyledFileUpload = styled.div(
  props => css`
    ${getCss('fields.fileupload')};
    border-color: ${getBorderColor(props)};
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${get('space.md')};

    h3 {
      font-size: ${get('fontSizes.h3')};
      color: ${get('colors.secondary.500')};
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
  top: ${get('space.xl')};
  right: ${get('space.xl')};
  display: flex;
  flex-direction: column;

  ${StyledButton} {
    margin-bottom: ${get('space.md')};
  }
`
