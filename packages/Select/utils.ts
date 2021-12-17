import React from 'react'

import { Option, OptionItem, Options, OptionValue, SelectValue } from './index'

const EMPTY_STRING = ''

export const kebabCase = (str: string | number | Option): string => {
  if (typeof str === 'number') {
    return String(str)
  } else if (typeof str === 'string') {
    const match = str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    return match && match.map(x => x.toLowerCase()).join('-')
  }
}

export const itemToString = (item: Option): string => (item ? item.label : EMPTY_STRING)

export const getSpacer = (options: Options): string => {
  return options.reduce(
    (prev: string, current: OptionItem) =>
      current.label && prev.length > current.label.length ? prev : current.label,
    EMPTY_STRING
  )
}

export const getUniqueValue = (
  item: Option,
  values: Option[],
  allowUnselectFromList?: boolean
): Option[] => {
  const isExisting = values.find(value => item.value === value.value)

  if (isExisting && allowUnselectFromList) {
    return values.filter(value => item.value !== value.value)
  }
  return isExisting ? values : [...values, item]
}

export const isValueSelected = (value: OptionValue, options: Option[]): boolean =>
  !!options.find(item => item.value === value)

export const getOption = (value: string | number | Option, options: Options = []): Option => {
  const option = options.find(
    option =>
      option.label === ((value as Option).label || value) ||
      (option as Option).value === ((value as Option).value || value)
  )
  // Create the option if it doesn't exist
  return (option as Option) || ({ value: kebabCase(value), label: value } as Option)
}

export const getOptionsFromSelected = (selected: SelectValue, options: Options): Option[] => {
  if (!selected && selected !== 0) {
    return []
  } else if (Array.isArray(selected)) {
    return selected.map(value => getOption(value, options))
  } else {
    return [getOption(selected, options)]
  }
}

const getIsExisting = (option: Option, options: Options): boolean =>
  !!options.find((item: Option) => item.value === option.value)

const getValue = (option: Option, options: Options): OptionValue =>
  getIsExisting(option, options) ? option.value : option.label

export const getValuesFromOptions = (selected: Option[], options: Options): OptionValue[] => {
  if (!selected) {
    return
  }
  return selected.map(selected => getValue(selected, options))
}

export const getNewOptions = (selected: Option[], options: Options): Option[] => {
  if (!selected) {
    return
  }
  // Find selected items that aren't in original items
  return selected.filter(item => !options.find((option: Option) => option.value === item.value))
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
  options: Option[]
  renderItem: (option: Option) => string | React.ReactElement
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
