import { css, th } from '@xstyled/styled-components'

// we want to keep DefaultFieldIconSize in a natural order for documentation
// eslint-disable-next-line perfectionist/sort-union-types
export type DefaultFieldIconSize = 'xs' | 'sm'
// we want to keep Size in a natural order for documentation
// eslint-disable-next-line perfectionist/sort-union-types
export type Size = 'xs' | 'sm' | 'md' | 'lg'

export const FIELD_ICON_SIZE: {
  [key in Size]: DefaultFieldIconSize
} = {
  lg: 'sm',
  md: 'sm',
  sm: 'sm',
  xs: 'xs',
}

export type DefaultFieldStylesProps = Partial<{
  hasIcon?: boolean
  iconPlacement?: 'both' | 'left' | 'right'
  isClearable?: boolean
  size: Size
  transparent?: boolean
  variant: 'danger' | 'success' | 'warning'
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
    ${variant && th(`defaultFields.variants.${variant}`)};
    width: 100%;
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

    &:hover {
      ${!variant && th('defaultFields.hover.default')};
    }

    ${!variant &&
    transparent &&
    css`
      border-color: transparent;
      background-color: transparent;

      &:hover {
        ${th('defaultFields.hover.transparency')};
      }
    `}

    &::placeholder {
      ${th('defaultFields.placeholder')};
    }

    &:focus {
      ${!variant && th('defaultFields.focused.default')};
      ${variant === 'danger' && th('defaultFields.focused.danger')};
      ${variant === 'warning' && th('defaultFields.focused.warning')};
      ${variant === 'success' && th('defaultFields.focused.success')};
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
