import React, { forwardRef, Fragment } from 'react'
import { Label } from '@welcome-ui/label'
import { Hint } from '@welcome-ui/hint'
import SimpleMDEEditor from 'react-simplemde-editor'

// Fields
import { RowContainer } from './layout'
import * as S from './styles'
import { getBaseType, getVariant, VariantReturn } from './utils'

export type flexDirection = 'row' | 'container' | 'column'

export type Size = 'sm' | 'md' | 'lg'

export interface FieldProps {
  checked?: boolean
  children?: React.ReactNode
  component: React.ForwardRefRenderFunction<HTMLInputElement, Omit<FieldProps, 'component'>>
  connected?: boolean
  dataTestId?: string
  disabled?: boolean
  disabledIcon?: JSX.Element
  error?: string
  flexDirection?: flexDirection
  hint?: string
  id?: string
  label?: string
  modified?: boolean
  name: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
  size?: Size
  touched?: boolean
  type?: string
  warning?: string
  required?: boolean
  ref: React.ForwardedRef<HTMLDivElement>
  variant?: VariantReturn
}

export const Field = forwardRef<HTMLInputElement, FieldProps>(
  (
    {
      checked,
      children,
      component: Component,
      connected,
      dataTestId,
      disabled,
      disabledIcon,
      error,
      flexDirection,
      hint,
      id,
      label,
      modified,
      name,
      onChange,
      onClick,
      required,
      size = 'lg',
      touched,
      type,
      warning,
      ...rest
    },
    ref
  ) => {
    // Return early if no component
    if (!Component) {
      return null
    }

    const baseType = getBaseType(type || Component.displayName)
    const isRadio = baseType === 'radio'
    const isToggle = Component.displayName === 'Toggle'
    const isCheckbox = baseType === 'checkbox'
    const isCheckable = isRadio || isCheckbox
    const variant = getVariant({
      warning,
      error,
      modified,
      isCheckbox,
      isRadio,
      touched,
      connected,
    })
    const hintText = variant ? error || warning : hint
    const isGroup = ['FieldGroup', 'RadioGroup'].includes(baseType)

    const isShowRequired = isRadio ? null : required
    const layout = flexDirection || (isCheckable ? 'row' : 'column')
    const Container = flexDirection === 'row' ? RowContainer : Fragment
    const uniqueId = isRadio ? id : id || name
    const inputRef = ref || React.createRef()

    const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.stopPropagation()
      onClick && onClick(e)
      if (isCheckbox) {
        e.target.checked = !e.target.checked
      }
      if (isCheckbox || isGroup) {
        onChange && onChange(e)
      }
    }

    const handleLabelClick = () => {
      const input = (inputRef as React.MutableRefObject<unknown>).current
      if (input) {
        Component.displayName === 'MarkdownEditor'
          ? (input as SimpleMDEEditor).simpleMde.codemirror.focus()
          : (input as HTMLInputElement).focus()
      }
    }

    const Field = (
      <Component
        checked={checked}
        connected
        dataTestId={dataTestId}
        disabled={disabled}
        flexDirection={layout}
        id={uniqueId}
        label={label}
        name={name}
        onChange={onChange}
        onClick={handleClick}
        ref={inputRef}
        required={required}
        size={size}
        type={baseType}
        variant={variant}
        {...rest}
      >
        {children}
      </Component>
    )

    return (
      <S.Field
        checkableField={isCheckable}
        checked={checked}
        flexDirection={layout}
        size={size}
        {...rest}
      >
        <Container>
          {label && !isGroup && (
            <Label
              checkableField={isCheckable}
              disabled={disabled}
              disabledIcon={disabledIcon}
              htmlFor={isCheckable ? null : uniqueId}
              onClick={handleLabelClick}
              required={isShowRequired}
              variant={variant}
              withDisabledIcon={!isToggle}
            >
              {isCheckable && <S.Input>{Field}</S.Input>}
              <S.Content>{label}</S.Content>
            </Label>
          )}
          {!isCheckable && Field}
          {!label && isCheckable && Field}
        </Container>
        {hintText && (
          <Hint checkableField={isCheckable} variant={variant}>
            {hintText}
          </Hint>
        )}
      </S.Field>
    )
  }
)

Field.displayName = 'Field'

export const IconWrapper = S.IconWrapper
export { getBaseType }
