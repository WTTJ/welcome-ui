import { getFileName } from '../Files'

import { FileDropChildren } from './index'

const match = /\.(jpeg|jpg|gif|png|webp)$/

export const isAnImage = (file: FileDropChildren['file']): boolean => {
  if (!file) return false

  if (typeof file === 'string') {
    return !!getFileName(file).match(match)
  } else {
    return file.name ? !!file.name.match(match) : false
  }
}

export const getPreviewUrl = (file: FileDropChildren['file']): FileDropChildren['fileUrl'] => {
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
