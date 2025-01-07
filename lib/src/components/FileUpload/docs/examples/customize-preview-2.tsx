import { Button, FileUpload, getFileIcon, Stack } from 'welcome-ui'
import * as React from 'react'

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
      {
        ({ files, onRemoveFile, openFile }) =>
          files.length === 0 ? (
            <Button onClick={() => openFile()}>Upload files</Button>
          ) : (
            <Stack direction="row">
              {files.map(file => {
                const name = typeof file === 'string' ? file : file.name
                const preview = typeof file === 'string' ? file : file.preview

                return (
                  <Button key={preview} onClick={() => onRemoveFile(file)}>
                    {`${getFileIcon(file)}`} Click to remove {name}
                  </Button>
                )
              })}
            </Stack>
          )
        // eslint-disable-next-line react/jsx-curly-newline
      }
    </FileUpload>
  )
}

export default Example
