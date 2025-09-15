import { FileDrop } from '@old/FileDrop'

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
        fileButtonText: 'My custom file button',
        hint: 'My custom hint',
        title: 'My custom title',
      }}
    />
  )
}

export default Example
