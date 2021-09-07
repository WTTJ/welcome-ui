import React from 'react'
import { NegativeIcon } from '@welcome-ui/icons.negative'
import { PositiveIcon } from '@welcome-ui/icons.positive'

import { ImagePreview } from './styles'
import { Message } from './Message'
import { FilePreview } from './FilePreview'

import { ChildrenType } from './index'

export const Preview: React.FC<ChildrenType> = ({
  disabled,
  error,
  file,
  fileUrl,
  forceFileType,
  isAnImage,
  isHoverAccept,
  isHoverReject,
  openFile,
}) => {
  if (isHoverAccept) {
    return <PositiveIcon />
  } else if (isHoverReject) {
    return <NegativeIcon />
  } else if (error) {
    return <Message openFile={openFile} />
  } else if (fileUrl) {
    if (isAnImage) {
      return <ImagePreview src={fileUrl as string} />
    } else {
      return <FilePreview file={file} forceFileType={forceFileType} />
    }
  }
  return <Message disabled={disabled} openFile={openFile} />
}
