'use client'
import { useTheme } from '@xstyled/styled-components'

import { Alert } from '@/components/Alert'
import { Text } from '@/components/Text'

type ColorsProps = {
  entry: string
}

export const Theme = ({ entry }: ColorsProps) => {
  const theme = useTheme()

  const entries = theme[entry] as string[]

  if (!entries) {
    return <Alert>Wrong theme entry</Alert>
  }

  return (
    <div className="bg-beige-20 gap-sm grid mt-lg p-xxl rounded-lg">
      {Object.entries(entries).map(([key, value], index) => {
        const border = index !== 0 ? 'border-t border-t-neutral-30' : ''
        const grid =
          entry === 'fontSizes' ? 'grid-cols-[100px_70px_70px]' : 'grid-cols-[50px_70px_70px]'

        return (
          <div className={`${border} gap-xxl grid ${grid} pt-sm`} key={`${entry}-${key}`}>
            <Text className="font-bold text-violet-80">{key}</Text>
            <Text className="text-neutral-70">
              {value}
              {typeof value === 'number' && 'px'}
            </Text>
            {typeof value === 'string' && (value.endsWith('rem') || value === '0') && (
              <Text>({theme.toPx(value.replace('rem', ''))})</Text>
            )}
          </div>
        )
      })}
    </div>
  )
}
