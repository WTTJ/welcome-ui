import kebabCase from 'lodash.kebabcase'
import uniqBy from 'lodash.uniqby'
import differenceBy from 'lodash.differenceby'

import { OPTION_TYPE, VALUE_TYPE } from '../../src/utils/propTypes'

const EMPTY_STRING = ''

export const itemToString = (item: OPTION_TYPE): string =>
  item ? String(item.label) : EMPTY_STRING

export const getSpacer = (options: OPTION_TYPE[]): string => {
  if (!options) {
    return ''
  }
  return options.reduce((prev, current) => {
    const label = String(current.label)
    return label && prev.length > label.length ? prev : label
  }, EMPTY_STRING)
}

export const getUniqueValue = (item: OPTION_TYPE, values: OPTION_TYPE[]): OPTION_TYPE =>
  uniqBy([...values, item], item => item.value)

export const isValueSelected = (value: string | number, options: OPTION_TYPE[]): boolean =>
  !!options.find(item => item.value === value)

export const getOption = (
  value: OPTION_TYPE | string | number,
  options: OPTION_TYPE[] = []
): OPTION_TYPE => {
  let givenLabel = value
  let givenValue = value
  if (typeof value === 'object') {
    givenLabel = value.label
    givenValue = value.value
  }
  const option = options.find(option => option.label === givenLabel || option.value === givenValue)
  // Create the option if it doesn't exist
  if (option) {
    return option
  }

  return { value: kebabCase(value), label: String(value) }
}

export const getOptionsFromSelected = (
  selected: VALUE_TYPE,
  options: OPTION_TYPE[]
): OPTION_TYPE[] => {
  if (!selected && selected !== 0) {
    return []
  }
  if (Array.isArray(selected)) {
    return selected.map((value: string | number): OPTION_TYPE => getOption(value, options))
  }
  return [getOption(selected, options)]
}

const getIsExisting = (option: OPTION_TYPE, options: OPTION_TYPE[]): boolean =>
  !!options.find(item => item.value === option.value)

const getValue = (option: OPTION_TYPE, options: OPTION_TYPE[]): string | number =>
  getIsExisting(option, options) ? option.value : option.label

export const getValuesFromOptions = (
  selected: OPTION_TYPE[],
  options: OPTION_TYPE[]
): (string | number)[] => {
  if (!selected) {
    return
  }
  return selected.map(selected => getValue(selected, options))
}

export const getNewOptions = (selected: OPTION_TYPE[], options: OPTION_TYPE[]): OPTION_TYPE[] => {
  if (!selected) {
    return
  }
  return differenceBy(selected, options, 'value')
}

export const getInputValue = ({
  inputValue,
  isMultiple,
  isSearchable,
  options,
  renderItem
}: {
  inputValue: string
  isMultiple: boolean
  isSearchable: boolean
  options: OPTION_TYPE[]
  renderItem(item: OPTION_TYPE): string
}): string => {
  const option = getOption(inputValue, options)

  if (isMultiple) {
    return inputValue
  }
  if (option.label) {
    if (isSearchable) {
      return String(option.label)
    } else {
      return renderItem(option)
    }
  }

  return EMPTY_STRING
}
