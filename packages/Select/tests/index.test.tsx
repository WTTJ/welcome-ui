import React, { useState } from 'react'
import { fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import capitalize from 'lodash.capitalize'
import { AvatarIcon, DateIcon } from '@welcome-ui/icons'

import { render } from '../../../utils/tests'
import { Option, Select, SelectProps } from '../src'

const SelectWrapper: React.FC<SelectProps> = props => {
  const [value, setValue] = useState<SelectProps['value']>()

  const handleChange: SelectProps['onChange'] = newValue => {
    setValue(newValue)
  }

  return <Select onChange={handleChange} value={value} {...props} />
}

const MONTHS = [
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
].map(month => ({ label: capitalize(month), value: month, disabled: month === 'january' }))

const MONTHS_WITH_INTEGER_VALUES = MONTHS.map((item, index) => ({
  label: item.label,
  value: index,
}))

const SOCIAL_OPT_GROUP = [
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

test('<Select> accepts falsy option values (such as 0)', () => {
  const { getByTestId } = render(
    <Select dataTestId="select" name="select" options={MONTHS_WITH_INTEGER_VALUES} value={0} />
  )
  const select = getByTestId('select')

  expect(select).toHaveTextContent('January')
})

test('<Select> has default attributes', () => {
  const { getByTestId } = render(
    <Select dataTestId="select" name="select" options={MONTHS} value="january" />
  )
  const select = getByTestId('select')
  expect(select.getAttribute('placeholder')).toBe('Choose from…')
  expect(select.getAttribute('data-spacer')).toBe('September')
  expect(select).toHaveTextContent('January')
})

test('<Select> shows options on click (input)', () => {
  const { getByRole, getByTestId } = render(
    <Select dataTestId="select" name="select" options={MONTHS} />
  )

  const select = getByTestId('select')
  fireEvent.click(select)

  const options = getByRole('listbox').querySelectorAll('li')
  expect(options.length).toBe(12)
  expect(options[0]).toHaveTextContent('January')
})

test('<Select> shows options on click (arrow indicator)', () => {
  const { getByRole, getByTestId } = render(
    <Select dataTestId="select" name="select" options={MONTHS} />
  )

  const select = getByTestId('select-arrow-icon')
  fireEvent.click(select)

  const options = getByRole('listbox').querySelectorAll('li')
  expect(options.length).toBe(12)
  expect(options[0]).toHaveTextContent('January')
})

test.skip('<Select> can choose option', () => {
  const { getByRole, getByTestId } = render(
    <Select dataTestId="select" name="select" options={MONTHS} />
  )

  const select = getByTestId('select')
  fireEvent.click(select)

  let options = getByRole('listbox').querySelectorAll('li')
  fireEvent.click(options[1])
  expect(select).toHaveTextContent('February')

  // List is refilled
  fireEvent.click(select)

  options = getByRole('listbox').querySelectorAll('li')
  expect(options.length).toBe(12)
})

test('<Select> calls onChange with correct (object) values', () => {
  const handleChange = jest.fn()
  const { getByRole, getByTestId } = render(
    <Select dataTestId="select" name="select" onChange={handleChange} options={MONTHS} />
  )

  const select = getByTestId('select')
  fireEvent.click(select)

  const options = getByRole('listbox').querySelectorAll('li')
  fireEvent.click(options[1])

  expect(handleChange).toHaveBeenCalledTimes(1)
  expect(handleChange).toHaveBeenCalledWith(
    'february',
    expect.objectContaining({
      target: { name: 'select', value: { label: 'February', value: 'february', disabled: false } },
    }) // Ignore preventDefault
  )
})

test('<Select> calls onChange on disabled option', () => {
  const { getByRole, getByTestId } = render(
    <SelectWrapper dataTestId="select" name="select" options={MONTHS} />
  )

  const select = getByTestId('select')
  fireEvent.click(select)

  const options = getByRole('listbox').querySelectorAll('li')
  fireEvent.click(options[0])

  expect(select).toHaveTextContent('')
})

test('<Select isClearable> can remove option', () => {
  const { getByTestId, getByTitle } = render(
    <Select dataTestId="select" isClearable name="select" options={MONTHS} value="february" />
  )

  const select = getByTestId('select')
  expect(select).toHaveTextContent('February')

  // Click cross to remove selected option
  const clearButton = getByTitle('Clear')
  fireEvent.click(clearButton)
  expect(select).toHaveTextContent('')
})

test('<Select isMultiple> can select multiple items', () => {
  const { getAllByRole, getByRole, getByTestId } = render(
    <Select
      dataTestId="select"
      isMultiple
      name="select"
      options={MONTHS}
      value={['february', 'march']}
    />
  )

  const select = getByTestId('select')
  let tags = getAllByRole('listitem')
  expect(tags.length).toBe(2)

  fireEvent.click(select)

  // Click 4th result (April)
  const options = getByRole('listbox').querySelectorAll('li')
  fireEvent.click(options[3])

  tags = getAllByRole('listitem')
  expect(tags.length).toBe(3)
  expect(select).toHaveTextContent('')
  expect(tags.map(tag => tag.textContent)).toStrictEqual(['February', 'March', 'April'])
})

test('<Select isMultiple> cannot select disabled items', () => {
  const { getAllByRole, getByRole, getByTestId } = render(
    <Select
      dataTestId="select"
      isMultiple
      name="select"
      options={MONTHS}
      value={['february', 'march']}
    />
  )

  const select = getByTestId('select')
  let tags = getAllByRole('listitem')
  expect(tags.length).toBe(2)

  fireEvent.click(select)

  // Click 1st result (January)
  const options = getByRole('listbox').querySelectorAll('li')
  fireEvent.click(options[0])

  tags = getAllByRole('listitem')
  expect(tags.length).toBe(2)
  expect(tags.map(tag => tag.textContent)).toStrictEqual(['February', 'March'])
})

test('<Select> can accept value, label or object as value', () => {
  const { getAllByRole, getByRole, getByTestId } = render(
    <Select
      dataTestId="select"
      isMultiple
      name="select"
      options={MONTHS}
      value={[{ label: 'January', value: 'january' }, 'february', 'March']}
    />
  )

  const select = getByTestId('select')
  let tags = getAllByRole('listitem')
  expect(tags.length).toBe(3)

  fireEvent.click(select)

  // Click 4th result (April)
  const options = getByRole('listbox').querySelectorAll('li')
  fireEvent.click(options[3])

  tags = getAllByRole('listitem')
  expect(tags.length).toBe(4)

  expect(select).toHaveTextContent('')
  expect(tags.map(tag => tag.textContent)).toStrictEqual(['January', 'February', 'March', 'April'])
})

test('<Select isMultiple> can remove multiple items', () => {
  const { getAllByRole, getByTestId } = render(
    <Select
      dataTestId="select"
      isMultiple
      name="select"
      options={MONTHS}
      value={['february', 'march']}
    />
  )

  const select = getByTestId('select')
  let tags = getAllByRole('listitem')
  expect(tags.length).toBe(2)

  const removeButton = tags[1].querySelector('[title=Remove]')
  fireEvent.click(removeButton as HTMLButtonElement)
  tags = getAllByRole('listitem')
  expect(tags.length).toBe(1)

  expect(select).toHaveTextContent('')
  expect(tags.map(tag => tag.textContent)).toStrictEqual(['February'])
})

test.skip("<Select> doesn't show clear button", () => {
  const { getByRole, getByTestId, queryByTitle } = render(
    <Select dataTestId="select" name="select" options={MONTHS} />
  )

  const select = getByTestId('select')
  fireEvent.click(select)

  const options = getByRole('listbox').querySelectorAll('li')
  fireEvent.click(options[1])
  expect(select).toHaveTextContent('February')

  // Use `queryByTitle` to expect no clear button
  const clearButton = queryByTitle('Clear')
  expect(clearButton).toBeNull()
})

test('<Select renderItem> formats items', () => {
  const { getByTestId } = render(
    <Select
      dataTestId="select"
      name="select"
      options={MONTHS}
      renderItem={option => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <DateIcon mr="xs" size="sm" title="Calendar" /> <span>{(option as Option).label}</span>
        </div>
      )}
      value="february"
    />
  )

  const select = getByTestId('select')
  const icon = select.querySelector('svg')
  expect(select).toHaveTextContent('February')
  expect(icon?.getAttribute('title')).toBe('Calendar')
})

test('<Select icon> shows icon', () => {
  const { container } = render(
    <Select
      dataTestId="select"
      icon={<AvatarIcon color="light-100" />}
      name="select"
      options={MONTHS}
      value="february"
    />
  )

  const icon = container.querySelector('[alt="Avatar"]')
  expect(icon).toBeInTheDocument()
})

test('<Select isSearchable> filters results', async () => {
  const { getByRole, getByTestId } = render(
    <Select dataTestId="select" isSearchable name="select" options={MONTHS} />
  )

  const select = getByTestId('select')
  await userEvent.type(select, 'ember')

  const options = getByRole('listbox').querySelectorAll('li')
  expect(options.length).toBe(3) // September, November, December

  fireEvent.click(options[1])
  expect((select as HTMLInputElement).value).toBe('November')
})

test("<Select isSearchable> doesn't show list if no results", async () => {
  const { getByTestId, queryByRole } = render(
    <Select dataTestId="select" isSearchable name="select" options={MONTHS} />
  )

  const select = getByTestId('select')
  await userEvent.type(select, 'Fish')

  const options = queryByRole('listbox')
  expect(options).toBeNull()
})

test('<Select isCreatable> can create new items', async () => {
  const handleCreate = jest.fn()

  const firstItem = { label: 'Kayab', value: 'kayab' }
  const secondItem = { label: 'Cumku', value: 'cumku' }

  const { getByRole, getByTestId } = render(
    <Select
      dataTestId="select"
      isCreatable
      name="select"
      onCreate={handleCreate}
      options={MONTHS}
    />
  )

  const select = getByTestId('select')

  // Type in search box
  await userEvent.type(select, firstItem.label)

  // Expect results to have only 'Create' item
  let option = getByRole('listbox').querySelector('li')
  expect(option).toHaveTextContent(`Create "${firstItem.label}"`)

  // Click on 'Create' item
  fireEvent.click(option as HTMLElement)

  // Expect `onCreate` callback to be called
  expect(handleCreate).toHaveBeenCalledTimes(1)
  expect(handleCreate).toHaveBeenCalledWith(
    firstItem.label,
    expect.objectContaining({ target: { name: 'select', value: firstItem } }) // Ignore preventDefault
  )

  // Expect content to be new item
  expect((select as HTMLInputElement).value).toBe(firstItem.label)

  // Add another item
  // Type again in search box
  await userEvent.clear(select)
  await userEvent.type(select, secondItem.label)
  expect((select as HTMLInputElement).value).toBe(secondItem.label)

  option = getByRole('listbox').querySelector('li')
  expect(option).toHaveTextContent(`Create "${secondItem.label}"`)

  // Click on 'Create' item
  fireEvent.click(option as HTMLElement)

  // Expect `onCreate` callback to be called
  expect(handleCreate).toHaveBeenCalledTimes(2)
  expect(handleCreate).toHaveBeenCalledWith(
    secondItem.label,
    expect.objectContaining({ target: { name: 'select', value: secondItem } }) // Ignore preventDefault
  )

  // Expect content to be new item
  expect((select as HTMLInputElement).value).toBe(secondItem.label)
})

test('<Select isCreatable isMultiple> can create new items', async () => {
  const handleCreate = jest.fn()

  const { getByRole, getByTestId } = render(
    <Select
      dataTestId="select"
      isCreatable
      isMultiple
      name="select"
      onCreate={handleCreate}
      options={MONTHS}
      value={['february', 'march']}
    />
  )

  const select = getByTestId('select')

  // Type in search box
  await userEvent.type(select, 'Kayab')

  // Click on 'Create' item
  const option = getByRole('listbox').querySelector('li')
  fireEvent.click(option as HTMLElement)

  // Expect `onCreate` callback to be called
  expect(handleCreate).toHaveBeenCalledTimes(1)
  expect(handleCreate).toHaveBeenCalledWith(
    'Kayab',
    expect.objectContaining({
      target: {
        name: 'select',
        value: [
          { disabled: false, label: 'February', value: 'february' },
          { disabled: false, label: 'March', value: 'march' },
          { label: 'Kayab', value: 'kayab' },
        ],
      },
    }) // Ignore preventDefault
  )

  // Expect content to be new item
  expect((select as HTMLInputElement).value).toBe('')
})

test("<Select isCreatable> can't create an existing item", async () => {
  const handleCreate = jest.fn()
  const { getByRole, getByTestId } = render(
    <Select
      dataTestId="select"
      isCreatable
      name="select"
      onCreate={handleCreate}
      options={MONTHS}
    />
  )

  const select = getByTestId('select')

  // Type in search box
  await userEvent.type(select, 'October')

  // Expect results to not have 'Create' item
  const option = getByRole('listbox').querySelector('li')
  expect(option).toHaveTextContent('October')

  // Click on 'Create' item
  fireEvent.click(option as HTMLElement)

  // Expect `onCreate` callback not to be called
  expect(handleCreate).toHaveBeenCalledTimes(0)
  expect((select as HTMLInputElement).value).toBe('October')
})

test('<Select groupsEnabled> shows groups header', () => {
  const { getAllByTestId, getByTestId } = render(
    <Select
      dataTestId="select"
      groupsEnabled
      name="select"
      options={SOCIAL_OPT_GROUP}
      renderGroupHeader={({ label, options }) => (
        <div data-testid="group-header">
          <h4>{label}</h4>
          <span>{options.length}</span>
        </div>
      )}
    />
  )

  const select = getByTestId('select')
  fireEvent.click(select)

  const headers = getAllByTestId('group-header')

  expect(headers.length).toBe(SOCIAL_OPT_GROUP.length)

  headers.forEach((header, i) => {
    expect(header.querySelector('h4')).toHaveTextContent(SOCIAL_OPT_GROUP[i].label)
    expect(header.querySelector('span')).toHaveTextContent(
      String(SOCIAL_OPT_GROUP[i].options.length)
    )
  })
})

test('<Select groupsEnabled> onChange with correct (object) values', () => {
  const handleChange = jest.fn()

  const { getByRole, getByTestId } = render(
    <Select
      dataTestId="select"
      groupsEnabled
      name="select"
      onChange={handleChange}
      options={SOCIAL_OPT_GROUP}
      renderGroupHeader={({ label, options }) => (
        <div data-testid="group-header">
          <h4>{label}</h4>
          <span>{options.length}</span>
        </div>
      )}
    />
  )

  const select = getByTestId('select')
  fireEvent.click(select)

  const options = getByRole('listbox').querySelectorAll('li')
  fireEvent.click(options[1])

  expect(handleChange).toHaveBeenCalledTimes(1)
  expect(handleChange).toHaveBeenCalledWith(
    'dribbble',
    expect.objectContaining({
      target: { name: 'select', value: { value: 'dribbble', label: 'Dribbble' } },
    }) // Ignore preventDefault
  )
})

test('<Select groupsEnabled> onChange on disabled option', () => {
  const { getByRole, getByTestId } = render(
    <SelectWrapper
      dataTestId="select"
      groupsEnabled
      name="select"
      options={SOCIAL_OPT_GROUP}
      renderGroupHeader={({ label, options }) => (
        <div data-testid="group-header">
          <h4>{label}</h4>
          <span>{options.length}</span>
        </div>
      )}
    />
  )

  const select = getByTestId('select')
  fireEvent.click(select)

  const options = getByRole('listbox').querySelectorAll('li')

  fireEvent.click(options[0])
  expect(select).toHaveTextContent('')
})
