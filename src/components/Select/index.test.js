import React from 'react'
import { fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import capitalize from 'lodash.capitalize'

import { Form, getFormValues } from '../../../docz/Form'
import { render } from '../../utils/tests'
import { ConnectedField } from '../ConnectedField'
import { Icon } from '../Icon'

import { Select } from './index'

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
  'december'
].map(month => ({ label: capitalize(month), value: month }))

const MONTHS_WITH_INTEGER_VALUES = MONTHS.map((item, index) => ({
  label: item.label,
  value: index
}))

test('<Select> accepts falsy option values (such as 0)', () => {
  const { getByTestId } = render(
    <Form initialValues={{ select: 0 }}>
      <ConnectedField
        component={Select}
        dataTestId="select"
        label="Select"
        name="select"
        options={MONTHS_WITH_INTEGER_VALUES}
      />
    </Form>
  )
  const select = getByTestId('select')

  expect(select).toHaveTextContent('January')
})

test('<Select> has default attributes', () => {
  const { container, getByTestId } = render(
    <Form initialValues={{ select: 'january' }}>
      <ConnectedField
        component={Select}
        dataTestId="select"
        label="Select"
        name="select"
        options={MONTHS}
      />
    </Form>
  )
  const select = getByTestId('select')
  const label = container.querySelector('label')

  expect(label).toHaveTextContent('Select')
  expect(select.getAttribute('placeholder')).toBe('Choose from…')
  expect(select.getAttribute('data-spacer')).toBe('September')
  expect(select).toHaveTextContent('January')
})

test('<Select> shows options on click', () => {
  const { getByRole, getByTestId } = render(
    <Form initialValues={{}}>
      <ConnectedField
        component={Select}
        dataTestId="select"
        label="Select"
        name="select"
        options={MONTHS}
      />
    </Form>
  )

  const select = getByTestId('select')
  fireEvent.click(select)

  const options = getByRole('listbox').querySelectorAll('li')
  expect(options.length).toBe(12)
  expect(options[0]).toHaveTextContent('January')
})

test('<Select> can choose option', () => {
  const { getByRole, getByTestId } = render(
    <Form initialValues={{}}>
      <ConnectedField
        component={Select}
        dataTestId="select"
        label="Select"
        name="select"
        options={MONTHS}
      />
    </Form>
  )

  const select = getByTestId('select')
  fireEvent.click(select)

  let options = getByRole('listbox').querySelectorAll('li')
  fireEvent.click(options[1])

  const formValues = getFormValues(getByTestId('values'))
  expect(select).toHaveTextContent('February')
  expect(formValues.select).toStrictEqual('february')

  // List is refilled
  fireEvent.click(select)

  options = getByRole('listbox').querySelectorAll('li')
  expect(options.length).toBe(12)
})

test('<Select> calls onChange with correct (object) values', () => {
  const handleChange = jest.fn()
  const { getByRole, getByTestId } = render(
    <Form initialValues={{}}>
      <ConnectedField
        component={Select}
        dataTestId="select"
        label="Select"
        name="select"
        onChange={handleChange}
        options={MONTHS}
      />
    </Form>
  )

  const select = getByTestId('select')
  fireEvent.click(select)

  const options = getByRole('listbox').querySelectorAll('li')
  fireEvent.click(options[1])

  expect(handleChange).toHaveBeenCalledTimes(1)
  expect(handleChange).toHaveBeenCalledWith(
    'february',
    expect.objectContaining({
      target: { name: 'select', value: { label: 'February', value: 'february' } }
    }) // Ignore preventDefault
  )
})

test('<Select isClearable> can remove option', () => {
  const { getByTestId, getByTitle } = render(
    <Form initialValues={{ select: 'february' }}>
      <ConnectedField
        component={Select}
        dataTestId="select"
        isClearable
        label="Select"
        name="select"
        options={MONTHS}
      />
    </Form>
  )

  const select = getByTestId('select')
  let formValues = getFormValues(getByTestId('values'))
  expect(select).toHaveTextContent('February')
  expect(formValues.select).toStrictEqual('february')

  // Click cross to remove selected option
  const clearButton = getByTitle('Clear')
  fireEvent.click(clearButton)

  formValues = getFormValues(getByTestId('values'))
  expect(select).toHaveTextContent('')
  expect(formValues.select).toBeUndefined()
})

