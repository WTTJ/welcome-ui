const createUrl = (url, extension) => {
  return `url('${url}.${extension}') format('${extension === 'ttf' ? 'truetype' : extension}')`
}

const createSrc = font => {
  return font.extensions.map(extension => createUrl(font.url, extension)).join(', ')
}

const getFontFace = (name, font) => {
  return `
    @font-face {
      font-family: '${name}';
      src: ${createSrc(font)};
      ${font.weight ? `font-weight: ${font.weight};` : ''}
      ${font.style ? `font-style: ${font.style};` : ''}
      font-display: fallback;
    }
  `
}

export const fontFace = theme => {
  return Object.entries(theme.fontFaces)
    .map(
      ([name, variations]) =>
        Array.isArray(variations) && variations.map(font => getFontFace(name, font)).join('')
    )
    .join('')
}
