import React, { useState } from 'react'
import capitalize from 'lodash.capitalize'
import { AvatarIcon, DateIcon } from '@welcome-ui/icons'
import { act, screen } from '@testing-library/react'

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
  render(
    <Select dataTestId="select" name="select" options={MONTHS_WITH_INTEGER_VALUES} value={0} />
  )
  const select = screen.getByTestId('select')

  expect(select).toHaveTextContent('January')
})

test('<Select> has default attributes', () => {
  render(<Select dataTestId="select" name="select" options={MONTHS} value="january" />)

  const select = screen.getByTestId('select')

  expect(select.getAttribute('placeholder')).toBe('Choose from…')
  expect(select.getAttribute('data-spacer')).toBe('September')
  expect(select).toHaveTextContent('January')
})

test('<Select> shows options on click (input)', async () => {
  const { user } = render(<Select dataTestId="select" name="select" options={MONTHS} />)

  const select = screen.getByTestId('select')

  await act(() => user.click(select))

  const options = screen.getByRole('listbox').querySelectorAll('li')

  expect(options.length).toBe(12)
  expect(options[0]).toHaveTextContent('January')
})

test('<Select> shows options on click (arrow indicator)', async () => {
  const { user } = render(<Select dataTestId="select" name="select" options={MONTHS} />)

  const select = screen.getByTestId('select-arrow-icon')

  await act(() => user.click(select))

  const options = screen.getByRole('listbox').querySelectorAll('li')

  expect(options.length).toBe(12)
  expect(options[0]).toHaveTextContent('January')
})

test.skip('<Select> can choose option', async () => {
  const { user } = render(<Select dataTestId="select" name="select" options={MONTHS} />)

  const select = screen.getByTestId('select')

  await act(() => user.click(select))

  let options = screen.getByRole('listbox').querySelectorAll('li')

  await act(() => user.click(options[1]))

  expect(select).toHaveTextContent('February')

  // List is refilled
  await act(() => user.click(select))

  options = screen.getByRole('listbox').querySelectorAll('li')
  expect(options.length).toBe(12)
})

test('<Select> calls onChange with correct (object) values', async () => {
  const handleChange = jest.fn()
  const { user } = render(
    <Select dataTestId="select" name="select" onChange={handleChange} options={MONTHS} />
  )

  const select = screen.getByTestId('select')

  await act(() => user.click(select))

  const options = screen.getByRole('listbox').querySelectorAll('li')

  await act(() => user.click(options[1]))

  expect(handleChange).toHaveBeenCalledTimes(1)
  expect(handleChange).toHaveBeenCalledWith(
    'february',
    expect.objectContaining({
      target: { name: 'select', value: { label: 'February', value: 'february', disabled: false } },
    }) // Ignore preventDefault
  )
})

test('<Select> calls onChange on disabled option', async () => {
  const { user } = render(<SelectWrapper dataTestId="select" name="select" options={MONTHS} />)

  const select = screen.getByTestId('select')

  await act(() => user.click(select))

  const options = screen.getByRole('listbox').querySelectorAll('li')

  await act(() => user.click(options[0]))

  expect(select).toHaveTextContent('')
})

test('<Select isClearable> can remove option', async () => {
  const { user } = render(
    <Select dataTestId="select" isClearable name="select" options={MONTHS} value="february" />
  )

  const select = screen.getByTestId('select')

  expect(select).toHaveTextContent('February')

  // Click cross to remove selected option
  const clearButton = screen.getByTitle('Clear')

  await act(() => user.click(clearButton))

  expect(select).toHaveTextContent('')
})

test('<Select isMultiple> can select multiple items', async () => {
  const { user } = render(
    <Select
      dataTestId="select"
      isMultiple
      name="select"
      options={MONTHS}
      value={['february', 'march']}
    />
  )

  const select = screen.getByTestId('select')
  let tags = screen.getAllByRole('listitem')

  expect(tags.length).toBe(2)

  await act(() => user.click(select))

  // Click 4th result (April)
  const options = screen.getByRole('listbox').querySelectorAll('li')

  await act(() => user.click(options[3]))

  tags = screen.getAllByRole('listitem')

  expect(tags.length).toBe(3)
  expect(select).toHaveTextContent('')
  expect(tags.map(tag => tag.textContent)).toStrictEqual(['February', 'March', 'April'])
})

test('<Select isMultiple> cannot select disabled items', async () => {
  const { user } = render(
    <Select
      dataTestId="select"
      isMultiple
      name="select"
      options={MONTHS}
      value={['february', 'march']}
    />
  )

  const select = screen.getByTestId('select')
  let tags = screen.getAllByRole('listitem')

  expect(tags.length).toBe(2)

  await act(() => user.click(select))

  // Click 1st result (January)
  const options = screen.getByRole('listbox').querySelectorAll('li')

  await act(() => user.click(options[0]))

  tags = screen.getAllByRole('listitem')

  expect(tags.length).toBe(2)
  expect(tags.map(tag => tag.textContent)).toStrictEqual(['February', 'March'])
})

test('<Select> can accept value, label or object as value', async () => {
  const { user } = render(
    <Select
      dataTestId="select"
      isMultiple
      name="select"
      options={MONTHS}
      value={[{ label: 'January', value: 'january' }, 'february', 'March']}
    />
  )

  const select = screen.getByTestId('select')
  let tags = screen.getAllByRole('listitem')

  expect(tags.length).toBe(3)

  await act(() => user.click(select))

  // Click 4th result (April)
  const options = screen.getByRole('listbox').querySelectorAll('li')

  await act(() => user.click(options[3]))

  tags = screen.getAllByRole('listitem')

  expect(tags.length).toBe(4)
  expect(select).toHaveTextContent('')
  expect(tags.map(tag => tag.textContent)).toStrictEqual(['January', 'February', 'March', 'April'])
})

