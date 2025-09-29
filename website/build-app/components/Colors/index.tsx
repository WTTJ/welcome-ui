'use client'
import type { CSSProperties } from 'react'

import { Alert } from '@/components/Alert'
import { Text } from '@/components/Text'
import { primitives, semantics } from '@/theme/tokens'
import { classNames } from '@/utils'

const cx = classNames()

const getColors = (name: string) => {
  const themeColors = { ...primitives.colors, ...semantics.colors }

  return Object.keys(themeColors)
    .filter(color => color.startsWith(`--color-${name}`))
    .reduce<{ value: string; variant: string }[]>((acc, colorName) => {
      const colorValue = themeColors[colorName as keyof typeof themeColors]
      acc.push({ value: colorValue, variant: colorName.replace('--color-', '') })

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
                'size-[3.125rem] rounded-lg'
              )}
              style={{ '--backgroundColor': `var(--color-${variant})` } as CSSProperties}
            />
            <div className="px-sm">
              <Text as="span" variant="h6">
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
