import * as React from 'react'
import { FileDrop } from 'welcome-ui/FileDrop'

const Example = () => {
  const handleChange = () => {
    // your code
  }

  return (
    <FileDrop
      handleAddFile={handleChange}
      handleRemoveFile={handleChange}
      isClearable
      isEditable
      name="file"
      value=""
      wordings={{
        title: 'My custom title',
        hint: 'My custom hint',
        fileButtonText: 'My custom file button',
      }}
    />
  )
}

export default Example
