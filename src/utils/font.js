import RegularEot from 'fonts/HKCompakt-Regular.eot'
import RegularWoff from 'fonts/HKCompakt-Regular.woff'
import RegularTtf from 'fonts/HKCompakt-Regular.ttf'
import RegularSvg from 'fonts/HKCompakt-Regular.svg'

import MediumEot from 'fonts/HKCompakt-Medium.eot'
import MediumWoff from 'fonts/HKCompakt-Medium.woff'
import MediumTtf from 'fonts/HKCompakt-Medium.ttf'
import MediumSvg from 'fonts/HKCompakt-Medium.svg'

import BoldEot from 'fonts/HKCompakt-Bold.eot'
import BoldWoff from 'fonts/HKCompakt-Bold.woff'
import BoldTtf from 'fonts/HKCompakt-Bold.ttf'
import BoldSvg from 'fonts/HKCompakt-Bold.svg'

import HeadingEot from 'fonts/HKCompakt-Heading.eot'
import HeadingWoff from 'fonts/HKCompakt-Heading.woff'
import HeadingTtf from 'fonts/HKCompakt-Heading.ttf'
import HeadingSvg from 'fonts/HKCompakt-Heading.svg'

export const fontFace = (version, weight) => {
  switch (version) {
    case 'Medium':
      return `
        @font-face{
          font-family: 'HKCompakt';
          src: url(${MediumEot});
          src: url(${MediumEot}#iefix) format('embedded-opentype'),
               url(${MediumWoff}) format('woff'),
               url(${MediumTtf}) format('truetype'),
               url(${MediumSvg}) format('svg');
          font-weight: ${weight};
        }
      `
    case 'Bold':
      return `
        @font-face{
          font-family: 'HKCompakt';
          src: url(${BoldEot});
          src: url(${BoldEot}#iefix) format('embedded-opentype'),
               url(${BoldWoff}) format('woff'),
               url(${BoldTtf}) format('truetype'),
               url(${BoldSvg}) format('svg');
          font-weight: ${weight};
        }
      `
    case 'Heading':
      return `
        @font-face{
          font-family: 'HKCompakt';
          src: url(${HeadingEot});
          src: url(${HeadingEot}#iefix) format('embedded-opentype'),
               url(${HeadingWoff}) format('woff'),
               url(${HeadingTtf}) format('truetype'),
               url(${HeadingSvg}) format('svg');
          font-weight: ${weight};
        }
      `
    default:
      return `
        @font-face{
          font-family: 'HKCompakt';
          src: url(${RegularEot});
          src: url(${RegularEot}#iefix) format('embedded-opentype'),
               url(${RegularWoff}) format('woff'),
               url(${RegularTtf}) format('truetype'),
               url(${RegularSvg}) format('svg');
          font-weight: ${weight};
        }
      `
  }
}
