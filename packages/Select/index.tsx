import React, { forwardRef, ReactNode, RefObject, useEffect, useMemo, useState } from 'react'
import { arrayOf, bool, elementType, func, number, oneOf, oneOfType, string } from 'prop-types'
import Downshift from 'downshift'
import { ControllerStateAndHelpers } from 'downshift/typings'
import matchSorter from 'match-sorter'
import kebabCase from 'lodash.kebabcase'
import isEqual from 'lodash.isequal'
import { DownIcon } from '@welcome-ui/icons.down'
import { ClearButton } from '@welcome-ui/clear-button'
import { createEvent } from '@welcome-ui/utils'

import {
  INPUTS_TYPE,
  OPTION_TYPE,
  OPTIONS_TYPE,
  SIZES_TYPE,
  VALUE_TYPE,
  VARIANTS_TYPE
} from '../../src/utils/propTypes'

import { MultipleSelections } from './MultipleSelections'
import * as S from './styles'
import {
  getInputValue,
  getNewOptions,
  getOptionsFromSelected,
  getSpacer,
  getUniqueValue,
  getValuesFromOptions,
  isValueSelected,
  itemToString
} from './utils'

export interface Props {
  /** We need to add `autoComplete` off to avoid select UI issues when is an input */
  autoComplete?: string
  autoFocus?: boolean
  dataTestId?: string
  disabled?: boolean
  icon?: ReactNode
  id?: string
  isClearable?: boolean
  isCreatable?: boolean
  isMultiple?: boolean
  isSearchable?: boolean
  name: string
  onBlur?(e: InputEvent): void
  onChange(value: VALUE_TYPE, e: InputEvent): void
  onClick?(e: InputEvent): void
  onCreate?(value: string, e: InputEvent): void
  onFocus?(e: InputEvent): void
  onKeyDown?(e: InputEvent): void
  onKeyUp?(e: InputEvent): void
  options?: OPTION_TYPE[]
  placeholder?: string
  renderItem?(item: OPTION_TYPE): string
  renderMultiple?(item: object): void
  size?: typeof SIZES_TYPE[number]
  type?: typeof INPUTS_TYPE[number]
  value?: VALUE_TYPE
  variant?: typeof VARIANTS_TYPE[number]
}

