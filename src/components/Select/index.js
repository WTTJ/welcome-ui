import React, { forwardRef, useCallback, useEffect, useMemo, useState } from 'react'
import { arrayOf, bool, func, oneOfType, string } from 'prop-types'
import Downshift from 'downshift'
import matchSorter from 'match-sorter'
import kebabCase from 'lodash.kebabcase'
import uniqBy from 'lodash.uniqby'
import isEqual from 'lodash.isequal'

import { COMPONENT_TYPE, INPUTS_TYPE, OPTIONS_TYPE, SIZES_TYPE, VARIANTS_TYPE } from '../../utils'
import { Icon } from '../Icon'
import { createEvent } from '../../utils/'

import { MultipleSelections as defaultRenderMultiple } from './MultipleSelections'
import * as S from './styles'

// Helpers
const EMPTY = ''
const itemToString = item => (item ? item.label : EMPTY)
const getUniqueValue = (item, values) => uniqBy([...values, item], item => item.value)
const isValueExisting = (value, values) =>
  values.find(item => kebabCase(item.value) === kebabCase(value))
const defaultRenderItem = option => (option ? option.label : EMPTY)
const findOption = (value, options = []) => {
  const option = options.find(
    option => option.label === (value.label || value) || option.value === (value.value || value)
  )
  // Create the option if it doesn't exist
  return option || { value: kebabCase(value), label: value }
}
const optionFromValue = (options, value) => {
  if (!value) {
    return []
  } else if (Array.isArray(value)) {
    return value.map(value => findOption(value, options))
  } else {
    return [findOption(value, options)]
  }
}

