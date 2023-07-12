import styled, { css, system, th } from '@xstyled/styled-components'
import { Button as AriakitButton } from '@ariakit/react'
import { shouldForwardProp } from '@welcome-ui/system'
import { hideFocusRingsDataAttribute } from '@welcome-ui/utils'
import { styled as pandaStyled } from '@welcome-ui/panda/jsx'

import { ButtonOptions } from './index'

const shapeStyles = (size: ButtonOptions['size'], shape: ButtonOptions['shape'] = 'square') => css`
  width: ${th(`buttons.sizes.${size}.height`)};
  padding: 0;
  ${shape === 'circle' &&
  css`
    border-radius: ${th(`buttons.sizes.${size}.height`)};
  `};
`

export const Button = styled(AriakitButton).withConfig({ shouldForwardProp })<ButtonOptions>(
  ({ disabled, shape, size = 'md', variant }) => css`
    ${th(`buttons.${variant}`)};
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: auto;
    ${th(`buttons.sizes.${size}`)};
    text-decoration: none;
    text-align: center;
    white-space: nowrap;
    cursor: pointer;
    outline: none !important; /* important for firefox */
    border-width: sm;
    border-style: solid;
    appearance: none;
    overflow: hidden;
    transition: medium;
    ${shape && shapeStyles(size, shape)};
    ${system};

    & > svg.wui-icon,
    & > i.wui-icon-font {
      font-weight: initial;

      &:only-child {
        width: ${th(`buttons.icon.only.${size}`)};
        height: ${th(`buttons.icon.only.${size}`)};
        font-size: ${th(`buttons.icon.only.${size}`)};
      }
      &:not(:only-child) {
        width: ${th(`buttons.icon.default.${size}`)};
        height: ${th(`buttons.icon.default.${size}`)};
        font-size: ${th(`buttons.icon.default.${size}`)};
      }
    }

    & > *:not(:only-child):not(:last-child) {
      margin-right: sm;
    }

    ${!disabled &&
    css`
      [${hideFocusRingsDataAttribute}] &:focus {
        box-shadow: none;
      }
      &:focus {
        ${th(`buttons.focus.${variant || 'primary'}`)};
      }
      &:hover {
        ${th(`buttons.hover.${variant || 'primary'}`)};
      }
      &:active {
        ${th(`buttons.active.${variant || 'primary'}`)};
      }
    `};

    &[disabled] {
      cursor: not-allowed;
    }
  `
)

// todo use RecipeVariantProps to type variants

