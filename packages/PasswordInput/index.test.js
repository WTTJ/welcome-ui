import React from 'react'
import { fireEvent } from '@testing-library/react'

import { render } from '../../utils/tests'
import { ConnectedField } from '../ConnectedField'
import { Form, getFormValues } from '../../utils/Form'

import { PasswordInput } from './index'

describe('<PasswordInput>', () => {
  test('should display given value', () => {
    const { getByTestId } = render(
      <Form initialValues={{ input: 'test' }}>
        <ConnectedField component={PasswordInput} dataTestId="input" label="Input" name="input" />
      </Form>
    )

    const input = getByTestId('input')
    const formValues = getFormValues(getByTestId('values'))

    expect(input.value).toBe('test')
    expect(formValues.input).toStrictEqual('test')
  })

  test('should have password attribute', () => {
    const { getByTestId } = render(
      <Form initialValues={{ input: 'test' }}>
        <ConnectedField component={PasswordInput} dataTestId="input" label="Input" name="input" />
      </Form>
    )

    const input = getByTestId('input')
    const button = getByTestId('input-action')

    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(input).toHaveAttribute('type', 'password')
  })

  test('should have text attribute', () => {
    const { getByTestId } = render(
      <Form initialValues={{ input: 'test' }}>
        <ConnectedField component={PasswordInput} dataTestId="input" label="Input" name="input" />
      </Form>
    )

    const input = getByTestId('input')
    const button = getByTestId('input-action')

    fireEvent.click(button)

    expect(button).toHaveAttribute('aria-expanded', 'true')
    expect(input).toHaveAttribute('type', 'text')
  })
})
