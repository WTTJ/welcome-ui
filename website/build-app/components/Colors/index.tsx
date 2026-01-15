'use client'
import type { CSSProperties } from 'react'

import { Alert } from '@/components/Alert'
import { Card } from '@/components/Card'
import { Text } from '@/components/Text'
import type { ColorTokenNames, ColorTokens } from '@/theme/types'
import { themeVariables } from '@/theme/variables'
import { classNames } from '@/utils'

const cx = classNames()

type ColorVariantsObject = {
  value: string
  variant: ColorTokens
}

const getColors = (name: ColorTokens) => {
  return Object.keys(themeVariables)
    .filter(color => {
      const hasNumber = /\d/.test(color)

      return hasNumber
        ? // If the color name contains a number, we look for exact matches like "--color-blue-10"
          color.match(new RegExp(`^--color-${name}-\\d+$`))
        : // Otherwise, we look for all variants like "--color-background-brand-primary" etc.
          color.startsWith(`--color-${name}`)
    })
    .reduce<ColorVariantsObject[]>((acc, colorName: ColorTokenNames) => {
      const colorValue = themeVariables[`--${colorName}`]
      acc.push({ value: colorValue, variant: colorName as ColorTokens })

      return acc
    }, [])
}

type ColorsProps = {
  name: ColorTokens
}

export const Colors = ({ name }: ColorsProps) => {
  const colors = getColors(name)

  if (colors.length === 0) {
    return <Alert>Wrong color name {name}</Alert>
  }

  return (
    <div className="gap-md grid grid-cols-1 md:grid-cols-3 mt-md">
      {colors.map(({ value, variant }) => {
        const isWhite = variant === '--color-neutral-10'
        const colorVariant: ColorTokens = variant

        return (
          <Card key={`${name}.${variant}`} size="sm">
            <Card.Body className="flex flex-row items-center">
              <div
                className={cx(
                  'bg-(--backgroundColor)',
                  isWhite && `border border-neutral-30`,
                  'size-50 rounded-full shrink-0'
                )}
                style={{ '--backgroundColor': `var(${colorVariant})` } as CSSProperties}
              />
              <div className="px-sm">
                <Text as="span" variant="heading-xs-strong">
                  {variant}
                </Text>
                <Text as="span" className="mt-3 text-sm">
                  {value}
                </Text>
              </div>
            </Card.Body>
          </Card>
        )
      })}
    </div>
  )
}
