import { AttachmentIcon } from '@welcome-ui/icons.attachment'
import { CameraIcon } from '@welcome-ui/icons.camera'
import { CsvIcon } from '@welcome-ui/icons.csv'
import { DocIcon } from '@welcome-ui/icons.doc'
import { DocxIcon } from '@welcome-ui/icons.docx'
import { formatBytes } from '@welcome-ui/utils'
import { MusicIcon } from '@welcome-ui/icons.music'
import { PdfIcon } from '@welcome-ui/icons.pdf'
import { VideoIcon } from '@welcome-ui/icons.video'
import { XlsIcon } from '@welcome-ui/icons.xls'
import { XlsxIcon } from '@welcome-ui/icons.xlsx'
import { ZipIcon } from '@welcome-ui/icons.zip'
import { getType } from 'mime'

const removeQueryString = name => name.split('?')[0]

export const getFileName = file =>
  file.name ||
  removeQueryString(file)
    .split('/')
    .pop()

export const getMimeType = file => file.type || getType(getFileName(file).split('.')[1])

export const getFileSize = file => (file.size ? formatBytes(file.size, 0) : null)

export const getFileIcon = (file, forceFileType) => {
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
    case 'application/pdf':
      return PdfIcon
    case 'application/msword':
      return DocIcon
    case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
      return DocxIcon
    case 'application/vnd.ms-excel':
      return XlsIcon
    case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
      return XlsxIcon
    case 'application/zip':
      return ZipIcon
    case 'text/csv':
      return CsvIcon
    default:
      return AttachmentIcon
  }
}
