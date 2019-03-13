import RegularWoff from '../../fonts/HKCompakt-Regular.woff'
import RegularTtf from '../../fonts/HKCompakt-Regular.ttf'

import MediumWoff from '../../fonts/HKCompakt-Medium.woff'
import MediumTtf from '../../fonts/HKCompakt-Medium.ttf'

import BoldWoff from '../../fonts/HKCompakt-Bold.woff'
import BoldTtf from '../../fonts/HKCompakt-Bold.ttf'

import HeadingWoff from '../../fonts/HKCompakt-Heading.woff'
import HeadingTtf from '../../fonts/HKCompakt-Heading.ttf'

export const fontFace = (version, weight) => {
  switch (version) {
    case 'Medium':
      return `
        @font-face{
          font-family: 'HKCompakt';
          src: url(${MediumWoff}) format('woff'),
               url(${MediumTtf}) format('truetype'),
          font-weight: ${weight};
        }
      `
    case 'Bold':
      return `
        @font-face{
          font-family: 'HKCompakt';
          src: url(${BoldWoff}) format('woff'),
               url(${BoldTtf}) format('truetype'),
          font-weight: ${weight};
        }
      `
    case 'Heading':
      return `
        @font-face{
          font-family: 'HKCompakt';
          src: url(${HeadingWoff}) format('woff'),
               url(${HeadingTtf}) format('truetype'),
          font-weight: ${weight};
        }
      `
    default:
      return `
        @font-face{
          font-family: 'HKCompakt';
          src: url(${RegularWoff}) format('woff'),
               url(${RegularTtf}) format('truetype'),
          font-weight: ${weight};
        }
      `
  }
}
