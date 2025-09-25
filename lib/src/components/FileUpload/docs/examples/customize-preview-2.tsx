import * as React from 'react'

import { Button } from '@/components/Button'
import { getFileIcon } from '@/components/Files'
import { FileUpload } from '@/components/FileUpload'

const Example = () => {
  const handleChange = () => {
    // your code
  }

  return (
    <FileUpload
      handleAddFile={handleChange}
      handleRemoveFile={handleChange}
      multiple
      name="file"
      preview={undefined}
      value=""
    >
      {({ files, onRemoveFile, openFile }) =>
        files.length === 0 ? (
          <Button onClick={() => openFile()}>Upload files</Button>
        ) : (
          <div className="flex flex-col gap-sm">
            {files.map(file => {
              const name = typeof file === 'string' ? file : file.name
              const preview = typeof file === 'string' ? file : file.preview

              return (
                <Button key={preview} onClick={() => onRemoveFile(file)}>
                  {React.createElement(getFileIcon(file))} Click to remove {name}
                </Button>
              )
            })}
          </div>
        )
      }
    </FileUpload>
  )
}

export default Example
