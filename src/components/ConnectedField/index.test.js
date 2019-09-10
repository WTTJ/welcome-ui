import React, { createRef } from 'react'
import { Form } from 'react-final-form'

import { render } from '../../utils/tests'
import { InputText } from '../InputText/index'

import { ConnectedField } from './index'

const content = 'Jungle'

const noop = () => {}

describe.skip('<ConnectedField>', () => {
  it('should render correctly and hold `ref`', () => {
    const fieldRef = createRef()
    const { getByTestId } = render(
      <Form
        initialValues={{ jungle: content }}
        onSubmit={noop}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <ConnectedField component={InputText} dataTestId="input" name="jungle" ref={fieldRef} />
          </form>
        )}
      />
    )

    const input = getByTestId('input')
    expect(input).toHaveValue(content)
    expect(fieldRef.current.name).toEqual('jungle')
  })

  it.skip('should throw error if invalid component provided', () => {
    const { getByTestId } = render(
      <Form
        initialValues={{ jungle: content }}
        onSubmit={noop}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <ConnectedField component={noop} dataTestId="input" name="jungle" />
          </form>
        )}
      />
    )

    const input = getByTestId('input')
    expect(input).toHaveValue(content)
  })
})
