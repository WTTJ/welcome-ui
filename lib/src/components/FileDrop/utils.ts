import { getFileName } from '@/Files'

import type { FileDropChildren } from './index'

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
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      return undefined
    }
  }

  return undefined
}
