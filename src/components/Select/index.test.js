import React from 'react'
import { fireEvent } from '@testing-library/react'

import { getFormValues, TestFinalForm } from '../../../docz/FinalForm'
import { render } from '../../utils/tests'
import { ConnectedField } from '../ConnectedField'

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
        dataTestid="select"
        label="Select"
        name="select"
        options={OPTIONS}
      />
    </TestFinalForm>
  )
  const label = getByTestId('label')
  const select = getByTestId('select')

  expect(label).toHaveTextContent('Select')
  expect(select.getAttribute('placeholder')).toBe('Choose from…')
  expect(select.getAttribute('data-spacer')).toBe('September')
  expect(select).toHaveTextContent('')
})

test('<Select> shows options on click', () => {
  const { getByRole, getByTestId } = render(
    <TestFinalForm initialValues={{}}>
      <ConnectedField
        component={Select}
        dataTestid="select"
        label="Select"
        name="select"
        options={OPTIONS}
      />
    </TestFinalForm>
  )

  const select = getByTestId('select')
  fireEvent.click(select)

  const options = getByRole('listbox')
  expect(options.childNodes.length).toBe(12)
  expect(options.childNodes[0]).toHaveTextContent('January')
})

test('<Select> can choose option', () => {
  const { getByRole, getByTestId } = render(
    <TestFinalForm initialValues={{}}>
      <ConnectedField
        component={Select}
        dataTestid="select"
        label="Select"
        name="select"
        options={OPTIONS}
      />
    </TestFinalForm>
  )

  const select = getByTestId('select')
  fireEvent.click(select)

  const options = getByRole('listbox')
  fireEvent.click(options.childNodes[1])

  const formValues = getFormValues(getByTestId('values'))
  expect(select).toHaveTextContent('February')
  expect(formValues.select).toStrictEqual('february')
})

test('<Select> can remove option', () => {
  const { getByRole, getByTestId } = render(
    <TestFinalForm initialValues={{ select: 'february' }}>
      <ConnectedField
        component={Select}
        dataTestid="select"
        label="Select"
        name="select"
        options={OPTIONS}
      />
    </TestFinalForm>
  )

  const select = getByTestId('select')
  let formValues = getFormValues(getByTestId('values'))
  expect(select).toHaveTextContent('February')
  expect(formValues.select).toStrictEqual('february')

  // Click cross to remove selected option
  const button = getByRole('button')
  fireEvent.click(button)

  formValues = getFormValues(getByTestId('values'))
  expect(select).toHaveTextContent('')
  expect(formValues.select).toBeUndefined()
})

test('<Select isMultiple> can select multiple items', () => {
  const { getAllByTestId, getByRole, getByTestId } = render(
    <TestFinalForm initialValues={{ select: ['february', 'march'] }}>
      <ConnectedField
        component={Select}
        dataTestid="select"
        isMultiple
        label="Select"
        name="select"
        options={OPTIONS}
        tabIndex={1}
      />
    </TestFinalForm>
  )

  const select = getByTestId('select')
  let tags = getAllByTestId('tag')
  expect(tags.length).toBe(2)

  fireEvent.click(select)

  // Click 4th result (April)
  const options = getByRole('listbox')
  fireEvent.click(options.childNodes[3])

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
        dataTestid="select"
        isMultiple
        label="Select"
        name="select"
        options={OPTIONS}
        tabIndex={1}
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

// Can't test searchable as can't type in `contenteditable` using JSDom :(
test.skip('<Select isSearchable> can search options', () => {
  const { getByRole, getByTestId } = render(
    <TestFinalForm initialValues={{}}>
      <ConnectedField
        component={Select}
        dataTestid="select"
        isSearchable
        label="Select"
        name="select"
        options={OPTIONS}
        tabIndex={1}
      />
    </TestFinalForm>
  )

  const select = getByTestId('select')

  // Search `emb`
  fireEvent.click(select)
  fireEvent.input(select, { target: { value: 'emb' } })

  // Assert 3 results (September, October, November)
  const options = getByRole('listbox')
  expect(options.childNodes.length).toBe(3)

  // Click 2nd result (October)
  fireEvent.click(options.childNodes[1])
  expect(select).toHaveTextContent('October')

  // Assert October
  const formValues = getFormValues(getByTestId('values'))
  expect(select).toHaveTextContent('October')
  expect(formValues.select).toStrictEqual('october')
})
