import { css } from '@xstyled/styled-components'

import { WuiTheme } from '../theme/types'

type FontVariation = {
  url: string
  display?: FontDisplay
  weight?: string
  style?: string
  isVariable?: boolean
  extension?: string
  unicodeRange?: string
}

type Font = {
  name: string
  variation: FontVariation
}

function getSource(
  url: FontVariation['url'],
  extension: FontVariation['extension'],
  isVariable: FontVariation['isVariable']
) {
  const formattedExtension = extension === 'ttf' ? 'truetype' : extension

  /** variable icon font */
  if (isVariable) {
    return `url('${url}.${extension}') format('${formattedExtension}-variations');`
  }

  return `url('${url}.${extension}') format('${formattedExtension}')`
}

function getFont({
  name,
  variation: { display = 'swap', extension = 'woff2', isVariable, style, unicodeRange, url, weight },
}: Font) {
  return css`
    @font-face {
      font-family: ${name};
      src: ${getSource(url, extension, isVariable)};
      font-display: ${display};
      ${weight &&
      css`
        font-weight: ${weight};
      `}
      ${style &&
      css`
        font-style: ${style};
      `}
      ${unicodeRange &&
      css`
      unicode-range: ${unicodeRange};
      `}
    }
  `
}

export const fonts =
  () =>
  ({ theme }: { theme: WuiTheme }): ReturnType<typeof css> => {
    if (!theme || !theme.fontFaces) return null

    return Object.entries(theme.fontFaces).map(([name, variations]) =>
      variations.map(variation => getFont({ name, variation }))
    )
  }
