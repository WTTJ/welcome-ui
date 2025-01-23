import * as React from 'react'

import { FileUpload } from '@/FileUpload'

const Example = () => {
  const handleChange = () => {
    // your code
  }

  return (
    <FileUpload
      accept="image/*"
      handleAddFile={handleChange}
      handleRemoveFile={handleChange}
      name="file"
      value="https://doc-example/example.docx?v=63731713698"
    />
  )
}

export default Example
