import { css } from '@xstyled/styled-components'

import { WuiTheme } from '../theme/types'

type FontVariation = {
  display?: FontDisplay
  extensions?: string[]
  isVariable?: boolean
  overrides?: Record<string, string>
  style?: string
  unicodeRange?: string
  url: string
  weight?: string
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
  if (extensions?.length) {
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

  // Fallback fonts
  return `url('${url}')`
}

function getFont({
  name,
  variation: {
    display = 'swap',
    extensions = ['woff2', 'woff'],
    isVariable,
    overrides,
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
      ${overrides &&
      css`
        ${Object.entries(overrides).map(([key, value]) => `${key}: ${value};`)};
      `}
    }
  `
}

export const fonts =
  () =>
  ({ theme }: { theme: WuiTheme }): ReturnType<typeof css> => {
    if (!theme?.fontFaces) return null

    return Object.entries(theme.fontFaces).map(([name, variations]) =>
      variations.map(variation => getFont({ name, variation }))
    )
  }
