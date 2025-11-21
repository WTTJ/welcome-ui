import type { DownshiftProps, GetRootPropsOptions } from 'downshift'
import DownshiftImport from 'downshift'
import React, { forwardRef, Fragment, useCallback, useMemo, useState } from 'react'

import { CloseButton as ClearButton } from '@/components/CloseButton'
import { Icon } from '@/components/Icon'
import { classNames } from '@/utils'
import { createEvent } from '@/utils/create-event'
import { throttle as handleThrottle } from '@/utils/throttle'

import searchStyles from './search.module.scss'
import type { Item, SearchOption, SearchOptionGroup, SearchProps } from './types'

const EMPTY_STRING = ''

const cx = classNames(searchStyles)

// because of this issue: https://github.com/downshift-js/downshift/issues/1505
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const Downshift: typeof DownshiftImport = DownshiftImport.default || DownshiftImport

export const Search = forwardRef<HTMLInputElement, SearchProps>(
  (
    {
      autoComplete = 'off',
      autoFocus,
      className,
      dataTestId,
      disabled,
      groupsEnabled,
      icon,
      iconPlacement = 'left',
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
      size = 'lg',
      throttle = 500,
      transparent,
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
      onChange?.(value, event)
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
            <div className={cx('dropdown-indicator')}>
              <ClearButton animatePresence onClick={handleClearClick} title="Clear" />
            </div>
          )
          const handleInputFocus = (event: React.FocusEvent<HTMLInputElement>) => {
            onFocus?.(event)
            handleInputChange('')
            toggleMenu()
          }
          const rootProps = getRootProps(rest as GetRootPropsOptions, { suppressRefError: true })
          const inputProps = getInputProps({
            autoComplete,
            autoFocus,
            'data-testid': dataTestId,
            disabled,
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
          }) as React.InputHTMLAttributes<HTMLInputElement>

          return (
            <div {...rootProps} className={cx('wrapper')}>
              <div className={cx('input-wrapper')}>
                <input
                  className={cx(
                    'root',
                    `size-${size}`,
                    variant && `variant-${variant}`,
                    transparent && 'transparent',
                    icon && `icon-placement-${iconPlacement}`,
                    className
                  )}
                  {...inputProps}
                />
                {icon ? (
                  <div
                    className={cx(
                      'icon-wrapper',
                      `icon-placement-${iconPlacement}`,
                      `size-${size}`
                    )}
                  >
                    <Icon {...icon.props} size="lg" />
                  </div>
                ) : null}
                <div className={cx('indicators', `size-${size}`)}>
                  {inputValue ? DeleteIcon : null}
                </div>
              </div>
              {isShowMenu ? (
                <ul className={cx('menu')} {...getMenuProps()}>
                  {
                    (results as SearchOptionGroup[]).reduce(
                      (acc, result, resultIndex) => {
                        const index = acc.itemIndex++
                        const isHighlighted = highlightedIndex === index

                        if (groupsEnabled) {
                          acc.itemsToRender.push(
                            <Fragment key={resultIndex}>
                              {renderGroupHeader(result as SearchOptionGroup)}
                              {(result as SearchOptionGroup).options
                                ? (result as SearchOptionGroup).options.map(
                                    (option, optionIndex) => {
                                      const isItemSelected =
                                        selectedItem &&
                                        itemToString(selectedItem) === itemToString(option)

                                      return (
                                        <li
                                          className={cx(
                                            'item',
                                            isHighlighted && 'highlighted',
                                            isItemSelected && 'selected'
                                          )}
                                          key={optionIndex}
                                          {...getItemProps({
                                            index,
                                            item: option,
                                          })}
                                        >
                                          {renderItem(option)}
                                        </li>
                                      )
                                    }
                                  )
                                : null}
                            </Fragment>
                          )
                        } else {
                          const isItemSelected =
                            selectedItem && itemToString(selectedItem) === itemToString(result)

                          acc.itemsToRender.push(
                            <li
                              className={cx(
                                'item',
                                isHighlighted && 'highlighted',
                                isItemSelected && 'selected'
                              )}
                              key={resultIndex}
                              {...getItemProps({
                                index: resultIndex,
                                item: result,
                              })}
                            >
                              {renderItem(result)}
                            </li>
                          )
                        }

                        return acc
                      },
                      { itemIndex: 0, itemsToRender: [] }
                    ).itemsToRender
                  }
                </ul>
              ) : null}
            </div>
          )
        }}
      </Downshift>
    )
  }
)

Search.displayName = 'Search'
