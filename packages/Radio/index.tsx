import React, { forwardRef } from 'react'
import { LabelProps } from '@welcome-ui/label'
import { WuiProps } from '@welcome-ui/system'

import * as S from './styles'

export interface RadioOptions {
  hint?: string
  label: string
  onChange?: (event: React.ChangeEvent<HTMLLabelElement>) => void
  onClick?: (event: React.MouseEvent<HTMLLabelElement>) => void
}

export type RadioProps = RadioOptions & LabelProps & WuiProps

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
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
    function handleClick(event: React.MouseEvent<HTMLLabelElement>) {
      event.stopPropagation()
      onClick && onClick(event)
      onChange && onChange(event)
    }

    return (
      <S.Label
        checkableField
        disabled={disabled}
        disabledIcon={disabledIcon}
        flexDirection="column"
        maxWidth={maxWidth}
        onClick={handleClick}
        variant={variant}
        withHint={!!hint}
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
          <div>{label}</div>
        </S.Wrapper>
        {hint && <S.Hint>{hint}</S.Hint>}
      </S.Label>
    )
  }
)

Radio.displayName = 'Radio'
