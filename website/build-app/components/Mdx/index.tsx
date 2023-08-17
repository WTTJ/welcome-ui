import kebabCase from 'lodash/kebabCase'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Text } from '@welcome-ui/text'
import { Link } from '@welcome-ui/link'
import { Box } from '@welcome-ui/box'
import { Pre } from './Pre'

export function Mdx({ children = '' }) {
  return (
    <div style={{ maxWidth: '100%' }}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          pre: props => <Pre {...props} />,
          h1: ({ children }) => (
            <Text variant="h1" id={`${kebabCase(children.toString())}`}>
              {children}
            </Text>
          ),
          h2: ({ children }) => (
            <Text variant="h2" id={`${kebabCase(children.toString())}`}>
              {children}
            </Text>
          ),
          h3: ({ children }) => (
            <Text variant="h3" id={`${kebabCase(children.toString())}`}>
              {children}
            </Text>
          ),
          h4: ({ children }) => (
            <Text variant="h4" id={`${kebabCase(children.toString())}`}>
              {children}
            </Text>
          ),
          a: ({ href, ...props }) => <Link isExternal href={href} {...props} />,
          code: ({ children }) => (
            <Box as="code" backgroundColor="dark-100" color="dark-900" p="xs" borderRadius={2}>
              {children}
            </Box>
          ),
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  )
}
