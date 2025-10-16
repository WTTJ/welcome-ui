import { Button } from '@/components/Button'
import { Text } from '@/components/Text'
import { classNames } from '@/utils'

import filedropStyles from '../filedrop.module.scss'
import type { MessageProps } from '../types'

const cx = classNames(filedropStyles)

export const Message = ({
  disabled,
  fileButtonText = 'Browse file',
  hint = 'Drag & drop a file here or',
  openFile,
  title = 'Add file',
}: MessageProps) => {
  return (
    <>
      <Text className={cx('message-title')} variant="h4">
        {title}
      </Text>
      <Text className={cx('message-hint')} variant="sm">
        {hint}
      </Text>
      <Button
        className={cx('message-file-button-text')}
        disabled={disabled}
        onClick={openFile}
        type="button"
      >
        {fileButtonText}
      </Button>
    </>
  )
}
