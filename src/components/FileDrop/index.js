import React, { forwardRef, useEffect, useState } from 'react'
import { bool, func, node, number, oneOfType, string } from 'prop-types'
import { useDropzone } from 'react-dropzone'

// Common
import { Icon } from '../Icon'
import { Button } from '../Button'
import { createEvent, validateFileSize, validateMimeType } from '../../utils/'

// FileDrop
import * as S from './styles.js'
import { DefaultContent } from './default.js'

// Export `FilePreviewImage` from styles
export const FilePreviewImage = S.FilePreviewImage

const DEFAULT_MAX_FILE_SIZE = 2000000
const ERROR_INVALID_TYPE = 'ERROR_INVALID_TYPE'
const ERROR_INVALID_SIZE = 'ERROR_INVALID_SIZE'

const getPreviewUrl = file => {
  const url = file.preview || file
  return typeof url !== 'string' || url.startsWith('blob:') ? url : new URL(url)
}

export const FileDrop = forwardRef(
  (
    {
      accept = 'image/*',
      children = DefaultContent,
      disabled,
      isEditable,
      isRemovable,
      maxSize = DEFAULT_MAX_FILE_SIZE,
      multiple,
      name,
      onAddFile,
      onBlur,
      onChange,
      onError,
      onRemoveFile,
      value,
      ...rest
    },
    ref
  ) => {
    const [file, setFile] = useState(value)
    const [error, setError] = useState()

    useEffect(() => {
      setFile(value)
    }, [value])

    // Clean up URL
    useEffect(() => {
      return () => file && URL.revokeObjectURL(file.preview)
    }, [file])

    const handleDropAccepted = files => {
      const [file] = files
      file.preview = URL.createObjectURL(file)
      setFile(file)
      setError(null)

      const event = createEvent({ name, value: file })
      onChange && onChange(event)
      onAddFile && onAddFile(event)
    }

    const handleDropRejected = files => {
      const [file] = files
      let error
      const event = createEvent({ name, value: file })

      if (!validateMimeType(file, accept)) {
        error = ERROR_INVALID_TYPE
      } else if (!validateFileSize(file, maxSize)) {
        error = ERROR_INVALID_SIZE
      }

      setFile(null)
      setError(error)

      onError && onError(error)
      onChange && onChange(event)
      onBlur && onBlur() // Trigger field touch
    }

    const handleRemoveFile = e => {
      e.preventDefault()
      setFile(null)
      setError(null)

      const event = createEvent({ name, value: null })
      onChange && onChange(event)
      onRemoveFile && onRemoveFile(event)
    }

    const {
      getInputProps,
      getRootProps,
      inputRef,
      isDragAccept,
      isDragActive,
      isDragReject,
      open,
      rootRef
    } = useDropzone({
      onDropAccepted: handleDropAccepted,
      onDropRejected: handleDropRejected,
      noClick: true,
      multiple,
      accept,
      disabled,
      maxSize,
      children
    })

    return (
      <S.FileDrop
        {...getRootProps({
          handleRemoveFile,
          isEditable,
          isDragActive,
          isDragAccept,
          isDragReject,
          isRemovable,
          ref
        })}
        {...rest}
      >
        <input {...getInputProps({ disabled, multiple, name, onError })} />
        <S.FilePreview>
          {children({
            error,
            fileUrl: file && getPreviewUrl(file),
            isDefault: !file && !isDragActive,
            isHoverAccept: isDragAccept,
            isHoverReject: isDragReject,
            openFile: open,
            inputRef,
            rootRef
          })}
          <S.Actions>
            {(!!file || error) && isEditable && (
              <Button onClick={open} size="sm" type="button" variant="secondary">
                <Icon name="pencil" size="sm" />
              </Button>
            )}
            {!!file && isRemovable && (
              <Button onClick={handleRemoveFile} size="sm" type="button" variant="primary-danger">
                <Icon name="cross" size="sm" />
              </Button>
            )}
          </S.Actions>
        </S.FilePreview>
      </S.FileDrop>
    )
  }
)

FileDrop.type = 'FileDrop'
FileDrop.displayName = 'FileDrop'

FileDrop.propTypes = {
  accept: string,
  children: func,
  disabled: bool,
  isEditable: bool,
  isRemovable: bool,
  maxSize: number,
  multiple: bool,
  name: string.isRequired,
  onAddFile: func,
  onBlur: func,
  onChange: func,
  onError: func,
  onFocus: func,
  onRemoveFile: func,
  title: oneOfType([string, node]),
  value: string
}
