import React from 'react'
import { object, oneOf, oneOfType, string } from 'prop-types'
import { Button } from '@welcome-ui/button'
import { Text } from '@welcome-ui/text'
import { ExternalLinkIcon } from '@welcome-ui/icons.external_link'
import { getFileIcon, getFileName, getFileSize } from '@welcome-ui/files'

export const FilePreview = ({ file, forceFileType }) => {
  const isUrl = typeof file === 'string'
  const Icon = getFileIcon(file, forceFileType)
  const size = getFileSize(file)
  const name = getFileName(file)

  return (
    <>
      <Icon color="dark.900" height={50} mb="lg" width={50} />
      <Text color="dark.800" lines={1} m={0} maxWidth={600} variant="h5">
        {name}
      </Text>
      {!isUrl && (
        <Text color="nude.700" fontWeight="medium" lines={1} m={0} variant="body3">
          {size}
        </Text>
      )}
      {isUrl && (
        <Button as="a" href={file} mt="md" rel="noopener" size="sm" target="_blank">
          <span>Preview</span>
          <ExternalLinkIcon />
        </Button>
      )}
    </>
  )
}

FilePreview.propTypes /* remove-proptypes */ = {
  file: oneOfType([string, object]),
  forceFileType: oneOf(['image', 'audio', 'video'])
}
