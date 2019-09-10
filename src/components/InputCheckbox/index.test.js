import React from 'react'
import { fireEvent } from '@testing-library/react'

import { DoczForm } from '../../../docz/'
import { getFormValues, TestFinalForm } from '../../../docz/FinalForm'
import { render } from '../../utils/tests'
import { ConnectedField } from '../ConnectedField'
import { Field } from '../Field'

import { InputCheckbox } from './index'

const expectChecked = (element, valuesElement, value) => {
  const formValues = getFormValues(valuesElement)
  expect(element.getAttribute('aria-checked')).toBe(`${value}`)
  expect(!!formValues.checkbox).toBe(value)
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
          testId="inputCheckbox"
        />
      )}
    </DoczForm>
  )
  const label = getByTestId('label')
  const inputCheckbox = getByTestId('inputCheckbox')

  expect(label).toHaveTextContent('Checkbox')
  expectChecked(inputCheckbox, container, true)

  fireEvent.click(inputCheckbox)
  expectChecked(inputCheckbox, container, false)

  fireEvent.click(inputCheckbox)
  expectChecked(inputCheckbox, container, true)
})

test('<ConnectedField component={InputCheckbox}> toggles on input click', () => {
  const { container, getByTestId } = render(
    <TestFinalForm initialValues={{}}>
      <ConnectedField
        component={InputCheckbox}
        label="Checkbox"
        name="checkbox"
        testId="inputCheckbox"
      />
    </TestFinalForm>
  )
  const label = getByTestId('label')
  const inputCheckbox = getByTestId('inputCheckbox')

  expect(label).toHaveTextContent('Checkbox')
  expectChecked(inputCheckbox, container, false)

  fireEvent.click(inputCheckbox)
  expectChecked(inputCheckbox, container, true)

  fireEvent.click(inputCheckbox)
  expectChecked(inputCheckbox, container, false)
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
          testId="inputCheckbox"
        />
      )}
    </DoczForm>
  )
  const label = getByTestId('label')
  const inputCheckbox = getByTestId('inputCheckbox')

  expect(label).toHaveTextContent('Checkbox')
  expectChecked(inputCheckbox, container, true)

  fireEvent.click(label)
  expectChecked(inputCheckbox, container, false)

  fireEvent.click(label)
  expectChecked(inputCheckbox, container, true)
})

test('<ConnectedField component={InputCheckbox}> toggles on label click', () => {
  const { container, getByTestId } = render(
    <TestFinalForm initialValues={{}}>
      <ConnectedField
        component={InputCheckbox}
        label="Checkbox"
        name="checkbox"
        testId="inputCheckbox"
      />
    </TestFinalForm>
  )
  const label = getByTestId('label')
  const inputCheckbox = getByTestId('inputCheckbox')

  expect(label).toHaveTextContent('Checkbox')
  expectChecked(inputCheckbox, container, false)

  fireEvent.click(label)
  expectChecked(inputCheckbox, container, true)

  fireEvent.click(label)
  expectChecked(inputCheckbox, container, false)
})
