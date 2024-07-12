import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Box } from '@welcome-ui/box'
import rehypeRaw from 'rehype-raw'

import { Pre } from './Pre'
import { Blockquote } from './Blockquote'
import { Paragraph } from './Paragraph'
import { Code } from './Code'
import { Div } from './Div'
import { H2, H3, H4 } from './Headings'
import { A } from './A'
import { Image } from './Image'

const components = {
  pre: Pre,
  h1: () => null,
  hr: () => null,
  h2: H2,
  h3: H3,
  h4: H4,
  a: A,
  ul: ({ children }: { children: React.ReactElement }) => (
    <Box as="ul" listStyleType="disc" mt="sm">
      {children}
    </Box>
  ),
  ol: ({ children }: { children: React.ReactElement }) => (
    <Box as="ol" listStyleType="decimal" mt="sm">
      {children}
    </Box>
  ),
  li: ({ children }: { children: React.ReactElement }) => (
    <Box as="li" ml="xxl" mt="xs">
      {children}
    </Box>
  ),
  code: Code,
  blockquote: Blockquote,
  p: Paragraph,
  img: Image,
  div: Div,
  strong: ({ children }: { children: React.ReactElement }) => (
    <Box as="strong" color="dark-900" fontWeight="500">
      {children}
    </Box>
  ),
}

export const Mdx = ({ children = '' }) => {
  return (
    <Box maxW="100%">
      <ReactMarkdown
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        components={components}
        rehypePlugins={[rehypeRaw]}
        remarkPlugins={[remarkGfm]}
      >
        {children}
      </ReactMarkdown>
    </Box>
  )
}
