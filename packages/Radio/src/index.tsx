import React from 'react'
import { LabelOptions } from '@welcome-ui/label'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'
import { DefaultFieldStylesProps } from '@welcome-ui/utils'

import * as S from './styles'

export type RadioOptions = {
  hint?: string
  label?: string
  onChange?: (event: React.MouseEvent<HTMLLabelElement>) => void
  onClick?: (event: React.MouseEvent<HTMLLabelElement>) => void
  withHint?: boolean
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
      withHint,
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
        withDisabledIcon={false}
        withHint={withHint || !!hint}
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
