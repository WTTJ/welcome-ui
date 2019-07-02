import React, { useState } from 'react'
import { arrayOf, bool, func, node, oneOf, shape, string } from 'prop-types'
import Downshift from 'downshift'
import matchSorter from 'match-sorter'
import kebabCase from 'lodash.kebabcase'
import uniqBy from 'lodash.uniqby'
import isEqual from 'lodash.isequal'

import { Icon } from '../Icon'
import { Tag } from '../Tag'
import { createEvent } from '../../utils/'

import * as S from './styles'

const itemToString = item => (item ? item.label : '')

export const Select = ({
  autoFocus,
  disabled,
  inputRef,
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
    const newItems = isMultiple ? uniqBy([...values, item], item => item.value) : [item]
    isMultiple && setInputValue('')
    setResults(options)
    setValues(newItems)
    handleChange(newItems)
  }

  const handleRemove = value => {
    const newItems = values.filter(item => item.value !== value)
    setValues(newItems)
    handleChange(newItems)
  }

  const isTagExisting = value => values.find(item => item.value === kebabCase(value))
  const type = isSearchable ? 'search' : 'select'

  return (
    <Downshift
      initialSelectedItem={initialItem}
      itemToString={itemToString}
      onInputValueChange={handleInputChange}
      onSelect={handleSelect}
    >
      {({
        getInputProps,
        getItemProps,
        getMenuProps,
        getRootProps,
        getToggleButtonProps,
        highlightedIndex,
        isOpen,
        selectedItem,
        toggleMenu
      }) => (
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
              ref: inputRef,
              size,
              type,
              value: inputValue,
              variant
            })}
          />
          {!isSearchable && (
            <S.DropDownIndicator disabled={disabled} isOpen={isOpen} {...getToggleButtonProps()}>
              <Icon name="down" size="xs" />
            </S.DropDownIndicator>
          )}
          {isOpen ? (
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
              {isCreatable && inputValue && !isTagExisting(inputValue) && (
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
      )}
    </Downshift>
  )
}

Select.propTypes = {
  autoFocus: bool,
  disabled: bool,
  inputRef: node,
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
  size: oneOf(['sm', 'md', 'lg']),
  value: arrayOf(
    shape({
      label: string,
      value: string
    })
  ),
  variant: oneOf(['error', 'info', 'valid', 'warning'])
}
