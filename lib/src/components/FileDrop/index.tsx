import React, { forwardRef, useEffect, useState } from 'react'
import type {
  DropEvent,
  DropzoneProps,
  DropzoneState,
  FileError,
  FileRejection,
} from 'react-dropzone'
import * as reactDropzone from 'react-dropzone'

// because of this issue: https://github.com/react-dropzone/react-dropzone/issues/1259
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const useDropzone = (reactDropzone.useDropzone || reactDropzone.default.useDropzone) as (
  o?: DropzoneProps
) => DropzoneState
import { Button } from '@/components/Button'
import { EditIcon, TrashIcon } from '@/components/Icon'
import { classNames } from '@/utils'
import { createEvent } from '@/utils/create-event'

import { Preview } from './components/Preview'
import filedropStyles from './filedrop.module.scss'
import type { FileDropProps, FileWithPreview } from './types'
import { getPreviewUrl, isAnImage } from './utils'

const DEFAULT_MAX_FILE_SIZE = 2000000
const ERROR_INVALID_TYPE = 'ERROR_INVALID_TYPE'
const ERROR_INVALID_SIZE = 'ERROR_INVALID_SIZE'

const cx = classNames(filedropStyles)

export const FileDrop = forwardRef<HTMLDivElement, FileDropProps>(
  (
    {
      accept = {
        'image/*': [],
      },
      children = Preview,
      className,
      disabled,
      fileName,
      forceFileType,
      handleAddFile,
      handleRemoveFile,
      isClearable,
      isEditable,
      maxSize = DEFAULT_MAX_FILE_SIZE,
      multiple,
      name,
      onBlur,
      onChange,
      onError,
      value,
      wordings,
      ...rest
    },
    ref
  ) => {
    const [file, setFile] = useState(value)
    const [error, setError] = useState(undefined)

    useEffect(() => {
      setFile(value)
    }, [value])

    // Clean up URL
    useEffect(() => {
      return () => file && file instanceof File && URL.revokeObjectURL(file.preview)
    }, [file])

    const handleDropAccepted = (files: FileWithPreview[]) => {
      const [file] = files
      if (file instanceof File) {
        file.preview = URL.createObjectURL(file)
      }
      setFile(file)
      setError(null)

      const event = createEvent({ name, value: file })
      onChange && onChange(event)
      handleAddFile && handleAddFile(event)
    }

    const handleDropRejected = (fileRejections: FileRejection[], event: DropEvent) => {
      let errorMessage: string

      fileRejections.map(({ errors }: FileRejection) => {
        errors.map((error: FileError) => {
          const { code, message } = error
          if (code === 'file-invalid-type') {
            errorMessage = ERROR_INVALID_TYPE
          } else if (code === 'file-too-large') {
            errorMessage = ERROR_INVALID_SIZE
          } else {
            errorMessage = message
          }
        })
      })

      setFile(null)
      setError(errorMessage)

      onError && onError(errorMessage)
      onChange && onChange(event)
      onBlur && onBlur() // Trigger field touch
    }

    const handleRemoveClick = (e: React.MouseEvent) => {
      e.preventDefault()
      setFile(null)
      setError(null)

      const event = createEvent({ name, value: null })
      onChange && onChange(event)
      handleRemoveFile && handleRemoveFile(event)
    }

    const { getInputProps, getRootProps, isDragAccept, isDragActive, isDragReject, open } =
      useDropzone({
        accept,
        disabled,
        maxSize,
        multiple,
        noClick: true,
        onDropAccepted: handleDropAccepted,
        onDropRejected: handleDropRejected,
      })

    const inputPropsOnError: React.ReactEventHandler<HTMLInputElement> = (
      event?: React.SyntheticEvent<HTMLInputElement, Event>
    ) => onError(event as never as string)

    return (
      <div
        className={cx('root', disabled && 'disabled', isDragReject && 'drag-reject', className)}
        {...getRootProps({
          disabled,
          handleRemoveFile,
          isClearable,
          isDragAccept,
          isDragActive,
          isDragReject,
          isEditable,
          ref,
        })}
        {...rest}
      >
        <input
          className={cx('block', 'h-0', 'w-0', 'opacity-0')}
          {...getInputProps({ disabled, multiple, name, onError: inputPropsOnError })}
          // for extern validator we need to have access to this input
        />
        <div className={cx('file-preview')}>
          {children({
            disabled,
            error,
            file,
            fileName,
            fileUrl: file && getPreviewUrl(file),
            forceFileType,
            isAnImage: forceFileType === 'image' || isAnImage(file),
            isHoverAccept: isDragAccept,
            isHoverReject: isDragReject,
            openFile: open,
            wordings,
          })}
          {!!file && (error || isEditable || isClearable) ? (
            <div className={cx('actions')}>
              {error || isEditable ? (
                <Button onClick={open} shape="circle" size="sm" type="button" variant="tertiary">
                  <EditIcon />
                </Button>
              ) : null}
              {isClearable ? (
                <Button
                  onClick={handleRemoveClick}
                  shape="circle"
                  size="sm"
                  type="button"
                  variant="primary-danger"
                >
                  <TrashIcon />
                </Button>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    )
  }
)
