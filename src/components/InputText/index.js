import React, { forwardRef } from 'react'
import { bool, func, node, oneOf, string } from 'prop-types'

import { SIZES_TYPE, VARIANTS_TYPE } from '../../utils'

import * as S from './styles'

export const InputText = forwardRef(
  (
    {
      autoFocus,
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
      variant
    },
    ref
  ) => {
    const input = (
      <S.InputText
        autoFocus={autoFocus}
        disabled={disabled}
        hasIcon={!!icon}
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
      />
    )

    return icon ? (
      <S.Wrapper>
        {input}
        {icon && <S.IconWrapper iconPlacement={iconPlacement}>{icon}</S.IconWrapper>}
      </S.Wrapper>
    ) : (
      input
    )
  }
)

InputText.displayName = 'InputText'

InputText.propTypes = {
  autoFocus: bool,
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
