import type { HTMLInputTypeAttribute } from 'react'

import { screen } from '@testing-library/react'

import { Field } from '../'
import { render } from '../../../../tests'

const Input = ({
  id,
  name = 'hello',
  type = 'text',
  ...rest
}: {
  id?: string
  name?: string
  type?: HTMLInputTypeAttribute
}) => {
  return <input data-testid="input" id={id} name={name} type={type} {...rest} />
}

const labelText = 'Label'
const hintText = 'Hint'
const errorText = 'Error'

describe('<Field />', () => {
  it('should render', () => {
    render(
      <Field dataTestId="field">
        <Input />
      </Field>
    )

    const field = screen.getByTestId('field')
    expect(field).toBeInTheDocument()

    const input = screen.getByTestId('input')
    expect(input).toBeInTheDocument()

    const label = field.querySelector('label')
    expect(label).not.toBeInTheDocument()

    const hint = field.getElementsByTagName('div')
    expect(hint.length).toBe(2)
  })

  it('should display label', () => {
    render(
      <Field dataTestId="field" hint="hint" label={labelText}>
        <Input />
      </Field>
    )

    const field = screen.getByTestId('field')
    expect(field).toBeInTheDocument()

    const input = screen.getByTestId('input')
    expect(input).toBeInTheDocument()

    const hint = screen.getByTestId('field-hint')
    expect(hint).toHaveTextContent('hint')

    const label = screen.getByText('Label')
    expect(label).toBeInTheDocument()
    expect(label).toHaveTextContent(labelText)
  })

  it('should display hint', () => {
    render(
      <Field dataTestId="field" hint={hintText}>
        <Input />
      </Field>
    )

    const field = screen.getByTestId('field')
    expect(field).toBeInTheDocument()

    const input = screen.getByTestId('input')
    expect(input).toBeInTheDocument()

    const hint = screen.getByText(hintText)
    expect(hint).toBeInTheDocument()
    expect(hint).toHaveTextContent(hintText)
  })

  it('should display error until hint', () => {
    render(
      <Field dataTestId="field" error={errorText} hint={hintText}>
        <Input />
      </Field>
    )

    const field = screen.getByTestId('field')
    expect(field).toBeInTheDocument()

    const hint = screen.getByText(errorText)
    expect(hint).toBeInTheDocument()
    expect(hint).toHaveTextContent(errorText)

    const input = screen.getByTestId('input')
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('variant', 'danger')
  })

  it('should display label before input', () => {
    render(
      <Field dataTestId="field" label={labelText}>
        <Input />
      </Field>
    )

    const field = screen.getByTestId('field')
    expect(field).toBeInTheDocument()

    const input = screen.getByTestId('input')
    expect(input).toBeInTheDocument()

    const label = screen.getByText('Label')
    expect(label).toBeInTheDocument()

    expect(label.compareDocumentPosition(input)).toBe(4)
  })

  it('should display checkable input inside label', () => {
    render(
      <Field dataTestId="field" label={labelText}>
        <Input type="checkbox" />
      </Field>
    )

    const field = screen.getByTestId('field')
    expect(field).toBeInTheDocument()

    const input = screen.getByTestId('input')
    expect(input).toBeInTheDocument()

    const label = screen.getByText('Label')
    expect(label).toBeInTheDocument()

    expect(label.compareDocumentPosition(input)).toBe(2)
  })

  it('should focus input when click on label when using id on input', async () => {
    const { user } = render(
      <Field dataTestId="field" label={labelText}>
        <Input id="field" />
      </Field>
    )

    const field = screen.getByTestId('field')
    const label = field.querySelector('label')
    const input = screen.getByTestId('input')

    expect(label?.htmlFor).toBe('field')
    expect(label?.htmlFor).toBe(input?.id)

    await user.click(label)

    expect(input).toHaveFocus()
    expect(document.activeElement).toBe(input)
  })

  it('should focus input when click on label when using name on input (the fallback value of the id is the name prop)', async () => {
    const { user } = render(
      <Field dataTestId="field" label={labelText}>
        <Input name="field" />
      </Field>
    )

    const field = screen.getByTestId('field')
    const label = field.querySelector('label')
    const input = screen.getByTestId('input')

    expect(label?.htmlFor).toBe('field')
    expect(label?.htmlFor).toBe(input?.id)

    await user.click(label)

    expect(input).toHaveFocus()
    expect(document.activeElement).toBe(input)
  })

  it('should focus input when click on label when using neither name nor id on input (the fallback value of the id is created randomly)', async () => {
    const { user } = render(
      <Field dataTestId="field" label={labelText}>
        <Input />
      </Field>
    )

    const field = screen.getByTestId('field')
    const label = field.querySelector('label')
    const input = screen.getByTestId('input')

    expect(label?.htmlFor).toContain('wui-field-')
    expect(label?.htmlFor).toBe(input?.id)

    await user.click(label)

    expect(input).toHaveFocus()
    expect(document.activeElement).toBe(input)
  })
})
