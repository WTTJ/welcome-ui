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
      <Text color="neutral-90" m="0" variant="h4">
        {title}
      </Text>
      <Text color="beige-70" m="0" mt="xs" variant="sm">
        {hint}
      </Text>
      <Button disabled={disabled} mt="lg" onClick={openFile} type="button">
        {fileButtonText}
      </Button>
    </>
  )
}
