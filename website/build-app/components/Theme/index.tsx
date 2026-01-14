'use client'

import { Text } from '@/components/Text'
import type { ColorTokens } from '@/theme/types'
import { themeVariables } from '@/theme/variables'

type ColorsProps = {
  entry: ColorTokens
}

export const Theme = ({ entry }: ColorsProps) => {
  const filteredEntries = Object.entries(themeVariables).reduce<Record<string, string>>(
    (acc, [key, value]) => {
      if (key.startsWith(`--${entry}`)) {
        acc[key] = value
      }
      return acc
    },
    {}
  )

  return (
    <div className="bg-beige-20 gap-sm grid mt-lg p-xxl rounded-md">
      {Object.entries(filteredEntries).map(([key, value], index) => {
        const border = index !== 0 ? 'border-t border-t-neutral-30' : ''

        const isRem = value.endsWith('rem')
        const isPx = value.endsWith('px')
        const isCalc = value.startsWith('calc')
        const isNumber = !isNaN(Number(value))
        return (
          <div className={`${border} gap-xxl grid grid-cols-[150px_150px_150px] pt-sm`} key={key}>
            <Text className="font-bold text-violet-80}">{key}</Text>
            {isRem ? (
              <>
                <Text>{Number(value.replace('rem', '')) * 16}px</Text>
                <Text>({value})</Text>
              </>
            ) : null}
            {isPx ? (
              <>
                <Text>{value}</Text>
                <Text>({Number(value.replace('px', '')) / 16}rem)</Text>
              </>
            ) : null}
            {isNumber ? <Text>{value}</Text> : null}
            {isCalc ? <Text>{value}</Text> : null}
          </div>
        )
      })}
    </div>
  )
}
