import { Button } from '@/components/Button'
import { Icon } from '@/components/Icon'
import { Text } from '@/components/Text'
import { classNames } from '@/utils'

import filedropStyles from '../filedrop.module.scss'
import type { MessageProps } from '../types'

const cx = classNames(filedropStyles)

export const Message = ({
  disabled,
  fileButtonText = 'Browse file',
  hint = 'Drag & drop a file here or',
  isLoading,
  openFile,
  title = 'Add file',
}: MessageProps) => {
  return (
    <>
      <Icon className="mb-lg" name="import" size="lg" />
      <Text className={cx('message-title')} variant="heading-xs-strong">
        {title}
      </Text>
      <Text className={cx('message-hint')} variant="body-md">
        {hint}
      </Text>
      <Button
        className={cx('message-file-button-text')}
        disabled={disabled}
        isLoading={isLoading}
        onClick={openFile}
        type="button"
      >
        {fileButtonText}
      </Button>
    </>
  )
}

Message.displayName = 'FileDrop.Message'
