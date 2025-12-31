import { Button } from '@/components/Button'
import { FileUpload } from '@/components/FileUpload'
import { Icon } from '@/components/Icon'

const Example = () => {
  const handleChange = () => {
    // your code
  }

  return (
    <FileUpload handleAddFile={handleChange} handleRemoveFile={handleChange} name="custom" value="">
      {({ disabled, openFile }) => (
        <Button disabled={disabled} onClick={openFile}>
          <Icon name="upload" />
        </Button>
      )}
    </FileUpload>
  )
}

export default Example
