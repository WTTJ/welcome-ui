import * as React from 'react'
import { FileUpload } from 'welcome-ui/FileUpload'
import { Button } from 'welcome-ui/Button'
import { UploadIcon } from 'welcome-ui/Icons'

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
