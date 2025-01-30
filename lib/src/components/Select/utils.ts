import React from 'react'

import {
  SelectOption,
  SelectOptionGroup,
  SelectOptionItem,
  SelectOptionsType,
  SelectOptionValue,
  SelectValue,
} from './index'

const EMPTY_STRING = ''

export const kebabCase = (str: string | number | SelectOption): string => {
  if (typeof str === 'number') {
    return String(str)
  } else if (typeof str === 'string') {
    const match = str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    return match && match.map(x => x.toLowerCase()).join('-')
  }
}

export const itemToString = (item: SelectOption): string => (item ? item.label : EMPTY_STRING)

export const getSpacer = (options: SelectOptionsType): string => {
  return options.reduce(
    (prev: string, current: SelectOptionItem) =>
      current.label && prev.length > current.label.length ? prev : current.label,
    EMPTY_STRING
  )
}

export const getUniqueValue = (
  item: SelectOption,
  values: SelectOption[],
  allowUnselectFromList?: boolean
): SelectOption[] => {
  const isExisting = values.find(value => item.value === value.value)

  if (isExisting && allowUnselectFromList) {
    return values.filter(value => item.value !== value.value)
  }
  return isExisting ? values : [...values, item]
}

export const isValueSelected = (value: SelectOptionValue, options: SelectOption[]): boolean =>
  !!options.find(item => item.value === value)

export const getOption = (
  value: string | number | SelectOption,
  options: SelectOptionsType = []
): SelectOption => {
  const option = options.find(
    option =>
      option.label === ((value as SelectOption).label || value) ||
      (option as SelectOption).value === ((value as SelectOption).value || value)
  )
  // Create the option if it doesn't exist
  return (option as SelectOption) || ({ value: kebabCase(value), label: value } as SelectOption)
}

export const getOptionsFromSelected = (
  selected: SelectValue,
  options: SelectOptionsType,
  groupsEnabled = false
): SelectOption[] => {
  const availableOptions = groupsEnabled
    ? options.flatMap((group: SelectOptionGroup) => group.options)
    : options

  if (!selected && selected !== 0) {
    return []
  } else if (Array.isArray(selected)) {
    return selected.map(value => getOption(value, availableOptions))
  } else {
    return [getOption(selected, availableOptions)]
  }
}

const getIsExisting = (option: SelectOption, options: SelectOptionsType): boolean =>
  !!options.find((item: SelectOption) => item.value === option.value)

const getValue = (option: SelectOption, options: SelectOptionsType): SelectOptionValue =>
  getIsExisting(option, options) ? option.value : option.label

export const getValuesFromOptions = (
  selected: SelectOption[],
  options: SelectOptionsType
): SelectOptionValue[] => {
  if (!selected) {
    return
  }
  return selected.map(selected => getValue(selected, options))
}

export const getNewOptions = (
  selected: SelectOption[],
  options: SelectOptionsType
): SelectOption[] => {
  if (!selected) {
    return
  }
  // Find selected items that aren't in original items
  return selected.filter(
    item => !options.find((option: SelectOption) => option.value === item.value)
  )
}

export const getInputValue = ({
  inputValue,
  isMultiple,
  isSearchable,
  options,
  renderItem,
}: {
  inputValue: string
  isMultiple: boolean
  isSearchable: boolean
  options: SelectOption[]
  renderItem: (option: SelectOption) => string | React.ReactElement
}): string | React.ReactElement => {
  const option = getOption(inputValue, options)

  if (isMultiple) {
    return inputValue
  }
  if (option.label) {
    if (isSearchable) {
      return option.label
    } else {
      return renderItem(option)
    }
  }

  return EMPTY_STRING
}
