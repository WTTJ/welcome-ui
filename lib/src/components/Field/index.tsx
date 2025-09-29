import { createContext, useContext, useId, useMemo } from 'react'

import { Hint } from '@/components/Hint'
import { Label } from '@/components/Label'
import { classNames, forwardRefWithAs } from '@/utils'

import fieldStyles from './field.module.scss'
import type { FieldOptions, FieldState, FieldStateVariant } from './types'

const cx = classNames(fieldStyles)

export const FieldContext = createContext<FieldState>({
  getInputProps: props => props,
  hintID: '',
  labelID: '',
  variant: undefined,
})

export function useDefaultID(defaultID?: string) {
  const generatedID = useId()
  return defaultID || generatedID
}

export function useField() {
  return useContext(FieldContext)
}

export const Field = forwardRefWithAs<FieldOptions, 'div'>((props, ref) => {
  const {
    children,
    className,
    disabled,
    error,
    hideLabel,
    hint,
    hintProps,
    id,
    inline,
    label,
    labelProps,
    required,
    success,
    warning,
    ...rest
  } = props

  const variant: FieldStateVariant = error
    ? 'danger'
    : success
      ? 'success'
      : warning
        ? 'warning'
        : undefined

  const hintText = error ?? warning ?? success ?? hint

  const labelID = useDefaultID(labelProps?.id)
  const hintID = useDefaultID(hintProps?.id)
  const inputId = useDefaultID(id)

  const state: FieldState = useMemo(
    () => ({
      getInputProps(ownProps) {
        const ariaDescribedBy =
          [ownProps['aria-describedby'], hintText && hintID].filter(Boolean).join(' ') || undefined
        const ariaLabelledBy = [ownProps['aria-labelledby'], labelID].filter(Boolean).join(' ')

        return {
          ...ownProps,
          'aria-describedby': ariaDescribedBy,
          'aria-invalid': variant === 'danger' ? true : undefined,
          'aria-labelledby': ariaLabelledBy,
          disabled,
          id: inputId,
          required,
        }
      },
      hintID,
      labelID,
      variant,
    }),
    [hintID, labelID, variant, hintText, disabled, inputId, required]
  )

  return (
    <FieldContext.Provider value={state}>
      <div ref={ref} {...rest} className={cx('root', inline && 'inline', className)}>
        <Label
          className={cx('label', hideLabel && 'visuallyHidden')}
          disabled={disabled}
          htmlFor={inputId}
          id={labelID}
          required={required}
          variant={variant}
          {...labelProps}
        >
          {label}
        </Label>
        <div className={cx('input')}>{children}</div>
        {hintText ? (
          <Hint className={cx('hint')} id={hintID} variant={variant} {...hintProps}>
            {hintText}
          </Hint>
        ) : null}
      </div>
    </FieldContext.Provider>
  )
})

Field.displayName = 'Field'
