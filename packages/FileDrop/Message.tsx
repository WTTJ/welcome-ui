import React from 'react'
import { Button } from '@welcome-ui/button'
import { Text } from '@welcome-ui/text'

import { DisabledType, OpenType } from './index'

export interface MessageProps {
  disabled?: DisabledType
  openFile?: OpenType
}

export const Message: React.FC<MessageProps> = ({ disabled, openFile }) => {
  return (
    <>
      <Text color="dark.900" m="0" variant="h5">
        Add file
      </Text>
      <Text color="nude.700" m="0" mt="sm" variant="body3">
        Drag & drop a file here or
      </Text>
      <Button disabled={disabled} mt="xl" onClick={openFile} type="button">
        Browse file
      </Button>
    </>
  )
}
