import { css } from '@xstyled/styled-components'

import type { ThemeValues } from '@/theme'

type Font = {
  name: string
  variation: FontVariation
}

type FontVariation = {
  display?: FontDisplay
  extensions?: string[]
  isVariable?: boolean
  style?: string
  unicodeRange?: string
  url: string
  weight?: string
}

export function getSource(
  url: FontVariation['url'],
  extensions: FontVariation['extensions'],
  isVariable: FontVariation['isVariable']
) {
  /** variable icon font */
  if (isVariable && extensions) {
    return extensions
      .map((extension: string) => `url('${url}.${extension}') format('${extension}-variations')`)
      .join(', ')
  }

  return extensions
    ?.map((extension: string) => `url('${url}.${extension}') format('${extension}')`)
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
      /* stylelint-disable-next-line at-rule-descriptor-value-no-unknown */
      font-family: ${String(name)};
      /* stylelint-disable-next-line at-rule-descriptor-value-no-unknown */
      src: ${getSource(url, extensions, isVariable)};
      /* stylelint-disable-next-line at-rule-descriptor-value-no-unknown */
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

export const fonts = (theme: ThemeValues): null | ReturnType<typeof css> => {
  if (!theme || !theme.fontFaces) return null

  return Object.entries(theme.fontFaces).map(([name, variations]) =>
    variations.map(variation => getFont({ name, variation }))
  )
}
