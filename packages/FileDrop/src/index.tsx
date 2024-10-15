import React, { useEffect, useState } from 'react'
import {
  Accept,
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
import { EditIcon, TrashIcon } from '@welcome-ui/icons'
import { Button } from '@welcome-ui/button'
import { CreateEvent, createEvent } from '@welcome-ui/utils'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'
import { ForceFileType } from '@welcome-ui/files'

import * as S from './styles'
import { Preview } from './Preview'
import { getPreviewUrl, isAnImage } from './utils'

const DEFAULT_MAX_FILE_SIZE = 2000000
const ERROR_INVALID_TYPE = 'ERROR_INVALID_TYPE'
const ERROR_INVALID_SIZE = 'ERROR_INVALID_SIZE'

export interface FileWithPreview extends File {
  preview?: string
}
export type FileType = string | FileWithPreview
export type FileUrlType = string | URL
export type OpenType = DropzoneState['open']
export type DisabledType = DropzoneProps['disabled']
export type WordingsType = {
  fileButtonText?: string | JSX.Element
  hint?: string | JSX.Element
  previewButtonText?: string | JSX.Element
  title?: string | JSX.Element
}
export type ChildrenType = {
  disabled?: boolean
  error?: string
  file?: FileType
  fileName?: string
  fileUrl?: FileUrlType
  forceFileType?: ForceFileType
  isAnImage?: boolean
  isHoverAccept?: DropzoneState['isDragAccept']
  isHoverReject?: DropzoneState['isDragReject']
  openFile?: OpenType
  wordings?: WordingsType
}

export interface FileDropOptions {
  /** Pass a comma-separated string of file types e.g. "image/png" or "image/png,image/jpeg" */
  accept?: Accept
  children?: (state: ChildrenType) => JSX.Element
  fileName?: string
  forceFileType?: ForceFileType
  handleAddFile?: (event: DropEvent | React.ChangeEvent<HTMLInputElement> | CreateEvent) => void
  handleRemoveFile?: (event: DropEvent | React.ChangeEvent<HTMLInputElement> | CreateEvent) => void
  isClearable?: boolean
  isEditable?: boolean
  name?: string
  onBlur?: () => void
  onChange?: (event: DropEvent | React.ChangeEvent<HTMLInputElement> | CreateEvent) => void
  onError?: (event?: string) => void
  value: FileType
  /** Pass an object with optional fields title, hint, fileButtonText and/or previewButtonText (string or JSX.Element) */
  wordings?: WordingsType
}

export type FileDropProps = CreateWuiProps<'div', FileDropOptions> & Omit<DropzoneProps, 'children'>

export const FileDrop = forwardRef<'div', FileDropProps>(
  (
    {
      accept = {
        'image/*': [],
      },
      children = Preview,
      dataTestId,
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
      <S.FileDrop
        {...getRootProps({
          'data-testid': dataTestId,
          handleRemoveFile,
          isEditable,
          isDragActive,
          isDragAccept,
          isDragReject,
          isClearable,
          disabled,
          ref,
        })}
        {...rest}
      >
        <input
          {...getInputProps({ disabled, multiple, name, onError: inputPropsOnError })}
          // for extern validator we need to have access to this input
          style={{ display: 'block', opacity: 0, height: 0, width: 0 }}
        />
        <S.FilePreview>
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
          {!!file && (error || isEditable || isClearable) && (
            <S.Actions>
              {(error || isEditable) && (
                <Button onClick={open} shape="circle" size="sm" type="button" variant="tertiary">
                  <EditIcon />
                </Button>
              )}
              {isClearable && (
                <Button
                  onClick={handleRemoveClick}
                  shape="circle"
                  size="sm"
                  type="button"
                  variant="primary-danger"
                >
                  <TrashIcon />
                </Button>
              )}
            </S.Actions>
          )}
        </S.FilePreview>
      </S.FileDrop>
    )
  }
)

FileDrop.displayName = 'FileDrop'

// Export `ImagePreview` from styles
export const ImagePreview = S.ImagePreview
