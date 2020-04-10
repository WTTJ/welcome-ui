import React from 'react'
import { bool, func } from 'prop-types'
import { Button } from '@welcome-ui/button'
import { Text } from '@welcome-ui/text'

export const Message = ({ disabled, openFile }) => {
  return (
    <>
      <Text color="dark.900" fontWeight="bold" m="0" variant="body1">
        Add file
      </Text>
      <Text m="0" variant="body3">
        Drag and drop a file here or
      </Text>
      <Button disabled={disabled} mt="lg" onClick={openFile} type="button">
        Browse file
      </Button>
    </>
  )
}

Message.propTypes /* remove-proptypes */ = {
  disabled: bool,
  openFile: func
}
