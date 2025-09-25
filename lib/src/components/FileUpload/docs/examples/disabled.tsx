import { Button } from '@/components/Button'
import { FileUpload } from '@/components/FileUpload'

const Example = () => {
  return (
    <FileUpload disabled name="disabled" value="">
      {({ disabled, openFile }) => (
        <Button disabled={disabled} onClick={openFile}>
          Choose file
        </Button>
      )}
    </FileUpload>
  )
}

export default Example
