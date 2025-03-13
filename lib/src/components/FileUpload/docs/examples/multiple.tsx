
import { FileUpload } from '@/FileUpload'
import { Button } from '@/Button'

const Example = () => {
  const handleChange = () => {
    // your code
  }

  return (
    <FileUpload
      accept="application/pdf"
      handleAddFile={handleChange}
      handleRemoveFile={handleChange}
      multiple
      name="files"
      value=""
    >
      {({ disabled, openFile }) => (
        <Button disabled={disabled} onClick={openFile} variant="secondary">
          Choose file(s)
        </Button>
      )}
    </FileUpload>
  )
}

export default Example
