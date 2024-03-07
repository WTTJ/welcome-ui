import React from 'react'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'
import { DefaultFieldStylesProps } from '@welcome-ui/utils'
import { Button } from '@welcome-ui/button'
import * as Ariakit from '@ariakit/react'

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
        borderColor={!checked && 'dark-100'}
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
