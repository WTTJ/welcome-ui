import React, { forwardRef, useEffect, useMemo, useState } from 'react'
import { arrayOf, bool, func, number, oneOfType, string } from 'prop-types'
import Downshift from 'downshift'
import matchSorter from 'match-sorter'
import kebabCase from 'lodash.kebabcase'
import isEqual from 'lodash.isequal'

import { createEvent } from '../../utils/events'
import {
  COMPONENT_TYPE,
  INPUTS_TYPE,
  OPTIONS_TYPE,
  SIZES_TYPE,
  VARIANTS_TYPE
} from '../../utils/proptypes'
import { Icon } from '../Icon'
import { ClearButton } from '../ClearButton'

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

// Helpers
const EMPTY_STRING = ''

export const Select = forwardRef(
  (
    {
      autoFocus,
      dataTestId,
      disabled,
      icon,
      id,
      isClearable,
      isCreatable,
      isMultiple,
      isSearchable = isCreatable || isSearchable,
      options: defaultOptions = [],
      name,
      onBlur,
      onChange,
      onCreate,
      onFocus,
      onKeyDown,
      placeholder = 'Choose from…',
      renderItem = itemToString,
      renderMultiple = MultipleSelections,
      size = 'lg',
      type,
      value: defaultSelected,
      variant,
      ...rest
    },
    ref
  ) => {
    const defaultSelecteds = useMemo(
      () => getOptionsFromSelected(defaultSelected, defaultOptions),
      [defaultSelected, defaultOptions]
    )
    const selectedItem = (!isMultiple && defaultSelecteds[0]) || null
    const defaultInputValue = selectedItem ? selectedItem.label : EMPTY_STRING

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
    const handleInputChange = value => {
      // Update
      if (isSearchable && value !== inputValue) {
        const options = matchSorter(defaultOptions, value, { keys: ['label'] })
        setInputValue(value)
        setOptions(options)
      }
    }

    // Send event to parent when value(s) changes
    const handleChange = options => {
      const values = getValuesFromOptions(options, defaultOptions)
      const value = isMultiple ? values : values[0]
      const event = createEvent({ name, value: isMultiple ? options : options[0] })

      onChange && onChange(value, event)

      // If there are newly-created options, call `onCreate`
      if (isCreatable) {
        const newOptions = getNewOptions(options, defaultOptions)
        if (newOptions.length) {
          onCreate && onCreate(newOptions[0].label, event)
        }
      }
    }

    // Update internal state when clicking/adding a select item
    const handleSelect = option => {
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

      isClearInput && setInputValue(EMPTY_STRING)
      setOptions(defaultOptions)
      setSelected(newItems)
      handleChange(newItems)
    }

    const handleRemove = value => {
      const newItems = selected.filter(item => item.value !== value)
      setSelected(newItems)
      handleChange(newItems)
    }

    const handleOuterClick = e => {
      // Reset input value if not selecting a new item
      if (isMultiple && e.selectedItem) {
        setInputValue(EMPTY_STRING)
      } else if (isSearchable && e.selectedItem) {
        setInputValue(e.selectedItem.label)
      }
      setOptions(defaultOptions)
    }

    const spacer = getSpacer(defaultOptions)

    let inputContent = getInputValue({
      inputValue,
      isMultiple,
      isSearchable,
      options: defaultOptions,
      renderItem
    })

    return (
      <Downshift
        inputValue={isSearchable ? inputContent : EMPTY_STRING}
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
          const isShowCreate = !!(
            isCreatable &&
            inputValue &&
            !isValueSelected(inputValue, selected)
          )
          const isShowMenu = isOpen && (options.length || isShowCreate)
          const isShowDeleteIcon = isClearable && inputValue

          const DeleteIcon = (
            <S.DropDownIndicator as="div" size={size}>
              <ClearButton onClick={clearSelection} />
            </S.DropDownIndicator>
          )
          const Arrow = (
            <S.DropDownIndicator
              disabled={disabled}
              isOpen={isOpen}
              size={size}
              tabIndex={-1}
              {...getToggleButtonProps()}
            >
              <Icon color="nude.800" name="down" size="xs" />
            </S.DropDownIndicator>
          )

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
                  {Arrow}
                </S.Indicators>
              </S.InputWrapper>
              {isShowMenu && (
                <S.Menu {...getMenuProps()}>
                  {options.map((item, index) => (
                    <S.Item
                      key={item.value}
                      {...getItemProps({
                        index,
                        isExisting: isMultiple && isValueSelected(item.value, selected),
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
                        index: options.length,
                        isHighlighted: highlightedIndex === options.length,
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
              {isMultiple && renderMultiple(selected, handleRemove)}
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
  isClearable: bool,
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
  searchable: bool,
  size: SIZES_TYPE,
  type: INPUTS_TYPE,
  value: oneOfType(
    [OPTIONS_TYPE, arrayOf(OPTIONS_TYPE), string, arrayOf(string)],
    number,
    arrayOf(number)
  ),
  variant: VARIANTS_TYPE
}
