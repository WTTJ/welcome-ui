import { DEFAULT_FONT_FAMILY } from './constants'

const pathBase = 'https://cdn.welcometothejungle.co/common/assets/fonts/welcomeweb-'

const RegularWoff = `${pathBase}regular.woff`
const RegularWoff2 = `${pathBase}regular.woff2`
const RegularTtf = `${pathBase}regular.ttf`

const MediumWoff = `${pathBase}medium.woff`
const MediumWoff2 = `${pathBase}medium.woff`
const MediumTtf = `${pathBase}medium.woff`

const BoldWoff = `${pathBase}bold.woff`
const BoldWoff2 = `${pathBase}bold.woff`
const BoldTtf = `${pathBase}bold.woff`

const BlackWoff = `${pathBase}black.woff`
const BlackWoff2 = `${pathBase}black.woff`
const BlackTtf = `${pathBase}black.woff`

export const fontFace = (version, weight) => {
  switch (version) {
    case 'Medium':
      return `
        @font-face{
          font-family: ${DEFAULT_FONT_FAMILY};
          src: url(${MediumWoff}) format('woff'),
               url(${MediumWoff2}) format('woff2'),
               url(${MediumTtf}) format('truetype');
          font-weight: ${weight};
        }
      `
    case 'Bold':
      return `
        @font-face{
          font-family: ${DEFAULT_FONT_FAMILY};
          src: url(${BoldWoff}) format('woff'),
               url(${BoldWoff2}) format('woff2'),
               url(${BoldTtf}) format('truetype');
          font-weight: ${weight};
        }
      `
    case 'Black':
      return `
        @font-face{
          font-family: ${DEFAULT_FONT_FAMILY};
          src: url(${BlackWoff}) format('woff'),
               url(${BlackWoff2}) format('woff2'),
               url(${BlackTtf}) format('truetype');
          font-weight: ${weight};
        }
      `
    default:
      return `
        @font-face{
          font-family: ${DEFAULT_FONT_FAMILY};
          src: url(${RegularWoff}) format('woff'),
               url(${RegularWoff2}) format('woff2'),
               url(${RegularTtf}) format('truetype');
          font-weight: ${weight};
        }
      `
  }
}
