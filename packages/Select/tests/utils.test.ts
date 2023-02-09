import capitalize from 'lodash.capitalize'

import { SelectValue } from '../src'
import {
  getInputValue,
  getNewOptions,
  getOptionsFromSelected,
  getSpacer,
  getUniqueValue,
  getValuesFromOptions,
  isValueSelected,
  itemToString,
} from '../src/utils'

const OPTIONS = [
  'january',
  'february',
  'march',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'october',
  'november',
  'december',
].map(month => ({ label: capitalize(month), value: month }))

const SELECTED = ['february', 'march'].map(month => ({ label: capitalize(month), value: month }))

test('getSpacer returns the longest value', () => {
  expect(getSpacer(OPTIONS)).toBe('September')
})

test('getNewOptions returns an array with new options', () => {
  const newOptions = getNewOptions([...SELECTED, { label: 'Jim', value: 'jim' }], OPTIONS)
  expect(newOptions).toStrictEqual([{ label: 'Jim', value: 'jim' }])
})

test('getNewOptions returns an empty array if no new options', () => {
  const newOptions = getNewOptions(SELECTED, OPTIONS)
  expect(newOptions).toStrictEqual([])
})

test('isValueSelected returns true if value is in selected values', () => {
  expect(isValueSelected('february', SELECTED)).toBe(true)
})

test('isValueSelected returns false if value is not in selected values', () => {
  expect(isValueSelected('april', SELECTED)).toBe(false)
})

const DEFAULT_INPUT_VALUE_ARGS = {
  inputValue: 'February',
  isMultiple: false,
  isSearchable: false,
  options: OPTIONS,
  renderItem: itemToString,
}

test('getInputValue returns original string if simple select', () => {
  const inputValue = getInputValue(DEFAULT_INPUT_VALUE_ARGS)
  expect(inputValue).toBe('February')
})

test('getInputValue returns empty string if isMultiple', () => {
  const inputValue = getInputValue({ ...DEFAULT_INPUT_VALUE_ARGS, isMultiple: true })
  expect(inputValue).toBe('February')
})

test('getInputValue returns original string if isSearchable', () => {
  const inputValue = getInputValue({ ...DEFAULT_INPUT_VALUE_ARGS, isSearchable: true })
  expect(inputValue).toBe('February')
})

test('getInputValue returns empty string if isMultiple && isSearchable', () => {
  const inputValue = getInputValue({
    ...DEFAULT_INPUT_VALUE_ARGS,
    isMultiple: true,
    isSearchable: true,
  })
  expect(inputValue).toBe('February')
})

test('getInputValue returns rendered string if renderItem is supplied', () => {
  const inputValue = getInputValue({
    ...DEFAULT_INPUT_VALUE_ARGS,
    renderItem: () => 'Hello February',
  })
  expect(inputValue).toBe('Hello February')
})

test('getInputValue returns original string if isSearchable and renderItem is supplied', () => {
  const inputValue = getInputValue({
    ...DEFAULT_INPUT_VALUE_ARGS,
    isSearchable: true,
    renderItem: () => 'Hello February',
  })
  expect(inputValue).toBe('February')
})

test('getOptionsFromSelected returns correct options', () => {
  const options = getOptionsFromSelected('february', OPTIONS)
  expect(options).toStrictEqual([OPTIONS[1]])
})

test('getOptionsFromSelected returns empty array if SELECTED not passed', () => {
  const options = getOptionsFromSelected(undefined as unknown as SelectValue, OPTIONS)
  expect(options).toStrictEqual([])
})

test('getOptionsFromSelected returns empty array if no SELECTED', () => {
  const options = getOptionsFromSelected([], OPTIONS)
  expect(options).toStrictEqual([])
})

test('getOptionsFromSelected returns empty array if no SELECTED', () => {
  const options = getOptionsFromSelected('', OPTIONS)
  expect(options).toStrictEqual([])
})

test('getOptionsFromSelected returns empty array if no SELECTED', () => {
  const options = getOptionsFromSelected(0, OPTIONS)
  expect(options).toStrictEqual([{ value: '0', label: 0 }])
})

test('getUniqueValue returns options with duplicates removed', () => {
  const uniqueValue = getUniqueValue(OPTIONS[1], SELECTED)
  expect(uniqueValue).toStrictEqual(SELECTED)
})

test('getUniqueValue returns options with new items added', () => {
  const uniqueValue = getUniqueValue(OPTIONS[0], SELECTED)
  expect(uniqueValue).toStrictEqual([...SELECTED, OPTIONS[0]])
})

test('getValuesFromOptions returns values when choosing from existing options', () => {
  const values = getValuesFromOptions(SELECTED, OPTIONS)
  expect(values).toStrictEqual(['february', 'march'])
})

test('getValuesFromOptions returns label when adding new item', () => {
  const selected = [...SELECTED, { label: 'Kayab', value: 'kayab' }]
  const values = getValuesFromOptions(selected, OPTIONS)
  expect(values).toStrictEqual(['february', 'march', 'Kayab'])
})
