import kebabCase from 'lodash/kebabCase'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Text } from '@welcome-ui/text'
import { Link } from '@welcome-ui/link'
import { Box } from '@welcome-ui/box'

import { Pre } from './Pre'

const components = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  pre: props => <Pre {...props} />,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  h1: ({ children }) => (
    <Text id={`${kebabCase(children.toString())}`} variant="h1">
      {children}
    </Text>
  ),
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  h2: ({ children }) => (
    <Text id={`${kebabCase(children.toString())}`} variant="h2">
      {children}
    </Text>
  ),
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  h3: ({ children }) => (
    <Text id={`${kebabCase(children.toString())}`} variant="h3">
      {children}
    </Text>
  ),
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  h4: ({ children }) => (
    <Text id={`${kebabCase(children.toString())}`} variant="h4">
      {children}
    </Text>
  ),
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  a: ({ href, ...props }) => <Link href={href} isExternal {...props} />,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
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
}

export const Mdx = ({ children = '' }) => {
  return (
    <div style={{ maxWidth: '100%' }}>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <ReactMarkdown components={components} remarkPlugins={[remarkGfm]}>
        {children}
      </ReactMarkdown>
    </div>
  )
}
