import { Button } from '@old/Button'
import { FileUpload } from '@old/FileUpload'
import { UploadIcon } from '@old/Icons'

const Example = () => {
  const handleChange = () => {
    // your code
  }

  return (
    <FileUpload handleAddFile={handleChange} handleRemoveFile={handleChange} name="custom" value="">
      {({ disabled, openFile }) => (
        <Button disabled={disabled} onClick={openFile} shape="circle" size="lg">
          <UploadIcon />
        </Button>
      )}
    </FileUpload>
  )
}

export default Example
