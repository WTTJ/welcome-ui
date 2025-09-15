import { Box } from '@old/Box'

import { Properties } from '../Props'

import { Highlight } from './Highlight'

type CodeProps = {
  children: React.ReactElement | string
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
      backgroundColor="neutral-30"
      borderRadius="md"
      color="neutral-90"
      display="inline-flex"
      px="sm"
      py="xxs"
      text="sm"
      whiteSpace="break-spaces"
    >
      {children}
    </Box>
  )
}
