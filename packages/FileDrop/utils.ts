import { getFileName } from '@welcome-ui/files'

import { FileType, FileUrlType } from './index'

const match = /\.(jpeg|jpg|gif|png|webp)$/

export const isAnImage = (file: FileType): boolean => {
  if (!file) return false

  if (typeof file === 'string') {
    return !!getFileName(file).match(match)
  } else {
    return file.name ? !!file.name.match(match) : false
  }
}

export const getPreviewUrl = (file: FileType): FileUrlType => {
  let url
  if (file instanceof File) {
    url = file.preview
  } else {
    url = file
  }

  if (typeof url !== 'string' || url.startsWith('blob:')) {
    return url
  }

  if (typeof window !== 'undefined') {
    try {
      return new URL(url)
    } catch (error) {
      return undefined
    }
  }

  return undefined
}
