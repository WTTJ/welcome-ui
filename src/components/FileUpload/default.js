import React from 'react'
import { bool, string } from 'prop-types'

import { Icon } from '../Icon'

import { Actions, FilePreview, FilePreviewImage, StyledFileUpload } from './styles.js'

export const DefaultContent = ({ fileUrl, isHoverAccept, isHoverReject }) => {
  if (isHoverAccept) {
    return <Icon icon="positive" />
  } else if (isHoverReject) {
    return <Icon icon="negative" />
  } else if (fileUrl) {
    return <FilePreviewImage src={fileUrl} />
  }
  return <h3>Drag and drop picture here</h3>
}

DefaultContent.propTypes = {
  fileUrl: string,
  isHoverAccept: bool,
  isHoverReject: bool
}
