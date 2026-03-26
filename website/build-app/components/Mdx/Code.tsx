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
    <code className="nine:bg-neutral-30 nine:inline-flex nine:items-center nine:px-sm nine:py-xxs nine:rounded-md nine:text-neutral-90 nine:whitespace-break-spaces nine:text-sm">
      {children}
    </code>
  )
}
