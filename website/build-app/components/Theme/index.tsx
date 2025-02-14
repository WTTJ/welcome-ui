'use client'
import { useTheme } from '@xstyled/styled-components'

import { Alert } from '@/Alert'
import { Grid } from '@/Grid'
import { Text } from '@/Text'

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
    <Grid backgroundColor="beige-20" borderRadius="lg" gap="sm" mt="lg" p="xxl">
      {Object.entries(entries).map(([key, value], index) => (
        <Grid
          borderTop={index !== 0 && '1px solid'}
          borderTopColor={index !== 0 && 'neutral-30'}
          gap="xxl"
          gridTemplateColumns={entry === 'fontSizes' ? '100px 70px 70px' : '50px 70px 70px'}
          key={`${entry}-${key}`}
          pt="sm"
        >
          <Text color="violet-80" fontWeight="bold">
            {key}
          </Text>
          <Text color="neutral-70">
            {value}
            {typeof value === 'number' && 'px'}
          </Text>
          {typeof value === 'string' && (value.endsWith('rem') || value === '0') && (
            <Text>({theme.toPx(value.replace('rem', ''))})</Text>
          )}
        </Grid>
      ))}
    </Grid>
  )
}
