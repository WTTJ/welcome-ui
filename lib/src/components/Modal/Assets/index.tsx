import { AssetBackdrop } from './AssetBackdrop'
import { AssetContent } from './AssetContent'
import { AssetTitle } from './AssetTitle'
import { AssetWithTitle } from './AssetWithTitle'
import { Dialog } from './Dialog'
import { Iframe } from './Iframe'

// Nested exports
export const Assets = Object.assign(Dialog, {
  AssetWithTitle,
  Backdrop: AssetBackdrop,
  Content: AssetContent,
  Iframe,
  Title: AssetTitle,
})
