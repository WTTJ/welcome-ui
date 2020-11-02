import { CameraIcon } from '@welcome-ui/icons.camera'
import { PdfIcon } from '@welcome-ui/icons.pdf'
import { PptIcon } from '@welcome-ui/icons.ppt'

import { getFileIcon, getFileName, getFileSize, getMimeType } from './index'

describe.only('File utils', () => {
  describe('getFileName', () => {
    it('should return correct name', () => {
      const file = { name: 'jungle.test-name.jpg' }
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
      const file = { name: 'jungle.test-name.jpg' }
      const result = getMimeType(file)

      expect(result).toEqual('image/jpeg')
    })

    it('should return pdf type', () => {
      const file = { name: 'jungle.test-name.pdf' }
      const result = getMimeType(file)

      expect(result).toEqual('application/pdf')
    })

    it('should return ppt type', () => {
      const file = { name: 'jungle.test-name.ppt' }
      const result = getMimeType(file)

      expect(result).toEqual('application/vnd.ms-powerpoint')
    })

    it('should return docx type', () => {
      const file = { name: 'jungle.test-name.docx' }
      const result = getMimeType(file)

      expect(result).toEqual(
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      )
    })

    it('should return gzip type', () => {
      const file = { name: 'jungle.test-name.gz' }
      const result = getMimeType(file)

      expect(result).toEqual('application/gzip')
    })

    it('should return correct type from file', () => {
      const file = { name: 'jungle.test-name.jungle', type: 'image/jpeg' }
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
        'https://cdn.welcometothejungle.co/wttj-front/production/assets/images/logos/wttj.svg?v=3a3dbd7122a01600fb67e66b889bb47c'
      const result = getMimeType(file)

      expect(result).toEqual('image/svg+xml')
    })
  })

  describe('getFileSize', () => {
    it('should return correct size formatted', () => {
      const file = { name: 'jungle.test-name.jpg', size: 123456 }
      const result = getFileSize(file)

      expect(result).toEqual('121 KB')
    })

    it('should return correct null if no size', () => {
      const file = { name: 'jungle.test-name.jpg' }
      const result = getFileSize(file)

      expect(result).toEqual(null)
    })
  })

  describe('getFileIcon', () => {
    it('should return correct camera icon', () => {
      const file = { name: 'jungle.test-name.jpg' }
      const result = getFileIcon(file)

      expect(result).toEqual(CameraIcon)
    })

    it('should return correct pdf icon', () => {
      const file = { name: 'jungle.test-name.pdf' }
      const result = getFileIcon(file)

      expect(result).toEqual(PdfIcon)
    })

    it('should return correct ppt icon', () => {
      const file = { name: 'jungle.test-name.ppt' }
      const result = getFileIcon(file)

      expect(result).toEqual(PptIcon)
    })

    it('should return correct icon with forceFileType', () => {
      const file = { name: 'jungle.test-name.pdf' }
      const result = getFileIcon(file, 'image')

      expect(result).toEqual(CameraIcon)
    })
  })
})
