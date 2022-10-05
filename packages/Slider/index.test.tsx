import React from 'react'

import { fireEvent, render } from '../../utils/tests'

import { Slider } from './index'

describe('<Slider> test', () => {
  test('should render correctly <Slider>', () => {
    const handleChange = jest.fn()
    const { container } = render(<Slider max={100} min={0} onChange={handleChange} value={50} />)

    expect(container)
  })

  test('should change localValue & trigger onChange', async () => {
    const handleChange = jest.fn()
    const { container } = render(
      <Slider max={100} min={0} onChange={handleChange} value={50} w={100} />
    )

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const slider = container.querySelector<HTMLInputElement>('input[type="range"]')!

    fireEvent.change(slider, { target: { value: 70 } })
    fireEvent.mouseUp(slider)

    expect(handleChange.mock.calls.length).toBe(1)
    expect(handleChange.mock.calls[0][0]).toBe(70)
  })

  test('ensure min value is respected', async () => {
    const handleChange = jest.fn()
    const min = 0
    const { container } = render(
      <Slider max={100} min={min} onChange={handleChange} value={50} w={100} />
    )

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const slider = container.querySelector<HTMLInputElement>('input[type="range"]')!

    fireEvent.change(slider, { target: { value: -10 } })
    fireEvent.mouseUp(slider)

    expect(handleChange.mock.calls.length).toBe(1)
    expect(handleChange.mock.calls[0][0]).toBe(min)
  })

  test('ensure max value is respected', async () => {
    const handleChange = jest.fn()
    const max = 100
    const { container } = render(
      <Slider max={max} min={0} onChange={handleChange} value={50} w={100} />
    )

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const slider = container.querySelector<HTMLInputElement>('input[type="range"]')!

    fireEvent.change(slider, { target: { value: 200 } })
    fireEvent.mouseUp(slider)

    expect(handleChange.mock.calls.length).toBe(1)
    expect(handleChange.mock.calls[0][0]).toBe(max)
  })

  test('ensure inputText value is a number', async () => {
    const handleChange = jest.fn()
    const { container } = render(
      <Slider max={100} min={0} onChange={handleChange} type="right-field" value={50} w={100} />
    )

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const slider = container.querySelector<HTMLInputElement>('input[type="number"]')!

    fireEvent.change(slider, { target: { value: 'NaN' } })
    fireEvent.mouseUp(slider)

    expect(handleChange.mock.calls.length).toBe(1)
    expect(handleChange.mock.calls[0][0]).toBe(0)
  })
})

describe('<Slider.Range> test', () => {
  test('should render correctly <Slider.Range>', () => {
    const handleChange = jest.fn()
    const { container } = render(
      <Slider.Range max={100} min={0} onChange={handleChange} value={{ min: 20, max: 50 }} />
    )

    expect(container)
  })

  test('should change minValue and maxValue & trigger onChange', () => {
    const handleChange = jest.fn()
    const { container } = render(
      <Slider.Range max={100} min={0} onChange={handleChange} value={{ min: 20, max: 50 }} />
    )
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const slider = container.querySelectorAll('input[type="range"]')!

    fireEvent.change(slider[0], { target: { value: 10 } })
    fireEvent.mouseUp(slider[0])

    fireEvent.change(slider[1], { target: { value: 80 } })
    fireEvent.mouseUp(slider[1])

    expect(handleChange.mock.calls.length).toBe(2)
    expect(handleChange.mock.calls[1][0]).toMatchObject({ min: 10, max: 80 })
  })

  test('ensure minValue is respected', () => {
    const handleChange = jest.fn()
    const min = 0
    const { container } = render(
      <Slider.Range max={100} min={min} onChange={handleChange} value={{ min: 20, max: 50 }} />
    )
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const slider = container.querySelectorAll('input[type="range"]')!

    fireEvent.change(slider[0], { target: { value: -10 } })
    fireEvent.mouseUp(slider[0])

    expect(handleChange.mock.calls.length).toBe(1)
    expect(handleChange.mock.calls[0][0]).toMatchObject({ min: min, max: 50 })
  })

  test('ensure maxValue is respected', () => {
    const handleChange = jest.fn()
    const max = 100
    const { container } = render(
      <Slider.Range max={max} min={0} onChange={handleChange} value={{ min: 20, max: 50 }} />
    )
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const slider = container.querySelectorAll('input[type="range"]')!

    fireEvent.change(slider[1], { target: { value: 200 } })
    fireEvent.mouseUp(slider[1])

    expect(handleChange.mock.calls.length).toBe(1)
    expect(handleChange.mock.calls[0][0]).toMatchObject({ min: 20, max: max })
  })

  test("ensure minValue can't be > maxValue", () => {
    const handleChange = jest.fn()
    const { container } = render(
      <Slider.Range max={0} min={100} onChange={handleChange} value={{ min: 20, max: 50 }} />
    )
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const slider = container.querySelectorAll('input[type="range"]')!

    fireEvent.change(slider[0], { target: { value: 51 } })
    fireEvent.mouseUp(slider[0])

    fireEvent.change(slider[1], { target: { value: 50 } })
    fireEvent.mouseUp(slider[1])

    expect(handleChange.mock.calls.length).toBe(2)
    expect(handleChange.mock.calls[0][0]).toMatchObject({ min: 49, max: 50 })
  })

  test('ensure inputText value is a number', async () => {
    const handleChange = jest.fn()
    const { container } = render(
      <Slider.Range
        max={100}
        min={0}
        onChange={handleChange}
        type="fields"
        value={{ min: 20, max: 50 }}
      />
    )

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const inputSlider = container.querySelectorAll<HTMLInputElement>('input[type="number"]')!
    fireEvent.change(inputSlider[0], { target: { value: 'NaN' } })
    fireEvent.mouseUp(inputSlider[0])

    fireEvent.change(inputSlider[1], { target: { value: 'NaN' } })
    fireEvent.mouseUp(inputSlider[1])

    expect(handleChange.mock.calls.length).toBe(2)
    expect(handleChange.mock.calls[1][0]).toMatchObject({ min: 0, max: 1 })
  })
})
