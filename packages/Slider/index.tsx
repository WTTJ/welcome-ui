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

export const ensureMinMax = (value: number, min: number, max: number, step: number) => {
  /**
   * TODO: for security reason if it doesn't respect the step we assign the min value
   * but we should clearly make the value closer to the current step
   * e.g: value = 34 & step = 10 we should put 30.
   * What happens when value = 35? we go to 40 or 30?
   */
  if (value % step !== 0) {
    return min
  }
  return value < min ? min : value > max ? max : value
}

export const SliderComponent = forwardRef<'div', SliderProps>(
  ({
    borderSelectorColor = 'light.900',
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

    const [localValue, setLocalValue] = useState(ensureMinMax(value, min, max, step))

    // Handle enter key
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      const arrow = e.key

      if (arrow === 'ArrowRight' || arrow === 'ArrowLeft') {
        // console.log('HANDLEKEYDOWN', arrow, localValue)
        // No setLocalValue because range handles key stroke natively
        onChange(localValue)
      }
    }

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      let value = parseInt(e.target.value, 10)
      if (isNaN(value)) {
        value = 0
      }
      const validValue = value > max ? max : value < min ? min : value
      setLocalValue(validValue)
      onChange(validValue)
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
      if (!isNaN(value) && value !== localValue && value % step === 0) {
        setLocalValue(value)
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
                onChange={handleInput}
                size="sm"
                type="number"
                value={localValue.toString()}
                w={72}
              />
            ) : (
              <Box>{min}</Box>
            ))}

          <Box position="relative" w="100%">
            <S.Slider
              borderSelectorColor={borderSelectorColor}
              disabled={disabled}
              list="tickmarks"
              max={max}
              min={min}
              onChange={
                (e: React.ChangeEvent<HTMLInputElement>) => {
                  // console.log('HANDLECHANGE', e.target.value)
                  // No use of the OnChange here to avoid calls at each value update
                  setLocalValue(parseInt(e.target.value, 10))
                }
                // eslint-disable-next-line prettier/prettier
                }      
              onKeyDown={handleKeyDown}
              onMouseDown={() => {
                tooltip && tooltipVisible === false && setTooltipVisible(true)
              }}
              onMouseUp={() => {
                // console.log('ONMOUSEUP')
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
                onChange={handleInput}
                size="sm"
                type="number"
                value={localValue.toString()}
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
