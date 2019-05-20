import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useDropzone } from 'react-dropzone'

// Common
import { Icon } from '../Icon'
import { Button } from '../Button'
import { validateFileSize, validateImage, validateMimeType } from '../../utils/validations'

// FileUpload
import { Actions, FilePreview, FilePreviewImage, StyledFileUpload, Wrapper } from './styles.js'
const DEFAULT_MAX_FILE_SIZE = 2000000

const getPreviewUrl = url =>
  typeof url !== 'string' || url.startsWith('blob:') ? url : new URL(url)

export const FileUpload = ({
  input,
  accept = 'image/*',
  disabled = false,
  multiple = false,
  maxSize = DEFAULT_MAX_FILE_SIZE,
  title = 'Add picture',
  body = 'Drag and drop a file here or…',
  buttonText = 'Choose file',
  rejectText = "We don't accept this file type",
  acceptText = 'Drop your file to upload',
  onAddFile,
  onChange,
  onError,
  onRemoveFile
}) => {
  const [file, setFile] = useState(null)

  // Clean up URL
  useEffect(() => {
    return () => file && URL.revokeObjectURL(file.preview)
  }, [file])

  const handleDropAccepted = files => {
    const [file] = files
    file.preview = URL.createObjectURL(file)

    setFile(file)
    onChange && onChange(file)
    onAddFile && onAddFile(file)
  }

  const handleDropRejected = files => {
    files.forEach(file => {
      if (!validateMimeType(file, accept)) {
        onError && onError('INVALID_TYPE')
      } else if (!validateFileSize(file, maxSize)) {
        onError && onError('INVALID_SIZE')
      }
    })
  }

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
    open
  } = useDropzone({
    onDropAccepted: handleDropAccepted,
    onDropRejected: handleDropRejected,
    noClick: true,
    multiple,
    accept,
    disabled,
    maxSize
  })

  const emptyStates = {
    default: (
      <>
        <h3>{title}</h3>
        <p>{body}</p>
        <Button disabled={disabled} onClick={open} type="button">
          {buttonText}
        </Button>
      </>
    ),
    accept: (
      <>
        <Icon icon="positive" />
        <h3>{acceptText}</h3>
      </>
    ),
    reject: (
      <>
        <Icon icon="negative" />
        <h3>{rejectText}</h3>
      </>
    )
  }

  const handleRemoveFile = e => {
    e.preventDefault()
    setFile(null)
    onRemoveFile && onRemoveFile()
    onChange && onChange(null)
  }

  const getEmptyState = () => {
    let state = 'default'
    if (!isDragActive) {
      state = 'default'
    } else if (isDragAccept) {
      state = 'accept'
    } else if (isDragReject) {
      state = 'reject'
    }

    return emptyStates[state]
  }

  const emptyState = getEmptyState()
  const hasFile = !!file

  return (
    <Wrapper>
      <StyledFileUpload
        {...getRootProps({ handleRemoveFile, isDragActive, isDragAccept, isDragReject, disabled })}
      >
        <input {...getInputProps({ name: input && input.name })} />
        <FilePreview>
          {hasFile && validateImage(file) && <FilePreviewImage src={getPreviewUrl(file.preview)} />}
          {!hasFile && emptyState}
        </FilePreview>
      </StyledFileUpload>
      {hasFile && (
        <Actions>
          <Button onClick={open} size="sm" type="button" variant="secondary">
            <Icon icon="pencil" size="sm" />
          </Button>
          <Button onClick={handleRemoveFile} size="sm" type="button" variant="primary-danger">
            <Icon icon="cross" size="sm" />
          </Button>
        </Actions>
      )}
    </Wrapper>
  )
}

FileUpload.propTypes = {
  accept: PropTypes.string,
  acceptText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  body: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  buttonText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  disabled: PropTypes.bool,
  input: PropTypes.node,
  maxSize: PropTypes.number,
  multiple: PropTypes.bool,
  onAddFile: PropTypes.func,
  onChange: PropTypes.func,
  onError: PropTypes.func,
  onRemoveFile: PropTypes.func,
  rejectText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
}

FileUpload.defaultProps = {
  accept: 'image/*',
  disabled: false,
  multiple: false
}