export const Select = forwardRef(
  (
    {
      autoFocus,
      dataTestId,
      disabled,
      icon,
      id,
      isCreatable,
      isMultiple,
      isSearchable = isCreatable || isSearchable,
      options = [],
      name,
      onBlur,
      onChange,
      onCreate,
      onFocus,
      onKeyDown,
      placeholder = 'Choose from…',
      renderItem = defaultRenderItem,
      renderMultiple = defaultRenderMultiple,
      required,
      size = 'lg',
      type,
      value: defaultValue,
      variant,
      ...rest
    },
    ref
  ) => {
    const getOptionsFromValues = useCallback(value => optionFromValue(options, value), [options])
    const defaultOptions = useMemo(() => getOptionsFromValues(defaultValue), [defaultValue])
    const selectedItem = (!isMultiple && defaultOptions && defaultOptions[0]) || null
    const defaultInputValue = selectedItem ? defaultOptions[0].label : EMPTY
    // Values will always be an array internally
    const [values, setValues] = useState(defaultOptions)
    const [inputValue, setInputValue] = useState(defaultInputValue)
    const [results, setResults] = useState(options)

    // Autofocus
    useEffect(() => {
      if (autoFocus) {
        ref.current.focus()
      }
    }, [autoFocus, ref])

    // Ensure values are controlled by parent
    useEffect(() => {
      const items = matchSorter(options, defaultInputValue, { keys: ['label'] })
      setValues(defaultOptions)
      setInputValue(defaultInputValue)
      setResults(items)
    }, [defaultInputValue, options, defaultOptions])

    const getValue = value => {
      if (!value) return
      const getCorrectValue = value =>
        isValueExisting(value.value, options) ? value.value : value.label
      return Array.isArray(value) ? value.map(getCorrectValue) : getCorrectValue(value)
    }

    // Update results if searchable
    const handleInputChange = value => {
      // Update
      if (isSearchable && value !== inputValue) {
        const items = matchSorter(options, value, { keys: ['label'] })
        setInputValue(value)
        setResults(items)
      }
    }

    // Send event to parent when value(s) changes
    const handleChange = values => {
      const value = isMultiple ? values : values[0]
      const event = createEvent({ name, value })

      onChange && onChange(getValue(value), event)

      if (isCreatable) {
        // If there are newly-created values, call `onCreate`
        const isExisting = options.find(option => option.value === value.value)
        if (!isExisting) {
          onCreate && onCreate(value.label, event)
        }
      }
    }

    // Update internal state when clicking/adding a select item
    const handleSelect = item => {
      let newItems
      let isClearInput

      if (!item) {
        // If removing item
        newItems = isMultiple ? values : []
        isClearInput = true
      } else {
        // If adding item
        newItems = isMultiple ? getUniqueValue(item, values) : [item]
        isClearInput = isMultiple
      }

      isClearInput && setInputValue(EMPTY)
      setResults(options)
      setValues(newItems)
      handleChange(newItems)
    }

    const handleRemove = value => {
      const newItems = values.filter(item => item.value !== value)
      setValues(newItems)
      handleChange(newItems)
    }

    const handleOuterClick = e => {
      // Reset input value if not selecting a new item
      if (isMultiple && e.selectedItem) {
        setInputValue(EMPTY)
      } else if (isSearchable && e.selectedItem) {
        setInputValue(e.selectedItem.label)
      }
      setResults(options)
    }

    const spacer = options.reduce(
      (prev, current) =>
        current.label && prev.length > current.label.length ? prev : current.label,
      ''
    )

    const option = findOption(inputValue, options)
    let inputContent = EMPTY
    if (isMultiple) {
      inputContent = inputValue
    } else if (option.label) {
      if (isSearchable) {
        inputContent = option.label
      } else {
        inputContent = renderItem(option)
      }
    }

    return (
      <Downshift
        inputValue={isSearchable ? inputContent : EMPTY}
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
        }) => {
          const isShowCreate = !!(isCreatable && inputValue && !isValueExisting(inputValue, values))
          const isShowMenu = isOpen && (results.length || isShowCreate)
          const isShowDeleteIcon = inputValue && !isOpen && !required
          const rootProps = getRootProps(rest)
          const inputProps = getInputProps({
            autoComplete: 'off',
            autoFocus,
            'data-spacer': spacer || placeholder,
            'data-testid': dataTestId,
            disabled,
            hasIcon: !!icon,
            id,
            name,
            onBlur,
            onClick: toggleMenu,
            onFocus,
            placeholder,
            ref,
            required,
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
                  {isShowDeleteIcon ? (
                    <S.DropDownIndicator
                      actionType="destructive"
                      disabled={disabled}
                      onClick={clearSelection}
                      role="button"
                      size={size}
                      tabIndex={-1}
                      title="Remove item"
                      type="button"
                    >
                      <Icon color="nude.800" name="cross" size="xs" title="Remove" />
                    </S.DropDownIndicator>
                  ) : (
                    <S.DropDownIndicator
                      disabled={disabled}
                      isOpen={isOpen}
                      size={size}
                      tabIndex={-1}
                      {...getToggleButtonProps()}
                    >
                      <Icon color="nude.800" name="down" size="xs" />
                    </S.DropDownIndicator>
                  )}
                </S.Indicators>
              </S.InputWrapper>
              {isShowMenu && (
                <S.Menu {...getMenuProps()}>
                  {results.map((item, index) => (
                    <S.Item
                      key={item.value}
                      {...getItemProps({
                        index,
                        isExisting: isMultiple && isValueExisting(item.value, values),
                        isHighlighted: highlightedIndex === index,
                        isSelected: !isMultiple && isEqual(selectedItem, item),
                        item
                      })}
                    >
                      {renderItem(item)}
                    </S.Item>
                  ))}
                  {isShowCreate && inputValue.length && (
                    <S.Item
                      key="add"
                      {...getItemProps({
                        index: results.length,
                        isHighlighted: highlightedIndex === results.length,
                        item: {
                          value: kebabCase(inputValue),
                          label: inputValue
                        }
                      })}
                    >
                      {`Create "${inputValue}"`}
                    </S.Item>
                  )}
                </S.Menu>
              )}
              {isMultiple && renderMultiple(values, handleRemove)}
            </S.Wrapper>
          )
        }}
      </Downshift>
    )
  }
)

Select.displayName = 'Select'

Select.propTypes = {
  autoFocus: bool,
  disabled: bool,
  icon: COMPONENT_TYPE,
  id: string,
  isCreatable: bool,
  isMultiple: bool,
  isSearchable: bool,
  name: string,
  onBlur: func,
  onChange: func,
  onCreate: func,
  onFocus: func,
  onKeyDown: func,
  options: arrayOf(OPTIONS_TYPE).isRequired,
  placeholder: string.isRequired,
  renderItem: func,
  renderMultiple: func,
  required: bool,
  searchable: bool,
  size: SIZES_TYPE,
  type: INPUTS_TYPE,
  value: oneOfType([OPTIONS_TYPE, arrayOf(OPTIONS_TYPE)], string),
  variant: VARIANTS_TYPE
}
