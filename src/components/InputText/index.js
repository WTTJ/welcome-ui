import React, { forwardRef } from 'react'
import { bool, func, node, oneOf, string } from 'prop-types'

import { SIZES_TYPE, VARIANTS_TYPE } from '../../utils'
import { IconWrapper } from '../Field/styles'

import * as S from './styles'

export const InputText = forwardRef(
  (
    {
      autoFocus,
      connected, // eslint-disable-next-line react/prop-types
      dataTestId,
      disabled,
      icon,
      iconPlacement = 'left',
      name,
      onBlur,
      onChange,
      onFocus,
      onKeyDown,
      placeholder,
      size = 'lg',
      type = 'text',
      value,
      variant,
      ...rest
    },
    ref
  ) => {
    const input = (
      <S.InputText
        autoFocus={autoFocus}
        connected={connected}
        data-testid={dataTestId}
        disabled={disabled}
        icon={!!icon}
        iconPlacement={iconPlacement}
        id={name}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        ref={ref}
        size={size}
        type={type}
        value={value}
        variant={variant}
        {...rest}
      />
    )

    return icon ? (
      <S.Wrapper>
        {input}
        {icon && (
          <IconWrapper iconPlacement={iconPlacement} size={size}>
            {icon}
          </IconWrapper>
        )}
      </S.Wrapper>
    ) : (
      input
    )
  }
)

InputText.displayName = 'InputText'

InputText.propTypes = {
  autoFocus: bool,
  connected: bool,
  disabled: bool,
  icon: node,
  iconPlacement: oneOf(['left', 'right']),
  name: string,
  onBlur: func,
  onChange: func,
  onFocus: func,
  onKeyDown: func,
  placeholder: string,
  size: SIZES_TYPE,
  type: string,
  value: string,
  variant: VARIANTS_TYPE
}
