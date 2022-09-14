import styled, { css, system, th } from '@xstyled/styled-components'
import { Button as ReakitButton } from 'reakit/Button'
import { shouldForwardProp, styled as stitches } from '@welcome-ui/system'
import { hexToRGBA, hideFocusRingsDataAttribute } from '@welcome-ui/utils'

import { ButtonOptions } from './index'

const shapeStyles = (size: ButtonOptions['size'], shape: ButtonOptions['shape'] = 'square') => css`
  width: ${th(`buttons.sizes.${size}.height`)};
  padding: 0;
  ${shape === 'circle' &&
  css`
    border-radius: ${th(`buttons.sizes.${size}.height`)};
  `};
`

export const Button = styled(ReakitButton).withConfig({ shouldForwardProp })<ButtonOptions>(
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

    & > svg:only-child {
      width: ${th(`buttons.icon.only.${size}`)};
      height: ${th(`buttons.icon.only.${size}`)};
    }

    & > svg:not(:only-child) {
      width: ${th(`buttons.icon.default.${size}`)};
      height: ${th(`buttons.icon.default.${size}`)};
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

const DEFAULT_FONT_SIZE = 16
const toRem = (px: number) => `${px / DEFAULT_FONT_SIZE}rem`
const focus = (color?: string) => `0 0 0 3px ${hexToRGBA(color, 0.5)}`

export const StitchesButton = stitches(ReakitButton, {
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
  borderWidth: '$sm',
  borderStyle: 'solid',
  appearance: 'none',
  overflow: 'hidden',
  transition: '$medium',
  color: '$light-900',
  fontWeight: '$bold',
  letterSpacing: 0,
  borderRadius: '$md',
  '&[disabled]': {
    cursor: 'not-allowed',
  },
  '& > *:not(:only-child):not(:last-child)': {
    marginRight: '$sm',
  },
  variants: {
    variant: {
      primary: {
        color: '$dark-900',
        backgroundColor: '$primary-500',
        borderColor: '$primary-500',
        '&:hover': {
          backgroundColor: '$primary-200',
          borderColor: '$primary-200',
        },
        '&:focus': {
          boxShadow: focus(),
        },
        '&:active': {
          backgroundColor: '$primary-100',
          borderColor: '$primary-100',
        },
      },
      secondary: {
        backgroundColor: '$dark-900',
        borderColor: '$dark-900',
        '&:hover': {
          backgroundColor: '$dark-700',
          borderColor: 'transparent',
        },
        '&:focus': {
          boxShadow: focus('$dark-400'),
        },
        '&:active': {
          backgroundColor: '$dark-200',
          borderColor: '$dark-200',
        },
      },
      tertiary: {
        color: '$dark-900',
        backgroundColor: 'transparent',
        borderColor: '$dark-900',
        '&:hover': {
          backgroundColor: '$dark-100',
        },
        '&:focus': {
          boxShadow: focus('$dark-900'),
        },
        '&:active': {
          backgroundColor: '$dark-400',
        },
      },
      'primary-success': {
        backgroundColor: '$success-500',
        borderColor: '$success-500',
        '&:hover': {
          backgroundColor: '$success-400',
          borderColor: '$success-400',
        },
        '&:focus': {
          boxShadow: focus('$success-500'),
        },
        '&:active': {
          backgroundColor: '$success-300',
          borderColor: '$success-300',
        },
      },
      'secondary-success': {
        color: '$success-500',
        backgroundColor: '$light-900',
        borderColor: '$success-500',
        '&:hover': {
          backgroundColor: '$success-100',
        },
        '&:focus': {
          boxShadow: focus('$success-500'),
        },
        '&:active': {
          backgroundColor: '$success-100',
        },
      },
      'primary-warning': {
        backgroundColor: '$warning-500',
        borderColor: '$warning-500',
        '&:hover': {
          backgroundColor: '$warning-400',
          borderColor: '$warning-400',
        },
        '&:focus': {
          boxShadow: focus('$warning-500'),
        },
        '&:active': {
          backgroundColor: '$warning-300',
          borderColor: '$warning-300',
        },
      },
      'secondary-warning': {
        color: '$warning-500',
        backgroundColor: '$light-900',
        borderColor: '$warning-500',
        '&:hover': {
          backgroundColor: '$warning-100',
        },
        '&:focus': {
          boxShadow: focus('$warning-500'),
        },
        '&:active': {
          backgroundColor: '$warning-100',
        },
      },
      'primary-danger': {
        backgroundColor: '$danger-500',
        borderColor: '$danger-500',
        '&:hover': {
          backgroundColor: '$danger-400',
          borderColor: '$danger-400',
        },
        '&:focus': {
          boxShadow: focus('$danger-500'),
        },
        '&:active': {
          backgroundColor: '$danger-300',
          borderColor: '$danger-300',
        },
      },
      'secondary-danger': {
        color: '$danger-500',
        backgroundColor: '$light-900',
        borderColor: '$danger-500',
        '&:hover': {
          backgroundColor: '$danger-100',
        },
        '&:focus': {
          boxShadow: focus('$danger-500'),
        },
        '&:active': {
          backgroundColor: '$danger-500',
        },
      },
      'primary-info': {
        backgroundColor: '$info-500',
        borderColor: '$info-500',
        '&:hover': {
          backgroundColor: '$info-400',
          borderColor: '$info-400',
        },
        '&:focus': {
          boxShadow: focus('$info-500'),
        },
        '&:active': {
          backgroundColor: '$info-300',
          borderColor: '$info-300',
        },
      },
      'secondary-info': {
        color: '$info-500',
        backgroundColor: '$light-900',
        borderColor: '$info-500',
        '&:hover': {
          backgroundColor: '$info-100',
        },
        '&:focus': {
          boxShadow: focus('$info-500'),
        },
        '&:active': {
          backgroundColor: '$info-500',
        },
      },
      ghost: {
        color: '$dark-900',
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        '&:hover': {
          backgroundColor: '$border',
        },
        '&:focus': {
          boxShadow: focus('$dark-100'),
        },
        '&:active': {
          backgroundColor: '$dark-400',
        },
      },
      disabled: {
        color: '$nude-700',
        backgroundColor: '$nude-400',
        borderColor: '$nude-400',
      },
    },
    size: {
      xs: {
        height: toRem(24),
        padding: '$xs $sm',
        '& > svg:only-child': {
          width: toRem(16),
          height: toRem(16),
        },
        '& > svg:not(:only-child)': {
          width: toRem(12),
          height: toRem(12),
        },
      },
      sm: {
        height: toRem(32),
        padding: '$sm $md',
        '& > svg:only-child': {
          width: toRem(16),
          height: toRem(16),
        },
        '& > svg:not(:only-child)': {
          width: toRem(16),
          height: toRem(16),
        },
      },
      md: {
        fontWeight: '$bold',
        height: toRem(40),
        padding: '$sm $lg',
        '& > svg:only-child': {
          width: toRem(16),
          height: toRem(16),
        },
        '& > svg:not(:only-child)': {
          width: toRem(16),
          height: toRem(16),
        },
      },
      lg: {
        fontWeight: '$bold',
        height: toRem(48),
        padding: '$md $xl',
        '& > svg:only-child': {
          width: toRem(24),
          height: toRem(24),
        },
        '& > svg:not(:only-child)': {
          width: toRem(16),
          height: toRem(16),
        },
      },
    },
    shape: {
      square: {
        padding: 0,
      },
      circle: {
        padding: 0,
        borderRadius: '50%', // todo get heigth value ?
      },
    },
  },
})
