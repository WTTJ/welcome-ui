import type { ChangeEvent, KeyboardEvent } from 'react'
import { forwardRef, useCallback, useEffect, useId, useRef, useState } from 'react'

import { Hint } from '@/components/Hint'
import { InputText } from '@/components/InputText'
import { Text } from '@/components/Text'
import { classNames } from '@/utils'

import SliderStyles from './slider.module.scss'
import type { RangeProps } from './types'

import { round } from './index'

export const thumbWidth = 20

const cx = classNames(SliderStyles)

/**
 * Ensure minimum of a given value against a value `toCompare` based on a step
 */
const ensureMin = ({
  min,
  step,
  toCompare,
  value,
}: {
  min: number
  step: number
  toCompare: number
  value: number
}) => {
  let ensuredValue = Math.min(value, toCompare - 1 * step)
  ensuredValue = Math.max(ensuredValue, min)
  return round(ensuredValue, step)
}

/**
 * Ensure maximum of a given value against a value `toCompare` based on a step
 */
const ensureMax = ({
  max,
  step,
  toCompare,
  value,
}: {
  max: number
  step: number
  toCompare: number
  value: number
}) => {
  let ensuredValue = Math.max(value, toCompare + 1 * step)
  ensuredValue = Math.min(ensuredValue, max)
  return round(ensuredValue, step)
}

/**
 * @name Slider.Range
 */
