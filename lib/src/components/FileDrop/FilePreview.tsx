import React from 'react'

import { FileDropChildren } from './index'

import { ExternalLinkIcon } from '@/Icons'
import { Text } from '@/Text'
import { ForceFileType, getFileIcon, getFileName, getFileSize } from '@/Files'
import { Button } from '@/Button'

export interface MessageProps {
  file: FileDropChildren['file']
  fileName?: string
  forceFileType?: ForceFileType
}

export const FilePreview: React.FC<MessageProps & FileDropChildren['wordings']> = ({
  file,
  fileName,
  forceFileType,
  previewButtonText = 'Preview',
}) => {
  const isUrl = typeof file === 'string'
  const Icon = getFileIcon(file, forceFileType)
  const size = file instanceof File ? getFileSize(file) : null
  const name = isUrl && fileName ? fileName : getFileName(file)

  return (
    <>
      <Icon color="neutral-90" h={50} mb="lg" w={50} />
      <Text color="neutral-90" lines={1} m={0} maxWidth={600} variant="h4">
        {name}
      </Text>
      {!isUrl && (
        <Text color="beige-70" fontWeight="medium" lines={1} m={0} variant="sm">
          {size}
        </Text>
      )}
      {isUrl && (
        <Button as="a" href={file} mt="md" rel="noopener" size="sm" target="_blank">
          <span>{previewButtonText}</span>
          <ExternalLinkIcon />
        </Button>
      )}
    </>
  )
}
