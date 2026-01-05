'use client'
import type { CSSProperties } from 'react'

import { Alert } from '@/components/Alert'
import { Card } from '@/components/Card'
import { Text } from '@/components/Text'
import primitives from '@/theme/tokens/primitives.json' assert { type: 'json' }
import semantics from '@/theme/tokens/semantics.json' assert { type: 'json' }
import type { ColorTokenNames, ColorTokens, ColorVariants } from '@/theme/types'
import type { TokensStructure } from '@/theme/utils/parseTokens'
import { parseTokens } from '@/theme/utils/parseTokens'
import { classNames } from '@/utils'

const cx = classNames()

const tokens = { color: { ...primitives.color, ...semantics.color } }

type ColorVariantsObject = {
  value: string
  variant: ColorVariants
}

const getColors = (name: ColorVariants) => {
  const themeValues = parseTokens(tokens as unknown as TokensStructure)
  return Object.keys(themeValues)
    .filter(color => {
      const hasNumber = /\d/.test(color)

      return hasNumber
        ? // If the color name contains a number, we look for exact matches like "color-blue-10"
          color.match(new RegExp(`^color-${name}-\\d+$`))
        : // Otherwise, we look for all variants like "background-brand-primary" etc.
          color.startsWith(`color-${name}`)
    })
    .reduce<ColorVariantsObject[]>((acc, colorName: ColorTokenNames) => {
      const colorValue = themeValues[colorName as keyof typeof themeValues]
      acc.push({ value: colorValue, variant: colorName.replace('color-', '') as ColorVariants })

      return acc
    }, [])
}

type ColorsProps = {
  name: ColorVariants
}

export const Colors = ({ name }: ColorsProps) => {
  const colors = getColors(name)

  if (colors.length === 0) {
    return <Alert>Wrong color name {name}</Alert>
  }

  return (
    <div className="gap-md grid grid-cols-3 mt-md">
      {colors.map(({ value, variant }) => {
        const isWhite = variant === 'neutral-10'
        const colorVariant: ColorTokens = `--color-${variant}`

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