test('<Select isMultiple> can select multiple items', () => {
  const { getAllByRole, getByRole, getByTestId } = render(
    <Form initialValues={{ select: ['february', 'march'] }}>
      <ConnectedField
        component={Select}
        dataTestId="select"
        isMultiple
        label="Select"
        name="select"
        options={MONTHS}
      />
    </Form>
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

  const formValues = getFormValues(getByTestId('values'))
  expect(select).toHaveTextContent('')
  expect(tags.map(tag => tag.textContent)).toStrictEqual(['February', 'March', 'April'])
  expect(formValues.select).toStrictEqual(['february', 'march', 'april'])
})

test('<Select> can accept value, label or object as value', () => {
  const { getAllByRole, getByRole, getByTestId } = render(
    <Form initialValues={{ select: [{ label: 'January', value: 'january' }, 'february', 'March'] }}>
      <ConnectedField
        component={Select}
        dataTestId="select"
        isMultiple
        label="Select"
        name="select"
        options={MONTHS}
      />
    </Form>
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

  const formValues = getFormValues(getByTestId('values'))
  expect(select).toHaveTextContent('')
  expect(tags.map(tag => tag.textContent)).toStrictEqual(['January', 'February', 'March', 'April'])
  expect(formValues.select).toStrictEqual(['january', 'february', 'march', 'april'])
})

test('<Select isMultiple> can remove multiple items', () => {
  const { getAllByRole, getByTestId } = render(
    <Form initialValues={{ select: ['february', 'march'] }}>
      <ConnectedField
        component={Select}
        dataTestId="select"
        isMultiple
        label="Select"
        name="select"
        options={MONTHS}
      />
    </Form>
  )

  const select = getByTestId('select')
  let tags = getAllByRole('listitem')
  expect(tags.length).toBe(2)

  const removeButton = tags[1].querySelector('[title=Remove]')
  fireEvent.click(removeButton)
  tags = getAllByRole('listitem')
  expect(tags.length).toBe(1)

  const formValues = getFormValues(getByTestId('values'))
  expect(select).toHaveTextContent('')
  expect(tags.map(tag => tag.textContent)).toStrictEqual(['February'])
  expect(formValues.select).toStrictEqual(['february'])
})

test("<Select> doesn't show clear button", () => {
  const { getByRole, getByTestId, queryByTitle } = render(
    <Form initialValues={{}}>
      <ConnectedField
        component={Select}
        dataTestId="select"
        label="Select"
        name="select"
        options={MONTHS}
      />
    </Form>
  )

  const select = getByTestId('select')
  fireEvent.click(select)

  const options = getByRole('listbox').querySelectorAll('li')
  fireEvent.click(options[1])

  let formValues = getFormValues(getByTestId('values'))
  expect(select).toHaveTextContent('February')
  expect(formValues.select).toStrictEqual('february')

  // Use `queryByTitle` to expect no clear button
  const clearButton = queryByTitle('Clear')
  expect(clearButton).toBeNull()
})

test('<Select renderItem> formats items', () => {
  const { getByTestId } = render(
    <Form initialValues={{ select: 'february' }}>
      <ConnectedField
        component={Select}
        dataTestId="select"
        label="Select"
        name="select"
        options={MONTHS}
        renderItem={option => (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Icon mr="xs" name="date" size="sm" title="Calendar" /> <span>{option.label}</span>
          </div>
        )}
      />
    </Form>
  )

  const select = getByTestId('select')
  const icon = select.querySelector('svg')

  const formValues = getFormValues(getByTestId('values'))
  expect(select).toHaveTextContent('February')
  expect(icon.getAttribute('title')).toBe('Calendar')
  expect(formValues.select).toStrictEqual('february')
})

test('<Select icon> shows icon', () => {
  const { container } = render(
    <Form initialValues={{ select: 'february' }}>
      <ConnectedField
        component={Select}
        dataTestId="select"
        icon={<Icon color="nude.500" name="avatar" />}
        label="Select"
        name="select"
        options={MONTHS}
      />
    </Form>
  )

  const icon = container.querySelector('[title="avatar"]')
  expect(icon).toBeInTheDocument()
})

test('<Select isSearchable> filters results', () => {
  const { getByRole, getByTestId } = render(
    <Form initialValues={{}}>
      <ConnectedField
        component={Select}
        dataTestId="select"
        isSearchable
        label="Select"
        name="select"
        options={MONTHS}
      />
    </Form>
  )

  const select = getByTestId('select')
  userEvent.type(select, 'ember')

  const options = getByRole('listbox').querySelectorAll('li')
  expect(options.length).toBe(3) // September, November, December

  fireEvent.click(options[1])
  const formValues = getFormValues(getByTestId('values'))
  expect(select.value).toBe('November')
  expect(formValues.select).toStrictEqual('november')
})

test("<Select isSearchable> doesn't show list if no results", () => {
  const { getByTestId, queryByRole } = render(
    <Form initialValues={{}}>
      <ConnectedField
        component={Select}
        dataTestId="select"
        isSearchable
        label="Select"
        name="select"
        options={MONTHS}
      />
    </Form>
  )

  const select = getByTestId('select')
  userEvent.type(select, 'Fish')

  const options = queryByRole('listbox')
  expect(options).toBeNull()
})

test('<Select isCreatable> can create new items', () => {
  const handleCreate = jest.fn()

  const firstItem = { label: 'Kayab', value: 'kayab' }
  const secondItem = { label: 'Cumku', value: 'cumku' }

  const { getByRole, getByTestId } = render(
    <Form initialValues={{}}>
      <ConnectedField
        component={Select}
        dataTestId="select"
        isCreatable
        label="Select"
        name="select"
        onCreate={handleCreate}
        options={MONTHS}
      />
    </Form>
  )

  const select = getByTestId('select')

  // Type in search box
  userEvent.type(select, firstItem.label)

  // Expect results to have only 'Create' item
  let option = getByRole('listbox').querySelector('li')
  expect(option).toHaveTextContent(`Create "${firstItem.label}"`)

  // Click on 'Create' item
  fireEvent.click(option)

  // Expect `onCreate` callback to be called
  expect(handleCreate).toHaveBeenCalledTimes(1)
  expect(handleCreate).toHaveBeenCalledWith(
    firstItem.label,
    expect.objectContaining({ target: { name: 'select', value: firstItem } }) // Ignore preventDefault
  )

  // Expect content to be new item
  expect(select.value).toBe(firstItem.label)

  // Expect form values to have new item
  let formValues = getFormValues(getByTestId('values'))
  expect(formValues.select).toStrictEqual(firstItem.label)

  // Add another item
  // Type again in search box
  userEvent.type(select, secondItem.label)
  expect(select.value).toBe(secondItem.label)

  option = getByRole('listbox').querySelector('li')
  expect(option).toHaveTextContent(`Create "${secondItem.label}"`)

  // Click on 'Create' item
  fireEvent.click(option)

  // Expect `onCreate` callback to be called
  expect(handleCreate).toHaveBeenCalledTimes(2)
  expect(handleCreate).toHaveBeenCalledWith(
    secondItem.label,
    expect.objectContaining({ target: { name: 'select', value: secondItem } }) // Ignore preventDefault
  )

  // Expect content to be new item
  expect(select.value).toBe(secondItem.label)

  // Expect form values to have new item
  formValues = getFormValues(getByTestId('values'))
  expect(formValues.select).toStrictEqual(secondItem.label)
})

test('<Select isCreatable isMultiple> can create new items', () => {
  const handleCreate = jest.fn()

  const { getByRole, getByTestId } = render(
    <Form initialValues={{ select: ['february', 'march'] }}>
      <ConnectedField
        component={Select}
        dataTestId="select"
        isCreatable
        isMultiple
        label="Select"
        name="select"
        onCreate={handleCreate}
        options={MONTHS}
      />
    </Form>
  )

  const select = getByTestId('select')

  // Type in search box
  userEvent.type(select, 'Kayab')

  // Click on 'Create' item
  const option = getByRole('listbox').querySelector('li')
  fireEvent.click(option)

  // Expect `onCreate` callback to be called
  expect(handleCreate).toHaveBeenCalledTimes(1)
  expect(handleCreate).toHaveBeenCalledWith(
    'Kayab',
    expect.objectContaining({
      target: {
        name: 'select',
        value: [
          { label: 'February', value: 'february' },
          { label: 'March', value: 'march' },
          { label: 'Kayab', value: 'kayab' }
        ]
      }
    }) // Ignore preventDefault
  )

  // Expect content to be new item
  expect(select.value).toBe('')

  // Expect form values to have new item
  const formValues = getFormValues(getByTestId('values'))
  expect(formValues.select).toStrictEqual(['february', 'march', 'Kayab'])
})

test("<Select isCreatable> can't create an existing item", () => {
  const handleCreate = jest.fn()
  const { getByRole, getByTestId } = render(
    <Form initialValues={{}}>
      <ConnectedField
        component={Select}
        dataTestId="select"
        isCreatable
        label="Select"
        name="select"
        onCreate={handleCreate}
        options={MONTHS}
      />
    </Form>
  )

  const select = getByTestId('select')

  // Type in search box
  userEvent.type(select, 'October')

  // Expect results to not have 'Create' item
  let option = getByRole('listbox').querySelector('li')
  expect(option).toHaveTextContent('October')

  // Click on 'Create' item
  fireEvent.click(option)

  // Expect `onCreate` callback not to be called
  expect(handleCreate).toHaveBeenCalledTimes(0)

  const formValues = getFormValues(getByTestId('values'))
  expect(select.value).toBe('October')
  expect(formValues.select).toStrictEqual('october')
})
