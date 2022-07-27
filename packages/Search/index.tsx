import React, { forwardRef, Fragment, useCallback, useMemo, useState } from 'react'
import Downshift, { DownshiftProps, GetRootPropsOptions } from 'downshift'
import { ClearButton } from '@welcome-ui/clear-button'
import { createEvent, DefaultFieldStylesProps, throttle as handleThrottle } from '@welcome-ui/utils'

import * as S from './styles'

const EMPTY_STRING = ''

export type Option<Value> = { label: string; value: Value }
export type OptionGroup<Opt> = { label: string; options: Opt[] }

export interface SearchOptions<
  Value extends string,
  Opt extends Option<Value>,
  OptGroup extends OptionGroup<Opt>
> extends DefaultFieldStylesProps {
  groupsEnabled?: boolean
  icon?: React.ReactElement
  itemToString: (item: Opt | Opt['value']) => string
  minChars?: number
  onChange?: (item: Opt, event: ReturnType<typeof createEvent>) => void
  renderGroupHeader?: (result: OptGroup) => React.ReactNode
  renderItem: (item: Opt) => React.ReactNode
  search: (query: string) => Promise<(Opt | OptGroup)[]>
  throttle?: number
  value?: Opt | Value
}

export type SearchProps<
  Value extends string,
  Opt extends Option<Value>,
  OptGroup extends OptionGroup<Opt>
> = Omit<React.ComponentProps<'input'>, keyof SearchOptions<Value, Opt, OptGroup>> &
  Omit<DownshiftProps<Opt>, keyof SearchOptions<Value, Opt, OptGroup>> &
  SearchOptions<Value, Opt, OptGroup> & { dataTestId?: string }

// eslint-disable-next-line react/function-component-definition
function SearchInner<
  Value extends string,
  Opt extends Option<Value>,
  OptGroup extends OptionGroup<Opt>
>(
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
    placeholder = 'Search…',
    renderItem,
    search,
    size = 'lg',
    throttle = 500,
    value: selected = EMPTY_STRING as Value,
    variant,
    groupsEnabled,
    renderGroupHeader,
    ...rest
  }: SearchProps<Value, Opt, OptGroup>,
  ref: React.ForwardedRef<HTMLInputElement>
) {
  // Get initial value from selected value(s)
  const initialInputValue = selected ? itemToString(selected) : EMPTY_STRING

  // Keep results in state
  const [results, setResults] = useState<Awaited<ReturnType<typeof search>>>([])

  // Update results when searching
  const searchResults = useCallback(
    async (value: string) => {
      if (minChars === 0 || value?.length >= minChars) {
        const data = await search(value)
        setResults(data || [])
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
  const handleChange = (value?: Opt) => {
    const event = createEvent({ name, value })
    onChange && onChange(value, event)
  }

  const handleSelect = (result?: Opt) => {
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
  const handleItemToString = (item: Opt) => itemToString(item) || ''

  return (
    <Downshift
      initialInputValue={initialInputValue}
      itemToString={handleItemToString}
      onInputValueChange={handleInputChange}
      onOuterClick={handleOuterClick}
      onSelect={handleSelect}
      selectedItem={selected}
      {...(rest as DownshiftProps<typeof selected>)}
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
          hasIcon: !!icon,
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
        })

        return (
          <S.Wrapper {...getRootProps(rest as GetRootPropsOptions)}>
            <S.InputWrapper>
              <S.Input {...inputProps} />
              {icon && <S.Icon size={size}>{icon}</S.Icon>}
              <S.Indicators>{inputValue && DeleteIcon}</S.Indicators>
            </S.InputWrapper>
            {isShowMenu && (
              <S.Menu {...getMenuProps()}>
                {
                  results.reduce(
                    (acc, result, resultIndex) => {
                      if (groupsEnabled) {
                        acc.itemsToRender.push(
                          // eslint-disable-next-line react/no-array-index-key
                          <Fragment key={resultIndex}>
                            {renderGroupHeader(result as OptGroup)}
                            {(result as OptGroup).options &&
                              (result as OptGroup).options.map((option, optionIndex) => {
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
                                itemToString(selectedItem) === itemToString(result as Opt),
                              item: result as Opt,
                            })}
                            isHighlighted={highlightedIndex === resultIndex}
                          >
                            {renderItem(result as Opt)}
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

SearchInner.displayName = 'Search'

export const Search = forwardRef(SearchInner) as <
  Value extends string,
  Opt extends Option<Value>,
  OptGroup extends OptionGroup<Opt>
>(
  props: SearchProps<Value, Opt, OptGroup> & { ref?: React.ForwardedRef<HTMLInputElement> }
) => ReturnType<typeof SearchInner>

// const Lol = () => {
//   return (
//     <Search<
//       string,
//       ({ a: string } | { a: string; b?: string }) & Option<string>,
//       OptionGroup<({ a: string } | { a: string; b?: string }) & Option<string>> & { type: string }
//     >
//       groupsEnabled
//       itemToString={item => (typeof item === 'string' ? item : item.a)}
//       renderGroupHeader={({ options, type }) => options.map(item => item?.b)}
//       renderItem={item => item.b}
//       search={async () => [
//         {
//           options: [
//             { a: 'a', label: '', value: '' },
//             { a: 'a', label: '', value: '' },
//           ],
//           type: 'coucou',
//           label: 'my label',
//         },
//         {
//           options: [
//             { a: 'a', b: 'b', label: '', value: '' },
//             { a: 'a', b: 'b', label: '', value: '' },
//           ],
//           type: 'coucou2',
//           label: 'my label 2',
//         },
//       ]}
//     />
//   )
// }

export const StyledSearch = S.Wrapper
