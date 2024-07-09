'use client'
import { useState } from 'react'
import { Box } from '@welcome-ui/box'
import { WuiProps } from '@welcome-ui/system'
import { Button } from '@welcome-ui/button'
import { CodeBlockIcon, GithubIcon, PromoteIcon } from '@welcome-ui/icons'
import { Flex } from '@welcome-ui/flex'
import { Tooltip } from '@welcome-ui/tooltip'

import { Highlight } from './Highlight'

import examples from '@/build-app/examples'
import { openStackBlitz } from '@/build-app/utils/stackblitz'

type PreProps = {
  code: string
  isOverview?: boolean
  mt?: WuiProps['marginTop']
  name: string
  pathToFile: keyof typeof examples
  withCodeEditor?: boolean
}

export const Playground = ({
  code,
  isOverview,
  mt = 'xl',
  name,
  pathToFile,
  withCodeEditor,
}: PreProps) => {
  const [isHighlightOpen, setIsHighlightOpen] = useState(isOverview ? true : false)

  const Component = examples[pathToFile]
  const preview = Component && <Component />

  const handleClickStackBlitz = () => {
    openStackBlitz({
      code,
      name,
    })
  }

  return (
    <>
      <Flex
        alignItems="center"
        backgroundColor="nude-100"
        borderRadius="lg"
        flexWrap="wrap"
        gap="lg"
        mt={mt}
        p={{ _: 'sm', lg: '3xl' }}
        position="relative"
        zIndex={1}
      >
        {preview}
      </Flex>
      {withCodeEditor && (
        <>
          <Box
            border="1px solid"
            borderColor="border"
            borderRadius="lg"
            mt="-md"
            overflow="hidden"
            pb="xs"
            pt="lg"
          >
            <Flex flexDirection="row" gap="xs" pl="sm">
              <Tooltip content="View code" fixed zIndex={2}>
                <Button
                  onClick={() => setIsHighlightOpen(!isHighlightOpen)}
                  shape="circle"
                  size="xs"
                  variant="ghost"
                >
                  <CodeBlockIcon />
                </Button>
              </Tooltip>
              <Tooltip content="Edit on StackBlitz" fixed zIndex={2}>
                <Button onClick={handleClickStackBlitz} shape="circle" size="xs" variant="ghost">
                  <PromoteIcon />
                </Button>
              </Tooltip>
              <Tooltip content="View on Github" fixed zIndex={2}>
                <Button
                  as="a"
                  href={`https://github.com/WTTJ/welcome-ui/tree/main/packages${pathToFile}`}
                  rel="noreferrer noopener"
                  shape="circle"
                  size="xs"
                  target="_blank"
                  variant="ghost"
                >
                  <GithubIcon />
                </Button>
              </Tooltip>
            </Flex>
          </Box>
          {isHighlightOpen && <Highlight>{code}</Highlight>}
        </>
      )}
    </>
  )
}
