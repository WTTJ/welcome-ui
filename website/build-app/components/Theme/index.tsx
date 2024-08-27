'use client'
import { Alert } from '@welcome-ui/alert'
import { Grid } from '@welcome-ui/grid'
import { Text } from '@welcome-ui/text'
import { useTheme } from '@xstyled/styled-components'

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
    <Grid backgroundColor="nude-100" borderRadius="lg" gap="sm" mt="lg" p="xxl">
      {Object.entries(entries).map(([key, value], index) => (
        <Grid
          borderTop={index !== 0 && '1px solid'}
          borderTopColor={index !== 0 && 'border'}
          gap="xxl"
          gridTemplateColumns={entry === 'fontSizes' ? '100px 70px 70px' : '50px 70px 70px'}
          key={`${entry}-${key}`}
          pt="sm"
        >
          <Text color="sub-3" fontWeight="bold">
            {key}
          </Text>
          <Text color="dark-700">
            {value}
            {typeof value === 'number' && 'px'}
          </Text>
          {typeof value === 'string' && (value.endsWith('rem') || value === '0') && (
            <Text color="dark-600">({theme.toPx(Number(value.replace('rem', '')))})</Text>
          )}
        </Grid>
      ))}
    </Grid>
  )
}
