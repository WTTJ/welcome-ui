import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

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
    <li className="nine:ml-xxl nine:mt-xs">{children}</li>
  ),
  ol: ({ children }: { children: React.ReactElement }) => (
    <ol className="nine:list-decimal nine:mt-sm">{children}</ol>
  ),
  p: Paragraph,
  pre: Pre,
  strong: ({ children }: { children: React.ReactElement }) => (
    <strong className="nine:font-medium nine:text-neutral-90">{children}</strong>
  ),
  ul: ({ children }: { children: React.ReactElement }) => (
    <ul className="nine:list-disc nine:mt-sm">{children}</ul>
  ),
}

export const Mdx = ({ children = '' }) => {
  return (
    <div className="nine:max-w-full">
      <ReactMarkdown
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        components={components}
        rehypePlugins={[rehypeRaw]}
        remarkPlugins={[remarkGfm]}
      >
        {children}
      </ReactMarkdown>
    </div>
  )
}
