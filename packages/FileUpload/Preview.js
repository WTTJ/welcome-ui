import React from 'react'
import { func, number, oneOfType, shape, string } from 'prop-types'
import { Tag } from '@welcome-ui/tag'
import { Box } from '@welcome-ui/box'
import { getFileIcon, getFileName, getFileSize } from '@welcome-ui/files'

export const Preview = ({ file, onRemove }) => {
  const Icon = getFileIcon(file)
  const name = getFileName(file)
  const size = getFileSize(file)

  return (
    <Tag data-id={name} key={name} mr="sm" mt="sm" onRemove={onRemove} size="lg">
      <Icon size="md" />
      {name}
      {size && <Box color="nude.600">({size})</Box>}
    </Tag>
  )
}

Preview.propTypes /* remove-proptypes */ = {
  file: oneOfType([
    string,
    shape({
      name: string,
      preview: string,
      size: number,
      type: string
    })
  ]).isRequired,
  onRemove: func
}
