import React from 'react'
import { fireEvent } from '@testing-library/react'

import { DoczForm, getFormValues } from '../../../docz/Form'
import { render } from '../../utils/tests'
import { ConnectedField } from '../ConnectedField'

import { InputCheckbox } from './index'

const expectChecked = (element, valuesElement, value) => {
  const formValues = getFormValues(valuesElement)
  expect(element.getAttribute('aria-checked')).toBe(`${value}`)
  expect(!!formValues.checkbox).toBe(value)
}

test('<InputCheckbox> toggles on input click', () => {
  const { container, getByTestId } = render(
    <DoczForm initialValues={{}}>
      <ConnectedField
        component={InputCheckbox}
        dataTestId="inputCheckbox"
        label="Checkbox"
        name="checkbox"
      />
    </DoczForm>
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

test('<InputCheckbox> toggles on label click', () => {
  const { container, getByTestId } = render(
    <DoczForm initialValues={{}}>
      <ConnectedField
        component={InputCheckbox}
        dataTestId="inputCheckbox"
        label="Checkbox"
        name="checkbox"
      />
    </DoczForm>
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
