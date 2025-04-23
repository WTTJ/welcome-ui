import React, { Fragment, useCallback, useMemo, useState } from 'react'
import DownshiftImport, { DownshiftProps, GetRootPropsOptions } from 'downshift'

import { createEvent } from '../../utils/create-event'
import { DefaultFieldStylesProps, FIELD_ICON_SIZE } from '../../utils/field-styles'
import { throttle as handleThrottle } from '../../utils/throttle'

import * as S from './styles'

import { CreateWuiProps, forwardRef } from '@/System'
import { ClearButton } from '@/ClearButton'
import { IconWrapper } from '@/Field'

const EMPTY_STRING = ''

export type SearchOption = { label: string; value: string }
export type SearchOptionGroup = { label: string; options: SearchOption[] }
export type Item = SearchOption | SearchOptionGroup | string | unknown

export interface SearchOptions extends DefaultFieldStylesProps {
  groupsEnabled?: boolean
  icon?: React.ReactElement
  itemToString: (item: Item) => string
  minChars?: number
  onChange?: (item: Item, event: ReturnType<typeof createEvent>) => void
  renderGroupHeader?: (result: SearchOptionGroup) => React.ReactElement
  renderItem: (item: Item) => React.ReactElement | string
  search: (query: string) => Promise<unknown>
  throttle?: number
  value?: Item
}

export type SearchProps = CreateWuiProps<
  'input',
  SearchOptions & Omit<DownshiftProps<SearchOption>, keyof SearchOptions>
>

// because of this issue: https://github.com/downshift-js/downshift/issues/1505
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const Downshift: typeof DownshiftImport = DownshiftImport.default || DownshiftImport

export const Search = forwardRef<'input', SearchProps>(
  (
    {
      autoComplete = 'off',
      autoFocus,
      dataTestId,
      disabled,
      groupsEnabled,
      icon,
      id,
      itemToString,
      minChars = 3,
      name,
      onBlur,
      onChange,
      onClick,
      onFocus,
      placeholder = 'Search…',
      renderGroupHeader,
      renderItem,
      search,
      size = 'md',
      throttle = 500,
      value: selected = EMPTY_STRING,
      variant,
      ...rest
    },
    ref
  ) => {
    // Get initial value from selected value(s)
    const initialInputValue = selected ? itemToString(selected) : EMPTY_STRING

    // Keep results in state
    const [results, setResults] = useState<SearchOption[] | SearchOptionGroup[]>([])

    // Update results when searching
    const searchResults = useCallback(
      async (value: string) => {
        if (minChars === 0 || value?.length >= minChars) {
          const data = await search(value)
          setResults((data as SearchOption[] | SearchOptionGroup[]) || [])
        } else {
          setResults([])
        }
      },
      [minChars, search]
    )

    const handleInputChange = useMemo(
      () => handleThrottle(searchResults, throttle, false),
      [searchResults, throttle]
    )

    // Send event to parent when value(s) changes
    const handleChange = (value?: Item) => {
      const event = createEvent({ name, value })
      onChange && onChange(value, event)
    }

    const handleSelect = (result?: Item) => {
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
      if (!selected) {
        handleSelect()
      }
      setResults([])
    }

    // prevents controlled to uncontrolled switch when itemToString returns falsy value
    const handleItemToString = (item: Item) => itemToString(item) || ''

    return (
      <Downshift
        initialInputValue={initialInputValue}
        itemToString={handleItemToString}
        onInputValueChange={handleInputChange}
        onOuterClick={handleOuterClick}
        onSelect={handleSelect}
        selectedItem={selected}
        {...(rest as DownshiftProps<Item>)}
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
          toggleMenu,
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
          const handleInputFocus = (event: React.FocusEvent<HTMLInputElement>) => {
            onFocus && onFocus(event)
            handleInputChange('')
            toggleMenu()
          }

          const inputProps = getInputProps({
            autoComplete,
            autoFocus,
            'data-testid': dataTestId,
            disabled,
            iconPlacement: !!icon && 'left',
            id,
            name,
            onBlur,
            onClick: onClick,
            onFocus: handleInputFocus,
            placeholder,
            ref,
            size,
            tabIndex: 0,
            variant: isOpen ? 'focused' : variant,
            ...rest,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
          }) as any
          const iconSize = FIELD_ICON_SIZE[size]

          return (
            <S.Wrapper {...getRootProps(rest as GetRootPropsOptions)}>
              <S.InputWrapper>
                <S.Input {...inputProps} />
                {icon && (
                  <IconWrapper iconPlacement="left" size={iconSize}>
                    {React.cloneElement(icon, { ...icon.props, size: iconSize })}
                  </IconWrapper>
                )}
                <S.Indicators>{inputValue && DeleteIcon}</S.Indicators>
              </S.InputWrapper>
              {isShowMenu && (
                <S.Menu {...getMenuProps()}>
                  {
                    (results as SearchOptionGroup[]).reduce(
                      (acc, result, resultIndex) => {
                        if (groupsEnabled) {
                          acc.itemsToRender.push(
                            // eslint-disable-next-line react/no-array-index-key
                            <Fragment key={resultIndex}>
                              {renderGroupHeader(result as SearchOptionGroup)}
                              {(result as SearchOptionGroup).options &&
                                (result as SearchOptionGroup).options.map((option, optionIndex) => {
                                  const index = acc.itemIndex++
                                  return (
                                    <S.Item
                                      // eslint-disable-next-line react/no-array-index-key
                                      key={optionIndex}
                                      {...getItemProps({
                                        index,
                                        isSelected:
                                          selectedItem &&
                                          itemToString(selectedItem) === itemToString(option),
                                        item: option,
                                      })}
                                      isHighlighted={highlightedIndex === index}
                                    >
                                      {renderItem(option)}
                                    </S.Item>
                                  )
                                })}
                            </Fragment>
                          )
                        } else {
                          acc.itemsToRender.push(
                            <S.Item
                              // eslint-disable-next-line react/no-array-index-key
                              key={resultIndex}
                              {...getItemProps({
                                index: resultIndex,
                                isSelected:
                                  selectedItem &&
                                  itemToString(selectedItem) === itemToString(result),
                                item: result,
                              })}
                              isHighlighted={highlightedIndex === resultIndex}
                            >
                              {renderItem(result)}
                            </S.Item>
                          )
                        }

                        return acc
                      },
                      { itemsToRender: [], itemIndex: 0 }
                    ).itemsToRender
                  }
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

export const StyledSearch = S.Wrapper
