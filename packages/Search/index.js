import React, { forwardRef, useEffect, useState } from 'react'
import { arrayOf, bool, func, number, object, oneOf, oneOfType, string } from 'prop-types'
import Downshift from 'downshift'
import isEqual from 'lodash.isequal'
import { ClearButton } from '@welcome-ui/clear-button'
import { createEvent } from '@welcome-ui/utils'

import { COMPONENT_TYPE, SIZES_TYPE, VARIANTS_TYPE } from '../../src/utils/propTypes'

import * as S from './styles'

const EMPTY_STRING = ''

export const Search = forwardRef(
  (
    {
      autoComplete = 'off',
      autoFocus,
      dataTestId,
      disabled,
      icon,
      id,
      itemToString,
      minChars = 3,
      name,
      onBlur,
      onChange,
      onClick,
      onFocus,
      onKeyDown,
      placeholder = 'Search…',
      renderItem,
      search,
      size = 'lg',
      value: selected = EMPTY_STRING,
      variant,
      ...rest
    },
    ref
  ) => {
    // Get initial value from selected value(s)
    const initialInputValue = selected ? itemToString(selected) : EMPTY_STRING

    // Keep results in state
    const [results, setResults] = useState([])

    // Autofocus
    useEffect(() => {
      if (autoFocus) {
        ref.current.focus()
      }
    }, [autoFocus, ref])

    // Update results when searching
    const handleInputChange = async value => {
      if (!value || value.length < minChars) {
        setResults([])
      } else {
        const data = await search(value)
        setResults(data || [])
      }
    }

    // Send event to parent when value(s) changes
    const handleChange = value => {
      const event = createEvent({ name, value })
      onChange && onChange(value, event)
    }

    const handleSelect = result => {
      if (result) {
        // If selecting result
        handleChange(result)
      } else {
        // If removing result
        handleChange()
        setResults([])
      }
    }

    const handleOuterClick = () => {
      // Reset input value if not selecting a new item
      if (!selected || !selected.length) {
        handleSelect()
      }
      setResults([])
    }

    return (
      <Downshift
        initialInputValue={initialInputValue}
        itemToString={itemToString}
        onInputValueChange={handleInputChange}
        onOuterClick={handleOuterClick}
        onSelect={handleSelect}
        selectedItem={selected}
      >
        {({
          clearSelection,
          getInputProps,
          getItemProps,
          getMenuProps,
          getRootProps,
          highlightedIndex,
          inputValue,
          isOpen,
          selectedItem,
          toggleMenu
        }) => {
          const handleClearClick = () => {
            setResults([])
            handleChange()
            clearSelection()
          }
          const isShowMenu = isOpen && results.length > 0

          const DeleteIcon = (
            <S.DropDownIndicator as="div" size={size}>
              <ClearButton onClick={handleClearClick} />
            </S.DropDownIndicator>
          )
          const handleInputClick = e => {
            onClick && onClick(e)
            toggleMenu()
          }

          const inputProps = getInputProps({
            autoComplete,
            autoFocus,
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
            <S.Wrapper {...getRootProps(rest)}>
              <S.InputWrapper>
                <S.Input {...inputProps} />
                {icon && <S.Icon size={size}>{icon}</S.Icon>}
                <S.Indicators size={size}>{inputValue && DeleteIcon}</S.Indicators>
              </S.InputWrapper>
              {isShowMenu && (
                <S.Menu {...getMenuProps()}>
                  {results.map((item, index) => (
                    <S.Item
                      // eslint-disable-next-line react/no-array-index-key
                      key={index}
                      {...getItemProps({
                        index,
                        isHighlighted: highlightedIndex === index,
                        isSelected: isEqual(selectedItem, item),
                        item
                      })}
                    >
                      {renderItem(item)}
                    </S.Item>
                  ))}
                </S.Menu>
              )}
            </S.Wrapper>
          )
        }}
      </Downshift>
    )
  }
)

Search.displayName = 'Search'
Search.type = 'search'

Search.propTypes /* remove-proptypes */ = {
  autoComplete: string,
  autoFocus: bool,
  disabled: bool,
  icon: oneOfType(COMPONENT_TYPE),
  id: string,
  itemToString: func.isRequired,
  minChars: number,
  name: string,
  onBlur: func,
  onChange: func,
  onClick: func,
  onFocus: func,
  onKeyDown: func,
  placeholder: string,
  renderItem: func.isRequired,
  search: func.isRequired,
  size: oneOf(SIZES_TYPE),
  value: oneOfType([object, arrayOf(object), string, arrayOf(string), number, arrayOf(number)]),
  variant: oneOf(VARIANTS_TYPE)
}

export const StyledSearch = S.Wrapper
