import React from 'react'

import { Icon } from '@/components/Icon'
import { classNames } from '@/utils/classNames'

import filedropStyles from '../filedrop.module.scss'
import type { FileDropChildren } from '../types'

import { FilePreview } from './FilePreview'
import { Message } from './Message'

const cx = classNames(filedropStyles)

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
    return <Icon name="smile-beam-solid" />
  } else if (isHoverReject) {
    return <Icon name="sad-solid" />
  } else if (error) {
    return <Message openFile={openFile} {...wordings} />
  } else if (fileUrl) {
    if (isAnImage) {
      return <img className={cx('image-preview')} src={fileUrl as string} />
    } else {
      return (
        <FilePreview file={file} fileName={fileName} forceFileType={forceFileType} {...wordings} />
      )
    }
  }
  return <Message disabled={disabled} openFile={openFile} {...wordings} />
}
