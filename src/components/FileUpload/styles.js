import styled, { css } from 'styled-components'

import { get, getCss } from '../../theme/helpers'
import { StyledButton } from '../Button/styles'

const getBorderColor = ({ isDragAccept, isDragActive, isDragReject }) => {
  if (isDragAccept) {
    return get('colors.primary.default')
  }
  if (isDragReject) {
    return get('colors.danger.default')
  }

  return null
}

export const Wrapper = styled.div`
  position: relative;
`

const disabledStyles = css`
  background: ${get('colors.light.500')};

  h3,
  p {
    color: ${get('colors.nude.300')};
  }
`

export const StyledFileUpload = styled.div(
  props => css`
    ${getCss('fields.filedrop')};
    border-color: ${getBorderColor(props)};
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${get('spaces.md')};

    h3 {
      ${getCss('texts.h1')};
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
  top: ${get('spaces.xl')};
  right: ${get('spaces.xl')};
  display: flex;
  flex-direction: column;

  ${StyledButton} {
    margin-bottom: ${get('gutter.md')};
  }
`
