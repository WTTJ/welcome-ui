import { css } from '@wttj/xstyled-styled-components'

import { WuiTheme } from '../theme/types'

type FontVariation = {
  url: string
  display?: FontDisplay
  weight?: string
  style?: string
  isVariable?: boolean
  extensions?: string[]
  unicodeRange?: string
}

type Font = {
  name: string
  variation: FontVariation
}

export function getSource(
  url: FontVariation['url'],
  extensions: FontVariation['extensions'],
  isVariable: FontVariation['isVariable']
) {
  /** variable icon font */
  if (isVariable) {
    return extensions
      .map((extension: string) => `url('${url}.${extension}') format('${extension}-variations')`)
      .join(', ')
  }

  return extensions
    .map((extension: string) => `url('${url}.${extension}') format('${extension}')`)
    .join(', ')
}

function getFont({
  name,
  variation: {
    display = 'swap',
    extensions = ['woff2', 'woff'],
    isVariable,
    style,
    unicodeRange,
    url,
    weight,
  },
}: Font) {
  return css`
    @font-face {
      font-family: ${name};
      src: ${getSource(url, extensions, isVariable)};
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
