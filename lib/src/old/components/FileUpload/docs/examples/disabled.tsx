import { Button } from '@old/Button'
import { FileUpload } from '@old/FileUpload'

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
