import { Button } from '@/components/Button'
import { getFileIcon, getFileName, getFileSize } from '@/components/Files'
import { ExternalLinkIcon } from '@/components/Icon'
import { Text } from '@/components/Text'

import type { FilePreviewProps } from '../types'

export const FilePreview = ({
  file,
  fileName,
  forceFileType,
  previewButtonText = 'Preview',
}: FilePreviewProps) => {
  const isUrl = typeof file === 'string'
  const Icon = getFileIcon(file, forceFileType)
  const size = file instanceof File ? getFileSize(file) : null
  const name = isUrl && fileName ? fileName : getFileName(file)

  return (
    <>
      <Icon className="mb-lg" size="xxl" />
      <Text className="m-0 max-w-[600px]" lines={1} variant="h4">
        {name}
      </Text>
      {!isUrl && (
        <Text className="font-medium m-0 text-beige-70" lines={1} variant="sm">
          {size}
        </Text>
      )}
      {isUrl ? (
        <Button
          as="a"
          className="mt-md"
          href={file}
          rel="noopener noreferrer"
          size="sm"
          target="_blank"
        >
          <span>{previewButtonText}</span>
          <ExternalLinkIcon />
        </Button>
      ) : null}
    </>
  )
}
