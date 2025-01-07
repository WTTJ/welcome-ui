import { Button, Field, FileUpload } from 'welcome-ui'
import * as React from 'react'

const Example = () => {
  const handleChange = () => {
    // your code
  }

  return (
    <Field>
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
    </Field>
  )
}

export default Example
