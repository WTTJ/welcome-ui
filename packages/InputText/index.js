import React, { forwardRef } from 'react'
import { bool, func, node, oneOf, string } from 'prop-types'
import { IconWrapper } from '@welcome-ui/field'
import { ClearButton } from '@welcome-ui/clear-button'
import { createEvent } from '@welcome-ui/utils'

import { SIZES_TYPE, VARIANTS_TYPE } from '../../utils/propTypes'

import * as S from './styles'

export const InputText = forwardRef(
  (
    {
      autoFocus,
      connected,
      dataTestId,
      disabled,
      icon,
      iconPlacement = 'left',
      isClearable,
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
    const handleReset = () => {
      const event = createEvent({ name, value: '' })
      onChange && onChange(event)
    }

    return (
      <S.Wrapper>
        <S.InputText
          autoFocus={autoFocus}
          connected={connected}
          data-testid={dataTestId}
          disabled={disabled}
          icon={!!icon}
          iconPlacement={iconPlacement}
          id={name}
          isClearable={isClearable}
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
        {icon && (
          <IconWrapper iconPlacement={iconPlacement} size={size}>
            {icon}
          </IconWrapper>
        )}
        {isClearable && value && (
          <IconWrapper iconPlacement="right" size={size}>
            <ClearButton onClick={handleReset} />
          </IconWrapper>
        )}
      </S.Wrapper>
    )
  }
)

InputText.displayName = 'InputText'

InputText.propTypes /* remove-proptypes */ = {
  autoFocus: bool,
  connected: bool,
  disabled: bool,
  icon: node,
  iconPlacement: oneOf(['left', 'right']),
  isClearable: bool,
  name: string,
  onBlur: func,
  onChange: func,
  onFocus: func,
  onKeyDown: func,
  placeholder: string,
  size: oneOf(SIZES_TYPE),
  type: string,
  value: string,
  variant: oneOf(VARIANTS_TYPE)
}
