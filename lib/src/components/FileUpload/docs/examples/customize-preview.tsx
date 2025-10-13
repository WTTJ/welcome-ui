import * as React from 'react'

import { Button } from '@/components/Button'
import { getFileIcon, getFileName, getFileSize } from '@/components/Files'
import { FileUpload } from '@/components/FileUpload'
import type { FileUploadPreviewProps } from '@/components/FileUpload/types'
import { CrossIcon } from '@/components/Icon'
import { Tag } from '@/components/Tag'

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
          className="items-center bg-neutral-10 h-[60px] mt-sm px-xl"
          data-id={name}
          key={name}
          size="md"
        >
          <Icon className="mr-sm" size="lg" />
          {name}
          {size ? <div className="text-beige-60">({size})</div> : null}
          <Button className="ml-xxl" onClick={onRemove} shape="square" size="sm" variant="ghost">
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
