import React, { forwardRef, useEffect, useState } from 'react'
import { arrayOf, bool, func, number, object, oneOf, oneOfType, string } from 'prop-types'
import Downshift from 'downshift'
import isEqual from 'lodash.isequal'
import { ClearButton } from '@welcome-ui/clear-button'

import { COMPONENT_TYPE, SIZES_TYPE, VARIANTS_TYPE } from '../Core/utils/propTypes'
import { createEvent } from '../Core/utils/events'

import * as S from './styles'

export const Search = forwardRef(
  (
    {
      autoComplete = 'off',
      autoFocus,
      dataTestId,
      disabled,
      icon,
      id,
      isMultiple,
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
      value: selected,
      variant,
      ...rest
    },
    ref
  ) => {
    // Use `ZERO WIDTH NO-BREAK SPACE` to prevent browser autocomplete
    const EMPTY_STRING = autoComplete ? '' : '\uFEFF'

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
    const handleChange = results => {
      const value = isMultiple ? results : results[0]
      const event = createEvent({ name, value })
      onChange && onChange(value, event)
    }

    const handleSelect = result => {
      if (result) {
        // If selecting result
        handleChange([result])
      } else {
        // If removing result
        handleChange(isMultiple ? selected : [])
        setResults([])
      }
    }

    const handleOuterClick = () => {
      // Reset input value if not selecting a new item
      if (!selected.length || (isMultiple && selected.length)) {
        setResults([])
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
            handleChange([])
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
                        isExisting: isMultiple && selected.incluedes(item),
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
            </S.Wrapper>
          )
        }}
      </Downshift>
    )
  }
)

Search.displayName = 'Search'
Search.type = 'search'

Search.propTypes = {
  autoComplete: string,
  autoFocus: bool,
  disabled: bool,
  icon: oneOfType(COMPONENT_TYPE),
  id: string,
  isMultiple: bool,
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
