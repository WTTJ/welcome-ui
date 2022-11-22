import React from 'react'
import { Tag, TagProps } from '@welcome-ui/tag'
import { Box } from '@welcome-ui/box'
import { FileType, getFileIcon, getFileName, getFileSize } from '@welcome-ui/files'

export interface PreviewProps {
  file: FileType
  onRemove: TagProps['onRemove']
}

export const Preview: React.FC<PreviewProps> = ({ file, onRemove }) => {
  const Icon = getFileIcon(file)
  const name = getFileName(file)
  const size = getFileSize(file)

  return (
    <Tag $mr="sm" $mt="sm" data-id={name} key={name} onRemove={onRemove}>
      <Icon size="md" />
      {name}
      {size && <Box color="nude-600">({size})</Box>}
    </Tag>
  )
}
