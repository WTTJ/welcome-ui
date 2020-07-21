import React from 'react'
import { fireEvent } from '@testing-library/react'
import { ConnectedField } from '@welcome-ui/connected-field'

import { Form, getFormValues } from '../../utils/Form'
import { render } from '../../utils/tests'

import { Checkbox } from './index'

const expectChecked = (element, valuesElement, value) => {
  const formValues = getFormValues(valuesElement)
  expect(element.getAttribute('aria-checked')).toBe(`${value}`)
  expect(!!formValues.checkbox).toBe(value)
}

test('<Checkbox> toggles on input click', () => {
  const { container, getByTestId } = render(
    <Form initialValues={{}}>
      <ConnectedField
        component={Checkbox}
        dataTestId="inputCheckbox"
        label="Checkbox"
        name="checkbox"
      />
    </Form>
  )
  const inputCheckbox = getByTestId('inputCheckbox')
  const label = container.querySelector('label')

  expect(label).toHaveTextContent('Checkbox')
  expectChecked(inputCheckbox, container, false)

  fireEvent.click(inputCheckbox)
  expectChecked(inputCheckbox, container, true)

  fireEvent.click(inputCheckbox)
  expectChecked(inputCheckbox, container, false)
})

test('<Checkbox> toggles on label click', () => {
  const { container, getByTestId } = render(
    <Form initialValues={{}}>
      <ConnectedField
        component={Checkbox}
        dataTestId="inputCheckbox"
        label="Checkbox"
        name="checkbox"
      />
    </Form>
  )
  const inputCheckbox = getByTestId('inputCheckbox')
  const label = container.querySelector('label')

  expect(label).toHaveTextContent('Checkbox')
  expectChecked(inputCheckbox, container, false)

  fireEvent.click(label)
  expectChecked(inputCheckbox, container, true)

  fireEvent.click(label)
  expectChecked(inputCheckbox, container, false)
})
