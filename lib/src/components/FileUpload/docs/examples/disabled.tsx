import { Button, FileUpload } from 'welcome-ui'
import * as React from 'react'

const Example = () => {
  return (
    <FileUpload disabled name="disabled" value="">
      {({ disabled, openFile }) => (
        <Button disabled={disabled} onClick={openFile}>
          Choose file
        </Button>
      )}
    </FileUpload>
  )
}

export default Example
