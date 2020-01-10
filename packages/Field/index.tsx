import React, {
  ComponentType,
  createRef,
  ElementType,
  forwardRef,
  Fragment,
  ReactNode,
  Ref,
  RefObject
} from 'react'
import { bool, elementType, func, node, oneOf, string } from 'prop-types'
import { Label } from '@welcome-ui/label'
import { Hint } from '@welcome-ui/hint'

// Common
import { DIRECTIONS_TYPE, INPUTS_TYPE, SIZES_TYPE } from '../../src/utils/propTypes'

// Fields
import { RowContainer } from './layout'
import * as S from './styles'
import { getBaseType, getVariant, VARIANTS } from './utils'

export interface Props {
  checked?: boolean
  children?: ReactNode
  component: ComponentType
  connected?: boolean
  dataTestId?: string
  disabled?: boolean
  disabledIcon?: ReactNode
  error?: string
  flexDirection?: typeof DIRECTIONS_TYPE[number]
  hint?: string
  id?: string
  label?: string
  name: string
  onChange(event: UIEvent): void
  onClick?(event: MouseEvent): void
  required?: boolean
  size?: typeof SIZES_TYPE[number]
  touched: boolean
  type?: typeof INPUTS_TYPE[number]
  warning?: string
}

export const Field = forwardRef((props: Props, ref: RefObject<HTMLDivElement>) => {
  const {
    checked = false,
    children,
    component: Component,
    dataTestId,
    disabled,
    disabledIcon,
    error,
    flexDirection,
    hint,
    id,
    label,
    name,
    onChange,
    onClick,
    required,
    size = 'lg',
    type,
    warning,
    ...rest
  } = props
  // Return early if no component
  if (!Component) {
    return null
  }

  const baseType: string = getBaseType(type || Component.displayName)
  const variant: typeof VARIANTS[number] = getVariant({ warning, error })
  const hintText: string = variant ? error || warning : hint
  const isRadio: boolean = baseType === 'radio'
  const isCheckbox: boolean = baseType === 'checkbox'
  const isCheckable: boolean = isRadio || isCheckbox
  const isGroup: boolean = ['FieldGroup', 'RadioGroup'].includes(baseType)

  const isShowRequired: boolean = isRadio ? null : required
  const layout: string = flexDirection || (isCheckable ? 'row' : 'column')
  const Container: ComponentType = flexDirection === 'row' ? RowContainer : Fragment
  const uniqueId: string = isRadio ? id : id || name
  const inputRef: Ref<HTMLElement> = ref || createRef<HTMLElement>()

  const handleClick = (e: MouseEvent): void => {
    e.stopPropagation()
    onClick && onClick(e)
    if (isCheckbox) {
      e.target.checked = !e.target.checked
    }
    if (isCheckbox || isGroup) {
      onChange && onChange(e)
    }
  }

  const handleLabelClick = (): void => {
    const input = inputRef.current
    if (input) {
      Component.displayName === 'MarkdownEditor'
        ? input.simpleMde.codemirror.focus()
        : input.focus()
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
})

Field.displayName = 'Field'

Field.propTypes /* remove-proptypes */ = {
  checked: bool,
  children: func,
  component: elementType.isRequired,
  connected: bool,
  disabled: bool,
  disabledIcon: node,
  error: string,
  flexDirection: oneOf(DIRECTIONS_TYPE),
  hint: string,
  id: string,
  label: string,
  name: string.isRequired,
  onChange: func.isRequired,
  onClick: func,
  required: bool,
  size: oneOf(SIZES_TYPE),
  touched: bool,
  type: oneOf(INPUTS_TYPE),
  warning: string
}

export const IconWrapper = S.IconWrapper
export { getBaseType }
