import React, { forwardRef, Fragment, useEffect, useMemo, useState } from 'react'
import Downshift, { ControllerStateAndHelpers, DownshiftProps } from 'downshift'
import { matchSorter } from 'match-sorter'
import { DownIcon } from '@welcome-ui/icons.down'
import { ClearButton } from '@welcome-ui/clear-button'
import { createEvent, Variant } from '@welcome-ui/utils'
import { WuiProps } from 'System'

import { kebabCase, OptionGroup, OptionItem, Options } from './utils'
import { multipleSelections } from './multipleSelections'
import * as S from './styles'
import {
  getInputValue,
  getNewOptions,
  getOptionsFromSelected,
  getSpacer,
  getUniqueValue,
  getValuesFromOptions,
  isValueSelected,
  itemToString,
  Option,
} from './utils'

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export type SelectValue = string

export interface SelectOptions {
  autoComplete: string
  autoFocus: boolean
  dataTestId: string
  disabled: boolean
  icon: string
  id: string
  isClearable: boolean
  isCreatable: boolean
  isMultiple: boolean
  isSearchable: boolean
  options: Options
  name: string
  onBlur: () => void
  onClick: (event: React.MouseEvent<HTMLElement>) => void
  onChange: (
    value: string | string[],
    event: { preventDefault: () => void; target: Record<string, unknown> }
  ) => void
  onCreate: (
    option: string,
    event: { preventDefault: () => void; target: Record<string, unknown> }
  ) => void
  onFocus: () => void
  placeholder: string
  renderCreateItem: (inputValue: SelectValue) => void
  renderItem: (item: Option, isItemSelected?: boolean) => string
  renderMultiple: (values: Option[], handleRemove: (value: string) => void) => React.ReactElement
  size: Size
  value: SelectValue
  variant: Variant
  allowUnselectFromList: boolean
  disableCloseOnSelect: boolean
  groupsEnabled: boolean
  renderGroupHeader: (option: OptionGroup) => void
}

export type SelectProps = SelectOptions & WuiProps & DownshiftProps<Option>

