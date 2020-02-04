import kebabCase from 'lodash.kebabcase'

const EMPTY_STRING = ''

export const itemToString = item => (item ? item.label : EMPTY_STRING)

export const getSpacer = options =>
  options.reduce(
    (prev, current) => (current.label && prev.length > current.label.length ? prev : current.label),
    EMPTY_STRING
  )

export const getUniqueValue = (item, values) => {
  const isExisting = values.find(value => item.value === value.value)
  return isExisting ? values : [...values, item]
}

export const isValueSelected = (value, options) => !!options.find(item => item.value === value)

export const getOption = (value, options = []) => {
  const option = options.find(
    option => option.label === (value.label || value) || option.value === (value.value || value)
  )
  // Create the option if it doesn't exist
  return option || { value: kebabCase(value), label: value }
}

export const getOptionsFromSelected = (selected, options) => {
  if (!selected && selected !== 0) {
    return []
  } else if (Array.isArray(selected)) {
    return selected.map(value => getOption(value, options))
  } else {
    return [getOption(selected, options)]
  }
}

const getIsExisting = (option, options) => !!options.find(item => item.value === option.value)

const getValue = (option, options) => (getIsExisting(option, options) ? option.value : option.label)

export const getValuesFromOptions = (selected, options) => {
  if (!selected) {
    return
  }
  return selected.map(selected => getValue(selected, options))
}

export const getNewOptions = (selected, options) => {
  if (!selected) {
    return
  }
  // Find selected items that aren't in original items
  return selected.filter(item => !options.find(option => option.value === item.value))
}

export const getInputValue = ({ inputValue, isMultiple, isSearchable, options, renderItem }) => {
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
