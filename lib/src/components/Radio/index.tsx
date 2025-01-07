import React from 'react'

import { Hint } from '../Hint'
import { CreateWuiProps, forwardRef } from '../System'
import { LabelOptions } from '../Label'
import { DefaultFieldStylesProps } from '../../utils/field-styles'

import * as S from './styles'

export type RadioOptions = {
  hint?: string
  label?: string
  onChange?: (event: React.MouseEvent<HTMLLabelElement>) => void
  onClick?: (event: React.MouseEvent<HTMLLabelElement>) => void
} & DefaultFieldStylesProps

export type RadioProps = CreateWuiProps<'input', RadioOptions & LabelOptions>

export const Radio = forwardRef<'input', RadioProps>(
  (
    {
      dataTestId,
      disabled,
      disabledIcon,
      flexDirection,
      hint,
      label,
      maxWidth,
      onChange,
      onClick,
      variant,
      ...rest
    },
    ref
  ) => {
    const handleClick = (event: React.MouseEvent<HTMLLabelElement>) => {
      event.stopPropagation()
      onClick && onClick(event)
      onChange && onChange(event)
    }

    return (
      <S.Label
        alignItems="flex-start"
        checkableField
        disabled={disabled}
        disabledIcon={disabledIcon}
        flexDirection="column"
        maxWidth={maxWidth}
        onClick={handleClick}
        variant={variant}
        withDisabledIcon={false}
      >
        <S.Wrapper flexDirection={flexDirection}>
          <S.Input>
            <S.Radio
              data-testid={dataTestId}
              disabled={disabled}
              label={label}
              ref={ref}
              variant={variant}
              {...rest}
            />
          </S.Input>
          <S.LabelWithHint>
            <div data-testid={dataTestId ? `${dataTestId}-label` : undefined}>{label}</div>
            {hint && (
              <Hint data-testid={dataTestId ? `${dataTestId}-hint` : undefined} mt="0">
                {hint}
              </Hint>
            )}
          </S.LabelWithHint>
        </S.Wrapper>
      </S.Label>
    )
  }
)

Radio.displayName = 'Radio'
