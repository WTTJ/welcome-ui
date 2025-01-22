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
      name="avatar"
      value="https://media3.giphy.com/media/uYiJD8fcWDys8/giphy.gif?cid=790b76115d08fb457747437951ff7674&rid=giphy.gif"
    />
  )
}

export default Example
