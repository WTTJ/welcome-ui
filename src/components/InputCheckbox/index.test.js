import React from 'react'
import { fireEvent } from '@testing-library/react'
import { Form } from 'react-final-form'

import { DoczForm } from '../../../docz/'
import { render } from '../../utils/tests'
import { ConnectedField } from '../ConnectedField'
import { Field } from '../Field'

import { InputCheckbox } from './index'

const expectChecked = (element, value) => {
  expect(element.getAttribute('aria-checked')).toBe(`${value}`)
}

test('<Field component={InputCheckbox}> toggles on input click', () => {
  const { container, getByTestId } = render(
    <DoczForm initialValues={{ checkbox: true }}>
      {(values, handleChange) => (
        <Field
          checked={!!values.checkbox}
          component={InputCheckbox}
          label="Checkbox"
          name="checkbox"
          onChange={handleChange}
        />
      )}
    </DoczForm>
  )
  const label = getByTestId('label')
  const inputCheckbox = getByTestId('inputCheckbox')
  const values = container.getElementsByTagName('code')[0]

  expect(label).toHaveTextContent('Checkbox')
  expectChecked(inputCheckbox, true)
  expect(values).toHaveTextContent('{ "checkbox": true }')

  fireEvent.click(inputCheckbox)

  expectChecked(inputCheckbox, false)
  expect(values).toHaveTextContent('{ "checkbox": false }')

  fireEvent.click(inputCheckbox)

  expectChecked(inputCheckbox, true)
  expect(values).toHaveTextContent('{ "checkbox": true }')
})

test('<ConnectedField component={InputCheckbox}> toggles on input click', () => {
  // eslint-disable-next-line
  const handleSubmit = console.debug
  const { getByTestId } = render(
    <Form
      initialValues={{}}
      onSubmit={handleSubmit}
      render={({ handleSubmit }) => {
        return (
          <form onSubmit={handleSubmit}>
            <ConnectedField component={InputCheckbox} label="Checkbox" name="checkbox" />
          </form>
        )
      }}
    />
  )
  const label = getByTestId('label')
  const inputCheckbox = getByTestId('inputCheckbox')

  expect(label).toHaveTextContent('Checkbox')
  expectChecked(inputCheckbox, false)

  fireEvent.click(inputCheckbox)

  expectChecked(inputCheckbox, true)

  fireEvent.click(inputCheckbox)

  expectChecked(inputCheckbox, false)
})

test('<Field component={InputCheckbox}> toggles on label click', () => {
  const { container, getByTestId } = render(
    <DoczForm initialValues={{ checkbox: true }}>
      {(values, handleChange) => (
        <Field
          checked={!!values.checkbox}
          component={InputCheckbox}
          label="Checkbox"
          name="checkbox"
          onChange={handleChange}
        />
      )}
    </DoczForm>
  )
  const label = getByTestId('label')
  const inputCheckbox = getByTestId('inputCheckbox')
  const values = container.getElementsByTagName('code')[0]

  expect(label).toHaveTextContent('Checkbox')
  expectChecked(inputCheckbox, true)
  expect(values).toHaveTextContent('{ "checkbox": true }')

  fireEvent.click(label)

  expectChecked(inputCheckbox, false)
  expect(values).toHaveTextContent('{ "checkbox": false }')

  fireEvent.click(label)

  expectChecked(inputCheckbox, true)
  expect(values).toHaveTextContent('{ "checkbox": true }')
})

test('<ConnectedField component={InputCheckbox}> toggles on label click', () => {
  // eslint-disable-next-line
  const handleSubmit = console.debug
  const { getByTestId } = render(
    <Form
      initialValues={{}}
      onSubmit={handleSubmit}
      render={({ handleSubmit }) => {
        return (
          <form onSubmit={handleSubmit}>
            <ConnectedField component={InputCheckbox} label="Checkbox" name="checkbox" />
          </form>
        )
      }}
    />
  )
  const label = getByTestId('label')
  const inputCheckbox = getByTestId('inputCheckbox')

  expect(label).toHaveTextContent('Checkbox')
  expectChecked(inputCheckbox, false)

  fireEvent.click(label)

  expectChecked(inputCheckbox, true)

  fireEvent.click(label)

  expectChecked(inputCheckbox, false)
})
