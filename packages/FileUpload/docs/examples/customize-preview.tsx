import * as React from 'react'
import { FileUpload, PreviewProps } from '@welcome-ui/file-upload'
import { Button } from '@welcome-ui/button'
import { getFileIcon, getFileName, getFileSize } from '@welcome-ui/files'
import { CrossIcon } from '@welcome-ui/icons'
import { Tag } from '@welcome-ui/tag'
import { Box } from '@welcome-ui/box'

const Example = () => {
  const handleChange = () => {
    // your code
  }

  const Preview = ({ file, onRemove }: PreviewProps) =>
    React.useMemo(() => {
      const Icon = getFileIcon(file)
      const name = getFileName(file)
      const size = getFileSize(file)

      return (
        <Tag
          alignItems="center"
          backgroundColor="neutral-white"
          data-id={name}
          h={60}
          key={name}
          mt="sm"
          px="xl"
          size="md"
        >
          <Icon mr="sm" size="lg" />
          {name}
          {size && <Box color="nude-60">({size})</Box>}
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
