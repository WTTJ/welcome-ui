'use client'
import type { CSSProperties } from 'react'

import { Alert } from '@/components/Alert'
import { Text } from '@/components/Text'
import tokens from '@/theme/tokens.json' assert { type: 'json' }
import type { TokensStructure } from '@/theme/utils/parseTokens'
import { parseTokens } from '@/theme/utils/parseTokens'
import { classNames } from '@/utils'

const cx = classNames()

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
    <div className="nine:gap-md nine:grid nine:grid-cols-3 nine:mt-md">
      {colors.map(({ value, variant }) => {
        const isWhite = variant === 'neutral-10'

        return (
          <div className="nine:flex nine:items-center" key={`${name}.${variant}`}>
            <div
              className={cx(
                'nine:bg-(--backgroundColor)',
                isWhite && `nine:border nine:border-neutral-30`,
                'nine:size-[3.125rem] nine:rounded-lg'
              )}
              style={{ '--backgroundColor': `var(--nine-color-${variant})` } as CSSProperties}
            />
            <div className="nine:px-sm">
              <Text as="span" variant="h6">
                {variant}
              </Text>
              <Text as="span" className="nine:mt-[0.1875rem] nine:text-sm">
                {value}
              </Text>
            </div>
          </div>
        )
      })}
    </div>
  )
}
