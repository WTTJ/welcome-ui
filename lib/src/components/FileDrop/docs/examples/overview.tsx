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
    />
  )
}

export default Example
