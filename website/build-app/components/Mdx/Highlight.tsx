'use client'
import { Box } from '@welcome-ui/box'
import { Button } from '@welcome-ui/button'
import { CheckIcon, CopyIcon } from '@welcome-ui/icons'
import { useCopyText } from '@welcome-ui/utils.copy'
import { Highlight as HighlightPrism, themes } from 'prism-react-renderer'

export type HighlightProps = {
  children: string
  language?: string
}

export const Highlight = ({ children, language = 'tsx' }: HighlightProps) => {
  const [copy, copied] = useCopyText(children, 3000)

  return (
    <HighlightPrism code={children.trim()} language={language} theme={themes.vsDark}>
      {({ getLineProps, getTokenProps, style, tokens }) => (
        <Box mt="sm" position="relative">
          <Button
            onClick={copy}
            position="absolute"
            right={14}
            shape="circle"
            size="xs"
            top={14}
            variant={copied ? 'primary' : 'ghost'}
          >
            {copied ? <CheckIcon /> : <CopyIcon color="neutral-10" />}
          </Button>
          <Box
            as="pre"
            border="1px solid"
            borderColor="neutral-30"
            borderRadius="lg"
            padding="lg 3xl lg xl"
            style={style}
          >
            {tokens.map((line, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, key) => {
                  const isAdded = token.content.startsWith('+')
                  const isRemoved = token.content.startsWith('-')
                  const isDiff = isAdded || isRemoved

                  return (
                    <Box
                      as="span"
                      backgroundColor={isDiff ? '#2f2f2f' : undefined}
                      color={isRemoved ? 'red-30' : isAdded ? 'green-40' : undefined}
                      fontSize="14"
                      // eslint-disable-next-line react/no-array-index-key
                      key={key}
                      whiteSpace="pre-wrap"
                      {...getTokenProps({ token })}
                    />
                  )
                })}
              </div>
            ))}
          </Box>
        </Box>
      )}
    </HighlightPrism>
  )
}
