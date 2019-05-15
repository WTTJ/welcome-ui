export const IMAGE_MIME_TYPES = [
  'image/gif',
  'image/jpeg',
  'image/pjpeg',
  'image/png',
  'image/x-png'
]

export const validateImage = file => {
  return validateMimeType(file, IMAGE_MIME_TYPES)
}

export const validateMimeType = (file, mimeTypes) => {
  if (file.type) {
    return mimeTypes.includes(file.type)
  }
  return false
}

export const validateFileSize = (file, size) => {
  return file.size <= size
}
