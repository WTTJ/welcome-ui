import React, { useEffect, useRef, useState } from 'react'

import { Box } from '@/Box'
import { Button } from '@/Button'
import type { FileType } from '@/Files'
import { getFileIcon, getFileName, getFileSize } from '@/Files'
import type { CreateWuiProps } from '@/System'
import { forwardRef } from '@/System'
import type { TagProps } from '@/Tag'
import { Tag } from '@/Tag'

import { createEvent } from '../../utils/create-event'

import * as S from './styles'

const DEFAULT_MAX_FILE_SIZE = 2000000
const DEFAULT_FILE_TYPES = '*/*'

export interface FileUploadOptions {
  /** Pass a comma-separated string of file types e.g. "image/png" or "image/png,image/jpeg" */
  accept?: string
  children?: (props: {
    disabled: boolean
    files: FileWithPreviewType[]
    onRemoveFile: HandleRemoveType
    openFile: () => void
  }) => React.ReactNode
  handleAddFile?: (files: FileWithPreviewType | FileWithPreviewType[]) => void
  handleRemoveFile?: HandleRemoveType
  maxSize?: number
  onBlur?: () => void
  onChange?: (event: ReturnType<typeof createEvent>) => void
  preview?: typeof DefaultPreview
}
export type FileUploadPreviewProps = {
  file: FileType
  onRemove: TagProps['onRemove']
}
export type FileUploadProps = CreateWuiProps<'input', FileUploadOptions>

type FileWithPreview = File & {
  name?: string
  preview?: string
}

type FileWithPreviewType = FileWithPreview | string

type HandleRemoveType = (file: FileWithPreviewType) => void

const ensureArray: (value: unknown | unknown[]) => FileWithPreviewType[] = value => {
  if (Array.isArray(value)) {
    return value
  } else if (value) {
    return [value]
  }
  return []
}

const DefaultPreview: React.FC<FileUploadPreviewProps> = ({ file, onRemove }) => {
  const Icon = getFileIcon(file)
  const name = getFileName(file)
  const size = getFileSize(file)

  return (
    <Tag data-id={name} key={name} mr="sm" mt="sm" onRemove={onRemove}>
      <Icon size="md" />
      {name}
      {size ? <Box color="beige-60">({size})</Box> : null}
    </Tag>
  )
}

export const FileUpload = forwardRef<'input', FileUploadProps>(
  (
    {
      accept = DEFAULT_FILE_TYPES,
      children,
      dataTestId,
      disabled,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      draggable,
      handleAddFile,
      handleRemoveFile,
      maxSize = DEFAULT_MAX_FILE_SIZE,
      multiple,
      name,
      onBlur,
      onChange,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onError,
      preview: Preview = DefaultPreview,
      value = [],
      ...rest
    },
    ref
  ) => {
    // We always keep an array of files
    const [files, setFiles] = useState<FileWithPreviewType[]>(ensureArray(value))
    const inputRef = useRef<HTMLInputElement>(null)

    // Ensure component is controlled
    useEffect(() => {
      setFiles(ensureArray(value))
    }, [value])

    // Clean up URL on unmount
    useEffect(() => {
      return () => {
        files &&
          files.map(file => (file instanceof File ? URL.revokeObjectURL(file.preview) : file))
      }
    }, [files])

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
      let newFiles: FileWithPreview | FileWithPreview[] = Array.from(e.target.files).map(
        (file: FileWithPreview) => {
          file.preview = URL.createObjectURL(file)
          return file
        }
      )
      setFiles(newFiles)

      if (newFiles.length === 1) {
        newFiles = newFiles[0]
      }

      const event = createEvent({ name, value: newFiles })
      onChange && onChange(event)
      handleAddFile && handleAddFile(newFiles)
      onBlur && onBlur()
    }

    const handleRemove: FileUploadProps['handleRemoveFile'] = removedFile => {
      const newFiles = files.filter(file => file !== removedFile)
      const value = multiple ? newFiles : undefined
      setFiles(newFiles)

      const event = createEvent({ name, value })
      onChange && onChange(event)
      handleRemoveFile && handleRemoveFile(removedFile)
      onBlur && onBlur()
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
        <S.Input
          accept={accept}
          data-testid={dataTestId}
          disabled={disabled}
          key={inputKey}
          maxSize={maxSize}
          multiple={multiple}
          name={name}
          onBlur={onBlur}
          onChange={handleChange}
          ref={(instance: HTMLInputElement) => {
            // for internal use only
            inputRef.current = instance
            // for external use
            if (typeof ref === 'function') {
              ref(instance)
            } else if (ref?.current) {
              ref.current = instance
            }
          }}
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
