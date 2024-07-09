import * as React from 'react'
import { FileUpload } from '@welcome-ui/file-upload'
import { Button } from '@welcome-ui/button'

const Example = () => {
  const handleChange = () => {
    // your code
  }

  return (
    <FileUpload
      accept="image/*"
      handleAddFile={handleChange}
      handleRemoveFile={handleChange}
      name="avatar"
      onError={() => {
        //error
      }}
      value=""
    >
      {({ openFile }) => <Button onClick={openFile}>Upload avatar</Button>}
    </FileUpload>
  )
}

export default Example
