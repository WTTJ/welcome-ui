import { FileDrop } from '@/FileDrop'

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
      value="https://test-documents-file/file.docx?v=63731713698"
    />
  )
}

export default Example
