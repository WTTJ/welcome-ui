/* eslint-disable @typescript-eslint/ban-ts-comment */
import kebabCase from 'lodash/kebabCase'
import ReactMarkdown from 'react-markdown'
import * as ReactMarkdownTypes from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Text } from '@welcome-ui/text'
import { Link } from '@welcome-ui/link'
import { Box } from '@welcome-ui/box'

import { Pre } from './Pre'
import { Blockquote } from './Blockquote'
import { Paragraph } from './Paragraph'

const components: ReactMarkdownTypes.Components = {
  //@ts-ignore
  pre: props => <Pre {...props} />,
  h1: () => null,
  hr: () => null,
  //@ts-ignore
  h2: ({ children }) => (
    <Text id={`${kebabCase(children?.toString())}`} my="3xl" variant="h2">
      {children}
    </Text>
  ),
  //@ts-ignore
  h3: ({ children }) => (
    <Text id={`${kebabCase(children?.toString())}`} my="xl" variant="h3">
      {children}
    </Text>
  ),
  //@ts-ignore
  h4: ({ children }) => (
    <Text id={`${kebabCase(children?.toString())}`} my="lg" variant="h4">
      {children}
    </Text>
  ),
  //@ts-ignore
  a: ({ href, ...props }) => <Link href={href} isExternal {...props} />,
  //@ts-ignore
  code: ({ children }) => (
    <Box
      as="code"
      backgroundColor="dark-100"
      borderRadius={2}
      color="dark-900"
      display="inline-block"
      p="xs"
      whiteSpace="break-spaces"
    >
      {children}
    </Box>
  ),
  //@ts-ignore
  blockquote: props => <Blockquote {...props} />,
  //@ts-ignore
  p: props => <Paragraph {...props} />,
}

export const Mdx = ({ children = '' }) => {
  return (
    <Box maxW="100%">
      <ReactMarkdown components={components} remarkPlugins={[remarkGfm]}>
        {children}
      </ReactMarkdown>
    </Box>
  )
}
