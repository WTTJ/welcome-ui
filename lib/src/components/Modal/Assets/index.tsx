import { AssetBackdrop } from './AssetBackdrop'
import { AssetContent } from './AssetContent'
import modalAssetsStyles from './assets.module.scss'
import { AssetTitle } from './AssetTitle'
import { AssetWithTitle } from './AssetWithTitle'
import { Dialog } from './Dialog'
import { Iframe } from './Iframe'

export { modalAssetsStyles as assetModalClasses }

// Nested exports
export const Assets = Object.assign(Dialog, {
  AssetWithTitle,
  Backdrop: AssetBackdrop,
  Content: AssetContent,
  Iframe,
  Title: AssetTitle,
})
