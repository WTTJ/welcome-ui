import { act, screen, waitFor } from '@testing-library/react'
import capitalize from 'lodash.capitalize'
import React, { useState } from 'react'

import { Icon } from '@/components/Icon'

import { render } from '@tests'

import { Select } from '../'
import type { SelectOption, SelectProps } from '../types'

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
].map(month => ({ disabled: month === 'january', label: capitalize(month), value: month }))

const MONTHS_WITH_INTEGER_VALUES = MONTHS.map((item, index) => ({
  label: item.label,
  value: index,
}))

const SOCIAL_OPT_GROUP = [
  {
    label: 'Professional networks',
    options: [
      { disabled: true, label: 'Behance', value: 'behance' },
      { label: 'Dribbble', value: 'dribbble' },
      { label: 'Github', value: 'github' },
    ],
  },
  {
    label: 'Personal networks',
    options: [
      { label: 'Instagram', value: 'instagram' },
      { label: 'Facebook', value: 'facebook' },
    ],
  },
]

describe('<Select>', () => {
  it('accepts falsy option values (such as 0)', () => {
    render(
      <Select dataTestId="select" name="select" options={MONTHS_WITH_INTEGER_VALUES} value={0} />
    )
    const select = screen.getByTestId('select')

    expect(select).toHaveTextContent('January')
  })

  it('has default attributes', () => {
    render(<Select dataTestId="select" name="select" options={MONTHS} value="january" />)

    const select = screen.getByTestId('select')

    expect(select.getAttribute('placeholder')).toBe('Choose from…')
    expect(select.getAttribute('data-spacer')).toBe('September')
    expect(select).toHaveTextContent('January')
  })

  it('shows options on click (input)', async () => {
    const { user } = render(<Select dataTestId="select" name="select" options={MONTHS} />)

    const select = screen.getByTestId('select')

    await user.click(select)

    const options = screen.getByRole('listbox').querySelectorAll('li')

    expect(options.length).toBe(12)
    expect(options[0]).toHaveTextContent('January')
  })

  it('shows options on click (arrow indicator)', async () => {
    const { user } = render(<Select dataTestId="select" name="select" options={MONTHS} />)

    const select = screen.getByTestId('select-arrow-icon')

    await user.click(select)

    const options = screen.getByRole('listbox').querySelectorAll('li')

    expect(options.length).toBe(12)
    expect(options[0]).toHaveTextContent('January')
  })

  it.skip('can choose option', async () => {
    const { user } = render(<Select dataTestId="select" name="select" options={MONTHS} />)

    const select = screen.getByTestId('select')

    await user.click(select)

    let options = screen.getByRole('listbox').querySelectorAll('li')

    await user.click(options[1])

    expect(select).toHaveTextContent('February')

    // List is refilled
    await user.click(select)

    options = screen.getByRole('listbox').querySelectorAll('li')
    expect(options.length).toBe(12)
  })

  it('calls onChange with correct (object) values', async () => {
    const handleChange = vi.fn()
    const { user } = render(
      <Select dataTestId="select" name="select" onChange={handleChange} options={MONTHS} />
    )

    const select = screen.getByTestId('select')

    await user.click(select)

    const options = screen.getByRole('listbox').querySelectorAll('li')

    await user.click(options[1])

    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(handleChange).toHaveBeenCalledWith(
      'february',
      expect.objectContaining({
        target: {
          name: 'select',
          value: { disabled: false, label: 'February', value: 'february' },
        },
      }) // Ignore preventDefault
    )
  })

  it('calls onChange on disabled option', async () => {
    const { user } = render(<SelectWrapper dataTestId="select" name="select" options={MONTHS} />)

    const select = screen.getByTestId('select')

    await user.click(select)

    const options = screen.getByRole('listbox').querySelectorAll('li')

    await user.click(options[0])

    expect(select).toHaveTextContent('')
  })

  it('<Select isClearable> can remove option', async () => {
    const { user } = render(
      <Select dataTestId="select" isClearable name="select" options={MONTHS} value="february" />
    )

    const select = screen.getByTestId('select')

    expect(select).toHaveTextContent('February')

    // Click cross to remove selected option
    const clearButton = screen.getByLabelText('Close')

    await user.click(clearButton)

    expect(select).toHaveTextContent('')
  })

  it('<Select isMultiple> can select multiple items', async () => {
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

    await user.click(select)

    // Click 4th result (April)
    const options = screen.getByRole('listbox').querySelectorAll('li')

    await user.click(options[3])

    tags = screen.getAllByRole('listitem')

    expect(tags.length).toBe(3)
    expect(select).toHaveTextContent('')
    expect(tags.map(tag => tag.textContent)).toStrictEqual(['February', 'March', 'April'])
  })

  it('<Select isMultiple> cannot select disabled items', async () => {
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

    await user.click(select)

    // Click 1st result (January)
    const options = screen.getByRole('listbox').querySelectorAll('li')

    await user.click(options[0])

    tags = screen.getAllByRole('listitem')

    expect(tags.length).toBe(2)
    expect(tags.map(tag => tag.textContent)).toStrictEqual(['February', 'March'])
  })

  it('can accept value, label or object as value', async () => {
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

    await user.click(select)

    // Click 4th result (April)
    const options = screen.getByRole('listbox').querySelectorAll('li')

    await user.click(options[3])

    tags = screen.getAllByRole('listitem')

    expect(tags.length).toBe(4)
    expect(select).toHaveTextContent('')
    expect(tags.map(tag => tag.textContent)).toStrictEqual([
      'January',
      'February',
      'March',
      'April',
    ])
  })

  it('<Select isMultiple> can remove multiple items', async () => {
    const { user } = render(
      <Select
        dataTestId="select"
        isMultiple
        name="select"
        options={MONTHS}
        value={['february', 'march']}
      />
    )

    let tags = screen.getAllByRole('listitem')

    expect(tags.length).toBe(2)
    expect(tags.map(tag => tag.textContent)).toStrictEqual(['February', 'March'])

    const removeButton = tags[1].querySelector('[aria-label="remove tag"]')
    await user.click(removeButton)

    await waitFor(() => {
      tags = screen.getAllByRole('listitem')
      expect(tags.length).toBe(1)
    })

    expect(tags.map(tag => tag.textContent)).toStrictEqual(['February'])
  })

  it.skip("doesn't show clear button", async () => {
    const { user } = render(<Select dataTestId="select" name="select" options={MONTHS} />)

    const select = screen.getByTestId('select')

    await user.click(select)

    const options = screen.getByRole('listbox').querySelectorAll('li')

    await user.click(options[1])

    expect(select).toHaveTextContent('February')

    const clearButton = screen.queryByLabelText('Close')

    expect(clearButton).toBeNull()
  })

  it('<Select renderItem> formats items', () => {
    render(
      <Select
        dataTestId="select"
        name="select"
        options={MONTHS}
        renderItem={option => (
          <div style={{ alignItems: 'center', display: 'flex' }}>
            <Icon name="calendar" size="sm" />
            <span>{(option as SelectOption).label}</span>
          </div>
        )}
        value="february"
      />
    )

    const select = screen.getByTestId('select')
    const icon = select.querySelector('svg')

    expect(select).toHaveTextContent('February')
    expect(icon).toBeInTheDocument()
  })

  it('<Select icon> shows icon', () => {
    render(
      <Select
        dataTestId="select"
        icon={<Icon data-testid="avatar-icon" name="user-circle" />}
        name="select"
        options={MONTHS}
        value="february"
      />
    )

    const icon = screen.getByTestId('avatar-icon')
    expect(icon).toBeInTheDocument()
  })

  it('<Select isSearchable> filters results', async () => {
    const { user } = render(
      <Select dataTestId="select" isSearchable name="select" options={MONTHS} />
    )

    const select = screen.getByTestId('select')

    await user.type(select, 'ember')

    const options = screen.getByRole('listbox').querySelectorAll('li')

    expect(options.length).toBe(3) // September, November, December

    await user.click(options[1])

    expect((select as HTMLInputElement).value).toBe('November')
  })

  it("<Select isSearchable> doesn't show list if no results", async () => {
    const { user } = render(
      <Select dataTestId="select" isSearchable name="select" options={MONTHS} />
    )

    const select = screen.getByTestId('select')

    await user.type(select, 'Fish')

    const options = screen.queryByRole('listbox')

    expect(options).toBeNull()
  })

  it('<Select isSearchable groupsEnabled> should filters options.label', async () => {
    const { user } = render(
      <Select
        dataTestId="select"
        groupsEnabled
        isSearchable
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

    await user.type(select, 'Instagram')

    const options = screen.getByRole('listbox').querySelectorAll('li')
    expect(options.length).toBe(2) // Facebook, Instagram
  })

  it('<Select isSearchable groupsEnabled> should filters group.label', async () => {
    const { user } = render(
      <Select
        dataTestId="select"
        groupsEnabled
        isSearchable
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

    await user.type(select, 'Personal')

    const options = screen.getByRole('listbox').querySelectorAll('li')
    expect(options.length).toBe(2) // Facebook, Instagram
  })

  it('<Select isCreatable> can create new items', async () => {
    const handleCreate = vi.fn()

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
    await user.type(select, firstItem.label)

    // Expect results to have only 'Create' item
    let option = screen.getByRole('listbox').querySelector('li')

    expect(option).toHaveTextContent(`Create "${firstItem.label}"`)

    // Click on 'Create' item
    await user.click(option)

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
    await act(async () => {
      await user.clear(select)
      return user.type(select, secondItem.label)
    })

    expect((select as HTMLInputElement).value).toBe(secondItem.label)

    option = screen.getByRole('listbox').querySelector('li')

    expect(option).toHaveTextContent(`Create "${secondItem.label}"`)

    // Click on 'Create' item
    await user.click(option)

    // Expect `onCreate` callback to be called
    expect(handleCreate).toHaveBeenCalledTimes(2)
    expect(handleCreate).toHaveBeenCalledWith(
      secondItem.label,
      expect.objectContaining({ target: { name: 'select', value: secondItem } }) // Ignore preventDefault
    )

    // Expect content to be new item
    expect((select as HTMLInputElement).value).toBe(secondItem.label)
  })

  it('<Select isCreatable isMultiple> can create new items', async () => {
    const handleCreate = vi.fn()

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
    await user.type(select, 'Kayab')

    // Click on 'Create' item
    const option = screen.getByRole('listbox').querySelector('li')

    await user.click(option)

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

  it("<Select isCreatable> can't create an existing item", async () => {
    const handleCreate = vi.fn()
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
    await user.type(select, 'October')

    // Expect results to not have 'Create' item
    const option = screen.getByRole('listbox').querySelector('li')

    expect(option).toHaveTextContent('October')

    // Click on 'Create' item
    await user.click(option)

    // Expect `onCreate` callback not to be called
    expect(handleCreate).toHaveBeenCalledTimes(0)
    expect((select as HTMLInputElement).value).toBe('October')
  })

  it('<Select groupsEnabled> shows groups header', async () => {
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

    await user.click(select)

    const headers = screen.getAllByTestId('group-header')

    expect(headers.length).toBe(SOCIAL_OPT_GROUP.length)

    headers.forEach((header, i) => {
      expect(header.querySelector('h4')).toHaveTextContent(SOCIAL_OPT_GROUP[i].label)
      expect(header.querySelector('span')).toHaveTextContent(
        String(SOCIAL_OPT_GROUP[i].options.length)
      )
    })
  })

  it('<Select groupsEnabled> onChange with correct (object) values', async () => {
    const handleChange = vi.fn()

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

    await user.click(select)

    const options = screen.getByRole('listbox').querySelectorAll('li')

    await user.click(options[1])

    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(handleChange).toHaveBeenCalledWith(
      'dribbble',
      expect.objectContaining({
        target: { name: 'select', value: { label: 'Dribbble', value: 'dribbble' } },
      }) // Ignore preventDefault
    )
  })

  it('<Select groupsEnabled> onChange on disabled option', async () => {
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

    await user.click(select)

    const options = screen.getByRole('listbox').querySelectorAll('li')

    await user.click(options[0])

    expect(select).toHaveTextContent('')
  })
})
