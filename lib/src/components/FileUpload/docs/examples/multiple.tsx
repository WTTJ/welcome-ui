import * as React from 'react'
import { FileUpload } from 'welcome-ui/FileUpload'
import { Button } from 'welcome-ui/Button'

const Example = () => {
  const handleChange = () => {
    // your code
  }

  return (
    <FileUpload
      accept="application/pdf"
      handleAddFile={handleChange}
      handleRemoveFile={handleChange}
      multiple
      name="files"
      value=""
    >
      {({ disabled, openFile }) => (
        <Button disabled={disabled} onClick={openFile} variant="secondary">
          Choose file(s)
        </Button>
      )}
    </FileUpload>
  )
}

export default Example
