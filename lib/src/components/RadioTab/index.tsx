import React from 'react'
import * as Ariakit from '@ariakit/react'

import { Button } from '../Button'
import { CreateWuiProps, forwardRef } from '../System'
import { DefaultFieldStylesProps } from '../../utils/field-styles'

import * as S from './styles'

export interface RadioTabsOptions extends DefaultFieldStylesProps {
  checked?: boolean
  disabled?: boolean
  disabledIcon?: React.ReactElement
  label: React.ReactElement
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  value: Ariakit.RadioStoreState['value']
}

export type RadioTabsProps = CreateWuiProps<'input', RadioTabsOptions>

export const RadioTab = forwardRef<'input', RadioTabsProps>(
  ({ checked, dataTestId, disabled, id, label, onChange, value }, ref) => {
    return (
      <Button
        as="label"
        borderColor={!checked && 'neutral-30'}
        className="label"
        dataTestId={dataTestId}
        disabled={disabled}
        ref={ref}
        variant={checked ? 'primary' : 'ghost'}
      >
        <S.Radio
          checked={checked}
          data-testid={dataTestId ? `${dataTestId}-input` : undefined}
          disabled={disabled}
          id={id}
          onChange={onChange}
          value={value}
        />
        {label}
      </Button>
    )
  }
)

RadioTab.displayName = 'RadioTab'
