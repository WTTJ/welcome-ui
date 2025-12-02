import React, { forwardRef, useCallback, useEffect, useId, useRef, useState } from 'react'

import { Hint } from '@/components/Hint'
import { InputText } from '@/components/InputText'
import { Text } from '@/components/Text'
import { classNames } from '@/utils'

import { Range } from './Range'
import SliderStyles from './slider.module.scss'
import type { RangeOptions, RangeProps, RangeType, SliderOptions, SliderProps } from './types'

export type { RangeOptions, RangeProps, RangeType, SliderOptions, SliderProps }
export const thumbWidth = 20

export const round = (value: number, step: number) => Math.round(value / step) * step

export const ensureMinMax = (value: number, min: number, max: number, step: number) => {
  value = round(value, step)
  return value < min ? min : value > max ? max : value
}

const cx = classNames(SliderStyles)

export const SliderComponent = forwardRef<HTMLDivElement, SliderProps>(
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
      ...rest
    },
    ref
  ) => {
    const range = useRef<HTMLInputElement>(null)
    const tooltipRef = useRef<HTMLOutputElement>(null)
    const [tooltipVisible, setTooltipVisible] = useState<boolean>(false)
    const [inputValue, setInputValue] = useState<number>(ensureMinMax(value, min, max, step))

    const [localValue, setLocalValue] = useState(ensureMinMax(value, min, max, step))

    // Add round logic to `setLocalValue`
    const _setLocalValue = (value: number) => {
      value = round(value, step)
      setLocalValue(value)
    }

    // Handle enter key
    const handleSliderKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      e.preventDefault()
      let value = localValue

      if (e.key === 'ArrowRight') {
        value = ensureMinMax(value + step, min, max, step)
      }
      if (e.key === 'ArrowLeft') {
        value = ensureMinMax(value - step, min, max, step)
      }
      setLocalValue(value)
      setInputValue(value)
      onChange(value)
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      let value = parseInt(e.target.value, 10)
      if (isNaN(value)) {
        value = 0
      }
      setInputValue(value)
    }

    const handleInput = () => {
      const value = ensureMinMax(inputValue, min, max, step)
      setInputValue(value)
      setLocalValue(value)
      onChange(value)
    }

    const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        handleInput()
      }
    }

    const getPercent = useCallback(
      (value: number) => Math.round(((value - min) / (max - min)) * 100),
      [min, max]
    )

    // Updates the slider range when user drag the slider
    useEffect(() => {
      if (range.current) {
        range.current.style.backgroundSize = `${getPercent(localValue)}% 100%`
      }
      if (tooltipRef.current) {
        const fraction = getPercent(localValue) / 100
        tooltipRef.current.style.left = `calc(${fraction * 100}% + ${
          (0.5 - fraction) * thumbWidth
        }px)`
      }
    }, [localValue, getPercent])

    // Give the possibility to the parent to modify the value from outside but we need to check if it respect the step
    useEffect(() => {
      if (!isNaN(value) && value !== localValue && value) {
        _setLocalValue(value)
        setInputValue(value)
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])

    // useId ensures stable id generation between SSR and CSR preventing hydration mismatches
    const sliderId = useId()

    return (
      <div className={cx('slider-root', 'field-input', className)} ref={ref}>
        {label ? (
          <Text as="label" htmlFor={sliderId} variant="body-md">
            {label}
          </Text>
        ) : null}
        <div className={cx('input-wrapper')}>
          {(type === 'inline' || type === 'left-field') &&
            (type === 'left-field' ? (
              <InputText
                disabled={disabled}
                max={max}
                min={min}
                onBlur={handleInput}
                onChange={handleInputChange}
                onKeyDown={handleInputKeyDown}
                size="md"
                type="number"
                value={inputValue.toString()}
              />
            ) : (
              <div>{min}</div>
            ))}

          <div className={cx('slider-wrapper')}>
            <input
              className={cx(
                'input-range',
                'slider-input-range',
                borderSelectorColor && `border-selector-${borderSelectorColor}`
              )}
              disabled={disabled}
              id={sliderId}
              list="tickmarks"
              max={max}
              min={min}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const value = parseInt(e.target.value, 10)

                // No use of the OnChange here to avoid calls at each value update
                _setLocalValue(value)
                setInputValue(value)
              }}
              onKeyDown={handleSliderKeyDown}
              onMouseDown={() => {
                if (tooltip && tooltipVisible === false) {
                  setTooltipVisible(true)
                }
              }}
              onMouseUp={() => {
                onChange(localValue)
                if (tooltip) {
                  setTooltipVisible(false)
                }
              }}
              ref={range}
              step={step}
              type="range"
              value={localValue}
              {...rest}
            />
            {tooltip ? (
              <output className={cx('output', tooltipVisible && 'output-visible')} ref={tooltipRef}>
                <div className={cx('tooltip')}>{localValue}</div>
              </output>
            ) : null}
            {values ? (
              <div className={cx('thick-markers')}>
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

          {(type === 'inline' || type === 'right-field') &&
            (type === 'right-field' ? (
              <InputText
                className={cx('input-text')}
                disabled={disabled}
                max={max}
                min={min}
                onBlur={handleInput}
                onChange={handleInputChange}
                onKeyDown={handleInputKeyDown}
                size="md"
                type="number"
                value={inputValue.toString()}
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

SliderComponent.displayName = 'Slider'

export const Slider = Object.assign(SliderComponent, { Range })
