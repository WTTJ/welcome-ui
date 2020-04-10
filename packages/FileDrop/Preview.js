import React from 'react'
import { bool, func, object, oneOfType, string } from 'prop-types'
import { NegativeIcon } from '@welcome-ui/icons.negative'
import { PositiveIcon } from '@welcome-ui/icons.positive'

import { ImagePreview } from './styles'
import { Message } from './Message'
import { FilePreview } from './FilePreview'

export const Preview = ({
  disabled,
  error,
  file,
  fileUrl,
  isAnImage,
  isHoverAccept,
  isHoverReject,
  openFile
}) => {
  if (isHoverAccept) {
    return <PositiveIcon />
  } else if (isHoverReject) {
    return <NegativeIcon />
  } else if (error) {
    return <Message openFile={openFile} />
  } else if (fileUrl) {
    if (isAnImage) {
      return <ImagePreview src={fileUrl} />
    } else {
      return <FilePreview file={file} />
    }
  }
  return <Message disabled={disabled} openFile={openFile} />
}

Preview.propTypes /* remove-proptypes */ = {
  disabled: bool,
  error: string,
  file: oneOfType([string, object]),
  fileUrl: string,
  isAnImage: bool,
  isHoverAccept: bool,
  isHoverReject: bool,
  openFile: func
}
