import theme from '../theme/core'

const createUrl = (url, extension) => {
  return `url('${url}.${extension}') format('${extension === 'ttf' ? 'truetype' : extension}')`
}

const createSrc = font => {
  return font.extensions.map(extension => createUrl(font.url, extension)).join(', ')

}

export const fontFace = () => {
  let fontFace = Object.entries(theme.fonts).map(([name, fonts]) => {
    return fonts.map(font => {
      return `
        @font-face {
          font-family: '${name}';
          src: ${createSrc(font)};
          ${font.weight ? `font-weight: ${font.weight};` : ''}
          ${font.style ? `font-style: ${font.style};` : ''}
        }
      `
    }).join('')
  }).join('')
  return fontFace
}
