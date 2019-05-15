import React, { Fragment, useCallback, useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDropzone } from 'react-dropzone'

// Atoms
import { Button } from '../../atoms/Button'
import { Icon } from '../../atoms/Icon'
import { Hint } from '../../atoms/Hint'
import { Label } from '../../molecules/Label'

// Utils
import { validateFileSize, validateImage, IMAGE_MIME_TYPES } from '../../utils/validations'

// FileDrop
import { StyledFileDrop, FilePreview, FilePreviewImage } from './styles.js'
const MAX_FILE_SIZE = 2000000

export const FileDrop = props => {
  const {
    input,
    label,
    hint,
    disabled,
    accept,
    multiple = false,
    maxSize = MAX_FILE_SIZE,
    onAddFile,
    onChange,
    onError,
    onRemoveFile,
    flushCache
  } = props

  const [file, setFile] = useState(null)
  const [warning, setError] = useState(null)
  const [error, setWarning] = useState(null)
  const dropZoneRef = useRef(null)
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
    console.debug('onDrop', acceptedFiles)
  }, [])

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
    debugger
    files.map(file => {
      if (accept === IMAGE_MIME_TYPES && !validateImage(file)) {
        const error = `errors.image_upload.file_type`
        setError(error)
        onError && onError(error)
      }
      if (!validateFileSize(file, MAX_FILE_SIZE)) {
        const error = `errors.image_upload.file_size`
        setError(error)
        onError && onError(error)
      }
      return undefined
    })
  }

  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
    open
  } = useDropzone({
    onDropAccepted,
    onDropRejected,
    multiple,
    accept: (accept && accept.join(',')) || null,
    disabled,
    maxSize
  })

  const onChooseFile = e => {
    e && e.preventDefault()
    open()
  }

  const removeFile = e => {
    e && e.preventDefault()
    dropZoneRef.current.setState({ acceptedFiles: [] })
    setFile(null)
    onRemoveFile && onRemoveFile()
    onChange && onChange(null)
  }

  const renderEmptyState = () => {
    let content

    if (!isDragActive) {
      content = (
        <Fragment>
          <p>Drop file</p>
          <Button type="button" mode="dark" onClick={onChooseFile}>
            Choose file
          </Button>
        </Fragment>
      )
    }

    if (isDragAccept) {
      content = <h3>Drop file!</h3>
    }

    if (isDragReject) {
      content = <h3>Can't accept file</h3>
    }

    return <FilePreview>{content}</FilePreview>
  }

  const getPreviewUrl = url => {
    if (typeof url !== 'string') {
      return url
    }
    if (url.startsWith('blob:')) {
      return url
    }
    const previewUrl = new URL(url)
    if (flushCache === true) {
      previewUrl.searchParams.append('_', Date.now())
      return previewUrl
    }
    return previewUrl
  }

  const renderPreviewState = () => {
    return acceptedFiles.map(file => (
      <FilePreview key={file.name}>
        {validateImage(file) ? (
          <FilePreviewImage src={getPreviewUrl(file.preview)} />
        ) : (
          <Icon symbol="check-circle" color="primary" large />
        )}
      </FilePreview>
    ))
  }

  const hasFiles = acceptedFiles && acceptedFiles.length
  const hintContent = error || warning || hint
  let variant = null
  if (error) {
    variant = 'error'
  } else if (warning) {
    variant = 'warning'
  }

  return (
    <Fragment>
      {label && <Label {...props}>{label}</Label>}
      <StyledFileDrop {...getRootProps({ removeFile, onChooseFile })}>
        <input {...getInputProps({ name: input && input.name })} />
        {hasFiles && renderPreviewState()}
        {!hasFiles && renderEmptyState()}
      </StyledFileDrop>
      {hintContent && (
        <Hint {...props} variant={variant}>
          {hintContent}
        </Hint>
      )}
    </Fragment>
  )
}

FileDrop.propTypes = {
  input: PropTypes.node,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  hint: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  disabled: PropTypes.bool,
  accept: PropTypes.arrayOf(PropTypes.string),
  multiple: PropTypes.bool,
  maxSize: PropTypes.number,
  onAddFile: PropTypes.func,
  onChange: PropTypes.func,
  onError: PropTypes.func,
  onRemoveFile: PropTypes.func,
  flushCache: PropTypes.bool
}

FileDrop.defaultProps = {
  disabled: false,
  flushCache: false,
  multiple: false,
  accept: IMAGE_MIME_TYPES
}
