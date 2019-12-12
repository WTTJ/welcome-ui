export const validateImage = file => {
  return validateMimeType(file, 'image/*')
}

export const validateMimeType = (file, mimeTypes) => {
  if (!file || !file.type) {
    return false
  }

  const mimeTypeRegex = new RegExp(mimeTypes.replace('*', '[^\\/,]+'))
  return mimeTypeRegex.test(file.type)
}

export const validateFileSize = (file, size) => {
  return file && file.size <= size
}
