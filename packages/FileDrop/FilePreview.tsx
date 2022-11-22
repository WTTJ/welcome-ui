import React from 'react'
import { Button } from '@welcome-ui/button'
import { Text } from '@welcome-ui/text'
import { ExternalLinkIcon } from '@welcome-ui/icons'
import { ForceFileType, getFileIcon, getFileName, getFileSize } from '@welcome-ui/files'

import { FileType, WordingsType } from './index'

export interface MessageProps {
  file: FileType
  forceFileType?: ForceFileType
}

export const FilePreview: React.FC<MessageProps & WordingsType> = ({
  file,
  forceFileType,
  previewButtonText = 'Preview',
}) => {
  const isUrl = typeof file === 'string'
  const Icon = getFileIcon(file, forceFileType)
  const size = file instanceof File ? getFileSize(file) : null
  const name = getFileName(file)

  return (
    <>
      <Icon $color="dark-900" $h="50px" $mb="lg" $w="50px" />
      <Text $color="dark-900" $m="0" $maxW="600px" lines={1} variant="h4">
        {name}
      </Text>
      {!isUrl && (
        <Text $color="nude-700" $fontWeight="medium" $m="0" lines={1} variant="sm">
          {size}
        </Text>
      )}
      {isUrl && (
        <Button $mt="md" as="a" href={file} rel="noopener" size="sm" target="_blank">
          <span>{previewButtonText}</span>
          <ExternalLinkIcon />
        </Button>
      )}
    </>
  )
}
