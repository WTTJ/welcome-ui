'use client'
import { Highlight as HighlightPrism, themes } from 'prism-react-renderer'

import { Button } from '@/components/Button'
import { CheckIcon, CopyIcon } from '@/components/Icon'
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
            shape="circle"
            size="xs"
            variant={copied ? 'primary' : 'ghost'}
          >
            {copied ? <CheckIcon /> : <CopyIcon className="text-neutral-10" />}
          </Button>
          <pre
            className="border border-neutral-30 pt-lg pr-3xl pb-lg pl-xl rounded-lg"
            style={style}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, key) => {
                  const isAdded = token.content.startsWith('+')
                  const isRemoved = token.content.startsWith('-')
                  const isDiff = isAdded || isRemoved
                  const textColor = isRemoved ? 'text-red-30' : isAdded ? 'text-green-40' : ''

                  const { className, ...tokenProps } = getTokenProps({ token })
                  return (
                    <span
                      className={cx(
                        'text-[14px] whitespace-pre-wrap',
                        textColor,
                        isDiff && 'text-[#2f2f2f]',
                        className
                      )}
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
