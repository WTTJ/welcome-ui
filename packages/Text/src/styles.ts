import styled, { css, system, th } from '@xstyled/styled-components'
import { styled as pandaStyled } from '@welcome-ui/panda/jsx'

import { TextOptions } from './index'

const MOBILE_VARIANTS = {
  h0: 'h1',
  h1: 'h2',
  h2: 'h3',
  h3: 'h4',
  h4: 'h5',
  h5: 'h6',
}

const getBlockHeight = (lines: number) => css`
  /* stylelint-disable-next-line value-no-vendor-prefix */
  display: -webkit-box;
  /* stylelint-disable-next-line property-no-vendor-prefix */
  -webkit-box-orient: vertical;
  /* stylelint-disable-next-line property-no-vendor-prefix */
  -webkit-line-clamp: ${lines || 'none'};
  line-height: normal;
  overflow: hidden;
  word-break: ${lines === 1 ? 'break-all' : null};
`

export const Text = styled.p<TextOptions>(({ lines, variant }) => {
  const mobileVariant = MOBILE_VARIANTS[variant as keyof typeof MOBILE_VARIANTS]

  return css`
    ${th(`texts.${mobileVariant || variant}`)};

    /* Start fallback for non-webkit */
    display: block;
    ${lines && lines !== Infinity && getBlockHeight(lines)};
    /* End fallback for non-webkit */

    @media (min-width: lg) {
      ${th(`texts.${variant}`)};
      ${system};
    }

    ${system};
  `
})

// todo  @media (min-width: lg) { ${th(`texts.${variant}`)};

export const TextPanda = pandaStyled('p', {
  base: {
    display: 'block',
  },
  variants: {
    variant: {
      h0: {
        color: 'dark-900',
        fontFamily: 'h0',
        fontWeight: 'bold',
        fontSize: 'h0',
        lineHeight: 'h0',
        letterSpacing: 'h0',
      },
      h1: {
        color: 'dark-900',
        fontFamily: 'h1',
        fontWeight: 'bold',
        fontSize: 'h1',
        lineHeight: 'h1',
        letterSpacing: 'h1',
      },
      h2: {
        color: 'dark-900',
        fontFamily: 'h2',
        fontWeight: 'bold',
        fontSize: 'h2',
        lineHeight: 'h2',
        letterSpacing: 'h2',
      },
      h3: {
        color: 'dark-900',
        fontFamily: 'h3',
        fontWeight: 'bold',
        fontSize: 'h3',
        lineHeight: 'h3',
        letterSpacing: 'h3',
      },
      h4: {
        color: 'dark-900',
        fontFamily: 'h4',
        fontWeight: 'bold',
        fontSize: 'h4',
        lineHeight: 'h4',
        letterSpacing: 'h4',
      },
      h5: {
        color: 'dark-900',
        fontFamily: 'h5',
        fontWeight: 'bold',
        fontSize: 'h5',
        lineHeight: 'h5',
        letterSpacing: 'h5',
      },
      h6: {
        color: 'dark-900',
        fontFamily: 'h6',
        fontWeight: 'bold',
        fontSize: 'h6',
        lineHeight: 'h6',
        letterSpacing: 'h6',
      },
      lg: {
        fontWeight: 'regular',
        fontSize: 'lg',
        lineHeight: 'lg',
        letterSpacing: 'lg',
      },
      md: {
        fontWeight: 'reguler',
        fontSize: 'md',
        lineHeight: 'md',
        letterSpacing: 'md',
      },
      sm: {
        fontWeight: 'regular',
        fontSize: 'sm',
        lineHeight: 'sm',
        letterSpacing: 'sm',
      },
      xs: {
        fontWeight: 'regular',
        fontSize: 'xs',
        lineHeight: 'xs',
        letterSpacing: 'xs',
      },
      'subtitle-md': {
        fontFamily: 'subtitle-md',
        fontWeight: 'bold',
        fontSize: 'subtitle-md',
        lineHeight: 'subtitle-md',
        letterSpacing: 'subtitle-md',
        textTransform: 'uppercase',
      },
      'subtitle-sm': {
        fontFamily: 'subtitle-sm',
        fontWeight: 'medium',
        fontSize: 'subtitle-sm',
        lineHeight: 'subtitle-sm',
        letterSpacing: 'subtitle-sm',
        textTransform: 'uppercase',
      },
    },
    lines: {
      false: {},
      true: {
        display: '-webkit-box',
        '-webkit-box-orient': 'vertical',
        'line-height': 'normal',
        overflow: 'hidden',
      },
    },
  },
})
