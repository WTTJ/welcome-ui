import { css } from '@xstyled/styled-components'

import { WuiTheme } from '../theme/types'

function getFormat(extension: string) {
  return extension === 'ttf' ? 'truetype' : extension
}

function getUrl(url: string, extension: string) {
  return `url('${url}.${extension}') format('${getFormat(extension)}')`
}

type Descriptor = {
  name: string
  url: string
  extensions: string[]
  display?: string
  weight?: string
  style?: string
}

function getSrc(descriptor: Descriptor) {
  return descriptor.extensions
    .map((extension: string) => getUrl(descriptor.url, extension))
    .join(', ')
}

function getFont(descriptor: Descriptor) {
  return css`
    @font-face {
      font-family: ${descriptor.name};
      src: ${getSrc(descriptor)};
      font-display: ${descriptor.display || 'fallback'};
      ${descriptor.weight &&
      css`
        font-weight: ${descriptor.weight};
      `}
      ${descriptor.style &&
      css`
        font-style: ${descriptor.style};
      `}
    }
  `
}

export const fonts =
  () =>
  ({ theme }: { theme: WuiTheme }): ReturnType<typeof css> => {
    if (!theme || !theme.fontFaces) return null
    return Object.entries(theme.fontFaces).map(([name, variations]) =>
      variations.map(variation => getFont({ name, ...variation }))
    )
  }
