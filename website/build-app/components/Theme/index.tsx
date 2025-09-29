'use client'

import merge from 'lodash.merge'

import { Text } from '@/components/Text'
import { primitives, semantics } from '@/theme/tokens'

type ColorsProps = {
  entry: string
}

export const Theme = ({ entry }: ColorsProps) => {
  const merged = merge({}, primitives, semantics)
  const entries = merged[entry as keyof typeof merged]

  if (!entries) {
    return <div>Unknown entry: {entry}</div>
  }

  return (
    <div className="bg-beige-20 gap-sm grid mt-lg p-xxl rounded-lg">
      {Object.entries(entries).map(([key, value], index) => {
        const border = index !== 0 ? 'border-t border-t-neutral-30' : ''

        return (
          <div
            className={`${border} gap-xxl grid grid-cols-[150px_150px_150px] pt-sm`}
            key={`${entry}-${key}`}
          >
            <Text className="font-bold text-violet-80">{key.replace('--', '')}</Text>
            <Text className="text-neutral-70">
              {value as string}
              {typeof value === 'number' && 'px'}
            </Text>
            {typeof value === 'string' && (value.endsWith('rem') || value === '0px') && (
              <Text>({parseInt(value) / 16})</Text>
            )}
          </div>
        )
      })}
    </div>
  )
}
