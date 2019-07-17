import React, { forwardRef, useEffect, useState } from 'react'
import { arrayOf, bool, func, shape, string } from 'prop-types'
import Downshift from 'downshift'
import matchSorter from 'match-sorter'
import kebabCase from 'lodash.kebabcase'
import uniqBy from 'lodash.uniqby'
import isEqual from 'lodash.isequal'

import { SIZES_TYPE, VARIANTS_TYPE } from '../../utils'
import { Icon } from '../Icon'
import { Tag } from '../Tag'
import { createEvent } from '../../utils/'

import * as S from './styles'

// Helpers
const itemToString = item => (item ? item.label : '')
const ensureArray = value => (Array.isArray(value) ? value : value ? [value] : [])
const getUniqueValue = (item, values) => uniqBy([...values, item], item => item.value)
const isValueExisting = (value, values) => values.find(item => item.value === kebabCase(value))

export const Select = forwardRef(
  (
    {
      autoFocus,
      disabled,
      isCreatable,
      isMultiple,
      isSearchable,
      options = [],
      name,
      onBlur,
      onChange,
      onFocus,
      placeholder = 'Choose from…',
      size = 'lg',
      value: defaultValue,
      variant
    },
    ref
  ) => {
    const selectedItem = (!isMultiple && defaultValue) || null
    const defaultInputValue = selectedItem ? defaultValue.label : ''
    // Values will always be an array internally
    const [values, setValues] = useState(ensureArray(defaultValue))
    const [inputValue, setInputValue] = useState(defaultInputValue)
    const [results, setResults] = useState(options)

    // Ensure values are controlled by parent
    useEffect(() => {
      setValues(ensureArray(defaultValue))
      setInputValue(defaultInputValue)
    }, [defaultValue, defaultInputValue])

    // Update results if searchable
    const handleInputChange = value => {
      if (isSearchable) {
        const results = matchSorter(options, value, { keys: ['label'] })
        setInputValue(value)
        setResults(results)
      }
    }

    // Send event to parent when value(s) changes
    const handleChange = values => {
      const value = isMultiple ? values : values[0]
      const event = createEvent({ name, value })
      onChange && onChange(event)
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

      isClearInput && setInputValue('')
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
        setInputValue('')
      }
      setResults(options)
    }

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
          const isShowCreate = isCreatable && inputValue && !isValueExisting(inputValue, values)
          const isShowMenu = isOpen && (results.length || isShowCreate)

          return (
            <S.Wrapper {...getRootProps()}>
              <S.Input
                {...getInputProps({
                  autoComplete: 'off',
                  autoFocus,
                  disabled,
                  name,
                  onBlur,
                  onClick: toggleMenu,
                  onFocus,
                  placeholder,
                  readOnly: !isSearchable,
                  ref: ref,
                  size,
                  value: inputValue,
                  variant: isOpen ? 'focused' : variant
                })}
              />
              <S.Indicators>
                {!inputValue || isOpen ? (
                  <S.DropDownIndicator
                    disabled={disabled}
                    isOpen={isOpen}
                    {...getToggleButtonProps()}
                  >
                    <Icon name="down" size="xs" />
                  </S.DropDownIndicator>
                ) : (
                  <S.DropDownIndicator
                    actionType="destructive"
                    disabled={disabled}
                    onClick={clearSelection}
                    role="button"
                    type="button"
                  >
                    <Icon name="cross" size="xs" />
                  </S.DropDownIndicator>
                )}
              </S.Indicators>
              {isShowMenu ? (
                <S.Menu {...getMenuProps()}>
                  {results.map((item, index) => {
                    return (
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
                        {item.label}
                      </S.Item>
                    )
                  })}
                  {isShowCreate && (
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
              ) : null}
              {isMultiple && (
                <S.Tags>
                  {values.map(tag => (
                    <Tag data-id={tag.value} key={tag.value} onRemove={handleRemove}>
                      {tag.label}
                    </Tag>
                  ))}
                </S.Tags>
              )}
            </S.Wrapper>
          )
        }}
      </Downshift>
    )
  }
)

Select.propTypes = {
  autoFocus: bool,
  disabled: bool,
  isCreatable: bool,
  isMultiple: bool,
  isSearchable: bool,
  name: string,
  onBlur: func,
  onChange: func,
  onFocus: func,
  onKeyDown: func,
  options: arrayOf(
    shape({
      label: string,
      value: string
    })
  ),
  placeholder: string.isRequired,
  searchable: bool,
  size: SIZES_TYPE,
  value: arrayOf(
    shape({
      label: string,
      value: string
    })
  ),
  variant: VARIANTS_TYPE
}
