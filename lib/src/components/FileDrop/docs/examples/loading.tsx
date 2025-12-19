import { FileDrop } from '@/components/FileDrop'

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
      isLoading
      name="file"
      value=""
      wordings={{
        loadingHint: 'This might take a few seconds.',
        loadingTitle: 'File is uploading',
      }}
    />
  )
}

export default Example
