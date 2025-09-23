import { Properties } from '../Props'

import { Highlight } from './Highlight'

type CodeProps = {
  children: React.ReactElement | string
  className?: string
}

export const Code = ({ children, className }: CodeProps) => {
  const isPropertiesBlock = className === 'language-properties'
  const isHighlightBlock = className && !isPropertiesBlock

  if (isPropertiesBlock) {
    return <Properties items={JSON.parse(children as string)} />
  }

  if (isHighlightBlock) {
    const language = className.replace('language-', '')

    return <Highlight language={language}>{children as string}</Highlight>
  }

  return (
    <code className="bg-neutral-30 inline-flex items-center px-sm py-xxs rounded-md text-neutral-90 whitespace-break-spaces text-sm">
      {children}
    </code>
  )
}
