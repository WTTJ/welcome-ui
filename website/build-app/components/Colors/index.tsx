'use client'
import type { CSSProperties } from 'react'

import { primitives, semantics } from '@/theme/tokens'
import { classNames } from '@/utils'
import { Alert } from '@old/Alert'
import { Text } from '@old/Text'

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
    <div className="gap-md grid grid-cols-[repeat(auto-fit,minmax(250px, 1fr))] mt-md">
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
              <Text as="span" fontSize="sm" mt={3}>
                {value}
              </Text>
            </div>
          </div>
        )
      })}
    </div>
  )
}
