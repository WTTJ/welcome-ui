import React, { forwardRef, useCallback, useEffect, useState } from 'react'
import { arrayOf, bool, func, oneOfType, string } from 'prop-types'
import Downshift from 'downshift'
import matchSorter from 'match-sorter'
import kebabCase from 'lodash.kebabcase'
import uniqBy from 'lodash.uniqby'
import isEqual from 'lodash.isequal'

import { OPTIONS_TYPE, SIZES_TYPE, VARIANTS_TYPE } from '../../utils'
import { Icon } from '../Icon'
import { Tag } from '../Tag'
import { createEvent } from '../../utils/'

import * as S from './styles'

// Helpers
const EMPTY = ''
const itemToString = item => (item ? item.label : '')
const ensureArray = value => (Array.isArray(value) ? value : value ? [value] : [])
const getUniqueValue = (item, values) => uniqBy([...values, item], item => item.value)
const isValueExisting = (value, values) =>
  values.find(item => kebabCase(item.value) === kebabCase(value))
const defaultRenderOption = option => (option ? option.label : EMPTY)

export const Select = forwardRef(
  (
    {
      autoFocus,
      disabled,
      id,
      isCreatable,
      isMultiple,
      isSearchable,
      options = [],
      name,
      onBlur,
      onChange,
      onFocus,
      onKeyDown,
      placeholder = 'Choose from…',
      renderItem = defaultRenderOption,
      required,
      size = 'lg',
      value: defaultValue,
      variant,
      ...rest
    },
    ref
  ) => {
    const getOptionFromValue = useCallback(
      value => {
        if (!value) return
        const optionFromValue = v =>
          options.find(o => o.label === (v.label || v) || o.value === (v.value || v))
        return Array.isArray(value) ? value.map(v => optionFromValue(v)) : optionFromValue(value)
      },
      [options]
    )
    const defaultOption = getOptionFromValue(defaultValue)
    const selectedItem = (!isMultiple && defaultOption) || null
    const defaultInputValue = selectedItem ? defaultOption : EMPTY
    // Values will always be an array internally
    const [values, setValues] = useState(ensureArray(defaultOption))
    const [inputValue, setInputValue] = useState(defaultInputValue)
    const [results, setResults] = useState(options)

    // Ensure values are controlled by parent
    useEffect(() => {
      setValues(ensureArray(getOptionFromValue(defaultValue)))
      setInputValue(defaultInputValue)
      setResults(options)
    }, [defaultValue, defaultInputValue, getOptionFromValue, options])

    // Update results if searchable
    const handleInputChange = (value, openMenu) => {
      if (isSearchable) {
        // Update
        const results = matchSorter(options, value, { keys: ['label'] })
        setInputValue(value)
        setResults(results)
        openMenu()

        // We have to manage the cursor position when searching on field that isMultiple
        const selection = window.getSelection()
        const node = selection.focusNode
        const offset = selection.focusOffset
        setImmediate(() => selection.setPosition(node, offset))
      }
    }

    const getValue = value => {
      if (!value) return
      const getCorrectValue = value =>
        isValueExisting(value.value, options) ? value.value : value.label
      return Array.isArray(value) ? value.map(v => getCorrectValue(v)) : getCorrectValue(value)
    }

    // Send event to parent when value(s) changes
    const handleChange = values => {
      const value = isMultiple ? values : values[0]
      const event = createEvent({ name, value })
      onChange && onChange(getValue(value), event)
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

    const spacer = options.reduce(
      (prev, current) => (prev.length > current.label.length ? prev : current.label),
      ''
    )

    return (
      <Downshift
        itemToString={itemToString}
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
          openMenu,
          toggleMenu
        }) => {
          const isShowCreate = isCreatable && inputValue && !isValueExisting(inputValue, values)
          const isShowMenu = isOpen && (results.length || isShowCreate)
          const isShowDeleteIcon = inputValue && !isOpen && !required
          const inputProps = getInputProps({
            autoComplete: 'off',
            autoFocus,
            contentEditable: isSearchable,
            disabled,
            name,
            onBlur,
            onClick: toggleMenu,
            onFocus,
            placeholder,
            readOnly: !isSearchable,
            ref,
            size,
            value: inputValue || EMPTY,
            variant: isOpen ? 'focused' : variant
          })

          let content = EMPTY
          if (isMultiple) {
            content = inputValue
          } else if (values.length) {
            content = renderItem(values[0])
          }

          return (
            <S.Wrapper {...getRootProps()} {...rest}>
              <S.InputWrapper>
                <S.Input
                  {...inputProps}
                  data-spacer={spacer || placeholder}
                  id={id}
                  onInput={e => handleInputChange(e.target.innerText, openMenu)}
                  suppressContentEditableWarning
                  tabIndex={0}
                  {...rest}
                >
                  {content}
                </S.Input>
                <S.Indicators size={size}>
                  {isShowDeleteIcon ? (
                    <S.DropDownIndicator
                      actionType="destructive"
                      disabled={disabled}
                      onClick={clearSelection}
                      role="button"
                      size={size}
                      tabIndex={-1}
                      type="button"
                    >
                      <Icon color="nude.800" name="cross" size="xs" />
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
              )}
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

Select.displayName = 'Select'

Select.propTypes = {
  autoFocus: bool,
  disabled: bool,
  id: string,
  isCreatable: bool,
  isMultiple: bool,
  isSearchable: bool,
  name: string,
  onBlur: func,
  onChange: func,
  onFocus: func,
  onKeyDown: func,
  options: arrayOf(OPTIONS_TYPE),
  placeholder: string.isRequired,
  renderItem: func,
  required: bool,
  searchable: bool,
  size: SIZES_TYPE,
  value: oneOfType([OPTIONS_TYPE, arrayOf(OPTIONS_TYPE)], string),
  variant: VARIANTS_TYPE
}
