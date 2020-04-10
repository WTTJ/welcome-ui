import React from 'react'
import { object, oneOfType, string } from 'prop-types'
import { Button } from '@welcome-ui/button'
import { Text } from '@welcome-ui/text'
import { ExternalLinkIcon } from '@welcome-ui/icons.external_link'
import { getFileIcon, getFileName, getFileSize } from '@welcome-ui/files'

export const FilePreview = ({ file }) => {
  const isUrl = typeof file === 'string'
  const Icon = getFileIcon(file)
  const size = getFileSize(file)
  const name = getFileName(file)

  return (
    <>
      <Icon color="dark.200" height={50} mb="md" width={50} />
      <Text color="dark.200" fontWeight="bold" lines={1} m={0}>
        {name}
      </Text>
      {!isUrl && (
        <Text fontWeight="medium" lines={1} m={0} variant="body3">
          {size}
        </Text>
      )}
      {isUrl && (
        <Button as="a" href={file} mt="sm" rel="noopenner" size="sm" target="_blank">
          <span>Preview</span>
          <ExternalLinkIcon />
        </Button>
      )}
    </>
  )
}

FilePreview.propTypes /* remove-proptypes */ = {
  file: oneOfType([string, object])
}
