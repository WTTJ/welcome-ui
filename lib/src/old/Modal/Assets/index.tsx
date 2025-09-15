import { AssetWithTitle } from './AssetWithTitle'
import { Backdrop } from './Backdrop'
import { Iframe } from './Iframe'
import { Content, Dialog } from './styles'
import * as S from './styles'

// Nested exports
export const Assets = Object.assign(Dialog, {
  AssetWithTitle,
  Backdrop,
  Content,
  Iframe,
  Title: S.Title,
})
