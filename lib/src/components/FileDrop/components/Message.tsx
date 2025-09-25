import { Button } from '@/components/Button'
import { Text } from '@/components/Text'

import type { MessageProps } from '../types'

export const Message = ({
  disabled,
  fileButtonText = 'Browse file',
  hint = 'Drag & drop a file here or',
  openFile,
  title = 'Add file',
}: MessageProps) => {
  return (
    <>
      <Text className="m-0" variant="h4">
        {title}
      </Text>
      <Text className="m-0 mt-xs text-beige-70" variant="sm">
        {hint}
      </Text>
      <Button className="mt-lg" disabled={disabled} onClick={openFile} type="button">
        {fileButtonText}
      </Button>
    </>
  )
}
