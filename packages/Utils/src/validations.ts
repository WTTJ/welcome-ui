export const validateImage = (file: File): boolean => {
  return validateMimeType(file, 'image/*')
}

export const validateMimeType = (file: File, mimeTypes: string): boolean => {
  if (!file || !file.type) {
    return false
  }

  const mimeTypeRegex = new RegExp(mimeTypes.replace('*', '[^\\/,]+'))
  return mimeTypeRegex.test(file.type)
}

export const validateFileSize = (file: File, size: number): boolean => {
  return file && file.size <= size
}
