import React from 'react'

import { FileDropChildren } from './index'

import { Text } from '@/Text'
import { Button } from '@/Button'

export interface MessageProps {
  disabled?: boolean
  openFile?: FileDropChildren['openFile']
}

export const Message: React.FC<MessageProps & FileDropChildren['wordings']> = ({
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
