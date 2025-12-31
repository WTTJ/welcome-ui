import { Tag } from '@/components/Tag'

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
    <Tag as="code" className="mx-xxs" size="md" variant="dash">
      {children}
    </Tag>
  )
}
