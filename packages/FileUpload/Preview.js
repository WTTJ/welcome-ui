/* eslint-disable react/no-multi-comp */
import React from 'react'
import { func, number, oneOfType, shape, string } from 'prop-types'
import mime from 'mime/lite'
import { InstagramIcon } from '@welcome-ui/icons.instagram'
import { MusicIcon } from '@welcome-ui/icons.music'
import { YoutubeIcon } from '@welcome-ui/icons.youtube'
import { AttachmentIcon } from '@welcome-ui/icons.attachment'
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
    return null
  }

  if (mimeType.startsWith('image/')) {
    return InstagramIcon
  }
  if (mimeType.startsWith('audio/')) {
    return MusicIcon
  }
  if (mimeType.startsWith('video/')) {
    return YoutubeIcon
  }

  switch (mimeType) {
    case 'application/pdf':
      return AttachmentIcon
    case 'application/msword':
    case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
    case 'application/vnd.oasis.opendocument.text':
      return AttachmentIcon
    default:
      return AttachmentIcon
  }
}

export const Preview = ({ file, onRemove }) => {
  const Icon = getIcon(file)
  const name = getName(file)
  const size = getSize(file)

  return (
    <Tag data-id={name} key={name} mr="sm" mt="sm" onRemove={onRemove} size="lg">
      <Icon size="sm" />
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
