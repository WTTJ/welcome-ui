import React from 'react'
import { bool, func } from 'prop-types'
import { Button } from '@welcome-ui/button'
import { Text } from '@welcome-ui/text'

export function Message({ disabled, openFile }) {
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

Message.propTypes /* remove-proptypes */ = {
  disabled: bool,
  openFile: func,
}
