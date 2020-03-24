import React from 'react'

import { Form, getFormValues } from '../../docz/Form'
import { render } from '../../src/utils/tests'
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
          { element: () => 'baz', value: 'baz' }
        ]}
        required
      />
    </Form>
  )

  const formValues = getFormValues(getByTestId('values'))

  expect(formValues.value).toStrictEqual('foo')
})
