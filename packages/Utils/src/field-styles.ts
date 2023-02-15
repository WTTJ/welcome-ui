import { css, th } from '@xstyled/styled-components'

import { getVariantColor, Variant } from './variants'

type FieldIconSizes = {
  xs: 'xs'
  sm: 'sm'
  md: 'sm'
  lg: 'sm'
}

export const FIELD_ICON_SIZE: FieldIconSizes = {
  xs: 'xs',
  sm: 'sm',
  md: 'sm',
  lg: 'sm',
}

export type Size = 'xs' | 'sm' | 'md' | 'lg'
export type FieldIconSize = 'xs' | 'sm'
export type DefaultFieldStylesProps = Partial<{
  size: Size
  variant: Variant
  transparent?: boolean
  isClearable?: boolean
  hasIcon?: boolean
  iconPlacement?: 'right' | 'left' | 'both'
}>
type DefaultFieldStyles = (args: DefaultFieldStylesProps) => ReturnType<typeof css>

export const defaultFieldStyles: DefaultFieldStyles = ({
  iconPlacement,
  isClearable,
  size,
  transparent,
  variant,
}) => {
  const iconSize = FIELD_ICON_SIZE[size]

  return css`
    ${th('defaultFields.default')};
    width: 100%;
    border-color: ${getVariantColor(variant)};
    transition: medium;
    appearance: none;
    ${size && th(`defaultFields.sizes.${size}`)};

    ${
      /* left icon or both */
      (iconPlacement === 'left' || iconPlacement === 'both') &&
      css`
        padding-left: calc(
          ${th(`defaultFields.sizes.${size}.paddingLeft`)} + ${th(`icons.${iconSize}`)} +
            ${th('space.sm')}
        );
      `
    };

    ${
      /* is clearable or right icon */
      (isClearable || iconPlacement === 'right' || iconPlacement === 'both') &&
      css`
        padding-right: calc(
          ${th(`defaultFields.sizes.${size}.paddingLeft`)} + ${th(`icons.${iconSize}`)} +
            ${th('space.sm')}
        );
      `
    };

    ${
      /* is clearable and got a right/both icon */
      isClearable &&
      (iconPlacement === 'right' || iconPlacement === 'both') &&
      css`
        padding-right: calc(
          ${th(`defaultFields.sizes.${size}.paddingLeft`)} + ${th(`icons.${iconSize}`)} +
            ${th(`icons.${iconSize}`)} + ${th('space.sm')} + ${th('space.sm')}
        );
      `
    };

    ${!variant &&
    transparent &&
    css`
      border-color: transparent;
      background-color: transparent;
    `}

    &::placeholder {
      ${th('defaultFields.placeholder')};
    }

    &:focus {
      ${th('defaultFields.focused.default')};
      ${variant === 'error' && th('defaultFields.focused.error')};
      ${variant === 'warning' && th('defaultFields.focused.warning')};
      ${variant === 'success' && th('defaultFields.focused.success')};
      ${variant === 'info' && th('defaultFields.focused.info')};
    }

    &[disabled] {
      ${th('defaultFields.disabled')};
    }

    &:invalid,
    &:-moz-submit-invalid,
    &:-moz-ui-invalid {
      box-shadow: none;
    }
  `
}
