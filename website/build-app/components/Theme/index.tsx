'use client'

import { Text } from '@/components/Text'
import tokens from '@/theme/tokens.json'
import type { FlatTokens, TokensStructure } from '@/theme/utils/parseTokens'
import { parseTokens } from '@/theme/utils/parseTokens'

type ColorsProps = {
  entry: string
}

export const Theme = ({ entry }: ColorsProps) => {
  const entries = parseTokens(tokens as unknown as TokensStructure)

  if (!entries) {
    return <div>Unknown entry: {entry}</div>
  }

  const filteredEntries = Object.entries(entries).reduce((acc, [key, value]) => {
    if (key.startsWith(entry)) {
      acc[key] = value
    }
    return acc
  }, {} as FlatTokens)

  return (
    <div className="bg-beige-20 gap-sm grid mt-lg p-xxl rounded-lg">
      {Object.entries(filteredEntries).map(([key, value], index) => {
        const border = index !== 0 ? 'border-t border-t-neutral-30' : ''

        return (
          <div className={`${border} gap-xxl grid grid-cols-[150px_150px_150px] pt-sm`} key={key}>
            <Text className="font-bold text-violet-80">{key}</Text>
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
