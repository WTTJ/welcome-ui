import styled, { css, system, th, typography } from '@xstyled/styled-components'
import { UniversalLink, UniversalLinkPanda } from '@welcome-ui/universal-link'
import { shouldForwardProp } from '@welcome-ui/system'
import { cva, RecipeVariantProps } from '@welcome-ui/panda/css'
import { styled as styledPanda } from '@welcome-ui/panda/jsx'

import { Variant } from './index'

export const Link = styled(UniversalLink).withConfig({ shouldForwardProp })<{
  variant: Variant
  isExternal?: boolean
}>(
  ({ isExternal, variant = 'primary' }) => css`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    opacity: 1;
    line-height: 1.5;
    text-decoration: none;
    cursor: pointer;

    > .wui-text {
      margin-right: -2px;
      margin-left: -2px;
      padding-left: 2px;
      padding-right: 2px;
      ${th('underline.default')};
      ${th('links.default')};
      ${th(`links.${variant}.default`)};
      ${isExternal && th('links.withExternalLink')};
      ${typography};
    }

    &:hover,
    &:focus {
      > .wui-text {
        ${th('underline.hover')};
        ${th(`links.${variant}.hover`)};
        outline: none !important;
      }
    }

    &[disabled] {
      > .wui-text {
        ${th('links.disabled')};
      }
      pointer-events: none;
    }

    ${system};

    & > *:not(:only-child):not(:last-child) {
      margin-right: xs;
    }
  `
)

export const linkStyles = cva({
  base: {
    display: 'inline-flex',
    flexDirection: 'row',
    alignItems: 'center',
    opacity: 1,
    lineHeight: 1.5,
    textDecoration: 'none',
    cursor: 'pointer',
    '& > .wui-text': {
      marginRight: '-2px',
      marginLeft: '-2px',
      paddingLeft: '2px',
      paddingRight: '2px',
      backgroundImage:
        'linear-gradient(0deg, token(colors.underline), token(colors.underline) 100%)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 50%',
      backgroundPositionY: 'calc(200% - 2px)',
      // transition: background-position-y 250ms, background-size 250ms, color 250ms;
      color: 'dark-900',
      fontWeight: 'medium',
      transition: 'all',
      transitionDuration: 'medium',
      transitionTimingFunction: 'medium',
      '&[data-external="true"]': {
        backgroundSize: 'calc(100% - token(space.md) - token(space.sm)) 50%',
      },
      _hover: {
        outline: 'none !important',
        opacity: 1,
        backgroundPositionY: '100%',
        backgroundSize: '100% 100%',
      },
      _focus: {
        outline: 'none !important',
        opacity: 1,
        backgroundPositionY: '100%',
        backgroundSize: '100% 100%',
      },
    },
    '& > *:not(:only-child):not(:last-child)': {
      marginRight: 'xs',
    },
  },
  variants: {
    variant: {
      primary: {},
      secondary: {
        '& > .wui-text': {
          backgroundImage:
            'linear-gradient(0deg, token(colors.dark-900), token(colors.dark-900) 100%)',
          _hover: {
            color: 'light-900',
          },
        },
      },
    },
    disabled: {
      true: {
        pointerEvents: 'none',
        '& > .wui-text': {
          color: 'dark-400',
          backgroundImage:
            'linear-gradient(0deg, token(colors.dark-100), token(colors.dark-100), 100%)',
        },
      },
    },
  },
})

export type LinkPandaVariant = RecipeVariantProps<typeof linkStyles>
export const LinkPanda = styledPanda(UniversalLinkPanda, linkStyles)
