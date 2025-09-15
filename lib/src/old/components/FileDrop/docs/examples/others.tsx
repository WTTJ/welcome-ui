import { FileDrop } from '@old/FileDrop'

const Example = () => {
  const handleChange = () => {
    // your code
  }

  return (
    <FileDrop
      accept={{
        'application/*': ['.doc', '.docx', '.json'],
        'audio/*': ['.mp3'],
        'video/*': ['.mp4'],
      }}
      handleAddFile={handleChange}
      handleRemoveFile={handleChange}
      isClearable
      isEditable
      name="file"
      value="https://test-documents-file/file.docx?v=63731713698"
    />
  )
}

export default Example
