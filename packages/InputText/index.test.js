import React from 'react'
import { fireEvent } from '@testing-library/react'

import { Form, getFormValues } from '../../../docz/Form'
import { render } from '../utils/tests'
import { ConnectedField } from '../ConnectedField'

import { InputText } from './index'

test('<InputText> displays given value', () => {
  const { getByTestId } = render(
    <Form initialValues={{ input: 'test' }}>
      <ConnectedField component={InputText} dataTestId="input" label="Input" name="input" />
    </Form>
  )

  const input = getByTestId('input')
  const formValues = getFormValues(getByTestId('values'))

  expect(input.value).toBe('test')
  expect(formValues.input).toStrictEqual('test')
})

test("<InputText> can't remove value", () => {
  const { getByTestId, queryByRole } = render(
    <Form initialValues={{ input: 'test' }}>
      <ConnectedField component={InputText} dataTestId="input" label="Input" name="input" />
    </Form>
  )

  const input = getByTestId('input')
  const formValues = getFormValues(getByTestId('values'))

  // Use `queryByTitle` to expect no close button
  const clearButton = queryByRole('button')
  expect(clearButton).toBeNull()

  expect(input.value).toBe('test')
  expect(formValues.input).toStrictEqual('test')
})

test('<InputText isClearable> can remove value', () => {
  const { getByRole, getByTestId } = render(
    <Form initialValues={{ input: 'test' }}>
      <ConnectedField
        component={InputText}
        dataTestId="input"
        isClearable
        label="Input"
        name="input"
      />
    </Form>
  )

  let input = getByTestId('input')
  let formValues = getFormValues(getByTestId('values'))

  expect(input.value).toBe('test')
  expect(formValues.input).toStrictEqual('test')

  const clearButton = getByRole('button')
  fireEvent.click(clearButton)

  formValues = getFormValues(getByTestId('values'))
  expect(input.value).toBe('')
  expect(formValues.input).toBe(undefined)
})
