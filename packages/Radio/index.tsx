import React, { forwardRef } from 'react'
import { LabelOptions } from '@welcome-ui/label'
import { CreateWuiProps } from '@welcome-ui/system'
import { Radio as ReakitRadio } from 'reakit/Radio'

import * as S from './styles'

export interface RadioOptions {
  hint?: string
  label: string
  onChange?: (event: React.MouseEvent<HTMLLabelElement>) => void
  onClick?: (event: React.MouseEvent<HTMLLabelElement>) => void
}

export type RadioProps = CreateWuiProps<typeof ReakitRadio, RadioOptions & LabelOptions>

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
    const handleClick = (event: React.MouseEvent<HTMLLabelElement>) => {
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
