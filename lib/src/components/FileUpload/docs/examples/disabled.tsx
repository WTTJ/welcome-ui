import * as React from 'react'
import { FileUpload } from 'welcome-ui/FileUpload'
import { Button } from 'welcome-ui/Button'

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
