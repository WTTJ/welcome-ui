import React, { forwardRef, useEffect, useState } from 'react'
import { bool, func, node, number, oneOfType, string } from 'prop-types'
import { useDropzone } from 'react-dropzone'

// Common
import { Icon } from '../Icon'
import { Button } from '../Button'
import { createEvent, validateFileSize, validateMimeType } from '../../utils/'

// FileUpload
import * as S from './styles.js'
import { DefaultContent } from './default.js'

// Export `FilePreviewImage` from styles
export const FilePreviewImage = S.FilePreviewImage

const DEFAULT_MAX_FILE_SIZE = 2000000
const ERROR_INVALID_TYPE = 'ERROR_INVALID_TYPE'
const ERROR_INVALID_SIZE = 'ERROR_INVALID_SIZE'

const getPreviewUrl = url =>
  typeof url !== 'string' || url.startsWith('blob:') ? url : new URL(url)

export const FileUpload = forwardRef(
  (
    {
      accept = 'image/*',
      children = DefaultContent,
      disabled,
      maxSize = DEFAULT_MAX_FILE_SIZE,
      multiple,
      name,
      onAddFile,
      onChange,
      onError,
      onRemoveFile
    },
    ref
  ) => {
    const [file, setFile] = useState(null)

    // Clean up URL
    useEffect(() => {
      return () => file && URL.revokeObjectURL(file.preview)
    }, [file])

    const handleDropAccepted = files => {
      const [file] = files
      file.preview = URL.createObjectURL(file)
      setFile(file)

      const event = createEvent({ name, value: file })
      onChange && onChange(event)
      onAddFile && onAddFile(event)
    }

    const handleDropRejected = files => {
      files.forEach(file => {
        if (!validateMimeType(file, accept)) {
          onError && onError(ERROR_INVALID_TYPE)
        } else if (!validateFileSize(file, maxSize)) {
          onError && onError(ERROR_INVALID_SIZE)
        }
      })
    }

    const handleRemoveFile = e => {
      e.preventDefault()
      setFile(null)

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
      <S.FileUpload
        {...getRootProps({
          disabled,
          handleRemoveFile,
          isDragActive,
          isDragAccept,
          isDragReject,
          ref: ref
        })}
      >
        <input {...getInputProps({ name })} />
        <S.FilePreview>
          {children({
            fileUrl: file && getPreviewUrl(file.preview),
            isDefault: !file && !isDragActive,
            isHoverAccept: isDragAccept,
            isHoverReject: isDragReject,
            openFile: open,
            inputRef,
            rootRef
          })}
          {!!file && (
            <S.Actions>
              <Button onClick={open} size="sm" type="button" variant="secondary">
                <Icon name="pencil" size="sm" />
              </Button>
              <Button onClick={handleRemoveFile} size="sm" type="button" variant="primary-danger">
                <Icon name="cross" size="sm" />
              </Button>
            </S.Actions>
          )}
        </S.FilePreview>
      </S.FileUpload>
    )
  }
)

FileUpload.type = 'FileUpload'
FileUpload.displayName = 'FileUpload'

FileUpload.propTypes = {
  accept: string,
  children: func,
  disabled: bool,
  maxSize: number,
  multiple: bool,
  name: string.isRequired,
  onAddFile: func,
  onChange: func,
  onError: func,
  onRemoveFile: func,
  title: oneOfType([string, node])
}
