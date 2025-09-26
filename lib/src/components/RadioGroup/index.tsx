import { RadioGroup as AriakitRadioGroup, useRadioStore, useStoreState } from '@ariakit/react'
import { forwardRef } from 'react'

import { classNames } from '@/utils'
import { FieldGroup } from '@old/FieldGroup'
import { Radio } from '@old/Radio'

import radioGroupStyles from './radio-group.module.scss'
import type { RadioGroupOption, RadioGroupProps } from './types'

const cx = classNames(radioGroupStyles)

export const RadioGroup = forwardRef<HTMLFieldSetElement, RadioGroupProps>(
  (
    {
      className,
      dataTestId,
      disabled,
      id,
      label,
      name,
      onChange,
      options = [],
      renderOption: Component = Radio,
      required,
      value,
      ...rest
    },
    ref
  ) => {
    const store = useRadioStore({ defaultValue: value })
    const activeValue = useStoreState(store, 'value')

    const handleChange = (valueSelected: RadioGroupOption['value']) => {
      if (disabled) return

      store.setValue(valueSelected)
      onChange?.(valueSelected)
    }

    return (
      <FieldGroup
        as={AriakitRadioGroup}
        dataTestId={dataTestId}
        label={label}
        mb={0}
        ref={ref}
        required={required}
        {...rest}
      >
        <div className={cx('root', className)}>
          {options.map((option: RadioGroupOption) => {
            return (
              <Component
                checked={option.value === activeValue}
                dataTestId={dataTestId ? `${dataTestId}-${option.value}` : undefined}
                hint={option.hint}
                id={`${id || name}.${option.value}`}
                key={option.value}
                label={option.label}
                name={name}
                onChange={() => handleChange(option.value)}
                value={option.value}
              />
            )
          })}
        </div>
      </FieldGroup>
    )
  }
)

RadioGroup.displayName = 'RadioGroup'
