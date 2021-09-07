import React, { forwardRef, useEffect, useState } from 'react'
import {
  DropEvent,
  DropzoneProps,
  DropzoneState,
  FileError,
  FileRejection,
  useDropzone,
} from 'react-dropzone'
import { TrashIcon } from '@welcome-ui/icons.trash'
import { EditIcon } from '@welcome-ui/icons.edit'
import { Button } from '@welcome-ui/button'
import { Group } from '@welcome-ui/group'
import { createEvent, CreateEvent } from '@welcome-ui/utils'
import { WuiProps } from '@welcome-ui/system'
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
export type ChildrenType = {
  disabled?: boolean
  error?: string
  file?: FileType
  fileUrl?: FileUrlType
  forceFileType?: ForceFileType
  isAnImage?: boolean
  isHoverAccept?: DropzoneState['isDragAccept']
  isHoverReject?: DropzoneState['isDragReject']
  openFile?: OpenType
}

export interface FileDropOptions {
  /** Pass a comma-separated string of file types e.g. "image/png" or "image/png,image/jpeg"  */
  accept?: string
  children: (state: ChildrenType) => JSX.Element
  isClearable?: boolean
  isEditable?: boolean
  forceFileType?: ForceFileType
  handleAddFile?: (event: DropEvent | React.ChangeEvent<HTMLInputElement> | CreateEvent) => void
  handleRemoveFile?: (event: DropEvent | React.ChangeEvent<HTMLInputElement> | CreateEvent) => void
  name: string
  onBlur?: () => void
  onChange?: (event: DropEvent | React.ChangeEvent<HTMLInputElement> | CreateEvent) => void
  onError?: (event?: string) => void
  value: FileType
}

export type FileDropProps = FileDropOptions & Omit<DropzoneProps, 'children'> & WuiProps

export const FileDrop = forwardRef<HTMLDivElement, FileDropProps>(
  (
    {
      accept = 'image/*',
      children = Preview,
      dataTestId,
      disabled,
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
          style={{ display: 'block', opacity: 0, height: 0 }}
        />
        <S.FilePreview>
          {children({
            disabled,
            error,
            file,
            fileUrl: file && getPreviewUrl(file),
            forceFileType,
            isAnImage: forceFileType === 'image' || isAnImage(file),
            isHoverAccept: isDragAccept,
            isHoverReject: isDragReject,
            openFile: open,
          })}
          {!!file && (error || isEditable || isClearable) && (
            <S.Actions>
              <Group>
                {(error || isEditable) && (
                  <Button
                    onClick={open}
                    shape="square"
                    size="sm"
                    type="button"
                    variant="quaternary"
                  >
                    <EditIcon />
                  </Button>
                )}
                {isClearable && (
                  <Button
                    onClick={handleRemoveClick}
                    shape="square"
                    size="sm"
                    type="button"
                    variant="primary-danger"
                  >
                    <TrashIcon />
                  </Button>
                )}
              </Group>
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
