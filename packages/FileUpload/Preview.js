import React from 'react'
import { func, number, oneOfType, shape, string } from 'prop-types'
import mime from 'mime/lite'
import { Icon } from '@welcome-ui/icon'
import { Tag } from '@welcome-ui/tag'
import { Box } from '@welcome-ui/box'

import { formatBytes } from '../Core/utils/bytes'

const removeQueryString = name => name.split('?')[0]

const getName = file =>
  file.name ||
  removeQueryString(file)
    .split('/')
    .pop()

const getMimeType = file => file.type || mime.getType(getName(file).split('.')[1])

const getSize = file => (file.size ? formatBytes(file.size, 0) : null)

const getIcon = file => {
  const mimeType = getMimeType(file)

  if (!mimeType) {
    return
  }

  if (mimeType.startsWith('image/')) {
    return 'instagram'
  }
  if (mimeType.startsWith('audio/')) {
    return 'music'
  }
  if (mimeType.startsWith('video/')) {
    return 'youtube'
  }

  switch (mimeType) {
    case 'application/pdf':
      return 'attachment'
    case 'application/msword':
    case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
    case 'application/vnd.oasis.opendocument.text':
      return 'attachment'
    default:
      return 'attachment'
  }
}

export const Preview = ({ file, onRemove }) => {
  const icon = getIcon(file)
  const name = getName(file)
  const size = getSize(file)

  return (
    <Tag data-id={name} key={name} mr="sm" mt="sm" onRemove={onRemove} size="lg">
      {icon && <Icon name={icon} size="xs" />}
      {name}
      {size && <Box color="nude.600">({size})</Box>}
    </Tag>
  )
}

Preview.propTypes = {
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
