import React from 'react'
import userEvent from '@testing-library/user-event'

import { render } from '../../../utils/tests'
import { Field } from '../src'

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = props => {
  return <input name="hello" type="text" {...props} />
}

const labelText = 'Label'
const hintText = 'Hint'
const errorText = 'Error'

describe('<Field />', () => {
  it('should render', () => {
    const { getByTestId } = render(
      <Field dataTestId="field">
        <Input />
      </Field>
    )
    const field = getByTestId('field')
    expect(field).toBeInTheDocument()

    const input = field.querySelector('input')
    expect(input).toBeInTheDocument()

    const label = field.querySelector('label')
    expect(label).not.toBeInTheDocument()

    const hint = field.querySelector('div')
    expect(hint).not.toBeInTheDocument()
  })

  it('should display label', () => {
    const { getByTestId } = render(
      <Field dataTestId="field" label={labelText}>
        <Input />
      </Field>
    )
    const field = getByTestId('field')
    expect(field).toBeInTheDocument()

    const input = field.querySelector('input')
    expect(input).toBeInTheDocument()

    const hint = field.querySelector('div')
    expect(hint).not.toBeInTheDocument()

    const label = field.querySelector('label')
    expect(label).toBeInTheDocument()
    expect(label).toHaveTextContent(labelText)
  })

  it('should display hint', () => {
    const { getByTestId } = render(
      <Field dataTestId="field" hint={hintText}>
        <Input />
      </Field>
    )
    const field = getByTestId('field')
    expect(field).toBeInTheDocument()

    const input = field.querySelector('input')
    expect(input).toBeInTheDocument()

    const hint = field.querySelector('div')
    expect(hint).toBeInTheDocument()
    expect(hint).toHaveTextContent(hintText)
  })

  it('should display error until hint', () => {
    const { getByTestId } = render(
      <Field dataTestId="field" error={errorText} hint={hintText}>
        <Input />
      </Field>
    )
    const field = getByTestId('field')
    expect(field).toBeInTheDocument()

    const hint = field.querySelector('div')
    expect(hint).toBeInTheDocument()
    expect(hint).toHaveTextContent(errorText)

    const input = field.querySelector('input')
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('variant', 'error')
  })

  it('should display label before input', () => {
    const { getByTestId } = render(
      <Field dataTestId="field" label={labelText}>
        <Input />
      </Field>
    )

    const field = getByTestId('field')
    expect(field).toBeInTheDocument()
    expect(field.childNodes[0].nodeName.toLowerCase()).toBe('label')
    expect(field.childNodes[1].nodeName.toLowerCase()).toBe('input')
  })

  it('should display checkable input inside label', () => {
    const { getByTestId } = render(
      <Field dataTestId="field" label={labelText}>
        <Input type="checkbox" />
      </Field>
    )

    const field = getByTestId('field')
    expect(field).toBeInTheDocument()
    const container = field.childNodes[0]

    expect(container.childNodes[0].nodeName.toLowerCase()).toBe('label')
    expect(container.childNodes[0].childNodes[0].nodeName.toLowerCase()).toBe('input')
  })

  it('should focus input when click on label when using id on input', async () => {
    const { getByTestId } = render(
      <Field dataTestId="field" label={labelText}>
        <Input id="field" />
      </Field>
    )

    const field = getByTestId('field')
    const label = field.querySelector('label')
    const input = field.querySelector('input')

    expect(label?.htmlFor).toBe('field')
    expect(label?.htmlFor).toBe(input?.id)
    await userEvent.click(label as HTMLLabelElement)
    expect(input).toHaveFocus()
    expect(document.activeElement).toBe(input)
  })

  it('should focus input when click on label when using name on input (the fallback value of the id is the name prop)', async () => {
    const { getByTestId } = render(
      <Field dataTestId="field" label={labelText}>
        <Input name="field" />
      </Field>
    )

    const field = getByTestId('field')
    const label = field.querySelector('label')
    const input = field.querySelector('input')

    expect(label?.htmlFor).toBe('field')
    expect(label?.htmlFor).toBe(input?.id)
    await userEvent.click(label as HTMLLabelElement)
    expect(input).toHaveFocus()
    expect(document.activeElement).toBe(input)
  })

  it('should focus input when click on label when using neither name nor id on input (the fallback value of the id is created randomly)', async () => {
    const { getByTestId } = render(
      <Field dataTestId="field" label={labelText}>
        <Input />
      </Field>
    )

    const field = getByTestId('field')
    const label = field.querySelector('label')
    const input = field.querySelector('input')

    expect(label?.htmlFor).toContain('wui-field-')
    expect(label?.htmlFor).toBe(input?.id)
    await userEvent.click(label as HTMLLabelElement)
    expect(input).toHaveFocus()
    expect(document.activeElement).toBe(input)
  })
})
