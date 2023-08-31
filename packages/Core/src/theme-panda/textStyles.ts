import { defineTextStyles } from '@pandacss/dev'

// type TextToken = 'h0': { value: {
//   fontSize: ''
// }}, 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle-md' | 'subtitle-sm'

// const textTransforms: Partial<Record<TextToken, string>> = {
//   'subtitle-md': 'uppercase',
//   'subtitle-sm': 'uppercase',
// }

// const texts = Object.keys(fontSizes).reduce((styles: TextStyles, key: TextToken) => {
//   styles[key] = {
//     value: {
//       fontSize: ''
//       fontFamily: fontFamilies[key],
//       // fontWeight: fontWeights[key], regular/bold/medium not match TextToken
//       fontSize: fontSizes[key],
//       lineHeight: lineHeights[key] || lineHeights.lg,
//       letterSpacing: letterSpacings[key],
//       textTransform: textTransforms[key],
//     },
//   }
//   return styles
// }, {})

export const textStyles = defineTextStyles({
  h0: {
    value: {
      fontSize: 'h0',
      fontWeight: 'bold',
      fontFamily: 'headings',
    },
  },
  h1: {
    value: {
      fontSize: 'h1',
      fontWeight: 'bold',
      fontFamily: 'headings',
    },
  },
  h2: {
    value: {
      fontSize: 'h2',
      fontWeight: 'bold',
      fontFamily: 'headings',
    },
  },
  h3: {
    value: {
      fontSize: 'h3',
      fontWeight: 'bold',
      fontFamily: 'headings',
    },
  },
  h4: {
    value: {
      fontSize: 'h4',
      fontWeight: 'bold',
      fontFamily: 'headings',
    },
  },
  h5: {
    value: {
      fontSize: 'h5',
      fontWeight: 'bold',
      fontFamily: 'headings',
    },
  },
  h6: {
    value: {
      fontSize: 'h6',
      fontWeight: 'bold',
      fontFamily: 'headings',
    },
  },
  lg: {
    value: {
      fontSize: 'lg',
      fontWeight: 'regular',
      fontFamily: 'texts',
    },
  },
  md: {
    value: {
      fontSize: 'md',
      fontWeight: 'regular',
      fontFamily: 'texts',
    },
  },
  sm: {
    value: {
      fontSize: 'sm',
      fontWeight: 'regular',
      fontFamily: 'texts',
    },
  },
  xs: {
    value: {
      fontSize: 'xs',
      fontWeight: 'regular',
      fontFamily: 'texts',
    },
  },
  'subtitle-md': {
    value: {
      fontSize: 'subtitle-md',
      fontWeight: 'bold',
      fontFamily: 'headings',
      textTransform: 'uppercase',
    },
  },
  'subtitle-sm': {
    value: {
      fontSize: 'subtitle-sm',
      fontWeight: 'medium',
      fontFamily: 'headings',
      textTransform: 'uppercase',
    },
  },
})
