import React from 'react'
import { Button } from '@welcome-ui/button'
import { Text } from '@welcome-ui/text'
import { ExternalLinkIcon } from '@welcome-ui/icons.external_link'
import { ForceFileType, getFileIcon, getFileName, getFileSize } from '@welcome-ui/files'

import { FileType } from './index'

export interface MessageProps {
  file: FileType
  forceFileType?: ForceFileType
}

export const FilePreview: React.FC<MessageProps> = ({ file, forceFileType }) => {
  const isUrl = typeof file === 'string'
  const Icon = getFileIcon(file, forceFileType)
  const name = getFileName(file)
  const size = file instanceof File ? getFileSize(file) : null

  return (
    <>
      <Icon color="dark.900" h={50} mb="lg" w={50} />
      <Text color="dark.900" lines={1} m={0} maxWidth={600} variant="h5">
        {name}
      </Text>
      {!isUrl && (
        <Text color="nude.700" fontWeight="medium" lines={1} m={0} variant="body3">
          {size}
        </Text>
      )}
      {isUrl && (
        <Button as="a" href={file} mt="md" rel="noopener" size="sm" target="_blank">
          <span>Preview</span>
          <ExternalLinkIcon />
        </Button>
      )}
    </>
  )
}
