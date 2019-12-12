import React, { createRef } from 'react'

import { Form } from '../../../docz/Form'
import { render } from '../../utils/tests'
import { InputText } from '../InputText/index'

import { ConnectedField } from './index'

const content = 'Jungle'

describe('<ConnectedField>', () => {
  it('should render correctly and hold `ref`', () => {
    const fieldRef = createRef()
    const { getByTestId } = render(
      <Form initialValues={{ jungle: content }}>
        <ConnectedField component={InputText} dataTestId="input" name="jungle" ref={fieldRef} />
      </Form>
    )

    const input = getByTestId('input')
    expect(input).toHaveValue(content)
    expect(fieldRef.current.name).toEqual('jungle')
  })

  it('should throw error if no component provided', () => {
    const { container } = render(
      <Form initialValues={{ jungle: content }}>
        <ConnectedField dataTestId="input" name="jungle" />
      </Form>
    )

    const form = container.querySelector('form')
    expect(form).toBeEmpty()
  })
})
