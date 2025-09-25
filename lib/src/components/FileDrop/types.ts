import type { ComponentPropsWithRef, HTMLAttributes } from 'react'
import type { Accept, DropEvent, DropzoneProps, DropzoneState } from 'react-dropzone'

import type { ForceFileType } from '@/components/Files/types'
import type { CreateEvent } from '@/utils/create-event'

export type FileDropChildren = {
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
  children?: (state: FileDropChildren) => JSX.Element
  fileName?: string
  forceFileType?: ForceFileType
  handleAddFile?: (event: CreateEvent | DropEvent | React.ChangeEvent<HTMLInputElement>) => void
  handleRemoveFile?: (event: CreateEvent | DropEvent | React.ChangeEvent<HTMLInputElement>) => void
  isClearable?: boolean
  isEditable?: boolean
  name?: string
  onBlur?: () => void
  onChange?: (event: CreateEvent | DropEvent | React.ChangeEvent<HTMLInputElement>) => void
  onError?: (event?: string) => void
  value: FileType
  /** Pass an object with optional fields title, hint, fileButtonText and/or previewButtonText (string or JSX.Element) */
  wordings?: WordingsType
}
export type FileDropProps = ComponentPropsWithRef<'div'> &
  FileDropOptions &
  HTMLAttributes<HTMLDivElement> &
  Omit<DropzoneProps, 'children'>

export type FilePreviewProps = FileDropChildren['wordings'] & FilePreviewOptions

export interface FileWithPreview extends File {
  preview?: string
}

export type MessageProps = FileDropChildren['wordings'] & MessageOptions

interface FilePreviewOptions {
  file: FileDropChildren['file']
  fileName?: string
  forceFileType?: ForceFileType
}

type FileType = FileWithPreview | string

type FileUrlType = string | URL
interface MessageOptions {
  disabled?: boolean
  openFile?: FileDropChildren['openFile']
}

type OpenType = DropzoneState['open']

type WordingsType = {
  fileButtonText?: JSX.Element | string
  hint?: JSX.Element | string
  previewButtonText?: JSX.Element | string
  title?: JSX.Element | string
}
