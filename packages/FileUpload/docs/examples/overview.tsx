import * as React from 'react'
import { FileUpload } from '@welcome-ui/file-upload'
import { Button } from '@welcome-ui/button'
import { Field } from '@welcome-ui/field'

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
