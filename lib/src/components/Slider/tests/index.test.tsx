import React from 'react'
import { describe, expect, it, vi } from 'vitest'
import { fireEvent } from '@testing-library/react'

import { render } from '../../../../tests'
import { Slider } from '../'

describe('<Slider> test', () => {
  it('should render correctly <Slider>', () => {
    const handleChange = vi.fn()
    const { container } = render(<Slider max={100} min={0} onChange={handleChange} value={50} />)

    expect(container)
  })

  it('should change value & trigger onChange when slider is moved', async () => {
    const handleChange = vi.fn()
    const { container } = render(
      <Slider max={100} min={0} onChange={handleChange} value={50} w={100} />
    )

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const slider = container.querySelector<HTMLInputElement>('input[type="range"]')!

    fireEvent.change(slider, { target: { value: 70 } })
    fireEvent.mouseUp(slider)

    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(handleChange).toHaveBeenCalledWith(70)
  })

  it('ensure min value is respected', () => {
    const handleChange = vi.fn()
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

  it('ensure max value is respected', () => {
    const handleChange = vi.fn()
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

  it('ensure inputText value is a number', () => {
    const handleChange = vi.fn()
    const { container } = render(
      <Slider max={100} min={0} onChange={handleChange} type="right-field" value={50} w={100} />
    )

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const slider = container.querySelector<HTMLInputElement>('input[type="number"]')!

    fireEvent.change(slider, { target: { value: 'NaN' } })
    fireEvent.keyDown(slider, { key: 'Enter', code: 'Enter', charCode: 13 })

    expect(handleChange.mock.calls.length).toBe(1)
    expect(handleChange.mock.calls[0][0]).toBe(0)
  })

  it('ensure value is rounded to the < value when there is a step', () => {
    const handleChange = vi.fn()
    const { container } = render(
      <Slider
        max={100}
        min={0}
        onChange={handleChange}
        step={10}
        type="right-field"
        value={12}
        w={100}
      />
    )

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const slider = container.querySelector<HTMLInputElement>('input[type="range"]')!

    expect(slider).toMatchObject({ value: '10' })
  })

  it('ensure value is rounded to the > value when there is a step', () => {
    const handleChange = vi.fn()
    const { container } = render(
      <Slider
        max={100}
        min={0}
        onChange={handleChange}
        step={10}
        type="right-field"
        value={56}
        w={100}
      />
    )

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const slider = container.querySelector<HTMLInputElement>('input[type="range"]')!

    expect(slider).toMatchObject({ value: '60' })
  })

  it('Slider and left field should be disabled', () => {
    const handleChange = vi.fn()
    const value = 30
    const { container } = render(
      <Slider
        disabled
        max={100}
        min={0}
        onChange={handleChange}
        type="left-field"
        value={value}
        w={100}
      />
    )

    /* eslint-disable @typescript-eslint/no-non-null-assertion */
    const slider = container.querySelector<HTMLInputElement>('input[type="range"]')!
    const numberInput = container.querySelector<HTMLInputElement>('input[type="number"]')!
    /* eslint-enable @typescript-eslint/no-non-null-assertion */

    expect(slider).toBeDisabled()
    expect(numberInput).toBeDisabled()
  })

  it('Slider and right field should be disabled', () => {
    const handleChange = vi.fn()
    const value = 30
    const { container } = render(
      <Slider
        disabled
        max={100}
        min={0}
        onChange={handleChange}
        type="right-field"
        value={value}
        w={100}
      />
    )

    /* eslint-disable @typescript-eslint/no-non-null-assertion */
    const slider = container.querySelector<HTMLInputElement>('input[type="range"]')!
    const numberInput = container.querySelector<HTMLInputElement>('input[type="number"]')!
    /* eslint-enable @typescript-eslint/no-non-null-assertion */

    expect(slider).toBeDisabled()
    expect(numberInput).toBeDisabled()
  })
})

describe('<Slider.Range> test', () => {
  it('should render correctly <Slider.Range>', () => {
    const handleChange = vi.fn()
    const { container } = render(
      <Slider.Range max={100} min={0} onChange={handleChange} value={{ min: 20, max: 50 }} />
    )

    expect(container)
  })

  it('should change minValue and maxValue & trigger onChange', () => {
    const handleChange = vi.fn()
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

  it('ensure minValue is respected', () => {
    const handleChange = vi.fn()
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

  it('ensure maxValue is respected', () => {
    const handleChange = vi.fn()
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

  it("ensure minValue can't be > maxValue", () => {
    const handleChange = vi.fn()
    const { container } = render(
      <Slider.Range max={100} min={0} onChange={handleChange} value={{ min: 20, max: 50 }} />
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

  it("ensure maxValue can't be < minValue", () => {
    const handleChange = vi.fn()
    const { container } = render(
      <Slider.Range max={100} min={0} onChange={handleChange} value={{ min: 20, max: 50 }} />
    )
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const slider = container.querySelectorAll('input[type="range"]')!

    fireEvent.change(slider[0], { target: { value: 50 } })
    fireEvent.mouseUp(slider[0])

    fireEvent.change(slider[1], { target: { value: 49 } })
    fireEvent.mouseUp(slider[1])

    expect(handleChange.mock.calls.length).toBe(2)
    expect(handleChange.mock.calls[0][0]).toMatchObject({ min: 49, max: 50 })
  })

  it('ensure inputText value is a number', () => {
    const handleChange = vi.fn()
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
    fireEvent.keyDown(inputSlider[0], { key: 'Enter', code: 'Enter', charCode: 13 })

    fireEvent.change(inputSlider[1], { target: { value: 'NaN' } })
    fireEvent.keyDown(inputSlider[1], { key: 'Enter', code: 'Enter', charCode: 13 })

    expect(handleChange.mock.calls.length).toBe(2)
    expect(handleChange.mock.calls[1][0]).toMatchObject({ min: 0, max: 1 })
  })

  it('ensure step value is respected', () => {
    const handleChange = vi.fn()
    const { container } = render(
      <Slider.Range
        max={100}
        min={0}
        onChange={handleChange}
        step={10}
        value={{ min: 12, max: 17 }}
      />
    )
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const slider = container.querySelectorAll('input[type="range"]')!

    expect(slider[0]).toMatchObject({ value: '10' })
    expect(slider[1]).toMatchObject({ value: '20' })
  })

  it('ensure inputText value respect the step', () => {
    const handleChange = vi.fn()
    const { container } = render(
      <Slider.Range
        max={100}
        min={0}
        onChange={handleChange}
        step={10}
        type="fields"
        value={{ min: 20, max: 50 }}
      />
    )

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const inputSlider = container.querySelectorAll<HTMLInputElement>('input[type="number"]')!
    fireEvent.change(inputSlider[0], { target: { value: '16' } })
    fireEvent.keyDown(inputSlider[0], { key: 'Enter', code: 'Enter', charCode: 13 })

    fireEvent.change(inputSlider[1], { target: { value: '28' } })
    fireEvent.keyDown(inputSlider[1], { key: 'Enter', code: 'Enter', charCode: 13 })

    expect(handleChange.mock.calls.length).toBe(2)
    expect(handleChange.mock.calls[1][0]).toMatchObject({ min: 20, max: 30 })
  })

  it('Slider.Range and fields should be disabled', () => {
    const handleChange = vi.fn()
    const { container } = render(
      <Slider.Range
        disabled
        max={100}
        min={0}
        onChange={handleChange}
        step={10}
        type="fields"
        value={{ min: 20, max: 50 }}
      />
    )
    /* eslint-disable @typescript-eslint/no-non-null-assertion */
    const inputSlider = container.querySelector<HTMLInputElement>('input[type="number"]')!
    const fields = container.querySelectorAll<HTMLInputElement>('input[type="number"]')!
    /* eslint-enable @typescript-eslint/no-non-null-assertion */

    expect(inputSlider).toBeDisabled()
    expect(fields[0]).toBeDisabled()
    expect(fields[1]).toBeDisabled()
  })
})
