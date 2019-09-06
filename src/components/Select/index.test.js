import React from 'react'
import { fireEvent } from '@testing-library/react'

import { getFormValues, TestFinalForm } from '../../../docz/FinalForm'
import { render } from '../../utils/tests'
import { ConnectedField } from '../ConnectedField'

import { Select } from './index'

const renderItem = ({ label }) => label.charAt(0).toUpperCase() + label.slice(1)

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
].map(month => ({ label: month, value: month }))

test('<Select> has default attributes', () => {
  const { getByTestId } = render(
    <TestFinalForm initialValues={{}}>
      <ConnectedField
        component={Select}
        dataTestid="select"
        label="Select"
        name="select"
        options={OPTIONS}
        renderItem={renderItem}
      />
    </TestFinalForm>
  )
  const label = getByTestId('label')
  const select = getByTestId('select')

  expect(label).toHaveTextContent('Select')
  expect(select.getAttribute('placeholder')).toBe('Choose from…')
  expect(select.getAttribute('data-spacer')).toBe('september')
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
        renderItem={renderItem}
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
        renderItem={renderItem}
      />
    </TestFinalForm>
  )

  const select = getByTestId('select')
  fireEvent.click(select)

  const options = getByRole('listbox')
  fireEvent.click(options.childNodes[1])

  const formValues = getFormValues(getByTestId('values'))
  expect(select).toHaveTextContent('February')
  expect(formValues.select).toBe('february')
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
        renderItem={renderItem}
      />
    </TestFinalForm>
  )

  const select = getByTestId('select')
  let formValues = getFormValues(getByTestId('values'))
  expect(select).toHaveTextContent('February')
  expect(formValues.select).toBe('february')

  // Click cross to remove selected option
  const button = getByRole('button')
  fireEvent.click(button)

  formValues = getFormValues(getByTestId('values'))
  expect(select).toHaveTextContent('')
  expect(formValues.select).toBe(undefined)
})
