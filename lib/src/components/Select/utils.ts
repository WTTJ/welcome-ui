import type React from 'react'

import type {
  SelectOption,
  SelectOptionGroup,
  SelectOptionItem,
  SelectOptionsType,
  SelectOptionValue,
  SelectValue,
} from './index'

const EMPTY_STRING = ''

export const kebabCase = (str: number | SelectOption | string): string | undefined => {
  if (typeof str === 'number') {
    return String(str)
  } else if (typeof str === 'string') {
    const match = str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    return (match && match.map(x => x.toLowerCase()).join('-')) || undefined
  }

  return undefined
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
  value: number | SelectOption | string,
  options: SelectOptionsType = []
): SelectOption => {
  const option = options.find(
    option =>
      option.label === ((value as SelectOption).label || value) ||
      (option as SelectOption).value === ((value as SelectOption).value || value)
  )
  // Create the option if it doesn't exist
  return (option as SelectOption) || ({ label: value, value: kebabCase(value) } as SelectOption)
}

export const getOptionsFromSelected = ({
  groupsEnabled = false,
  options,
  selected,
}: {
  groupsEnabled?: boolean
  options: SelectOptionsType
  selected?: SelectValue
}): SelectOption[] => {
  const availableOptions = groupsEnabled
    ? // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      options.flatMap((group: SelectOptionGroup) => group.options)
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
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  !!options.find((item: SelectOption) => item.value === option.value)

const getValue = (option: SelectOption, options: SelectOptionsType): SelectOptionValue =>
  getIsExisting(option, options) ? option.value : option.label

export const getValuesFromOptions = (
  selected: SelectOption[],
  options: SelectOptionsType
): null | SelectOptionValue[] => {
  if (!selected) {
    return null
  }
  return selected.map(selected => getValue(selected, options))
}

export const getNewOptions = (
  selected: SelectOption[],
  options: SelectOptionsType
): null | SelectOption[] => {
  if (!selected) {
    return null
  }
  // Find selected items that aren't in original items
  return selected.filter(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
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
  renderItem: (option: SelectOption) => React.ReactElement | string
}): React.ReactElement | string => {
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
