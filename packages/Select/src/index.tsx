import React, { Fragment, useEffect, useMemo, useState } from 'react'
import DownshiftImport, {
  ControllerStateAndHelpers,
  DownshiftProps,
  GetRootPropsOptions,
} from 'downshift'
import { matchSorter } from 'match-sorter'
import { DownIcon } from '@welcome-ui/icons'
import { ClearButton } from '@welcome-ui/clear-button'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'
import {
  createEvent,
  CreateEvent,
  DefaultFieldStylesProps,
  FIELD_ICON_SIZE,
} from '@welcome-ui/utils'
import { IconWrapper } from '@welcome-ui/field'

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
import { multipleSelections } from './multipleSelections'
import * as S from './styles'

export type OptionValue = string | number
export type Option = {
  label: string
  value: OptionValue
  icon?: React.ReactElement
  disabled?: boolean
}
export type OptionGroup = { label: string; options: Option[] }
export type OptionItem = Option | OptionGroup
export type Options = Array<Option | OptionGroup>
export type SelectValue = string | number | string[] | Option | (string | number | Option)[]

export interface SelectOptions extends DefaultFieldStylesProps {
  /** We need to add `autoComplete` off to avoid select UI issues when is an input */
  autoComplete?: string
  autoFocus?: boolean
  disabled?: boolean
  icon?: React.ReactElement
  id?: string
  isClearable?: boolean
  isCreatable?: boolean
  isMultiple?: boolean
  isSearchable?: boolean
  options: Options
  name?: string
  onBlur?: () => void
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
  onChange?: (value: OptionValue | OptionValue[], event?: CreateEvent) => void
  onCreate?: (option: string, event: CreateEvent) => void
  onFocus?: () => void
  placeholder?: string
  renderCreateItem?: (inputValue: SelectValue) => void
  renderItem?: (item: Option | unknown, isItemSelected?: boolean) => string | React.ReactElement
  renderMultiple?: (values: Option[], handleRemove: (value: string) => void) => React.ReactElement
  value?: SelectValue
  allowUnselectFromList?: boolean
  disableCloseOnSelect?: boolean
  groupsEnabled?: boolean
  renderGroupHeader?: (option: OptionGroup) => React.ReactNode
  transparent?: boolean
}
export type SelectProps = CreateWuiProps<
  'input',
  SelectOptions & Omit<DownshiftProps<Option>, keyof SelectOptions | 'children'>
>

// because of this issue: https://github.com/downshift-js/downshift/issues/1505
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const Downshift: typeof DownshiftImport = DownshiftImport.default || DownshiftImport

/** We need to add autoComplete off to avoid select UI issues when is an input */
export const Select = forwardRef<'input', SelectProps>(
  (
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
      size = 'md',
      value: defaultSelected,
      variant,
      allowUnselectFromList,
      disableCloseOnSelect,
      groupsEnabled,
      renderGroupHeader,
      transparent,
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
      let values: OptionValue[] = []

      if (groupsEnabled) {
        values = getValuesFromOptions(
          options,
          defaultOptions.flatMap((group: OptionGroup) => group.options)
        )
      } else {
        values = getValuesFromOptions(options, defaultOptions)
      }

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

      if (!option || option?.disabled) {
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
            <S.DropDownIndicator as="div">
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
              <DownIcon color="dark-900" size="sm" />
            </S.DropDownIndicator>
          )

          const handleInputClick = (e: React.MouseEvent<HTMLElement>) => {
            onClick && onClick(e)
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
            isClearable,
            transparent,
            ...rest,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
          }) as any
          const iconSize = FIELD_ICON_SIZE[size]

          return (
            <S.Wrapper {...rootProps}>
              <S.InputWrapper>
                {isSearchable ? (
                  <S.Input as="input" type="text" {...inputProps} />
                ) : (
                  <S.Input {...inputProps}>{inputContent}</S.Input>
                )}
                {icon && (
                  <IconWrapper iconPlacement="left" size={iconSize}>
                    {React.cloneElement(icon, { ...icon.props, size: iconSize })}
                  </IconWrapper>
                )}
                <S.Indicators size={size}>
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
                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                            // @ts-ignore
                            <Fragment key={result.label}>
                              {renderGroupHeader(result)}
                              {result.options &&
                                result.options.map(option => {
                                  const index = acc.itemIndex++
                                  const isItemSelected = isValueSelected(option.value, selected)
                                  return (
                                    <S.Item
                                      allowUnselectFromList={allowUnselectFromList}
                                      isDisabled={option.disabled}
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
                              isDisabled={result.disabled}
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
)

export const StyledSelect = S.Wrapper
