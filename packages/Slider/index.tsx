import React, { useCallback, useEffect, useRef, useState } from 'react'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'
import { Box } from '@welcome-ui/box'
import { Text } from '@welcome-ui/text'
import { Hint } from '@welcome-ui/hint'
import { InputText } from '@welcome-ui/input-text'

import { Range } from './Range'
import * as S from './styles'

export type Type = 'left-field' | 'right-field' | 'inline'

export const thumbWidth = 20

export interface SliderOptions
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  onChange: (value: number) => void
  min: number
  max: number
  value: number
  borderSelectorColor?: string
  label?: string
  hint?: string
  step?: number
  type?: Type
  values?: number[]
  tooltip?: boolean
  disabled?: boolean
}

export type SliderProps = CreateWuiProps<'div', SliderOptions>

export const round = (value: number, step: number) => Math.round(value / step) * step

export const ensureMinMax = (value: number, min: number, max: number, step: number) => {
  value = round(value, step)
  return value < min ? min : value > max ? max : value
}

export const SliderComponent = forwardRef<'div', SliderProps>(
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
    ...rest
  }) => {
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
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      e.preventDefault()
      let value = localValue

      if (e.key === 'ArrowRight') {
        value = value + step
      }
      if (e.key === 'ArrowLeft') {
        value = value - step
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

    const handleInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        const value = ensureMinMax(inputValue, min, max, step)
        setInputValue(value)
        setLocalValue(value)
        onChange(value)
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

    return (
      <Box display="flex" flexDirection="column" position="relative">
        {label && (
          <Text as="label" variant="sm">
            {label}
          </Text>
        )}
        <Box alignItems="center" display="flex" gap="sm">
          {(type === 'inline' || type === 'left-field') &&
            (type === 'left-field' ? (
              <InputText
                max={max}
                min={min}
                onChange={handleInputChange}
                onKeyDown={handleInput}
                size="sm"
                type="number"
                value={inputValue.toString()}
                w={72}
              />
            ) : (
              <Box>{min}</Box>
            ))}

          <Box display="flex" h={20} position="relative" w="100%">
            <S.Slider
              borderSelectorColor={borderSelectorColor}
              disabled={disabled}
              list="tickmarks"
              max={max}
              min={min}
              onChange={
                (e: React.ChangeEvent<HTMLInputElement>) => {
                  const value = parseInt(e.target.value, 10)

                  // No use of the OnChange here to avoid calls at each value update
                  _setLocalValue(value)
                  setInputValue(value)
                }
                // eslint-disable-next-line prettier/prettier
                }      
              onKeyDown={handleKeyDown}
              onMouseDown={() => {
                tooltip && tooltipVisible === false && setTooltipVisible(true)
              }}
              onMouseUp={() => {
                onChange(localValue)
                tooltip && setTooltipVisible(false)
              }}
              ref={range}
              step={step}
              type="range"
              value={localValue}
              {...rest}
            />
            {tooltip && (
              <S.Output isVisible={tooltipVisible} ref={tooltipRef}>
                <S.Tooltip>{localValue}</S.Tooltip>
              </S.Output>
            )}
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

          {(type === 'inline' || type === 'right-field') &&
            (type === 'right-field' ? (
              <InputText
                max={max}
                min={min}
                onChange={handleInputChange}
                onKeyDown={handleInput}
                size="sm"
                type="number"
                value={inputValue.toString()}
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

SliderComponent.displayName = 'Slider'

export const Slider = Object.assign(SliderComponent, { Range })
