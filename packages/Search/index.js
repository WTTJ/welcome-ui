import React, { forwardRef, useEffect, useMemo, useState } from 'react'
import { arrayOf, bool, func, number, oneOf, oneOfType, string } from 'prop-types'
import Downshift from 'downshift'
import matchSorter from 'match-sorter'
import isEqual from 'lodash.isequal'
import { Icon } from '@welcome-ui/icon'
import { ClearButton } from '@welcome-ui/clear-button'

import {
  COMPONENT_TYPE,
  INPUTS_TYPE,
  OPTIONS_TYPE,
  SIZES_TYPE,
  VARIANTS_TYPE
} from '../Core/utils/propTypes'
import { createEvent } from '../Core/utils/events'

import { MultipleSelections } from './MultipleSelections'
import * as S from './styles'
import {
  getInputValue,
  getOptionsFromSelected,
  getSpacer,
  getUniqueValue,
  getValuesFromOptions,
  isValueSelected,
  itemToString
} from './utils'

export const Search = forwardRef(
  (
    {
      autoComplete = false,
      autoFocus,
      dataTestId,
      disabled,
      endpoint,
      icon,
      id,
      isClearable,
      isMultiple,
      options: defaultOptions = [],
      name,
      onBlur,
      onChange,
      onClick,
      onCreate,
      onFocus,
      onKeyDown,
      placeholder = 'Search…',
      renderItem = itemToString,
      renderMultiple = MultipleSelections,
      size = 'lg',
      value: defaultSelected,
      variant,
      ...rest
    },
    ref
  ) => {
    const EMPTY_STRING = autoComplete ? '' : '\uFEFF'

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
    const handleInputChange = async value => {
      // Update
      if (value !== inputValue) {
        const response = await fetch(`${endpoint}${value}`)
        const data = await response.json()
        console.debug('response', data)
        setInputValue(value)
        setOptions(data.Search || [])
      }
    }

    // Send event to parent when value(s) changes
    const handleChange = options => {
      const values = getValuesFromOptions(options, defaultOptions)
      const value = isMultiple ? values : values[0]
      const event = createEvent({ name, value: isMultiple ? options : options[0] })

      onChange && onChange(value, event)
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
      } else if (e.selectedItem) {
        setInputValue(e.selectedItem.label)
      }
      setOptions(defaultOptions)
    }

    const spacer = getSpacer(defaultOptions)

    let inputContent = getInputValue({
      inputValue,
      isMultiple,
      options: defaultOptions,
      renderItem
    })

    return (
      <Downshift
        inputValue={inputContent}
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
          const isShowMenu = isOpen && options.length
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

          const handleInputClick = e => {
            onClick && onClick(e)
            toggleMenu()
          }

          const rootProps = getRootProps(rest)
          const inputProps = getInputProps({
            autoComplete: autoComplete.toString(),
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
                <S.Input type="search" {...inputProps} />
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

Search.displayName = 'Search'

Search.propTypes = {
  autoComplete: bool,
  autoFocus: bool,
  disabled: bool,
  icon: oneOfType(COMPONENT_TYPE),
  id: string,
  isClearable: bool,
  isMultiple: bool,
  name: string,
  onBlur: func,
  onChange: func,
  onClick: func,
  onCreate: func,
  onFocus: func,
  onKeyDown: func,
  options: arrayOf(OPTIONS_TYPE).isRequired,
  placeholder: string,
  renderItem: func,
  renderMultiple: func,
  searchable: bool,
  size: oneOf(SIZES_TYPE),
  type: oneOf(INPUTS_TYPE),
  value: oneOfType([
    oneOf([OPTIONS_TYPE, arrayOf(OPTIONS_TYPE)]),
    string,
    arrayOf(string),
    number,
    arrayOf(number)
  ]),
  variant: oneOf(VARIANTS_TYPE)
}

export const StyledSearch = S.Wrapper
