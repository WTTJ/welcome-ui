'use client'

import { Box } from '@welcome-ui/box'
import { Button } from '@welcome-ui/button'
import { CheckIcon, CopyIcon } from '@welcome-ui/icons'
import { useCopyText } from '@welcome-ui/utils.copy'
import { Highlight as HighlightPrism, themes } from 'prism-react-renderer'

type HighlightProps = {
  code: string
  language?: string
}

export const Highlight = ({ code, language = 'tsx' }: HighlightProps) => {
  const [copy, copied] = useCopyText(code, 3000)

  return (
    <HighlightPrism
      code={code.trim()}
      language={language}
      theme={{
        ...themes.github,
        plain: {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-ignore
          fontSize: 14,
        },
      }}
    >
      {({ getLineProps, getTokenProps, style, tokens }) => (
        <Box mt="xl" position="relative">
          <Button
            onClick={copy}
            position="absolute"
            right={16}
            shape="circle"
            size="xs"
            top={16}
            variant={copied ? 'primary-success' : 'ghost'}
          >
            {copied ? <CheckIcon /> : <CopyIcon />}
          </Button>
          <Box
            as="pre"
            border="1px solid"
            borderColor="dark-100"
            borderRadius={8}
            padding="lg xl"
            style={style}
          >
            {tokens.map((line, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, key) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </Box>
        </Box>
      )}
    </HighlightPrism>
  )
}