export const ButtonPanda = pandaStyled(ReakitButton, {
  base: {
    fontSize: 'sm',
    color: 'light-900',
    fontWeight: 'bold',
    letterSpacing: 0,
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'auto',
    textDecoration: 'none',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    cursor: 'pointer',
    outline: 'none !important' /* important for firefox */,
    border: 'sm',
    appearance: 'none',
    overflow: 'hidden',
    transition: 'all',
    transitionDuration: 'medium',
    transitionTimingFunction: 'medium',
    _active: {
      boxShadow: 'none',
    },
    '& > *:not(:only-child):not(:last-child)': {
      marginRight: 'sm',
    },
  },
  variants: {
    variant: {
      primary: {
        color: 'dark-900',
        backgroundColor: 'primary-500',
        borderColor: 'primary-500',
        _hover: {
          backgroundColor: 'primary-200',
          borderColor: 'primary-200',
        },
        _focus: {
          boxShadow: '0 0 0 2px token(colors.primary-200)',
        },
        _active: {
          backgroundColor: 'primary-100',
          borderColor: 'primary-100',
        },
      },
      secondary: {
        backgroundColor: 'dark-900',
        borderColor: 'dark-900',
        _hover: {
          backgroundColor: 'dark-700',
          borderColor: 'transparent',
        },
        _focus: {
          boxShadow: '0 0 0 2px token(colors.dark-500)',
        },
        _active: {
          backgroundColor: 'dark-200',
          borderColor: 'dark-200',
        },
      },
      tertiary: {
        color: 'dark-900',
        backgroundColor: 'transparent',
        borderColor: 'dark-900',
        _hover: {
          backgroundColor: 'dark-100',
        },
        _focus: {
          boxShadow: '0 0 0 2px token(colors.dark-500)',
        },
        _active: {
          backgroundColor: 'dark-400',
        },
      },
      'primary-success': {
        backgroundColor: 'success-500',
        borderColor: 'success-500',
        _hover: {
          backgroundColor: 'success-400',
          borderColor: 'success-400',
        },
        _focus: {
          boxShadow: '0 0 0 2px token(colors.success-400)',
        },
        _active: {
          backgroundColor: 'success-300',
          borderColor: 'success-300',
        },
      },
      'secondary-success': {
        color: 'success-500',
        borderColor: 'success-500',
        backgroundColor: 'light-900',
        _hover: {
          backgroundColor: 'success-100',
        },
        _focus: {
          boxShadow: '0 0 0 2px token(colors.success-200)',
        },
        _active: {
          backgroundColor: 'success-100',
        },
      },
      'primary-warning': {
        backgroundColor: 'warning-500',
        borderColor: 'warning-500',
        _hover: {
          backgroundColor: 'warning-400',
          borderColor: 'warning-400',
        },
        _focus: {
          boxShadow: '0 0 0 2px token(colors.warning-400)',
        },
        _active: {
          backgroundColor: 'warning-300',
          borderColor: 'warning-300',
        },
      },
      'secondary-warning': {
        color: 'warning-500',
        backgroundColor: 'light-900',
        borderColor: 'warning-500',
        _hover: {
          backgroundColor: 'warning-100',
        },
        _focus: {
          boxShadow: '0 0 0 2px token(colors.warning-200)',
        },
        _active: {
          backgroundColor: 'warning-100',
        },
      },
      'primary-danger': {
        backgroundColor: 'danger-500',
        borderColor: 'danger-500',
        _hover: {
          backgroundColor: 'danger-400',
          borderColor: 'danger-400',
        },
        _focus: {
          boxShadow: '0 0 0 2px token(colors.danger-400)',
        },
        _active: {
          backgroundColor: 'danger-300',
          borderColor: 'danger-300',
        },
      },
      'secondary-danger': {
        color: 'danger-500',
        backgroundColor: 'light-900',
        borderColor: 'danger-500',
        _hover: {
          backgroundColor: 'danger-100',
        },
        _focus: {
          boxShadow: '0 0 0 2px token(colors.danger-200)',
        },
        _active: {
          backgroundColor: 'danger-100',
        },
      },
      'primary-info': {
        backgroundColor: 'info-500',
        borderColor: 'info-500',
        _hover: {
          backgroundColor: 'info-400',
          borderColor: 'info-400',
        },
        _focus: {
          boxShadow: '0 0 0 2px token(colors.info-400)',
        },
        _active: {
          backgroundColor: 'info-300',
          borderColor: 'info-300',
        },
      },
      'secondary-info': {
        color: 'info-500',
        backgroundColor: 'light-900',
        borderColor: 'info-500',
        _hover: {
          backgroundColor: 'info-100',
        },
        _focus: {
          boxShadow: '0 0 0 2px token(colors.info-200)',
        },
        _active: {
          backgroundColor: 'info-100',
        },
      },
      ghost: {
        color: 'dark-900',
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        _hover: {
          backgroundColor: 'border',
        },
        _focus: {
          boxShadow: '0 0 0 2px token(colors.dark-100)',
        },
        _active: {
          backgroundColor: 'dark-400',
        },
      },
    },
    size: {
      xxs: {
        height: 16,
        paddingY: 'xxs',
        paddingX: 'xs',
        '&[data-shape="circle"]': {
          width: 16,
        },
        '& > svg.wui-icon, & > i.wui-icon-font': {
          fontWeight: 'initial',
          '&:only-child': {
            width: 16,
            height: 16,
            fontSize: 16,
          },
          '&:not(:only-child)': {
            width: 12,
            height: 12,
            fontSize: 12,
          },
        },
      },
      xs: {
        height: 24,
        paddingY: 'xs',
        paddingX: 'sm',
        '&[data-shape="circle"]': {
          width: 24,
        },
        '& > svg.wui-icon, & > i.wui-icon-font': {
          fontWeight: 'initial',
          '&:only-child': {
            width: 16,
            height: 16,
            fontSize: 16,
          },
          '&:not(:only-child)': {
            width: 12,
            height: 12,
            fontSize: 12,
          },
        },
      },
      sm: {
        height: 32,
        paddingY: 'sm',
        paddingX: 'md',
        '&[data-shape="circle"]': {
          width: 32,
        },
        '& > svg.wui-icon, & > i.wui-icon-font': {
          fontWeight: 'initial',
          '&:only-child': {
            width: 16,
            height: 16,
            fontSize: 16,
          },
          '&:not(:only-child)': {
            width: 16,
            height: 16,
            fontSize: 16,
          },
        },
      },
      md: {
        fontSize: 'sm',
        fontWeight: 'bold',
        height: 40,
        paddingY: 'sm',
        paddingX: 'lg',
        '&[data-shape="circle"]': {
          width: 40,
        },
        '& > svg.wui-icon, & > i.wui-icon-font': {
          fontWeight: 'initial',
          '&:only-child': {
            width: 16,
            height: 16,
            fontSize: 16,
          },
          '&:not(:only-child)': {
            width: 16,
            height: 16,
            fontSize: 16,
          },
        },
      },
      lg: {
        fontSize: 'sm',
        fontWeight: 'bold',
        height: 48,
        paddingY: 'md',
        paddingX: 'xl',
        '&[data-shape="circle"]': {
          width: 48,
        },
        '& > svg.wui-icon, & > i.wui-icon-font': {
          fontWeight: 'initial',
          '&:only-child': {
            width: 24,
            height: 24,
            fontSize: 24,
          },
          '&:not(:only-child)': {
            width: 16,
            height: 16,
            fontSize: 16,
          },
        },
      },
    },
    shape: {
      square: {
        borderRadius: 0,
      },
      circle: {
        borderRadius: '50%',
        padding: 0,
      },
    },
    disabled: {
      true: {
        cursor: 'not-allowed',
        color: 'nude-700',
        backgroundColor: 'nude-400',
        borderColor: 'nude-400',
        _focus: {
          boxShadow: '0 0 0 2px token(colors.nude-200)',
        },
      },
    },
  },
})
