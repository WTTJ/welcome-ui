import { Button } from '@/components/Button'
import { getFileIconName } from '@/components/Files'
import { FileUpload } from '@/components/FileUpload'
import { Icon } from '@/components/Icon'

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
              const iconName = getFileIconName(file)

              return (
                <Button key={preview} onClick={() => onRemoveFile(file)}>
                  <Icon name={iconName} /> Click to remove {name}
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
