import type { FileType, ForceFileType } from './types'
import { types } from './types'

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

export function getFileIconName(file: FileType, forceFileType?: ForceFileType): string {
  const mimeType = getMimeType(file)

  if (!forceFileType && !mimeType) {
    return 'paperclip'
  }

  if (forceFileType === 'image' || (mimeType && mimeType.startsWith('image/'))) {
    return 'images'
  }
  if (forceFileType === 'audio' || (mimeType && mimeType.startsWith('audio/'))) {
    return 'music'
  }
  if (forceFileType === 'video' || (mimeType && mimeType.startsWith('video/'))) {
    return 'play'
  }

  switch (mimeType) {
    case 'application/gzip':
    case 'application/vnd.rar':
    case 'application/x-7z-compressed':
    case 'application/x-bzip':
    case 'application/x-bzip2':
    case 'application/zip':
      return 'file'
    case 'application/msword':
      return 'file'
    case 'application/pdf':
      return 'file'
    case 'application/vnd.ms-excel':
      return 'file'
    case 'application/vnd.ms-powerpoint':
    case 'application/vnd.openxmlformats-officedocument.presentationml.presentation':
      return 'file'
    case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
      return 'file'
    case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
      return 'file'
    case 'text/csv':
      return 'file'
    default:
      return 'paperclip'
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