export const Range = forwardRef<HTMLDivElement, RangeProps>(
  (
    {
      borderSelectorColor,
      className,
      disabled,
      hint,
      label,
      max,
      min,
      onChange,
      step = 1,
      tooltip,
      type,
      value,
      values,
      ...restProps
    },
    ref
  ) => {
    const [minValue, setMinValue] = useState(min)
    const [maxValue, setMaxValue] = useState(max)
    // Initialize inputMinValue with the provided min (was max causing hydration mismatch if min != max)
    const [inputMinValue, setInputMinValue] = useState<number>(min)
    const [inputMaxValue, setInputMaxValue] = useState<number>(max)
    const minValueRef = useRef<HTMLInputElement>(null)
    const maxValueRef = useRef<HTMLInputElement>(null)
    const range = useRef<HTMLDivElement>(null)
    const tooltipMinRef = useRef<HTMLOutputElement>(null)
    const tooltipMaxRef = useRef<HTMLOutputElement>(null)
    const [tooltipMinVisible, setTooltipMinVisible] = useState<boolean>(false)
    const [tooltipMaxVisible, setTooltipMaxVisible] = useState<boolean>(false)

    const handleMinValue = (e: ChangeEvent<HTMLInputElement>) => {
      // Prevents the min value from being above the max value and under the min
      const value = ensureMin({
        min,
        step,
        toCompare: maxValue,
        value: parseInt(e.target.value, 10),
      })
      setInputMinValue(value)
      setMinValue(value)
      e.target.value = value.toString()
    }

    const handleMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
      // Prevents the max value from being below the min value and above the max
      const value = ensureMax({
        max,
        step,
        toCompare: minValue,
        value: parseInt(e.target.value, 10),
      })
      setInputMaxValue(value)
      setMaxValue(value)
      e.target.value = value.toString()
    }

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, type: 'max' | 'min') => {
      e.preventDefault()

      if (type === 'min') {
        let value = minValue

        if (e.key === 'ArrowRight') {
          value = ensureMin({ min, step, toCompare: maxValue, value: value + step })
        }
        if (e.key === 'ArrowLeft') {
          value = ensureMin({ min, step, toCompare: maxValue, value: value - step })
        }

        setInputMinValue(value)
        setMinValue(value)
        onChange({ max: maxValue, min: value })
      }

      if (type === 'max') {
        let value = maxValue

        if (e.key === 'ArrowRight') {
          value = ensureMax({ max, step, toCompare: minValue, value: value + step })
        }
        if (e.key === 'ArrowLeft') {
          value = ensureMax({ max, step, toCompare: minValue, value: value - step })
        }

        setInputMaxValue(value)
        setMaxValue(value)
        onChange({ max: value, min: minValue })
      }
    }

    const getPercent = useCallback(
      (value: number) => {
        const percent = Math.round(((value - min) / (max - min)) * 100)
        if (percent < 0) return 0
        if (percent > 100) return 100
        return percent
      },
      [min, max]
    )

    // When minValue changes we have to decrease the left side range
    useEffect(() => {
      // Using ref instead of state value because we want to avoid another new dependency in the useEffect (we only want to change range width when minValue changes)
      if (maxValueRef.current) {
        const minPercent = getPercent(minValue)
        const maxPercent = getPercent(parseInt(maxValueRef.current.value, 10))

        if (range.current) {
          range.current.style.left = `${minPercent}%`
          range.current.style.width = `${maxPercent - minPercent}%`
        }
      }
    }, [minValue, getPercent])

    // When maxValue changes we have to decrease the right side range
    useEffect(() => {
      // Same as below but for minValue
      if (minValueRef.current) {
        const minPercent = getPercent(parseInt(minValueRef.current.value, 10))
        const maxPercent = getPercent(maxValue)

        if (range.current) {
          range.current.style.width = `${maxPercent - minPercent}%`
        }

        if (tooltipMinRef.current) {
          const fraction = getPercent(minValue) / 100
          tooltipMinRef.current.style.left = `calc(${fraction * 100}% + ${
            (0.5 - fraction) * thumbWidth
          }px)`
        }

        if (tooltipMaxRef.current) {
          const fraction = getPercent(maxValue) / 100
          tooltipMaxRef.current.style.left = `calc(${fraction * 100}% + ${
            (0.5 - fraction) * thumbWidth
          }px)`
        }
      }
    }, [minValue, maxValue, getPercent])

    // Give the possibility to the parent to modify the minValue & maxValue from outs
    useEffect(() => {
      if (value) {
        if (!isNaN(value.min) && value.min !== minValue) {
          const validValue = ensureMin({ min, step, toCompare: maxValue, value: value.min || min })
          setMinValue(validValue)
          setInputMinValue(validValue)
        }
        if (!isNaN(value.max) && value.max !== maxValue) {
          const validValue = ensureMax({ max, step, toCompare: minValue, value: value.max || max })
          setMaxValue(validValue)
          setInputMaxValue(validValue)
        }
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])

    const rangeId = useId()

    return (
      <div className={cx('range-root', className)} ref={ref}>
        {label ? (
          <Text as="label" htmlFor={`${rangeId}-min`} variant="sm">
            {label}
          </Text>
        ) : null}

        <div className={cx('input-wrapper')}>
          {(type === 'inline' || type === 'fields') &&
            (type === 'fields' ? (
              <InputText
                className={cx('input-text')}
                disabled={disabled}
                max={maxValue}
                min={min}
                onBlur={() => {
                  const value = ensureMin({
                    min,
                    step,
                    toCompare: maxValue,
                    value: inputMinValue,
                  })
                  setInputMinValue(value)
                  setMinValue(value)
                  onChange({ max: maxValue, min: value })
                }}
                onChange={e => {
                  let value = parseInt(e.target.value, 10)
                  if (isNaN(value)) {
                    value = 0
                  }
                  setInputMinValue(value)
                }}
                onKeyDown={e => {
                  if (e.key === 'Enter') {
                    const value = ensureMin({
                      min,
                      step,
                      toCompare: maxValue,
                      value: inputMinValue,
                    })
                    setInputMinValue(value)
                    setMinValue(value)
                    onChange({ max: maxValue, min: value })
                  }
                }}
                size="sm"
                type="number"
                value={inputMinValue.toString()}
              />
            ) : (
              <div>{min}</div>
            ))}

          <div className={cx('range-wrapper')}>
            {tooltip ? (
              <>
                <output
                  className={cx('output', tooltipMinVisible && 'output-visible')}
                  ref={tooltipMinRef}
                >
                  <div>{minValue}</div>
                </output>
                <output
                  className={cx('output', tooltipMaxVisible && 'output-visible')}
                  ref={tooltipMaxRef}
                >
                  <div>{maxValue}</div>
                </output>
              </>
            ) : null}
            <div className={cx('input-range-wrapper')}>
              <input
                {...restProps}
                className={cx(
                  'input-range',
                  'range-input-range',
                  borderSelectorColor && `border-selector-${borderSelectorColor}`
                )}
                disabled={disabled}
                id={`${rangeId}-min`}
                max={max}
                min={min}
                onChange={handleMinValue}
                onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => handleKeyDown(e, 'min')}
                onMouseDown={() => {
                  if (tooltip && tooltipMinVisible === false) {
                    setTooltipMinVisible(true)
                  }
                }}
                onMouseUp={() => {
                  onChange({ max: maxValue, min: minValue })
                  if (tooltip) {
                    setTooltipMinVisible(false)
                  }
                }}
                ref={minValueRef}
                step={step}
                type="range"
                value={minValue}
              />

              <input
                {...restProps}
                className={cx(
                  'input-range',
                  'range-input-range',
                  borderSelectorColor && `border-selector-${borderSelectorColor}`
                )}
                disabled={disabled}
                id={`${rangeId}-max`}
                max={max}
                min={min}
                onChange={handleMaxValue}
                onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => handleKeyDown(e, 'max')}
                onMouseDown={() => {
                  if (tooltip && tooltipMaxVisible === false) {
                    setTooltipMaxVisible(true)
                  }
                }}
                onMouseUp={() => {
                  onChange({ max: maxValue, min: minValue })
                  if (tooltip) {
                    setTooltipMaxVisible(false)
                  }
                }}
                ref={maxValueRef}
                step={step}
                type="range"
                value={maxValue}
              />

              <div className={cx('range-track')} />
              <div className={cx('range', disabled && 'range-disabled')} ref={range} />
            </div>

            {values ? (
              <div className={cx('thicks-markers')}>
                {values
                  .reduce((prev, acc) => (prev.includes(acc) ? prev : [...prev, acc]), [])
                  .filter(v => v >= min && v <= max)
                  .map((el, index) => (
                    <div
                      className={cx('thick')}
                      key={`${el}-${index}`}
                      style={{ left: `${getPercent(el)}%` }}
                    >
                      <Hint className={cx('thick-label')}>{el}</Hint>
                    </div>
                  ))}
              </div>
            ) : null}
          </div>

          {(type === 'inline' || type === 'fields') &&
            (type === 'fields' ? (
              <InputText
                className={cx('input-text')}
                disabled={disabled}
                max={max}
                min={minValue + 1}
                onBlur={() => {
                  const value = ensureMax({
                    max,
                    step,
                    toCompare: minValue,
                    value: inputMaxValue,
                  })
                  setInputMaxValue(value)
                  setMaxValue(value)
                  onChange({ max: value, min: minValue })
                }}
                onChange={e => {
                  let value = parseInt(e.target.value, 10)
                  if (isNaN(value)) {
                    value = 0
                  }
                  setInputMaxValue(value)
                }}
                onKeyDown={e => {
                  if (e.key === 'Enter') {
                    const value = ensureMax({
                      max,
                      step,
                      toCompare: minValue,
                      value: inputMaxValue,
                    })
                    setInputMaxValue(value)
                    setMaxValue(value)
                    onChange({ max: value, min: minValue })
                  }
                }}
                size="sm"
                type="number"
                value={inputMaxValue.toString()}
              />
            ) : (
              <div>{max}</div>
            ))}
        </div>

        {hint ? <Hint className={cx('hint')}>{hint}</Hint> : null}
      </div>
    )
  }
)
