import { FileDrop } from '@old/FileDrop'

const Example = () => {
  const handleChange = () => {
    // your code
  }

  return (
    <FileDrop
      fileName="My custom filename"
      handleAddFile={handleChange}
      handleRemoveFile={handleChange}
      name="file2"
      value="https://test-documents-file/filename-too-complicated-to-display-1234.docx?v=63731713698"
    />
  )
}

export default Example
