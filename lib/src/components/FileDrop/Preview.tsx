import React from 'react'

import { NegativeIcon, PositiveIcon } from '@/Icons'

import type { FileDropChildren } from './index'

import { FilePreview } from './FilePreview'
import { Message } from './Message'
import { ImagePreview } from './styles'

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