export const Select = forwardRef((props: Props, ref: RefObject<HTMLDivElement>) => {
  const {
    autoComplete = 'off',
    autoFocus,
    dataTestId,
    disabled,
    icon,
    id,
    isClearable,
    isCreatable,
    isMultiple,
    isSearchable = isCreatable,
    options: defaultOptions = [],
    name,
    onBlur,
    onChange,
    onClick,
    onCreate,
    onFocus,
    placeholder = 'Choose from…',
    renderItem = itemToString,
    renderMultiple = MultipleSelections,
    size = 'lg',
    value: defaultSelected,
    variant,
    ...rest
  } = props
  const defaultSelecteds = useMemo(() => getOptionsFromSelected(defaultSelected, defaultOptions), [
    defaultSelected,
    defaultOptions
  ])
  const selectedItem = (!isMultiple && defaultSelecteds[0]) || null
  const defaultInputValue = selectedItem ? String(selectedItem.label) : ''

  // We keep 3 things in state:
  // a. selected = currently selected item(s)
  // b. inputValue = text in the select/search box
  // c. options = options in the dropdown
  const [selected, setSelected] = useState(defaultSelecteds)
  const [inputValue, setInputValue] = useState(defaultInputValue)
  const [options, setOptions] = useState(defaultOptions)

  // Autofocus
  useEffect(() => {
    if (autoFocus) {
      ref.current.focus()
    }
  }, [autoFocus, ref])

  // Ensure values are controlled by parent
  useEffect(() => {
    setSelected(defaultSelecteds)
    setInputValue(defaultInputValue)
    setOptions(defaultOptions)
  }, [defaultInputValue, defaultOptions, defaultSelecteds])

  // Update options when searching
  const handleInputChange = (value: number | string): void => {
    // Update
    if (isSearchable && value !== inputValue) {
      const options = matchSorter(defaultOptions, value, { keys: ['label'] })
      setInputValue(String(value))
      setOptions(options)
    }
  }

  // Send event to parent when value(s) changes
  const handleChange = (options: OPTION_TYPE[]): void => {
    const values = getValuesFromOptions(options, defaultOptions)
    const value = isMultiple ? values : values[0]
    const option = isMultiple ? options : options[0]
    const event = createEvent({ name, value: option })

    onChange && onChange(value, event)

    // If there are newly-created options, call `onCreate`
    if (isCreatable) {
      const newOptions = getNewOptions(options, defaultOptions)
      if (newOptions.length) {
        onCreate && onCreate(String(newOptions[0].label), event)
      }
    }
  }

  // Update internal state when clicking/adding a select item
  const handleSelect = (option): void => {
    let newItems
    let isClearInput

    if (!option) {
      // If removing option
      newItems = isMultiple ? selected : []
      isClearInput = true
    } else {
      // If adding option
      newItems = isMultiple ? getUniqueValue(option, selected) : [option]
      isClearInput = isMultiple
    }

    isClearInput && setInputValue('')
    setOptions(defaultOptions)
    setSelected(newItems)
    handleChange(newItems)
  }

  const handleRemove = (value): void => {
    const newItems: OPTION_TYPE[] = selected.filter(item => item.value !== value)
    setSelected(newItems)
    handleChange(newItems)
  }

  const handleOuterClick = (e: ControllerStateAndHelpers<OPTION_TYPE>): void => {
    // Reset input value if not selecting a new item
    if (isMultiple && e.selectedItem) {
      setInputValue('')
    } else if (isSearchable && e.selectedItem) {
      setInputValue(String(e.selectedItem.label))
    }
    setOptions(defaultOptions)
  }

  const spacer = getSpacer(defaultOptions)

  const inputContent = getInputValue({
    inputValue,
    isMultiple,
    isSearchable,
    options: defaultOptions,
    renderItem
  })

  return (
    <Downshift
      inputValue={isSearchable ? inputContent : ''}
      itemToString={itemToString}
      onInputValueChange={handleInputChange}
      onOuterClick={handleOuterClick}
      onSelect={handleSelect}
      selectedItem={selectedItem}
    >
      {({
        clearSelection,
        getInputProps,
        getItemProps,
        getMenuProps,
        getRootProps,
        getToggleButtonProps,
        highlightedIndex,
        isOpen,
        toggleMenu
      }): ReactNode => {
        const isShowCreate = !!(isCreatable && inputValue && !isValueSelected(inputValue, selected))
        const isShowMenu = isOpen && (options.length || isShowCreate)
        const isShowDeleteIcon = isClearable && inputValue

        const DeleteIcon = (
          <S.DropDownIndicator as="div" size={size}>
            <ClearButton onClick={clearSelection} />
          </S.DropDownIndicator>
        )
        const ArrowIcon = (
          <S.DropDownIndicator
            disabled={disabled}
            isOpen={isOpen}
            size={size}
            tabIndex={-1}
            {...getToggleButtonProps()}
          >
            <DownIcon color="nude.800" size="xs" />
          </S.DropDownIndicator>
        )

        const handleInputClick = (e: InputEvent): void => {
          onClick && onClick(e)
          toggleMenu()
        }

        const rootProps = getRootProps({ refKey: 'innerRef', ...rest })
        const inputProps = getInputProps({
          autoComplete,
          autoFocus,
          'data-spacer': spacer || placeholder,
          'data-testid': dataTestId,
          disabled,
          hasIcon: !!icon,
          id,
          name,
          onBlur,
          onClick: handleInputClick,
          onFocus,
          placeholder,
          ref,
          size,
          tabIndex: 0,
          variant: isOpen ? 'focused' : variant,
          ...rest
        })

        return (
          <S.Wrapper {...rootProps}>
            <S.InputWrapper>
              {isSearchable ? (
                <S.Input as="input" type="text" {...inputProps} />
              ) : (
                <S.Input {...inputProps}>{inputContent}</S.Input>
              )}
              {icon && <S.Icon size={size}>{icon}</S.Icon>}
              <S.Indicators size={size}>
                {isShowDeleteIcon && DeleteIcon}
                {ArrowIcon}
              </S.Indicators>
            </S.InputWrapper>
            {isShowMenu && (
              <S.Menu {...getMenuProps()}>
                {options.map((item, index) => {
                  const itemProps = getItemProps({
                    index,
                    isSelected: !isMultiple && isEqual(selectedItem, item),
                    item
                  })
                  return (
                    <S.Item
                      key={item.value}
                      isExisting={isMultiple && isValueSelected(item.value, selected)}
                      isHighlighted={highlightedIndex === index}
                      {...itemProps}
                    >
                      {renderItem(item)}
                    </S.Item>
                  )
                })}
                {isShowCreate && inputValue.length && (
                  <S.Item
                    key="add"
                    {...getItemProps({
                      index: options.length,
                      item: {
                        value: kebabCase(inputValue),
                        label: inputValue
                      }
                    })}
                    isHighlighted={highlightedIndex === options.length}
                  >
                    {`Create "${inputValue}"`}
                  </S.Item>
                )}
              </S.Menu>
            )}
            {isMultiple && renderMultiple(selected, handleRemove)}
          </S.Wrapper>
        )
      }}
    </Downshift>
  )
})

Select.displayName = 'Select'

Select.propTypes /* remove-proptypes */ = {
  /** We need to add `autoComplete` off to avoid select UI issues when is an input */
  autoComplete: string,
  autoFocus: bool,
  disabled: bool,
  icon: elementType,
  id: string,
  isClearable: bool,
  isCreatable: bool,
  isMultiple: bool,
  isSearchable: bool,
  name: string,
  onBlur: func,
  onChange: func,
  onClick: func,
  onCreate: func,
  onFocus: func,
  onKeyDown: func,
  onKeyUp: func,
  /** [{
    label: `string` | `number`,
    value: `string` | `number`
  }] */
  options: arrayOf(OPTIONS_TYPE),
  placeholder: string,
  renderItem: func,
  renderMultiple: func,
  size: oneOf(SIZES_TYPE),
  type: oneOf(INPUTS_TYPE),
  value: oneOfType([
    OPTIONS_TYPE,
    arrayOf(OPTIONS_TYPE),
    string,
    arrayOf(string),
    number,
    arrayOf(number)
  ]),
  variant: oneOf(VARIANTS_TYPE)
}

export const StyledSelect = S.Wrapper
