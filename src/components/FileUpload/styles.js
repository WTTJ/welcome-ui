import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'

import { system } from '../../utils/'
import { fieldStyles } from '../../common/styles/form'
import { Button } from '../Button/styles'

const getBorderColor = ({ isDragAccept, isDragReject }) => {
  if (isDragAccept) {
    return 'primary.default'
  }
  if (isDragReject) {
    return 'danger.default'
  }

  return null
}

const disabledStyles = css`
  background: light.500;

  h3,
  p {
    color: nude.700;
  }
`

export const FileUpload = styled.div(
  props => css`
    ${fieldStyles};
    ${th('fields.fileupload')};
    border-color: ${getBorderColor(props)};
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: md;
    ${system};

    h3 {
      font-size: h3;
      font-weight: normal;
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
  top: ${th.space('xl')};
  right: ${th.space('xl')};
  display: flex;
  flex-direction: column;

  ${Button} {
    margin-bottom: md;
  }
`
