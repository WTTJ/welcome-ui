import * as React from 'react'

import { Box } from '@/Box'
import { Button } from '@/Button'
import { getFileIcon, getFileName, getFileSize } from '@/Files'
import type { FileUploadPreviewProps } from '@/FileUpload'
import { FileUpload } from '@/FileUpload'
import { CrossIcon } from '@/Icons'
import { Tag } from '@/Tag'

const Example = () => {
  const handleChange = () => {
    // your code
  }

  const Preview = ({ file, onRemove }: FileUploadPreviewProps) =>
    React.useMemo(() => {
      const Icon = getFileIcon(file)
      const name = getFileName(file)
      const size = getFileSize(file)

      return (
        <Tag
          alignItems="center"
          backgroundColor="neutral-10"
          data-id={name}
          h={60}
          key={name}
          mt="sm"
          px="xl"
          size="md"
        >
          <Icon mr="sm" size="lg" />
          {name}
          {size ? <Box color="beige-60">({size})</Box> : null}
          <Button ml="xxl" onClick={onRemove} shape="square" size="sm" variant="ghost">
            <CrossIcon />
          </Button>
        </Tag>
      )
    }, [file, onRemove])

  return (
    <FileUpload
      handleAddFile={handleChange}
      handleRemoveFile={handleChange}
      name="file"
      preview={Preview}
      value="https://doc-example/example.docx?v=63731713698"
    >
      {({ disabled, openFile }) => (
        <Button disabled={disabled} onClick={openFile}>
          Custom preview
        </Button>
      )}
    </FileUpload>
  )
}

export default Example