test('<Select isMultiple> can remove multiple items', async () => {
  const { user } = render(
    <Select
      dataTestId="select"
      isMultiple
      name="select"
      options={MONTHS}
      value={['february', 'march']}
    />
  )

  const select = screen.getByTestId('select')
  let tags = screen.getAllByRole('listitem')

  expect(tags.length).toBe(2)

  const removeButton = tags[1].querySelector('[title=Remove]')

  await act(() => user.click(removeButton))

  tags = screen.getAllByRole('listitem')

  expect(tags.length).toBe(1)

  expect(select).toHaveTextContent('')
  expect(tags.map(tag => tag.textContent)).toStrictEqual(['February'])
})

test.skip("<Select> doesn't show clear button", async () => {
  const { user } = render(<Select dataTestId="select" name="select" options={MONTHS} />)

  const select = screen.getByTestId('select')

  await act(() => user.click(select))

  const options = screen.getByRole('listbox').querySelectorAll('li')

  await act(() => user.click(options[1]))

  expect(select).toHaveTextContent('February')

  // Use `queryByTitle` to expect no clear button
  const clearButton = screen.queryByTitle('Clear')

  expect(clearButton).toBeNull()
})

test('<Select renderItem> formats items', () => {
  render(
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

  const select = screen.getByTestId('select')
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
  const { user } = render(
    <Select dataTestId="select" isSearchable name="select" options={MONTHS} />
  )

  const select = screen.getByTestId('select')

  await act(() => user.type(select, 'ember'))

  const options = screen.getByRole('listbox').querySelectorAll('li')

  expect(options.length).toBe(3) // September, November, December

  await act(() => user.click(options[1]))

  expect((select as HTMLInputElement).value).toBe('November')
})

test("<Select isSearchable> doesn't show list if no results", async () => {
  const { user } = render(
    <Select dataTestId="select" isSearchable name="select" options={MONTHS} />
  )

  const select = screen.getByTestId('select')

  await act(() => user.type(select, 'Fish'))

  const options = screen.queryByRole('listbox')

  expect(options).toBeNull()
})

test('<Select isCreatable> can create new items', async () => {
  const handleCreate = jest.fn()

  const firstItem = { label: 'Kayab', value: 'kayab' }
  const secondItem = { label: 'Cumku', value: 'cumku' }

  const { user } = render(
    <Select
      dataTestId="select"
      isCreatable
      name="select"
      onCreate={handleCreate}
      options={MONTHS}
    />
  )

  const select = screen.getByTestId('select')

  // Type in search box
  await act(() => user.type(select, firstItem.label))

  // Expect results to have only 'Create' item
  let option = screen.getByRole('listbox').querySelector('li')

  expect(option).toHaveTextContent(`Create "${firstItem.label}"`)

  // Click on 'Create' item
  await act(() => user.click(option))

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
  await act(() => {
    user.clear(select)
    return user.type(select, secondItem.label)
  })

  expect((select as HTMLInputElement).value).toBe(secondItem.label)

  option = screen.getByRole('listbox').querySelector('li')

  expect(option).toHaveTextContent(`Create "${secondItem.label}"`)

  // Click on 'Create' item
  await act(() => user.click(option))

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

  const { user } = render(
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

  const select = screen.getByTestId('select')

  // Type in search box
  await act(() => user.type(select, 'Kayab'))

  // Click on 'Create' item
  const option = screen.getByRole('listbox').querySelector('li')

  await act(() => user.click(option))

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
  const { user } = render(
    <Select
      dataTestId="select"
      isCreatable
      name="select"
      onCreate={handleCreate}
      options={MONTHS}
    />
  )

  const select = screen.getByTestId('select')

  // Type in search box
  await act(() => user.type(select, 'October'))

  // Expect results to not have 'Create' item
  const option = screen.getByRole('listbox').querySelector('li')

  expect(option).toHaveTextContent('October')

  // Click on 'Create' item
  await act(() => user.click(option))

  // Expect `onCreate` callback not to be called
  expect(handleCreate).toHaveBeenCalledTimes(0)
  expect((select as HTMLInputElement).value).toBe('October')
})

test('<Select groupsEnabled> shows groups header', async () => {
  const { user } = render(
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

  const select = screen.getByTestId('select')

  await act(() => user.click(select))

  const headers = screen.getAllByTestId('group-header')

  expect(headers.length).toBe(SOCIAL_OPT_GROUP.length)

  headers.forEach((header, i) => {
    expect(header.querySelector('h4')).toHaveTextContent(SOCIAL_OPT_GROUP[i].label)
    expect(header.querySelector('span')).toHaveTextContent(
      String(SOCIAL_OPT_GROUP[i].options.length)
    )
  })
})

test('<Select groupsEnabled> onChange with correct (object) values', async () => {
  const handleChange = jest.fn()

  const { user } = render(
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

  const select = screen.getByTestId('select')

  await act(() => user.click(select))

  const options = screen.getByRole('listbox').querySelectorAll('li')

  await act(() => user.click(options[1]))

  expect(handleChange).toHaveBeenCalledTimes(1)
  expect(handleChange).toHaveBeenCalledWith(
    'Dribbble',
    expect.objectContaining({
      target: { name: 'select', value: { value: 'dribbble', label: 'Dribbble' } },
    }) // Ignore preventDefault
  )
})

test('<Select groupsEnabled> onChange on disabled option', async () => {
  const { user } = render(
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

  const select = screen.getByTestId('select')

  await act(() => user.click(select))

  const options = screen.getByRole('listbox').querySelectorAll('li')

  await act(() => user.click(options[0]))

  expect(select).toHaveTextContent('')
})
