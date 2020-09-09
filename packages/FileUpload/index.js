import React, { forwardRef, useEffect, useRef, useState } from 'react'
import { bool, func, node, number, object, oneOfType, string } from 'prop-types'
import { Button } from '@welcome-ui/button'
import { createEvent } from '@welcome-ui/utils'

// FileUpload
import { Preview as DefaultPreview } from './Preview'
import * as S from './styles'

const DEFAULT_MAX_FILE_SIZE = 2000000
const DEFAULT_FILE_TYPES = '*/*'

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
      dataTestId,
      disabled,
      draggable,
      maxSize = DEFAULT_MAX_FILE_SIZE,
      multiple,
      name,
      handleAddFile,
      onBlur,
      onChange,
      onError,
      handleRemoveFile,
      value = [],
      preview: Preview = DefaultPreview,
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

    const handleChange = e => {
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
      handleAddFile && handleAddFile(newFiles)
      onBlur && onBlur()
    }

    const handleRemove = index => {
      const newFiles = [...files]
      const file = newFiles.splice(index, 1)
      const value = multiple ? newFiles : undefined
      setFiles(newFiles)

      const event = createEvent({ name, value })
      onChange && onChange(event)
      handleRemoveFile && handleRemoveFile(file)
      onBlur && onBlur()
    }

    const handleClick = () => {
      inputRef.current.click()
    }

    return (
      <>
        {children ? (
          children({ openFile: handleClick, disabled })
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
          maxSize={maxSize}
          multiple={multiple}
          name={name}
          onBlur={onBlur}
          onChange={handleChange}
          ref={inputRef}
          {...rest}
          type="file"
        />
        {files.map(file => (
          <Preview file={file} key={file.name || file} onRemove={handleRemove} />
        ))}
      </>
    )
  }
)

FileUpload.type = 'FileUpload'
FileUpload.displayName = 'FileUpload'

FileUpload.propTypes /* remove-proptypes */ = {
  /** Pass a comma-separated string of file types e.g. "image/png" or "image/png,image/jpeg"  */
  accept: string,
  children: func,
  disabled: bool,
  draggable: bool,
  handleAddFile: func,
  handleRemoveFile: func,
  maxSize: number,
  multiple: bool,
  name: string.isRequired,
  onBlur: func,
  onChange: func,
  onError: func,
  preview: node,
  title: oneOfType([string, node]),
  value: oneOfType([string, object])
}
