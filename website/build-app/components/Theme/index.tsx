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
    <div className="nine:bg-beige-20 nine:gap-sm nine:grid nine:mt-lg nine:p-xxl nine:rounded-lg">
      {Object.entries(filteredEntries).map(([key, value], index) => {
        const border = index !== 0 ? 'nine:border-t nine:border-t-neutral-30' : ''

        return (
          <div
            className={`${border} nine:gap-xxl nine:grid nine:grid-cols-[150px_150px_150px] nine:pt-sm`}
            key={key}
          >
            <Text className="nine:font-bold nine:text-violet-80">{key}</Text>
            <Text className="nine:text-neutral-70">
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
