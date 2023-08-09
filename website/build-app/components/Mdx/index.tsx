import kebabCase from 'lodash/kebabCase'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const markdown = `Just a link: https://reactjs.com.`

export function Mdx({ children = markdown }) {
  return (
    <div style={{ maxWidth: '100%' }}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          // @ts-ignore
          pre: props => <pre style={{ textWrap: 'wrap' }} {...props} />,
          h2: ({ children }) => <h2 id={`${kebabCase(children.toString())}`}>{children}</h2>,
          h3: ({ children }) => <h3 id={`${kebabCase(children.toString())}`}>{children}</h3>,
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  )
}
