import { RadioGroup as AriakitRadioGroup, useRadioStore, useStoreState } from '@ariakit/react'
import type { Ref } from 'react'
import { forwardRef } from 'react'

import { FieldGroup } from '@/components/FieldGroup'
import { Radio } from '@/components/Radio'
import { classNames } from '@/utils'

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
        data-tesid={dataTestId}
        disabled={disabled}
        label={label}
        ref={ref as unknown as Ref<HTMLDivElement>}
        required={required}
      >
        <div className={cx('root', className)}>
          {options.map((option: RadioGroupOption) => {
            return (
              <Component
                checked={option.value === activeValue}
                dataTestId={dataTestId ? `${dataTestId}-${option.value}` : undefined}
                disabled={disabled}
                hint={option.hint}
                id={`${id || name}.${option.value}`}
                key={option.value}
                label={option.label}
                name={name}
                onChange={() => handleChange(option.value)}
                value={option.value}
                {...rest}
              />
            )
          })}
        </div>
      </FieldGroup>
    )
  }
)
