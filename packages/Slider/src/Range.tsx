import React, { ChangeEvent, KeyboardEvent, useCallback, useEffect, useRef, useState } from 'react'
import { Box } from '@welcome-ui/box'
import { Text } from '@welcome-ui/text'
import { Hint } from '@welcome-ui/hint'
import { InputText } from '@welcome-ui/input-text'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'

import * as S from './styles'

import { round, SliderOptions } from './index'

export const thumbWidth = 20

export type Range = {
  min: number
  max: number
}
export interface RangeOptions extends Omit<SliderOptions, 'type' | 'value' | 'onChange'> {
  value: Range
  onChange: (value: Range) => void
  type?: 'inline' | 'fields'
}

export type RangeProps = CreateWuiProps<'div', RangeOptions>

/**
 * Ensure mininum of a given value against a value `toCompare` based on a step
 */
const ensureMin = (value: number, toCompare: number, step: number) =>
  round(Math.min(value, toCompare - 1 * step), step)

/**
 * Ensure maximum of a given value against a value `toCompare` based on a step
 */
const ensureMax = (value: number, toCompare: number, step: number) =>
  round(Math.max(value, toCompare + 1 * step), step)

/**
 * @name Slider.Range
 */
export const Range = forwardRef<'div', RangeProps>(
  ({
    borderSelectorColor = 'light-900',
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
  }) => {
    const [minValue, setMinValue] = useState(min)
    const [maxValue, setMaxValue] = useState(max)
    const [inputMinValue, setInputMinValue] = useState<number>(max)
    const [inputMaxValue, setInputMaxValue] = useState<number>(max)
    const minValueRef = useRef<HTMLInputElement>(null)
    const maxValueRef = useRef<HTMLInputElement>(null)
    const range = useRef<HTMLDivElement>(null)
    const tooltipMinRef = useRef<HTMLOutputElement>(null)
    const tooltipMaxRef = useRef<HTMLOutputElement>(null)
    const [tooltipMinVisible, setTooltipMinVisible] = useState<boolean>(false)
    const [tooltipMaxVisible, setTooltipMaxVisible] = useState<boolean>(false)

    const handleMinValue = (e: ChangeEvent<HTMLInputElement>) => {
      // Prevents the min value from being above the max
      const value = ensureMin(parseInt(e.target.value, 10), maxValue, step)
      setInputMinValue(value)
      setMinValue(value)
      e.target.value = value.toString()
    }

    const handleMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
      // Prevents the max from being below the min
      const value = ensureMax(parseInt(e.target.value, 10), minValue, step)
      setInputMaxValue(value)
      setMaxValue(value)
      e.target.value = value.toString()
    }

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, type: 'min' | 'max') => {
      e.preventDefault()

      if (type === 'min') {
        let value = minValue

        if (e.key === 'ArrowRight') {
          value = ensureMin(value + step, maxValue, step)
        }
        if (e.key === 'ArrowLeft') {
          value = ensureMin(value - step, maxValue, step)
        }

        setInputMinValue(value)
        setMinValue(value)
        onChange({ min: value, max: maxValue })
      }

      if (type === 'max') {
        let value = maxValue

        if (e.key === 'ArrowRight') {
          value = ensureMax(value + step, minValue, step)
        }
        if (e.key === 'ArrowLeft') {
          value = ensureMax(value - step, minValue, step)
        }

        setInputMaxValue(value)
        setMaxValue(value)
        onChange({ min: minValue, max: value })
      }
    }

    const getPercent = useCallback(
      (value: number) => {
        const percent = Math.round(((value - min) / (max - min)) * 100)
        return percent > max ? max : percent < min ? min : percent
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
          const validValue = ensureMin(value.min || min, maxValue, step)
          setMinValue(validValue)
          setInputMinValue(validValue)
        }
        if (!isNaN(value.max) && value.max !== maxValue) {
          const validValue = ensureMax(value.max || max, minValue, step)
          setMaxValue(validValue)
          setInputMaxValue(validValue)
        }
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])

    return (
      <Box position="relative" w="100%">
        {label && (
          <Text as="label" variant="sm">
            {label}
          </Text>
        )}

        <Box alignItems="center" display="flex" gap="sm">
          {(type === 'inline' || type === 'fields') &&
            (type === 'fields' ? (
              <InputText
                max={maxValue}
                min={min}
                onChange={e => {
                  let value = parseInt(e.target.value, 10)
                  if (isNaN(value)) {
                    value = 0
                  }
                  setInputMinValue(value)
                }}
                onKeyDown={e => {
                  if (e.key === 'Enter') {
                    const value = ensureMin(inputMinValue, maxValue, step)
                    setInputMinValue(value)
                    setMinValue(value)
                    onChange({ min: value, max: maxValue })
                  }
                }}
                size="sm"
                type="number"
                value={inputMinValue.toString()}
                w={72}
              />
            ) : (
              <Box>{min}</Box>
            ))}

          <Box flexGrow="1" position="relative">
            {tooltip && (
              <>
                <S.Output isVisible={tooltipMinVisible} ref={tooltipMinRef}>
                  <S.Tooltip>{minValue}</S.Tooltip>
                </S.Output>

                <S.Output isVisible={tooltipMaxVisible} ref={tooltipMaxRef}>
                  <S.Tooltip>{maxValue}</S.Tooltip>
                </S.Output>
              </>
            )}
            <Box h={20} pb="sm" position="relative" pt="sm" w="100%">
              <S.RangeInput
                {...restProps}
                borderSelectorColor={borderSelectorColor}
                disabled={disabled}
                max={max}
                min={min}
                onChange={handleMinValue}
                onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => handleKeyDown(e, 'min')}
                onMouseDown={() => {
                  tooltip && tooltipMinVisible === false && setTooltipMinVisible(true)
                }}
                onMouseUp={() => {
                  onChange({ min: minValue, max: maxValue })
                  tooltip && setTooltipMinVisible(false)
                }}
                ref={minValueRef}
                step={step}
                type="range"
                value={minValue}
              />

              <S.RangeInput
                {...restProps}
                borderSelectorColor={borderSelectorColor}
                disabled={disabled}
                max={max}
                min={min}
                onChange={handleMaxValue}
                onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => handleKeyDown(e, 'max')}
                onMouseDown={() => {
                  tooltip && tooltipMaxVisible === false && setTooltipMaxVisible(true)
                }}
                onMouseUp={() => {
                  onChange({ min: minValue, max: maxValue })
                  tooltip && setTooltipMaxVisible(false)
                }}
                ref={maxValueRef}
                step={step}
                type="range"
                value={maxValue}
              />

              <S.Track />
              <S.Range disabled={disabled} ref={range} />
            </Box>

            {values && (
              <Box h={24} ml={10} mr={10} position="relative">
                {values
                  .reduce((prev, acc) => (prev.includes(acc) ? prev : [...prev, acc]), [])
                  .filter(v => v >= min && v <= max)
                  .map((el, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <S.Thick key={`${el}-${index}`} left={`${getPercent(el)}%`}>
                      <S.ThickLabel>{el}</S.ThickLabel>
                    </S.Thick>
                  ))}
              </Box>
            )}
          </Box>

          {(type === 'inline' || type === 'fields') &&
            (type === 'fields' ? (
              <InputText
                max={max}
                min={minValue + 1}
                onChange={e => {
                  let value = parseInt(e.target.value, 10)
                  if (isNaN(value)) {
                    value = 0
                  }
                  setInputMaxValue(value)
                }}
                onKeyDown={e => {
                  if (e.key === 'Enter') {
                    const value = ensureMax(inputMaxValue, minValue, step)
                    setInputMaxValue(value)
                    setMaxValue(value)
                    onChange({ min: minValue, max: value })
                  }
                }}
                size="sm"
                type="number"
                value={inputMaxValue.toString()}
                w={72}
              />
            ) : (
              <Box>{max}</Box>
            ))}
        </Box>

        {hint && (
          <Hint color="dark.400" mt={0}>
            {hint}
          </Hint>
        )}
      </Box>
    )
  }
)

Range.displayName = 'Range'
