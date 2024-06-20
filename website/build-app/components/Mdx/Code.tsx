import { Box } from '@welcome-ui/box'

import { Properties } from '../Props'

import { Highlight } from './Highlight'

interface CodeProps {
  children: string | React.ReactElement
  className?: string
}

export const Code = ({ children, className }: CodeProps) => {
  const isPropertiesBlock = className === 'language-properties'
  const isHighlightBlock = className && !isPropertiesBlock

  if (isPropertiesBlock) {
    return <Properties items={JSON.parse(children as string)} />
  }

  if (isHighlightBlock) {
    const language = className.replace('language-', '')

    return <Highlight language={language}>{children as string}</Highlight>
  }

  return (
    <Box
      alignItems="center"
      as="code"
      backgroundColor="dark-100"
      borderRadius="md"
      color="dark-900"
      display="inline-flex"
      px="sm"
      py="xs"
      text="sm"
      whiteSpace="break-spaces"
    >
      {children}
    </Box>
  )
}
