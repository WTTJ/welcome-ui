import type { ControllerStateAndHelpers, GetRootPropsOptions } from 'downshift'
import DownshiftImport from 'downshift'
import { matchSorter } from 'match-sorter'
import React, { forwardRef, Fragment, useEffect, useMemo, useState } from 'react'

import { DownIcon } from '@/components/Icon'
import { FIELD_ICON_SIZE } from '@/constants/field-icon-size'
import { classNames } from '@/utils'
import { createEvent } from '@/utils/create-event'
import { ClearButton } from '@old/ClearButton'

import { multipleSelections } from './multipleSelections'
import selectStyles from './select.module.scss'
import type {
  SelectOption,
  SelectOptionGroup,
  SelectOptionItem,
  SelectOptionValue,
  SelectProps,
} from './types'
import {
  getInputValue,
  getNewOptions,
  getOptionsFromSelected,
  getSpacer,
  getUniqueValue,
  getValuesFromOptions,
  isValueSelected,
  itemToString,
  kebabCase,
} from './utils'

const cx = classNames(selectStyles)

// because of this issue: https://github.com/downshift-js/downshift/issues/1505
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const Downshift: typeof DownshiftImport = DownshiftImport.default || DownshiftImport
/** We need to add autoComplete off to avoid select UI issues when is an input */
export const Select = forwardRef<HTMLInputElement, SelectProps>(
  (
    {
      allowUnselectFromList,
      autoComplete = 'off',
      autoFocus,
      dataTestId,
      disableCloseOnSelect,
      disabled,
      groupsEnabled,
      icon,
      id,
      isClearable,
      isCreatable,
      isMultiple,
      isSearchable,
      name,
      onBlur,
      onChange,
      onClick,
      onCreate,
      onFocus,
      options: defaultOptions = [],
      placeholder = 'Choose from…',
      renderCreateItem = (inputValue: string) => `Create "${inputValue}"`,
      renderGroupHeader,
      renderItem = itemToString,
      renderMultiple = multipleSelections,
      size = 'md',
      transparent,
      value: defaultSelected,
      variant,
      ...rest
    }: SelectProps,
    ref
  ): JSX.Element => {
    const defaultSelecteds = useMemo(
      () => getOptionsFromSelected(defaultSelected, defaultOptions, groupsEnabled),
      [defaultSelected, defaultOptions, groupsEnabled]
    )
    const selectedItem = (!isMultiple && defaultSelecteds[0]) || null
    const defaultInputValue = selectedItem ? selectedItem.label : ''

    // We keep 3 things in state:
    // a. selected = currently selected item(s)
    // b. inputValue = text in the select/search box
    // c. options = options in the dropdown
    // d. isOpen = the state of the dropdown menu
    const [selected, setSelected] = useState(defaultSelecteds)
    const [inputValue, setInputValue] = useState(defaultInputValue)
    const [options, setOptions] = useState(defaultOptions)
    const [isOpen, setIsOpen] = useState(false)

    // Set default isSearchable
    isSearchable = isCreatable || isSearchable

    // Autofocus
    useEffect(() => {
      if (autoFocus) {
        //FIXME(isaac) i don't get it
        ;(ref as unknown as React.MutableRefObject<HTMLInputElement>)?.current?.focus()
        if (isSearchable) setIsOpen(true)
      }
    }, [isSearchable, autoFocus, ref])

    // Ensure values are controlled by parent
    useEffect(() => {
      setSelected(defaultSelecteds)
      setInputValue(defaultInputValue)
      setOptions(defaultOptions)
    }, [defaultInputValue, defaultOptions, defaultSelecteds])

    // Update options when searching
    const handleInputChange = (value: string) => {
      // Update
      if (isSearchable && value !== inputValue) {
        let options: (SelectOption | SelectOptionGroup)[] = []

        if (groupsEnabled) {
          options = matchSorter(defaultOptions as SelectOptionGroup[], value, {
            // should match on group.label OR group.options.label
            keys: [item => item.label, item => item.options.map(option => option.label)],
          })
        } else {
          options = matchSorter(defaultOptions, value, { keys: ['label'] })
        }

        setInputValue(value)
        setOptions(options)
      }
    }

    const handleInputKeyDown = () => {
      if (isSearchable && !isOpen) {
        setIsOpen(true)
      }
    }

    // Send event to parent when value(s) changes
    const handleChange = (options: SelectOption[]) => {
      let values: SelectOptionValue[] = []

      if (groupsEnabled) {
        values = getValuesFromOptions(
          options,
          defaultOptions.flatMap((group: SelectOptionGroup) => group.options)
        )
      } else {
        values = getValuesFromOptions(options, defaultOptions)
      }

      const value = isMultiple ? values : values[0]
      const event = createEvent({ name, value: isMultiple ? options : options[0] })

      onChange?.(value, event)

      // If there are newly-created options, call `onCreate`
      if (isCreatable) {
        const newOptions = getNewOptions(options, defaultOptions)
        if (newOptions.length) {
          onCreate?.(newOptions[0].label, event)
        }
      }
    }

    // Update internal state when clicking/adding a select item
    const handleSelect = (option: SelectOption) => {
      let newItems
      let isClearInput

      if (!option || option?.disabled) {
        // If removing option
        newItems = isMultiple ? selected : []
        isClearInput = true
      } else {
        // If adding option
        newItems = isMultiple ? getUniqueValue(option, selected, allowUnselectFromList) : [option]
        isClearInput = isMultiple
      }

      if (isClearInput) setInputValue('')
      setOptions(defaultOptions)
      setSelected(newItems)
      handleChange(newItems)
      if (!disableCloseOnSelect) {
        setIsOpen(false)
      }
    }

    const handleRemove = (value: string) => {
      const newItems = selected.filter(item => item.value !== value)
      setSelected(newItems)
      handleChange(newItems)
    }

    const handleOuterClick = (e: ControllerStateAndHelpers<SelectOption>) => {
      // Reset input value if not selecting a new item
      if (isMultiple && e.selectedItem) {
        setInputValue('')
      } else if (isSearchable && e.selectedItem) {
        setInputValue(e.selectedItem.label)
      }
      setOptions(defaultOptions)
      setIsOpen(false)
    }

    const spacer = getSpacer(defaultOptions)

    const inputContent = getInputValue({
      inputValue,
      isMultiple,
      isSearchable,
      options: defaultOptions as SelectOption[],
      renderItem,
    })

    return (
      <Downshift
        id={id}
        inputValue={isSearchable ? (inputContent as string) : ''}
        isOpen={isOpen}
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
        }) => {
          const isShowCreate = !!(
            isCreatable &&
            inputValue &&
            !isValueSelected(inputValue, selected)
          )
          const isShowMenu = isOpen && (options.length || isShowCreate)
          const isShowDeleteIcon = isClearable && inputValue

          const DeleteIcon = (
            <div className={cx('dropdown-indicator', isOpen && 'open')}>
              {/* TODO migrate after WUI-214/clearbutton */}
              <ClearButton
                onClick={clearSelection as unknown as React.MouseEventHandler<HTMLButtonElement>}
              />
            </div>
          )
          const ArrowIcon = (
            <div
              className={cx('dropdown-indicator', isOpen && 'open')}
              data-testid={dataTestId ? `${dataTestId}-arrow-icon` : null}
              disabled={disabled}
              tabIndex={-1}
              {...getToggleButtonProps({
                onClick: () => setIsOpen(!isOpen),
              })}
            >
              <DownIcon className={cx('styled-icon')} size="sm" />
            </div>
          )

          const handleInputClick = (e: React.MouseEvent<HTMLElement>) => {
            onClick?.(e)
            setIsOpen(!isOpen)
          }

          const rootProps = getRootProps(rest as GetRootPropsOptions)
          const inputProps = getInputProps({
            autoComplete,
            autoFocus,
            'data-spacer': spacer || placeholder,
            'data-testid': dataTestId,
            disabled,
            iconPlacement: icon ? 'both' : 'right',
            id,
            isClearable,
            name,
            onBlur,
            onClick: disabled ? undefined : handleInputClick,
            onFocus,
            onKeyDown: handleInputKeyDown,
            placeholder,
            ref,
            size,
            tabIndex: 0,
            transparent,
            variant: isOpen ? 'focused' : variant,
            ...rest,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
          }) as any
          const iconSize = FIELD_ICON_SIZE[size]

          const inputClassnames = cx(
            'root',
            `size-${size}`,
            variant && `variant-${variant}`,
            isClearable && 'clearable',
            transparent && 'transparent',
            icon ? 'icon-placement-both' : 'icon-placement-right'
          )

          return (
            <div {...rootProps} className={cx('wrapper', disabled && 'disabled')}>
              <div className="relative">
                {isSearchable ? (
                  <input className={inputClassnames} type="text" {...inputProps} />
                ) : (
                  <div className={inputClassnames} {...inputProps}>
                    {inputContent}
                  </div>
                )}
                {icon ? (
                  <div className={cx('icon-wrapper', `icon-placement-left`, `size-${size}`)}>
                    {React.cloneElement(icon, { ...icon.props, size: iconSize })}
                  </div>
                ) : null}
                <div className={cx('indicators', `size-${size}`)}>
                  {isShowDeleteIcon ? DeleteIcon : null}
                  {ArrowIcon}
                </div>
              </div>
              {isShowMenu ? (
                <ul className={cx('menu')} {...getMenuProps()}>
                  {
                    options.reduce(
                      (
                        acc: { itemIndex: number; itemsToRender: React.ReactElement[] },
                        result: SelectOptionItem,
                        resultIndex: number
                      ) => {
                        if (groupsEnabled && 'options' in result) {
                          acc.itemsToRender.push(
                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                            // @ts-ignore
                            <Fragment key={result.label}>
                              {renderGroupHeader(result)}
                              {result.options
                                ? result.options.map(option => {
                                    const index = acc.itemIndex++
                                    const isItemSelected = isValueSelected(option.value, selected)
                                    const isHighlighted = highlightedIndex === index

                                    return (
                                      <li
                                        allowUnselectFromList={allowUnselectFromList}
                                        className={cx(
                                          'item',
                                          isHighlighted && 'highlighted',
                                          isMultiple && 'multiple',
                                          allowUnselectFromList && 'allowUnselectFromList',
                                          option.disabled && 'disabled',
                                          isItemSelected && 'selected'
                                        )}
                                        key={option.value}
                                        {...getItemProps({
                                          index,
                                          isSelected: isItemSelected,
                                          item: option,
                                        })}
                                      >
                                        {renderItem(option, isItemSelected)}
                                      </li>
                                    )
                                  })
                                : null}
                            </Fragment>
                          )
                        } else if ('value' in result) {
                          const isItemSelected = isValueSelected(result.value, selected)
                          const isHighlighted = highlightedIndex === resultIndex

                          acc.itemsToRender.push(
                            <li
                              className={cx(
                                'item',
                                isHighlighted && 'highlighted',
                                isMultiple && 'multiple',
                                allowUnselectFromList && 'allowUnselectFromList',
                                result.disabled && 'disabled',
                                isItemSelected && 'selected'
                              )}
                              key={result.value}
                              {...getItemProps({
                                index: resultIndex,
                                isSelected: isItemSelected,
                                item: result,
                              })}
                            >
                              {renderItem(result, isItemSelected)}
                            </li>
                          )
                        }

                        return acc
                      },
                      { itemIndex: 0, itemsToRender: [] }
                    ).itemsToRender
                  }
                  {isShowCreate && inputValue.length ? (
                    <li
                      className={cx('item', highlightedIndex === options.length && 'highlighted')}
                      key="add"
                      {...getItemProps({
                        index: options.length,
                        item: {
                          label: inputValue,
                          value: kebabCase(inputValue),
                        },
                      })}
                    >
                      {renderCreateItem(inputValue)}
                    </li>
                  ) : null}
                </ul>
              ) : null}
              {isMultiple ? renderMultiple(selected, handleRemove) : null}
            </div>
          )
        }}
      </Downshift>
    )
  }
)
