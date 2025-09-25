import { Button } from '@/components/Button'
import { FileUpload } from '@/components/FileUpload'
import { UploadIcon } from '@/components/Icon'

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
