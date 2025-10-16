'use client'
import type { CSSProperties } from 'react'

import { Alert } from '@/components/Alert'
import { Text } from '@/components/Text'
import primitives from '@/theme/tokens/primitives.json' assert { type: 'json' }
import semantics from '@/theme/tokens/semantics.json' assert { type: 'json' }
import type { TokensStructure } from '@/theme/utils/parseTokens'
import { parseTokens } from '@/theme/utils/parseTokens'
import { classNames } from '@/utils'

const cx = classNames()

const tokens = { color: { ...primitives.color, ...semantics.color } }

const getColors = (name: string) => {
  const themeValues = parseTokens(tokens as unknown as TokensStructure)
  return Object.keys(themeValues)
    .filter(color => color.startsWith(`color-${name}`))
    .reduce<{ value: string; variant: string }[]>((acc, colorName) => {
      const colorValue = themeValues[colorName as keyof typeof themeValues]
      acc.push({ value: colorValue, variant: colorName.replace('color-', '') })

      return acc
    }, [])
}

type ColorsProps = {
  name: string
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

        return (
          <div className="flex items-center" key={`${name}.${variant}`}>
            <div
              className={cx(
                'bg-(--backgroundColor)',
                isWhite && `border border-neutral-30`,
                'size-[3.125rem] rounded-md'
              )}
              style={{ '--backgroundColor': `var(--color-${variant})` } as CSSProperties}
            />
            <div className="px-sm">
              <Text as="span" variant="heading-xs">
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
