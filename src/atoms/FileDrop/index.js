import React, { Fragment, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDropzone } from 'react-dropzone'

// Components
import { Icon } from '../Icon'
import { Button } from '../Button'

// Utils
import { validateFileSize, validateImage, IMAGE_MIME_TYPES } from '../../utils/validations'

// FileUpload
import { Actions, Wrapper, StyledFileUpload, FilePreview, FilePreviewImage } from './styles.js'
const MAX_FILE_SIZE = 2000000

export const FileUpload = props => {
  const {
    input,
    disabled,
    accept,
    multiple = false,
    maxSize = MAX_FILE_SIZE,
    title = 'Add picture',
    body = 'Drag and drop a file here or…',
    buttonText = 'Choose file',
    rejectText = "We don't accept this file type",
    acceptText = 'Drop your file to upload',
    onAddFile,
    onChange,
    onError,
    onRemoveFile
  } = props

  const [file, setFile] = useState(null)
  // Clean up URL
  useEffect(() => {
    return function cleanup() {
      file && URL.revokeObjectURL(file.preview)
    }
  })

  const onDropAccepted = files => {
    let file = files[0]
    file.preview = URL.createObjectURL(file)

    setFile(file)
    onChange && onChange(file)
    onAddFile && onAddFile(file)
  }

  const onDropRejected = files => {
    files.map(file => {
      let error
      if (accept === IMAGE_MIME_TYPES && !validateImage(file)) {
        error = 'INVALID_TYPE'
      }
      if (!validateFileSize(file, MAX_FILE_SIZE)) {
        error = `INVALID_SIZE`
      }
      error && onError && onError(error)

      return undefined
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
    onDropAccepted,
    onDropRejected,
    noClick: true,
    multiple,
    accept: (accept && accept.join(',')) || null,
    disabled,
    maxSize
  })

  const emptyStates = {
    default: (
      <Fragment>
        <h3>{title}</h3>
        <p>{body}</p>
        <Button type="button" onClick={open}>
          {buttonText}
        </Button>
      </Fragment>
    ),
    accept: (
      <Fragment>
        <Icon icon="positive" />
        <h3>{acceptText}</h3>
      </Fragment>
    ),
    reject: (
      <Fragment>
        <Icon icon="negative" />
        <h3>{rejectText}</h3>
      </Fragment>
    )
  }

  const removeFile = e => {
    e && e.preventDefault()
    setFile(null)
    onRemoveFile && onRemoveFile()
    onChange && onChange(null)
  }

  const renderEmptyState = () => {
    let state = 'default'

    if (!isDragActive) {
      state = 'default'
    } else if (isDragAccept) {
      state = 'accept'
    } else if (isDragReject) {
      state = 'reject'
    }

    return <FilePreview>{emptyStates[state]}</FilePreview>
  }

  const getPreviewUrl = url => {
    if (typeof url !== 'string' || url.startsWith('blob:')) {
      return url
    }
    return new URL(url)
  }

  const renderPreviewState = () => (
    <FilePreview key={file.name}>
      {validateImage(file) && <FilePreviewImage src={getPreviewUrl(file.preview)} />}
    </FilePreview>
  )

  return (
    <Wrapper>
      <StyledFileUpload {...getRootProps({ removeFile, isDragActive, isDragAccept, isDragReject })}>
        <input {...getInputProps({ name: input && input.name })} />
        {file && renderPreviewState()}
        {!file && renderEmptyState()}
      </StyledFileUpload>
      {file && (
        <Actions>
          <Button type="button" size="sm" variant="secondary" onClick={open}>
            <Icon icon="pencil" size="sm" />
          </Button>
          <Button type="button" size="sm" variant="primary-danger" onClick={removeFile}>
            <Icon icon="cross" size="sm" />
          </Button>
        </Actions>
      )}
    </Wrapper>
  )
}

FileUpload.propTypes = {
  input: PropTypes.node,
  disabled: PropTypes.bool,
  accept: PropTypes.arrayOf(PropTypes.string),
  multiple: PropTypes.bool,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  body: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  buttonText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  rejectText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  acceptText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  maxSize: PropTypes.number,
  onAddFile: PropTypes.func,
  onRemoveFile: PropTypes.func,
  onChange: PropTypes.func,
  onError: PropTypes.func
}

FileUpload.defaultProps = {
  disabled: false,
  multiple: false,
  accept: IMAGE_MIME_TYPES
}
