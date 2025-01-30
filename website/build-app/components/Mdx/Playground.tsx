'use client'
import { useState } from 'react'

import { Highlight } from './Highlight'

import { Box } from '@/Box'
import { ThemeValues } from '@/theme'
import { Button } from '@/Button'
import { CodeBlockIcon, GithubIcon, PromoteIcon } from '@/Icons'
import { Flex } from '@/Flex'
import { Tooltip } from '@/Tooltip'
import examples from '~/build-app/examples'
import { openStackBlitz } from '~/build-app/utils/stackblitz'

type PreProps = {
  code: string
  isOverview?: boolean
  mt?: ThemeValues['marginTop']
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
  const columnDirection = [
    'Field',
    'FileDrop',
    'FileUpload',
    'Grid',
    'InputText',
    'Slider',
    'Text',
    'Textarea',
  ].includes(name)
  const removeFlex = [
    'Accordion',
    'AspectRatio',
    'FileUpload',
    'PasswordInput',
    'Search',
    'Select',
  ].includes(name)

  const handleClickStackBlitz = () => {
    openStackBlitz({
      code,
      name,
    })
  }

  return (
    <>
      <Box display="block">
        <Box
          alignItems={columnDirection ? 'left' : 'center'}
          backgroundColor="neutral-10"
          border="1px solid"
          borderColor="beige-40"
          borderRadius="lg"
          display={removeFlex ? 'block' : 'flex'}
          flexDirection={columnDirection ? 'column' : 'row'}
          flexWrap="wrap"
          gap="lg"
          mt={mt}
          p={{ _: 'sm', lg: '3xl' }}
          position="relative"
        >
          {preview}
        </Box>
      </Box>
      {withCodeEditor && (
        <>
          <Box
            backgroundColor="beige-30"
            border="1px solid"
            borderColor="beige-40"
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
                  href={`https://github.com/WTTJ/welcome-ui/tree/main/lib/src/components${pathToFile}`}
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
