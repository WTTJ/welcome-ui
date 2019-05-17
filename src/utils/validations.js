export const validateImage = file => {
  return validateMimeType(file, 'image/*')
}

export const validateMimeType = (file, mimeTypes) => {
  const { type } = file

  if (!file || !type) {
    return false
  }

  const mimeTypeRegex = new RegExp(mimeTypes.replace('*', '[^\\/,]+'))
  return mimeTypeRegex.test(type)
}

export const validateFileSize = (file, size) => {
  return file.size <= size
}
