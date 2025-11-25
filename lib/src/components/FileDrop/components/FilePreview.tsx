import { Button } from '@/components/Button'
import { getFileIconName, getFileName, getFileSize } from '@/components/Files'
import { Icon } from '@/components/Icon'
import { Text } from '@/components/Text'
import { classNames } from '@/utils'

import filedropStyles from '../filedrop.module.scss'
import type { FilePreviewProps } from '../types'

const cx = classNames(filedropStyles)

export const FilePreview = ({
  file,
  fileName,
  forceFileType,
  previewButtonText = 'Preview',
}: FilePreviewProps) => {
  const isUrl = typeof file === 'string'
  const iconName = getFileIconName(file, forceFileType)
  const size = file instanceof File ? getFileSize(file) : null
  const name = isUrl && fileName ? fileName : getFileName(file)

  return (
    <>
      {isUrl ? (
        <Button
          as="a"
          className={cx('file-preview-size', 'file-preview-button')}
          href={file}
          rel="noopener noreferrer"
          size="md"
          target="_blank"
          variant="secondary"
        >
          <span>{previewButtonText}</span>
          <Icon name="external-link-alt" />
        </Button>
      ) : null}
      <Icon className={cx('file-preview-icon')} name={iconName} size="xxl" />
      <Text className={cx('file-preview-name')} lines={1} variant="heading-xs-strong">
        {name}
      </Text>
      {!isUrl && (
        <Text className={cx('file-preview-size')} lines={1} variant="body-md">
          {size}
        </Text>
      )}
    </>
  )
}

FilePreview.displayName = 'FileDrop.FilePreview'
