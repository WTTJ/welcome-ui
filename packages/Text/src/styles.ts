import styled, { css, system, th } from '@xstyled/styled-components'
import { styled as styledPanda } from '@welcome-ui/panda/jsx'
import { cva, type RecipeVariantProps } from '@welcome-ui/panda/css'

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

// todo use token(breakpoints.lg) instead of 936px
export const textStyles = cva({
  base: {
    display: 'block',
  },
  variants: {
    variant: {
      h0: {
        color: 'dark-900',
        textStyle: 'h1',
        '@media (min-width: 936px)': {
          textStyle: 'h0',
        },
      },
      h1: {
        color: 'dark-900',
        textStyle: 'h2',
        '@media (min-width: 936px)': {
          textStyle: 'h1',
        },
      },
      h2: {
        color: 'dark-900',
        textStyle: 'h3',
        '@media (min-width: 936px)': {
          textStyle: 'h2',
        },
      },
      h3: {
        color: 'dark-900',
        textStyle: 'h4',
        '@media (min-width: 936px)': {
          textStyle: 'h3',
        },
      },
      h4: {
        color: 'dark-900',
        textStyle: 'h5',
        '@media (min-width: 936px)': {
          textStyle: 'h4',
        },
      },
      h5: {
        color: 'dark-900',
        textStyle: 'h6',
        '@media (min-width: 936px)': {
          textStyle: 'h5',
        },
      },
      h6: {
        color: 'dark-900',
        textStyle: 'h6',
      },
      lg: {
        textStyle: 'lg',
      },
      md: {
        textStyle: 'md',
      },
      sm: {
        textStyle: 'sm',
      },
      xs: {
        textStyle: 'xs',
      },
      'subtitle-md': {
        textStyle: 'subtitle-md',
      },
      'subtitle-sm': {
        textStyle: 'subtitle-sm',
      },
    },
  },
  defaultVariants: {
    variant: 'md',
  },
})

export type TextPandaVariants = RecipeVariantProps<typeof textStyles>
export const TextPanda = styledPanda('p', textStyles)
