import type { ComponentPropsWithRef } from 'react'

import type { FileType } from '@/components/Files/types'
import type { CreateEvent } from '@/utils/create-event'

export type FileUploadPreviewProps = {
  file: FileType
  onRemove: () => void
}

export type FileUploadProps = FileUploadOptions & Omit<ComponentPropsWithRef<'input'>, 'children'>

export type FileWithPreview =
  | (File & {
      name?: string
      preview?: string
    })
  | string

interface FileUploadOptions {
  /** Pass a comma-separated string of file types e.g. "image/png" or "image/png,image/jpeg" */
  accept?: string
  children?: (props: {
    disabled: boolean
    files: FileWithPreview[]
    onRemoveFile: (file: FileWithPreview) => void
    openFile: () => void
  }) => React.ReactNode
  handleAddFile?: (files: FileWithPreview | FileWithPreview[]) => void
  handleRemoveFile?: (file: FileWithPreview) => void
  onBlur?: () => void
  onChange?: (event: CreateEvent) => void
  preview?: React.FC<FileUploadPreviewProps>
}
