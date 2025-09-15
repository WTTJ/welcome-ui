import React from 'react'

import { Hint } from '@old/Hint'
import type { LabelOptions } from '@old/Label'
import type { CreateWuiProps } from '@old/System'
import { forwardRef } from '@old/System'

import type { DefaultFieldStylesProps } from '../../../utils/field-styles'

import * as S from './styles'

export type RadioOptions = DefaultFieldStylesProps & {
  hint?: string
  label?: string
  onChange?: (event: React.MouseEvent<HTMLLabelElement>) => void
  onClick?: (event: React.MouseEvent<HTMLLabelElement>) => void
}

export type RadioProps = CreateWuiProps<'input', LabelOptions & RadioOptions>

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
            {hint ? (
              <Hint data-testid={dataTestId ? `${dataTestId}-hint` : undefined} mt="0">
                {hint}
              </Hint>
            ) : null}
          </S.LabelWithHint>
        </S.Wrapper>
      </S.Label>
    )
  }
)

Radio.displayName = 'Radio'
