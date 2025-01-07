import React from 'react'
import { NegativeIcon, PositiveIcon } from '@welcome-ui/icons'

import { ImagePreview } from './styles'
import { Message } from './Message'
import { FilePreview } from './FilePreview'

import { FileDropChildren } from './index'

export const Preview: React.FC<FileDropChildren> = ({
  disabled,
  error,
  file,
  fileName,
  fileUrl,
  forceFileType,
  isAnImage,
  isHoverAccept,
  isHoverReject,
  openFile,
  wordings,
}) => {
  if (isHoverAccept) {
    return <PositiveIcon />
  } else if (isHoverReject) {
    return <NegativeIcon />
  } else if (error) {
    return <Message openFile={openFile} {...wordings} />
  } else if (fileUrl) {
    if (isAnImage) {
      return <ImagePreview src={fileUrl as string} />
    } else {
      return (
        <FilePreview file={file} fileName={fileName} forceFileType={forceFileType} {...wordings} />
      )
    }
  }
  return <Message disabled={disabled} openFile={openFile} {...wordings} />
}
