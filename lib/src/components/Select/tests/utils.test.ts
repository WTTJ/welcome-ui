import capitalize from 'lodash.capitalize'

import { SelectValue } from '../'
import {
  getInputValue,
  getNewOptions,
  getOptionsFromSelected,
  getSpacer,
  getUniqueValue,
  getValuesFromOptions,
  isValueSelected,
  itemToString,
} from '../utils'

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

const OPT_GROUP = [
  {
    label: 'Professional networks',
    options: [
      { value: 'behance', label: 'Behance', disabled: true },
      { value: 'dribbble', label: 'Dribbble' },
      { value: 'github', label: 'Github' },
    ],
  },
  {
    label: 'Personal networks',
    options: [
      { value: 'instagram', label: 'Instagram' },
      { value: 'facebook', label: 'Facebook' },
    ],
  },
]

describe('<Select>', () => {
  it('getSpacer returns the longest value', () => {
    expect(getSpacer(OPTIONS)).toBe('September')
  })

  it('getNewOptions returns an array with new options', () => {
    const newOptions = getNewOptions([...SELECTED, { label: 'Jim', value: 'jim' }], OPTIONS)
    expect(newOptions).toStrictEqual([{ label: 'Jim', value: 'jim' }])
  })

  it('getNewOptions returns an empty array if no new options', () => {
    const newOptions = getNewOptions(SELECTED, OPTIONS)
    expect(newOptions).toStrictEqual([])
  })

  it('isValueSelected returns true if value is in selected values', () => {
    expect(isValueSelected('february', SELECTED)).toBe(true)
  })

  it('isValueSelected returns false if value is not in selected values', () => {
    expect(isValueSelected('april', SELECTED)).toBe(false)
  })

  const DEFAULT_INPUT_VALUE_ARGS = {
    inputValue: 'February',
    isMultiple: false,
    isSearchable: false,
    options: OPTIONS,
    renderItem: itemToString,
  }

  it('getInputValue returns original string if simple select', () => {
    const inputValue = getInputValue(DEFAULT_INPUT_VALUE_ARGS)
    expect(inputValue).toBe('February')
  })

  it('getInputValue returns empty string if isMultiple', () => {
    const inputValue = getInputValue({ ...DEFAULT_INPUT_VALUE_ARGS, isMultiple: true })
    expect(inputValue).toBe('February')
  })

  it('getInputValue returns original string if isSearchable', () => {
    const inputValue = getInputValue({ ...DEFAULT_INPUT_VALUE_ARGS, isSearchable: true })
    expect(inputValue).toBe('February')
  })

  it('getInputValue returns empty string if isMultiple && isSearchable', () => {
    const inputValue = getInputValue({
      ...DEFAULT_INPUT_VALUE_ARGS,
      isMultiple: true,
      isSearchable: true,
    })
    expect(inputValue).toBe('February')
  })

  it('getInputValue returns rendered string if renderItem is supplied', () => {
    const inputValue = getInputValue({
      ...DEFAULT_INPUT_VALUE_ARGS,
      renderItem: () => 'Hello February',
    })
    expect(inputValue).toBe('Hello February')
  })

  it('getInputValue returns original string if isSearchable and renderItem is supplied', () => {
    const inputValue = getInputValue({
      ...DEFAULT_INPUT_VALUE_ARGS,
      isSearchable: true,
      renderItem: () => 'Hello February',
    })
    expect(inputValue).toBe('February')
  })

  it('getOptionsFromSelected returns correct options', () => {
    const options = getOptionsFromSelected('february', OPTIONS)
    expect(options).toStrictEqual([OPTIONS[1]])
  })

  it('getOptionsFromSelected returns empty array if SELECTED not passed', () => {
    const options = getOptionsFromSelected(undefined as unknown as SelectValue, OPTIONS)
    expect(options).toStrictEqual([])
  })

  it('getOptionsFromSelected returns empty array if no SELECTED', () => {
    const options = getOptionsFromSelected([], OPTIONS)
    expect(options).toStrictEqual([])
  })

  it('getOptionsFromSelected returns empty array if no SELECTED', () => {
    const options = getOptionsFromSelected('', OPTIONS)
    expect(options).toStrictEqual([])
  })

  it('getOptionsFromSelected returns empty array if no SELECTED', () => {
    const options = getOptionsFromSelected(0, OPTIONS)
    expect(options).toStrictEqual([{ value: '0', label: 0 }])
  })

  it('getOptionsFromSelected return correct options (with groupsEnabled)', () => {
    const options = getOptionsFromSelected('github', OPT_GROUP, true)
    expect(options).toStrictEqual([{ value: 'github', label: 'Github' }])
  })

  it('getUniqueValue returns options with duplicates removed', () => {
    const uniqueValue = getUniqueValue(OPTIONS[1], SELECTED)
    expect(uniqueValue).toStrictEqual(SELECTED)
  })

  it('getUniqueValue returns options with new items added', () => {
    const uniqueValue = getUniqueValue(OPTIONS[0], SELECTED)
    expect(uniqueValue).toStrictEqual([...SELECTED, OPTIONS[0]])
  })

  it('getValuesFromOptions returns values when choosing from existing options', () => {
    const values = getValuesFromOptions(SELECTED, OPTIONS)
    expect(values).toStrictEqual(['february', 'march'])
  })

  it('getValuesFromOptions returns label when adding new item', () => {
    const selected = [...SELECTED, { label: 'Kayab', value: 'kayab' }]
    const values = getValuesFromOptions(selected, OPTIONS)
    expect(values).toStrictEqual(['february', 'march', 'Kayab'])
  })
})
