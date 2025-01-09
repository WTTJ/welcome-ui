/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ICON_FONT_HASH: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
