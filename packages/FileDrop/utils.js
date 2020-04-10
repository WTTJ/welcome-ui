import { getFileName } from '@welcome-ui/files'

const match = /\.(jpeg|jpg|gif|png|webp)$/

export function isAnImage(file) {
  if (!file) return false

  if (typeof file === 'string') {
    return getFileName(file).match(match)
  } else {
    return file.name && file.name.match(match)
  }
}

export const getPreviewUrl = file => {
  const url = file.preview || file
  if (typeof url !== 'string' || url.startsWith('blob:')) {
    return url
  }
  if (typeof window !== 'undefined') {
    return new URL(url)
  }
  return undefined
}
