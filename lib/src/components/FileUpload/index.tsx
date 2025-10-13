import { forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react'

import { Button } from '@/components/Button'
import { getFileIcon, getFileName, getFileSize } from '@/components/Files'
import { Tag } from '@/components/Tag'
import { classNames } from '@/utils'
import { createEvent } from '@/utils/create-event'

import FileUploadStyles from './file-upload.module.scss'
import type { FileUploadPreviewProps, FileUploadProps, FileWithPreview } from './types'

const cx = classNames(FileUploadStyles)

const DEFAULT_FILE_TYPES = '*/*'

const ensureArray: (value: unknown | unknown[]) => FileWithPreview[] = value => {
  if (Array.isArray(value)) {
    return value
  } else if (value) {
    return [value]
  }
  return []
}

const DefaultPreview = ({ file, onRemove }: FileUploadPreviewProps) => {
  const Icon = getFileIcon(file)
  const name = getFileName(file)
  const size = getFileSize(file)

  return (
    <Tag className={cx('preview-tag')} data-testid={name} key={name} onRemove={onRemove}>
      <Icon size="md" />
      {name}
      {size ? <span className={cx('preview-tag-size')}>({size})</span> : null}
    </Tag>
  )
}

export const FileUpload = forwardRef<HTMLInputElement, FileUploadProps>(
  (
    {
      accept = DEFAULT_FILE_TYPES,
      children,
      disabled,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      draggable,
      handleAddFile,
      handleRemoveFile,
      multiple,
      name,
      onBlur,
      onChange,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onError,
      preview,
      value = [],
      ...rest
    },
    ref
  ) => {
    // We always keep an array of files
    const [files, setFiles] = useState<FileWithPreview[]>(ensureArray(value))
    const inputRef = useRef<HTMLInputElement>()
    const Preview = useMemo(() => preview || DefaultPreview, [preview])

    useImperativeHandle(ref, () => inputRef.current)

    // Ensure component is controlled
    useEffect(() => {
      setFiles(ensureArray(value))
    }, [value])

    // Clean up URL on unmount
    useEffect(() => {
      return () => {
        files?.map(file => (file instanceof File ? URL.revokeObjectURL(file.preview) : file))
      }
    }, [files])

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
      let newFiles: FileWithPreview | FileWithPreview[] = Array.from(e.target.files).map(
        (file: FileWithPreview) => {
          if (file instanceof File) file.preview = URL.createObjectURL(file)
          return file
        }
      )
      setFiles(newFiles)

      if (newFiles.length === 1) {
        newFiles = newFiles[0]
      }

      const event = createEvent({ name, value: newFiles })
      onChange?.(event)
      handleAddFile?.(newFiles)
      onBlur?.()
    }

    const handleRemove: FileUploadProps['handleRemoveFile'] = removedFile => {
      const newFiles = files.filter(file => file !== removedFile)
      const value = multiple ? newFiles : undefined
      setFiles(newFiles)

      const event = createEvent({ name, value })
      onChange?.(event)
      handleRemoveFile?.(removedFile)
      onBlur?.()
    }

    const handleClick = () => {
      inputRef.current.click()
    }

    // We need to add this key on the input[file] because we can't change it's value programmatically for security reasons
    // Changing its key means that we can add a file, remove it & re-add it
    const inputKey = files.map(file => (file instanceof File ? file.preview : undefined)).join('')

    return (
      <>
        {children ? (
          children({ disabled, files, onRemoveFile: handleRemove, openFile: handleClick })
        ) : (
          <Button disabled={disabled} onClick={handleClick}>
            Upload file
          </Button>
        )}
        <br />
        <input
          accept={accept}
          className={cx('input')}
          disabled={disabled}
          key={inputKey}
          multiple={multiple}
          name={name}
          onBlur={onBlur}
          onChange={handleChange}
          ref={inputRef}
          {...rest}
          type="file"
        />
        {Preview
          ? files.map(file => (
              <Preview
                file={file}
                key={file instanceof File ? file.name : file}
                onRemove={() => handleRemove(file)}
              />
            ))
          : null}
      </>
    )
  }
)

FileUpload.displayName = 'FileUpload'
