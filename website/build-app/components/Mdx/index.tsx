import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

import { Box } from '@old/Box'

import { A } from './A'
import { Blockquote } from './Blockquote'
import { Code } from './Code'
import { Div } from './Div'
import { H2, H3, H4, H5, H6 } from './Headings'
import { Image } from './Image'
import { Paragraph } from './Paragraph'
import { Pre } from './Pre'

const components = {
  a: A,
  blockquote: Blockquote,
  code: Code,
  div: Div,
  h1: (): null => null,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  hr: (): null => null,
  img: Image,
  li: ({ children }: { children: React.ReactElement }) => (
    <Box as="li" ml="xxl" mt="xs">
      {children}
    </Box>
  ),
  ol: ({ children }: { children: React.ReactElement }) => (
    <Box as="ol" listStyleType="decimal" mt="sm">
      {children}
    </Box>
  ),
  p: Paragraph,
  pre: Pre,
  strong: ({ children }: { children: React.ReactElement }) => (
    <Box as="strong" color="neutral-90" fontWeight="500">
      {children}
    </Box>
  ),
  ul: ({ children }: { children: React.ReactElement }) => (
    <Box as="ul" listStyleType="disc" mt="sm">
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
