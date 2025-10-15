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
      <Text as="h4" className={cx('message-title')} variant="heading-xl">
        {title}
      </Text>
      <Text className={cx('message-hint')} variant="body-md">
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
