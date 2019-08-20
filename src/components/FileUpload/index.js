import React, { forwardRef, useEffect, useRef, useState } from 'react'
import { bool, func, node, number, oneOfType, string } from 'prop-types'

// Common
import { Button } from '../Button'
import { Tag } from '../Tag'
import { createEvent, formatBytes } from '../../utils/'

// FileUpload
import * as S from './styles.js'

const DEFAULT_MAX_FILE_SIZE = 2000000
const DEFAULT_FILE_TYPES = '*/*'

const getFileName = file => {
  if (file.name) {
    return file.name
  }
  if (typeof file === 'string') {
    return file
      .split('/')
      .pop()
      .split('?')[0]
  }
  return
}

const getFileSize = file => file.size || undefined

const ensureArray = value => {
  if (Array.isArray(value)) {
    return value
  } else if (value) {
    return [value]
  }
  return []
}

export const FileUpload = forwardRef(
  (
    {
      accept = DEFAULT_FILE_TYPES,
      children,
      disabled,
      draggable,
      maxSize = DEFAULT_MAX_FILE_SIZE,
      multiple,
      name,
      onAddFile,
      onChange,
      onError,
      onRemoveFile,
      value = [],
      ...rest
    },
    ref
  ) => {
    // We always keep an array of files
    const [files, setFiles] = useState(ensureArray(value))
    const inputRef = ref || useRef()

    // Ensure component is controlled
    useEffect(() => {
      setFiles(ensureArray(value))
    }, [value])

    // Clean up URL on unmount
    useEffect(() => {
      return () => files && files.map(file => file && URL.revokeObjectURL(file.preview))
    }, [files])

    const handleAddFile = e => {
      let newFiles = Array.from(e.target.files).map(file => {
        file.preview = URL.createObjectURL(file)
        return file
      })
      setFiles(newFiles)

      if (newFiles.length === 1) {
        newFiles = newFiles[0]
      }

      const event = createEvent({ name, value: newFiles })
      onChange && onChange(event)
      onAddFile && onAddFile(newFiles)
    }

    const handleRemoveFile = index => {
      const newFiles = [...files]
      const file = newFiles.splice(index, 1)
      setFiles(newFiles)

      const event = createEvent({ name, value: newFiles })
      onChange && onChange(event)
      onRemoveFile && onRemoveFile(file)
    }

    const handleClick = () => {
      inputRef.current.click()
    }

    return (
      <>
        {children ? (
          children({ openFile: handleClick })
        ) : (
          <Button onClick={handleClick}>Upload file</Button>
        )}
        <br />
        <S.Input
          accept={accept}
          maxSize={maxSize}
          multiple={multiple}
          name={name}
          onChange={handleAddFile}
          ref={inputRef}
          {...rest}
          type="file"
        />
        {files.map((file, i) => {
          const preview = getFileName(file)
          const size = getFileSize(file)
          return (
            <Tag key={preview} onRemove={() => handleRemoveFile(i)}>
              {preview} {size && `(${formatBytes(size, 0)})`}
            </Tag>
          )
        })}
      </>
    )
  }
)

FileUpload.type = 'FileUpload'
FileUpload.displayName = 'FileUpload'

FileUpload.propTypes = {
  accept: string,
  children: func,
  disabled: bool,
  draggable: bool,
  maxSize: number,
  multiple: bool,
  name: string.isRequired,
  onAddFile: func,
  onChange: func,
  onError: func,
  onRemoveFile: func,
  title: oneOfType([string, node]),
  value: string
}
