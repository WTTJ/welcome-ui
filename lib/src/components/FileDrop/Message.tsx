import { Button } from '@/Button'
import { Text } from '@/Text'

import type { FileDropChildren } from './index'

export interface MessageProps {
  disabled?: boolean
  openFile?: FileDropChildren['openFile']
}

export const Message: React.FC<FileDropChildren['wordings'] & MessageProps> = ({
  disabled,
  fileButtonText = 'Browse file',
  hint = 'Drag & drop a file here or',
  openFile,
  title = 'Add file',
}) => {
  return (
    <>
      <Text color="neutral-90" m="0" variant="h4">
        {title}
      </Text>
      <Text color="beige-70" m="0" mt="xs" variant="sm">
        {hint}
      </Text>
      <Button disabled={disabled} mt="lg" onClick={openFile} type="button">
        {fileButtonText}
      </Button>
    </>
  )
}
