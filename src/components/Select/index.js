import React, { forwardRef, useCallback, useEffect, useState } from 'react'
import { arrayOf, bool, func, oneOfType, string } from 'prop-types'
import Downshift from 'downshift'
import matchSorter from 'match-sorter'
import kebabCase from 'lodash.kebabcase'
import uniqBy from 'lodash.uniqby'
import isEqual from 'lodash.isequal'
import reject from 'lodash.reject'

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
    const getOptionFromValue = useCallback(value => optionFromValue(options, value), [options])
    const defaultOption = getOptionFromValue(defaultValue)
    const selectedItem = (!isMultiple && defaultOption && defaultOption[0]) || null
    const defaultInputValue = selectedItem ? defaultOption[0].label : EMPTY
    // Values will always be an array internally
    const [values, setValues] = useState(defaultOption)
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
      setValues(getOptionFromValue(defaultValue))
      setInputValue(defaultInputValue)
      setResults(options)
    }, [defaultValue, defaultInputValue, getOptionFromValue, options])

    // Update results if searchable
    const handleInputChange = value => {
      if (!isSearchable) {
        return
      }

      // Update
      const results = matchSorter(options, value, { keys: ['label'] })
      setInputValue(value)
      setResults(results)
    }

    const getValue = value => {
      if (!value) return
      const getCorrectValue = value =>
        isValueExisting(value.value, options) ? value.value : value.label
      return Array.isArray(value) ? value.map(getCorrectValue) : getCorrectValue(value)
    }

    // Send event to parent when value(s) changes
    const handleChange = values => {
      const value = isMultiple ? values : values[0]
      const event = createEvent({ name, value })
      onChange && onChange(getValue(value), event)
      if (isCreatable) {
        // If there are newly-created values, call `onCreate`
        const created = reject(values, value =>
          options.find(option => option.value === value.value)
        )
        if (created.length) {
          onCreate && onCreate(created[0].label, event)
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
      EMPTY
    )

    return (
      <Downshift
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
          const option = findOption(inputValue, options)
          const inputContent = isMultiple
            ? inputValue
            : option.label
            ? renderItem(option)
            : placeholder
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
            value: inputContent,
            variant: isOpen ? 'focused' : variant,
            ...rest
          })

          return (
            <S.Wrapper {...rootProps}>
              <S.InputWrapper>
                {isSearchable ? (
                  <S.Input as="input" type="text" {...inputProps} />
                ) : (
                  <S.Input {...inputProps}>{inputContent || EMPTY}</S.Input>
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
