import React from 'react'
import { fireEvent } from '@testing-library/react'

import { getFormValues, TestFinalForm } from '../../../docz/FinalForm'
import { render } from '../../utils/tests'
import { ConnectedField } from '../ConnectedField'
import { Icon } from '../Icon'

import { Select } from './index'

const capitalize = text => text.charAt(0).toUpperCase() + text.slice(1)

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
  'december'
].map(month => ({ label: capitalize(month), value: month }))

test('<Select> has default attributes', () => {
  const { getByTestId } = render(
    <TestFinalForm initialValues={{}}>
      <ConnectedField
        component={Select}
        label="Select"
        name="select"
        options={OPTIONS}
        testId="select"
      />
    </TestFinalForm>
  )
  const label = getByTestId('label')
  const select = getByTestId('select')

  expect(label).toHaveTextContent('Select')
  expect(select.getAttribute('placeholder')).toBe('Choose from…')
  expect(select.getAttribute('data-spacer')).toBe('September')
  expect(select.getAttribute('readonly')).toBe('')
  expect(select).toHaveTextContent('')
})

test('<Select> shows options on click', () => {
  const { getByRole, getByTestId } = render(
    <TestFinalForm initialValues={{}}>
      <ConnectedField
        component={Select}
        label="Select"
        name="select"
        options={OPTIONS}
        testId="select"
      />
    </TestFinalForm>
  )

  const select = getByTestId('select')
  fireEvent.click(select)

  const options = getByRole('listbox').querySelectorAll('li')
  expect(options.length).toBe(12)
  expect(options[0]).toHaveTextContent('January')
})

test('<Select> can choose option', () => {
  const { getByRole, getByTestId } = render(
    <TestFinalForm initialValues={{}}>
      <ConnectedField
        component={Select}
        label="Select"
        name="select"
        options={OPTIONS}
        testId="select"
      />
    </TestFinalForm>
  )

  const select = getByTestId('select')
  fireEvent.click(select)

  const options = getByRole('listbox').querySelectorAll('li')
  fireEvent.click(options[1])

  const formValues = getFormValues(getByTestId('values'))
  expect(select).toHaveTextContent('February')
  expect(formValues.select).toStrictEqual('february')
})

test('<Select> can remove option', () => {
  const { getByTestId, getByTitle } = render(
    <TestFinalForm initialValues={{ select: 'february' }}>
      <ConnectedField
        component={Select}
        label="Select"
        name="select"
        options={OPTIONS}
        testId="select"
      />
    </TestFinalForm>
  )

  const select = getByTestId('select')
  let formValues = getFormValues(getByTestId('values'))
  expect(select).toHaveTextContent('February')
  expect(formValues.select).toStrictEqual('february')

  // Click cross to remove selected option
  const removeButton = getByTitle('Remove item')
  fireEvent.click(removeButton)

  formValues = getFormValues(getByTestId('values'))
  expect(select).toHaveTextContent('')
  expect(formValues.select).toBeUndefined()
})

test('<Select isMultiple> can select multiple items', () => {
  const { getAllByTestId, getByRole, getByTestId } = render(
    <TestFinalForm initialValues={{ select: ['february', 'march'] }}>
      <ConnectedField
        component={Select}
        isMultiple
        label="Select"
        name="select"
        options={OPTIONS}
        testId="select"
      />
    </TestFinalForm>
  )

  const select = getByTestId('select')
  let tags = getAllByTestId('tag')
  expect(tags.length).toBe(2)

  fireEvent.click(select)

  // Click 4th result (April)
  const options = getByRole('listbox').querySelectorAll('li')
  fireEvent.click(options[3])

  tags = getAllByTestId('tag')
  expect(tags.length).toBe(3)

  const formValues = getFormValues(getByTestId('values'))
  expect(select).toHaveTextContent('')
  expect(tags.map(tag => tag.textContent)).toStrictEqual(['February', 'March', 'April'])
  expect(formValues.select).toStrictEqual(['february', 'march', 'april'])
})

