import React from 'react'
import { bool, func, string } from 'prop-types'

import { Button } from '../Button'
import { Icon } from '../Icon'
import { Text } from '../Text'

import { FilePreviewImage } from './styles.js'

export const DefaultContent = ({ error, fileUrl, isHoverAccept, isHoverReject, openFile }) => {
  if (isHoverAccept) {
    return <Icon name="positive" />
  } else if (isHoverReject) {
    return <Icon name="negative" />
  } else if (error) {
    return <Message openFile={openFile} />
  } else if (fileUrl) {
    return <FilePreviewImage src={fileUrl} />
  }
  return <Message openFile={openFile} />
}

DefaultContent.propTypes = {
  error: string,
  fileUrl: string,
  isHoverAccept: bool,
  isHoverReject: bool,
  openFile: func
}

// eslint-disable-next-line react/no-multi-comp
const Message = ({ openFile }) => {
  return (
    <>
      <Text m="0" variant="h3">
        Add file
      </Text>
      <Text variant="body1">Drag and drop a file here or…</Text>
      <Button onClick={openFile} type="button">
        Choose file
      </Button>
    </>
  )
}

Message.propTypes = {
  openFile: func
}
