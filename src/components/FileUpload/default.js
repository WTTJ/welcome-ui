import React from 'react'
import { bool, string } from 'prop-types'

import { Icon } from '../Icon'

import { FilePreviewImage } from './styles.js'

export const DefaultContent = ({ fileUrl, isHoverAccept, isHoverReject }) => {
  if (isHoverAccept) {
    return <Icon name="positive" />
  } else if (isHoverReject) {
    return <Icon name="negative" />
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