test('<Select isMultiple> can remove multiple items', () => {
  const { getAllByTestId, getByTestId } = render(
    <TestFinalForm initialValues={{ select: ['february', 'march'] }}>
      <ConnectedField
        component={Select}
        isMultiple
        label="Select"
        name="select"
        options={OPTIONS}
        testId="select"
      />
    </TestFinalForm>
  )

  const select = getByTestId('select')
  let tags = getAllByTestId('tag')
  expect(tags.length).toBe(2)

  fireEvent.click(tags[1].querySelector('[title=Remove]'))
  tags = getAllByTestId('tag')
  expect(tags.length).toBe(1)

  const formValues = getFormValues(getByTestId('values'))
  expect(select).toHaveTextContent('')
  expect(tags.map(tag => tag.textContent)).toStrictEqual(['February'])
  expect(formValues.select).toStrictEqual(['february'])
})

test('<Select required> cannot remove selected item', () => {
  const { getByRole, getByTestId, queryByTitle } = render(
    <TestFinalForm initialValues={{}}>
      <ConnectedField
        component={Select}
        label="Select"
        name="select"
        options={OPTIONS}
        required
        testId="select"
      />
    </TestFinalForm>
  )

  const select = getByTestId('select')
  expect(select.getAttribute('required')).toBe('')

  // Choose option
  fireEvent.click(select)

  const options = getByRole('listbox').querySelectorAll('li')
  fireEvent.click(options[1])

  let formValues = getFormValues(getByTestId('values'))
  expect(select).toHaveTextContent('February')
  expect(formValues.select).toStrictEqual('february')

  // Use `queryByTitle` to expect no close button
  const removeButton = queryByTitle('Remove item')
  expect(removeButton).toBeNull()
})

test('<Select renderItem> formats items', () => {
  const { getByTestId } = render(
    <TestFinalForm initialValues={{ select: 'february' }}>
      <ConnectedField
        component={Select}
        label="Select"
        name="select"
        options={OPTIONS}
        renderItem={option => (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Icon mr="xs" name="date" size="sm" title="Calendar" /> <span>{option.label}</span>
          </div>
        )}
        testId="select"
      />
    </TestFinalForm>
  )

  const select = getByTestId('select')
  const icon = select.querySelector('svg')

  const formValues = getFormValues(getByTestId('values'))
  expect(select).toHaveTextContent('February')
  expect(icon.getAttribute('title')).toBe('Calendar')
  expect(formValues.select).toStrictEqual('february')
})

test('<Select isSearchable> filters results', () => {
  const { getByRole, getByTestId } = render(
    <TestFinalForm initialValues={{}}>
      <ConnectedField
        component={Select}
        dataTestid="select"
        isSearchable
        label="Select"
        name="select"
        options={OPTIONS}
      />
    </TestFinalForm>
  )

  const select = getByTestId('select')
  fireEvent.change(select, { target: { value: 'ember' } })

  const options = getByRole('listbox').querySelectorAll('li')
  expect(options.length).toBe(3) // September, November, December

  fireEvent.click(options[1])

  const formValues = getFormValues(getByTestId('values'))
  expect(select.value).toBe('November')
  expect(formValues.select).toStrictEqual('november')
})

test("<Select isSearchable> doesn't show list if no results", () => {
  const { getByTestId, queryByRole } = render(
    <TestFinalForm initialValues={{}}>
      <ConnectedField
        component={Select}
        dataTestid="select"
        isSearchable
        label="Select"
        name="select"
        options={OPTIONS}
      />
    </TestFinalForm>
  )

  const select = getByTestId('select')
  fireEvent.change(select, { target: { value: 'fish' } })

  const options = queryByRole('listbox')
  expect(options).toBeNull()
})

test('<Select isCreatable> can create new items', () => {
  const { getByRole, getByTestId } = render(
    <TestFinalForm initialValues={{}}>
      <ConnectedField
        component={Select}
        dataTestid="select"
        isCreatable
        label="Select"
        name="select"
        options={OPTIONS}
      />
    </TestFinalForm>
  )

  const select = getByTestId('select')
  fireEvent.change(select, { target: { value: 'Fish and chips' } })

  const option = getByRole('listbox').querySelector('li')
  expect(option).toHaveTextContent('Create "Fish and chips"')

  // TODO: Fix this test
  // fireEvent.click(addOption)
  // const formValues = getFormValues(getByTestId('values'))
  // expect(select.value).toBe('Fish and chips')
  // expect(formValues.select).toStrictEqual('fish-and-chips')
})
