import React from 'react'

import { Form, getFormValues } from '../../utils/Form'
import { render } from '../../utils/tests'
import { ConnectedField } from '../ConnectedField'

import { Picker } from './index'

test('<Picker> renders', () => {
  const { getByTestId } = render(
    <Form initialValues={{ value: 'foo' }}>
      <ConnectedField
        component={Picker}
        label="Values"
        name="value"
        options={[
          { element: () => 'foo', value: 'foo' },
          { element: () => 'bar', value: 'bar' },
          { element: () => 'baz', value: 'baz' },
        ]}
        required
      />
    </Form>
  )

  const formValues = getFormValues(getByTestId('values'))

  expect(formValues.value).toStrictEqual('foo')
})

test('<Picker> selected prop is passed to elements', () => {
  const { getByText } = render(
    <Form initialValues={{ value: 'foo' }}>
      <ConnectedField
        component={Picker}
        label="Values"
        name="value"
        options={[
          { element: ({ selected }) => (selected ? 'foo-selected' : 'foo'), value: 'foo' },
          { element: () => 'bar', value: 'bar' },
          { element: () => 'baz', value: 'baz' },
        ]}
        required
      />
    </Form>
  )

  const selectedNode = getByText('foo-selected')
  expect(selectedNode).toHaveTextContent('foo-selected')
})
