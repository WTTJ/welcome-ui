import React from 'react'
import { Button } from '@welcome-ui/button'
import { Text } from '@welcome-ui/text'

import { DisabledType, OpenType, WordingsType } from './index'

export interface MessageProps {
  disabled?: DisabledType
  openFile?: OpenType
}

export const Message: React.FC<MessageProps & WordingsType> = ({
  disabled,
  fileButtonText = 'Browse file',
  hint = 'Drag & drop a file here or',
  openFile,
  title = 'Add file',
}) => {
  return (
    <>
      <Text color="dark.900" m="0" variant="h5">
        {title}
      </Text>
      <Text color="nude.700" m="0" mt="sm" variant="body3">
        {hint}
      </Text>
      <Button disabled={disabled} mt="xl" onClick={openFile} type="button">
        {fileButtonText}
      </Button>
    </>
  )
}