/** We need to add autoComplete off to avoid select UI issues when is an input */
export const SelectInner = (
  {
    autoComplete = 'off',
    autoFocus,
    dataTestId,
    disabled,
    icon,
    id,
    isClearable,
    isCreatable,
    isMultiple,
    isSearchable,
    options: defaultOptions = [],
    name,
    onBlur,
    onChange,
    onClick,
    onCreate,
    onFocus,
    placeholder = 'Choose from…',
    renderCreateItem = (inputValue: string) => `Create "${inputValue}"`,
    renderItem = itemToString,
    renderMultiple = multipleSelections,
    size = 'lg',
    value: defaultSelected,
    variant,
    allowUnselectFromList,
    disableCloseOnSelect,
    groupsEnabled,
    renderGroupHeader,
    ...rest
  }: SelectProps,
  ref: React.MutableRefObject<HTMLInputElement>
): JSX.Element => {
  const defaultSelecteds = useMemo(
    () => getOptionsFromSelected(defaultSelected, defaultOptions),
    [defaultSelected, defaultOptions]
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
      ref?.current?.focus()
      isSearchable && setIsOpen(true)
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
      const options = matchSorter(defaultOptions, value, { keys: ['label'] })
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
  const handleChange = (options: Option[]) => {
    const values = getValuesFromOptions(options, defaultOptions)
    const value = isMultiple ? values : values[0]
    const event = createEvent({ name, value: isMultiple ? options : options[0] })

    onChange && onChange(value, event)

    // If there are newly-created options, call `onCreate`
    if (isCreatable) {
      const newOptions = getNewOptions(options, defaultOptions)
      if (newOptions.length) {
        onCreate && onCreate(newOptions[0].label, event)
      }
    }
  }

  // Update internal state when clicking/adding a select item
  const handleSelect = (option: Option) => {
    let newItems
    let isClearInput

    if (!option) {
      // If removing option
      newItems = isMultiple ? selected : []
      isClearInput = true
    } else {
      // If adding option
      newItems = isMultiple ? getUniqueValue(option, selected, allowUnselectFromList) : [option]
      isClearInput = isMultiple
    }

    isClearInput && setInputValue('')
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

  const handleOuterClick = (e: ControllerStateAndHelpers<Option>) => {
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
    options: defaultOptions as Option[],
    renderItem,
  })

  return (
    <Downshift
      id={id}
      inputValue={isSearchable ? inputContent : ''}
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
        const isShowCreate = !!(isCreatable && inputValue && !isValueSelected(inputValue, selected))
        const isShowMenu = isOpen && (options.length || isShowCreate)
        const isShowDeleteIcon = isClearable && inputValue

        const DeleteIcon = (
          <S.DropDownIndicator as="div" size={size}>
            <ClearButton
              onClick={clearSelection as unknown as React.MouseEventHandler<HTMLButtonElement>}
            />
          </S.DropDownIndicator>
        )
        const ArrowIcon = (
          <S.DropDownIndicator
            data-testid={dataTestId && `${dataTestId}-arrow-icon`}
            disabled={disabled}
            isOpen={isOpen}
            size={size}
            tabIndex={-1}
            {...getToggleButtonProps({
              onClick: () => setIsOpen(!isOpen),
            })}
          >
            <DownIcon color="nude.800" size="xs" />
          </S.DropDownIndicator>
        )

        const handleInputClick = (e: React.MouseEvent<HTMLElement>) => {
          onClick && onClick(e)
          setIsOpen(!isOpen)
        }

        const rootProps = getRootProps({ refKey: '', ...rest })
        const inputProps = getInputProps({
          autoComplete,
          autoFocus,
          'data-spacer': spacer || placeholder,
          'data-testid': dataTestId,
          disabled,
          hasIcon: !!icon,
          id,
          name,
          onBlur,
          onClick: disabled ? undefined : handleInputClick,
          onFocus,
          onKeyDown: handleInputKeyDown,
          placeholder,
          ref,
          size,
          tabIndex: 0,
          variant: isOpen ? 'focused' : variant,
          ...rest,
        })

        return (
          <S.Wrapper {...rootProps}>
            <S.InputWrapper>
              {isSearchable ? (
                <S.Input as="input" type="text" {...inputProps} />
              ) : (
                <S.Input {...inputProps}>{inputContent}</S.Input>
              )}
              {icon && <S.Icon size={size}>{icon}</S.Icon>}
              <S.Indicators>
                {isShowDeleteIcon && DeleteIcon}
                {ArrowIcon}
              </S.Indicators>
            </S.InputWrapper>
            {isShowMenu && (
              <S.Menu {...getMenuProps()}>
                {
                  options.reduce(
                    (
                      acc: { itemsToRender: React.ReactElement[]; itemIndex: number },
                      result: OptionItem,
                      resultIndex: number
                    ) => {
                      if (groupsEnabled && 'options' in result) {
                        acc.itemsToRender.push(
                          <Fragment key={result.label}>
                            {renderGroupHeader(result)}
                            {result.options &&
                              result.options.map(option => {
                                const index = acc.itemIndex++
                                const isItemSelected = isValueSelected(option.value, selected)
                                return (
                                  <S.Item
                                    allowUnselectFromList={allowUnselectFromList}
                                    isHighlighted={highlightedIndex === index}
                                    isMultiple={isMultiple}
                                    key={option.value}
                                    {...getItemProps({
                                      index,
                                      isSelected: isItemSelected,
                                      item: option,
                                    })}
                                  >
                                    {renderItem(option, isItemSelected)}
                                  </S.Item>
                                )
                              })}
                          </Fragment>
                        )
                      } else if ('value' in result) {
                        const isItemSelected = isValueSelected(result.value, selected)
                        acc.itemsToRender.push(
                          <S.Item
                            allowUnselectFromList={allowUnselectFromList}
                            isHighlighted={highlightedIndex === resultIndex}
                            isMultiple={isMultiple}
                            key={result.value}
                            {...getItemProps({
                              index: resultIndex,
                              isSelected: isItemSelected,
                              item: result,
                            })}
                          >
                            {renderItem(result, isItemSelected)}
                          </S.Item>
                        )
                      }

                      return acc
                    },
                    { itemsToRender: [], itemIndex: 0 }
                  ).itemsToRender
                }
                {isShowCreate && inputValue.length && (
                  <S.Item
                    isHighlighted={highlightedIndex === options.length}
                    key="add"
                    {...getItemProps({
                      index: options.length,
                      item: {
                        value: kebabCase(inputValue),
                        label: inputValue,
                      },
                    })}
                  >
                    {renderCreateItem(inputValue)}
                  </S.Item>
                )}
              </S.Menu>
            )}
            {isMultiple && renderMultiple(selected, handleRemove)}
          </S.Wrapper>
        )
      }}
    </Downshift>
  )
}

export const Select = forwardRef(SelectInner)

export const StyledSelect = S.Wrapper
