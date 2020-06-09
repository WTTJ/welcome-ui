import React, { forwardRef, Fragment } from 'react'
import { bool, func, node, oneOf, oneOfType, string } from 'prop-types'
import { Label } from '@welcome-ui/label'
import { Hint } from '@welcome-ui/hint'

// Common
import { COMPONENT_TYPE, DIRECTIONS_TYPE, SIZES_TYPE } from '../../src/utils/propTypes'

// Fields
import { RowContainer } from './layout'
import * as S from './styles'
import { getBaseType, getVariant } from './utils'

export const Field = forwardRef(
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
      pristine,
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
      pristine,
      warning,
      error,
      modified,
      isCheckbox,
      isRadio,
      touched,
      connected
    })
    const hintText = variant ? error || warning : hint
    const isGroup = ['FieldGroup', 'RadioGroup'].includes(baseType)

    const isShowRequired = isRadio ? null : required
    const layout = flexDirection || (isCheckable ? 'row' : 'column')
    const Container = flexDirection === 'row' ? RowContainer : Fragment
    const uniqueId = isRadio ? id : id || name
    const inputRef = ref || React.createRef()

    const handleClick = e => {
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

Field.propTypes /* remove-proptypes */ = {
  checked: bool,
  children: func,
  component: oneOfType(COMPONENT_TYPE).isRequired,
  connected: bool,
  disabled: bool,
  disabledIcon: node,
  error: string,
  flexDirection: oneOf(DIRECTIONS_TYPE),
  hint: string,
  id: string,
  label: string,
  modified: bool,
  name: string.isRequired,
  onChange: func.isRequired,
  onClick: func,
  pristine: bool,
  required: bool,
  size: oneOf(SIZES_TYPE),
  touched: bool,
  type: string,
  warning: string
}

export const IconWrapper = S.IconWrapper
export { getBaseType }
