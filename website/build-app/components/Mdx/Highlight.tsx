'use client'
import { Highlight as HighlightPrism, themes } from 'prism-react-renderer'

import { Button } from '@/components/Button'
import { Icon } from '@/components/Icon'
import { classNames, useCopyText } from '@/utils'

export type HighlightProps = {
  children: string
  language?: string
}

const cx = classNames()

export const Highlight = ({ children, language = 'tsx' }: HighlightProps) => {
  const [copy, copied] = useCopyText(children, 3000)

  return (
    <HighlightPrism code={children.trim()} language={language} theme={themes.vsDark}>
      {({ getLineProps, getTokenProps, style, tokens }) => (
        <div className="mt-sm relative">
          <Button
            className="absolute right-md top-md"
            onClick={copy}
            size="sm"
            variant={copied ? 'primary' : 'tertiary'}
          >
            {copied ? <Icon name="check" /> : <Icon className="text-neutral-10" name="copy" />}
          </Button>
          <pre
            className="border border-neutral-30 pt-lg pr-3xl pb-lg pl-xl rounded-md"
            style={style}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, key) => {
                  const isAdded = token.content.startsWith('+')
                  const isRemoved = token.content.startsWith('-')
                  const isDiff = isAdded || isRemoved
                  const textColor = isDiff
                    ? isRemoved
                      ? 'text-red-30'
                      : isAdded
                        ? 'text-green-40'
                        : 'text-neutral-40'
                    : ''

                  const { className, ...tokenProps } = getTokenProps({ token })
                  return (
                    <span
                      className={cx('text-14 whitespace-pre-wrap', textColor, className)}
                      key={key}
                      {...tokenProps}
                    />
                  )
                })}
              </div>
            ))}
          </pre>
        </div>
      )}
    </HighlightPrism>
  )
}
