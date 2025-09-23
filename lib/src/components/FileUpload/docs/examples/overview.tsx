import { FileUpload } from '@/components/FileUpload'

const Example = () => {
  const handleChange = () => {
    // your code
  }

  return (
    <FileUpload
      accept="*/*"
      handleAddFile={handleChange}
      handleRemoveFile={handleChange}
      name="file"
      value=""
    />
  )
}

export default Example
