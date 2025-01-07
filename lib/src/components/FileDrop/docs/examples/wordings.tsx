import { FileDrop } from 'welcome-ui'
import * as React from 'react'

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
