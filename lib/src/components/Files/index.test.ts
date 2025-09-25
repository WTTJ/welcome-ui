import { CameraIcon, PdfIcon, PptIcon } from '@/components/Icon'

import type { Type } from './types'

import { getFileIcon, getFileName, getFileSize, getMimeType } from '.'

function generateFile(name: string, type: Type) {
  const file = new File(['we-hire-at-welcome-to-the-jungle'], name, { type })
  return file
}

describe('File utils', () => {
  describe('getFileName', () => {
    it('should return correct name', () => {
      const fileName = 'jungle.test-name.jpg'
      const file = generateFile(fileName, 'image/jpeg')
      const result = getFileName(file)

      expect(result).toEqual(file.name)
    })

    it('should return correct name with /', () => {
      const file = 'https://url.com/assets/jungle.svg'
      const result = getFileName(file)

      expect(result).toEqual('jungle.svg')
    })

    it('should return correct name with ?', () => {
      const file = 'https://url.com/assets/jungle.svg?v=3a3dbd7122a01600fb67e66b889bb47c'
      const result = getFileName(file)

      expect(result).toEqual('jungle.svg')
    })
  })

  describe('getMimeType', () => {
    it('should return image type', () => {
      const fileName = 'jungle.test-name.jpg'
      const file = generateFile(fileName, 'image/jpeg')
      const result = getMimeType(file)

      expect(result).toEqual('image/jpeg')
    })

    it('should return pdf type', () => {
      const fileName = 'jungle.test-name.pdf'
      const file = generateFile(fileName, 'application/pdf')
      const result = getMimeType(file)

      expect(result).toEqual('application/pdf')
    })

    it('should return ppt type', () => {
      const fileName = 'jungle.test-name.ppt'
      const file = generateFile(fileName, 'application/vnd.ms-powerpoint')
      const result = getMimeType(file)

      expect(result).toEqual('application/vnd.ms-powerpoint')
    })

    it('should return docx type', () => {
      const fileName = 'jungle.test-name.docx'
      const file = generateFile(
        fileName,
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      )
      const result = getMimeType(file)

      expect(result).toEqual(
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      )
    })

    it('should return gzip type', () => {
      const fileName = 'jungle.test-name.gz'
      const file = generateFile(fileName, 'application/gzip')
      const result = getMimeType(file)

      expect(result).toEqual('application/gzip')
    })

    it('should return correct type from file', () => {
      const fileName = 'jungle.test-name.jungle'
      const file = generateFile(fileName, 'image/jpeg')
      const result = getMimeType(file)

      expect(result).toEqual('image/jpeg')
    })

    it('should return correct type of file without name and /', () => {
      const file = 'jungle/jungle.test-name.ico'
      const result = getMimeType(file)

      expect(result).toEqual('image/x-icon')
    })

    it('should return correct type of file without name and ?', () => {
      const file =
        'https://cdn.welcometothejungle.com/wttj-front/production/assets/images/logos/wttj.svg?v=3a3dbd7122a01600fb67e66b889bb47c'
      const result = getMimeType(file)

      expect(result).toEqual('image/svg+xml')
    })
  })

  describe('getFileSize', () => {
    it('should return correct size formatted', () => {
      const fileName = 'jungle.test-name.jungle'
      const file = generateFile(fileName, 'jungle')
      const result = getFileSize(file)

      expect(result).toEqual('32 Bytes')
    })

    it('should return correct null if no size', () => {
      const fileName = 'jungle.test-name.jungle'
      const file = new File([''], fileName, { type: 'jungle' })
      const result = getFileSize(file)

      expect(result).toEqual(null)
    })
  })

  describe('getFileIcon', () => {
    it('should return correct camera icon', () => {
      const fileName = 'jungle.test-name.jpg'
      const file = generateFile(fileName, 'image/jpeg')
      const result = getFileIcon(file)

      expect(result).toEqual(CameraIcon)
    })

    it('should return correct pdf icon', () => {
      const fileName = 'jungle.test-name.pdf'
      const file = generateFile(fileName, 'application/pdf')
      const result = getFileIcon(file)

      expect(result).toEqual(PdfIcon)
    })

    it('should return correct ppt icon', () => {
      const fileName = 'jungle.test-name.ppt'
      const file = generateFile(fileName, 'application/vnd.ms-powerpoint')
      const result = getFileIcon(file)

      expect(result).toEqual(PptIcon)
    })

    it('should return correct icon with forceFileType', () => {
      const fileName = 'jungle.test-name.pdf'
      const file = generateFile(fileName, 'application/pdf')
      const result = getFileIcon(file, 'image')

      expect(result).toEqual(CameraIcon)
    })
  })
})
