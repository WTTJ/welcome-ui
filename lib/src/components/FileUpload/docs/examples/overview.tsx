import * as React from 'react'

import { FileUpload } from '@/FileUpload'
import { Button } from '@/Button'
import { Field } from '@/Field'

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
