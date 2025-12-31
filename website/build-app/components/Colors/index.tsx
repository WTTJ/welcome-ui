'use client'
import type { CSSProperties } from 'react'

import { Alert } from '@/components/Alert'
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
    .filter(color => color.startsWith(`color-${name}`))
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
          <div className="flex items-center" key={`${name}.${variant}`}>
            <div
              className={cx(
                'bg-(--backgroundColor)',
                isWhite && `border border-neutral-30`,
                'size-[3.125rem] rounded-md'
              )}
              style={{ '--backgroundColor': `var(${colorVariant})` } as CSSProperties}
            />
            <div className="px-sm">
              <Text as="span" variant="heading-xs-strong">
                {variant}
              </Text>
              <Text as="span" className="mt-[0.1875rem] text-sm">
                {value}
              </Text>
            </div>
          </div>
        )
      })}
    </div>
  )
}
