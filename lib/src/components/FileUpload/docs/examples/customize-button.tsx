import { Button, FileUpload } from 'welcome-ui'
import * as React from 'react'
import { UploadIcon } from '@welcome-ui/icons'

const Example = () => {
  const handleChange = () => {
    // your code
  }

  return (
    <FileUpload handleAddFile={handleChange} handleRemoveFile={handleChange} name="custom" value="">
      {({ disabled, openFile }) => (
        <Button disabled={disabled} onClick={openFile} shape="circle" size="lg">
          <UploadIcon />
        </Button>
      )}
    </FileUpload>
  )
}

export default Example
