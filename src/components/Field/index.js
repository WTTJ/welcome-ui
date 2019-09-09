import React, { forwardRef, Fragment, useEffect, useRef, useState } from 'react'
import { array, arrayOf, bool, func, node, number, object, oneOfType, string } from 'prop-types'

// Common
import { RowContainer } from '../../common/styles/layout'
import { getBaseType, getHintText, getVariant, makeUnique } from '../../utils/'
import { COMPONENT_TYPE, DIRECTIONS_TYPE, INPUTS_TYPE, OPTIONS_TYPE, SIZES_TYPE } from '../../utils'
// Components
import { Label } from '../Label'
import { Hint } from '../Hint'

// Fields
import * as S from './styles'

export const Field = forwardRef(
  (
    {
      autoFocus,
      checked,
      children,
      component: Component,
      connected,
      dataTestid,
      disabled,
      disabledIcon,
      error,
      flexDirection,
      hint,
      id,
      label,
      name,
      onBlur,
      onChange,
      onFocus,
      onKeyDown,
      options,
      placeholder,
      required,
      size = 'lg',
      touched,
      type,
      value,
      warning,
      ...rest
    },
    ref
  ) => {
    // Return early if no component
    if (!Component) {
      return null
    }

    const inputRef = useRef()

    const [uniqueId, setUniqueId] = useState()
    useEffect(() => {
      setUniqueId(makeUnique(isRadio ? value : id || name))
    }, [id, isRadio, name, value])

    const baseType = getBaseType(type || Component.displayName)
    const variant = getVariant({ connected, touched, warning, error })
    const hintText = getHintText({ connected, touched, warning, error, hint })
    const isRadio = baseType === 'radio'
    const isCheckable = ['checkbox', 'radio'].includes(baseType)

    const isShowRequired = isRadio ? null : required
    const layout = flexDirection || (isCheckable ? 'row' : 'column')
    const Container = flexDirection === 'row' ? RowContainer : Fragment

    const handleLabelClick = () => {
      if (isCheckable) return
      const input = inputRef.current
      if (input) {
        Component.displayName === 'MarkdownEditor'
          ? input.simpleMde.codemirror.focus()
          : input.focus()
      }
    }

    const Field = (
      <Component
        autoFocus={autoFocus}
        checked={checked}
        connected
        dataTestid={dataTestid}
        disabled={disabled}
        flexDirection={layout}
        id={uniqueId}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        options={options}
        placeholder={placeholder}
        ref={inputRef || ref}
        required={required}
        size={size}
        type={baseType}
        value={value}
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
        fieldType={Component.type}
        flexDirection={layout}
        size={size}
        {...rest}
      >
        <Container>
          {label && (
            <Label
              disabled={disabled}
              disabledIcon={disabledIcon}
              htmlFor={uniqueId}
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
        {hintText && <Hint variant={variant}>{hintText}</Hint>}
      </S.Field>
    )
  }
)

Field.displayName = 'Field'

Field.propTypes = {
  autoFocus: bool,
  checked: bool,
  children: func,
  component: COMPONENT_TYPE.isRequired,
  connected: bool,
  dataTestid: string,
  disabled: bool,
  disabledIcon: node,
  error: string,
  flexDirection: DIRECTIONS_TYPE,
  hint: string,
  id: string,
  label: string,
  name: string.isRequired,
  onBlur: func,
  onChange: func.isRequired,
  onFocus: func,
  onKeyDown: func,
  options: arrayOf(OPTIONS_TYPE),
  placeholder: string,
  required: bool,
  size: SIZES_TYPE,
  touched: bool,
  type: INPUTS_TYPE,
  value: oneOfType([array, number, object, string]),
  warning: string
}
