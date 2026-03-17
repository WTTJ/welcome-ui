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
    maxLength,
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
  const hintMaxLength = maxLength
    ? `${new Intl.NumberFormat().format(maxLength.count)} / ${new Intl.NumberFormat().format(maxLength.max)}`
    : undefined

  const labelID = useDefaultID(labelProps?.id)
  const hintID = useDefaultID(hintProps?.id)
  const inputId = useDefaultID(id)
  const state: FieldState = useMemo(
    () => ({
      getInputProps(ownProps) {
        const ariaDescribedBy =
          [ownProps['aria-describedby'], (hintText || hintMaxLength) && hintID]
            .filter(Boolean)
            .join(' ') || undefined
        const ariaLabelledBy = [ownProps['aria-labelledby'], labelID].filter(Boolean).join(' ')

        return {
          ...ownProps,
          'aria-describedby': ariaDescribedBy,
          'aria-invalid': variant === 'danger' ? true : undefined,
          'aria-labelledby': ariaLabelledBy,
          disabled,
          id: inputId,
          /**
           * pass maxCount to children for block form
           */
          maxLength: maxLength?.max,
          required,
        }
      },
      hintID,
      labelID,
      variant,
    }),
    [hintID, labelID, variant, hintText, hintMaxLength, disabled, inputId, maxLength?.max, required]
  )

  return (
    <div ref={ref} {...rest} className={cx('root', inline && 'inline', className)}>
      <Label
        disabled={disabled}
        htmlFor={inputId}
        id={labelID}
        required={required}
        variant={variant}
        {...labelProps}
        className={cx('label', hideLabel && 'visuallyHidden', labelProps?.className)}
      >
        {label}
      </Label>
      <FieldContext.Provider value={state}>{children}</FieldContext.Provider>
      {hintText || hintMaxLength ? (
        <Hint className={cx('hint')} id={hintID} variant={variant} {...hintProps}>
          {hintText}
          {hintMaxLength ? <span className={cx('hint-max-length')}>{hintMaxLength}</span> : null}
        </Hint>
      ) : null}
    </div>
  )
})

Field.displayName = 'Field'
