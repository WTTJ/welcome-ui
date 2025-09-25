import type React from 'react'

import type { IconProps } from '@/components/Icon'
import {
  AttachmentIcon,
  CameraIcon,
  CsvIcon,
  DocIcon,
  DocxIcon,
  MusicIcon,
  PdfIcon,
  PptIcon,
  VideoIcon,
  XlsIcon,
  XlsxIcon,
  ZipIcon,
} from '@/components/Icon'

import { types } from './types'

export type FileType = File | string
export type ForceFileType = 'audio' | 'image' | 'video'

const formatBytes = (bytes: number, decimals = 2): string => {
  if (bytes === 0) {
    return '0 Bytes'
  }

  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ['Bytes', 'KB', 'MB', 'GB']

  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]
}

export function getFileIcon(file: FileType, forceFileType?: ForceFileType): React.FC<IconProps> {
  const mimeType = getMimeType(file)

  if (!forceFileType && !mimeType) {
    return AttachmentIcon
  }

  if (forceFileType === 'image' || (mimeType && mimeType.startsWith('image/'))) {
    return CameraIcon
  }
  if (forceFileType === 'audio' || (mimeType && mimeType.startsWith('audio/'))) {
    return MusicIcon
  }
  if (forceFileType === 'video' || (mimeType && mimeType.startsWith('video/'))) {
    return VideoIcon
  }

  switch (mimeType) {
    case 'application/gzip':
    case 'application/vnd.rar':
    case 'application/x-7z-compressed':
    case 'application/x-bzip':
    case 'application/x-bzip2':
    case 'application/zip':
      return ZipIcon
    case 'application/msword':
      return DocIcon
    case 'application/pdf':
      return PdfIcon
    case 'application/vnd.ms-excel':
      return XlsIcon
    case 'application/vnd.ms-powerpoint':
    case 'application/vnd.openxmlformats-officedocument.presentationml.presentation':
      return PptIcon
    case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
      return XlsxIcon
    case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
      return DocxIcon
    case 'text/csv':
      return CsvIcon
    default:
      return AttachmentIcon
  }
}

export function getFileName(file: FileType): string {
  if (typeof file === 'string') {
    return removeQueryString(file).split('/').pop()
  } else {
    return file.name
  }
}

export function getFileSize(file: FileType): string {
  return file instanceof File && file.size ? formatBytes(file.size, 0) : null
}

export function getMimeType(file: FileType): string {
  if (typeof file === 'string') {
    const fileName = getFileName(file).split('.').pop()
    return types[fileName] || null
  } else {
    return file.type
  }
}

function removeQueryString(name: string): string {
  return name.split('?')[0]
}
