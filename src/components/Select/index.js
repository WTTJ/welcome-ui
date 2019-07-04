import React, { useState } from 'react'
import { arrayOf, bool, func, shape, string } from 'prop-types'
import Downshift from 'downshift'
import matchSorter from 'match-sorter'
import kebabCase from 'lodash.kebabcase'
import uniqBy from 'lodash.uniqby'
import isEqual from 'lodash.isequal'

import { REFS_TYPE, SIZES_TYPE, VARIANTS_TYPE } from '../../utils/propTypes'
import { Icon } from '../Icon'
import { Tag } from '../Tag'
import { createEvent } from '../../utils/'

import * as S from './styles'

const itemToString = item => (item ? item.label : '')

export const Select = ({
  _ref,
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
}) => {
  const [values, setValues] = useState(defaultValue)
  const initialItem = !isMultiple && values
  const [inputValue, setInputValue] = useState(initialItem ? initialItem.label : '')
  const [results, setResults] = useState(options)

  const handleInputChange = value => {
    const results = matchSorter(options, value, { keys: ['label'] })
    setInputValue(value)
    setResults(results)
  }

  const handleChange = values => {
    const value = isMultiple ? values : values[0]
    const event = createEvent({ name, value })
    onChange && onChange(event)
  }

  const handleSelect = item => {
    let newItems
    let isClearInput

    if (!item) {
      // If removing item
      newItems = isMultiple ? values : []
      isClearInput = true
    } else {
      // If adding item
      newItems = isMultiple ? getUnique(item, values) : [item]
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

  const getUnique = (item, values) => uniqBy([...values, item], item => item.value)
  const isTagExisting = value =>
    Array.isArray(values)
      ? values.find(item => item.value === kebabCase(value))
      : values.value === kebabCase(value)

  return (
    <Downshift
      initialSelectedItem={initialItem}
      itemToString={itemToString}
      onInputValueChange={handleInputChange}
      onOuterClick={handleOuterClick}
      onSelect={handleSelect}
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
        selectedItem,
        toggleMenu
      }) => {
        const isShowCreate = isCreatable && inputValue && !isTagExisting(inputValue)
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
                ref: _ref,
                size,
                value: inputValue,
                variant
              })}
            />
            <S.Indicators>
              {inputValue && (
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
              {!isSearchable && (
                <S.DropDownIndicator
                  disabled={disabled}
                  isOpen={isOpen}
                  {...getToggleButtonProps()}
                >
                  <Icon name="down" size="xs" />
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
                        isExisting: isMultiple && isTagExisting(item.value),
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

Select.propTypes = {
  _ref: REFS_TYPE,
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
  placeholder: string,
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
