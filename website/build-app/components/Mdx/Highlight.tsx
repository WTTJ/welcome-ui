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
        <div className="nine:mt-sm nine:relative">
          <Button
            className="nine:absolute nine:right-md nine:top-md"
            onClick={copy}
            shape="circle"
            size="xs"
            variant={copied ? 'primary' : 'ghost'}
          >
            {copied ? <CheckIcon /> : <CopyIcon className="nine:text-neutral-10" />}
          </Button>
          <pre
            className="nine:border nine:border-neutral-30 nine:pt-lg nine:pr-3xl nine:pb-lg nine:pl-xl nine:rounded-lg"
            style={style}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, key) => {
                  const isAdded = token.content.startsWith('+')
                  const isRemoved = token.content.startsWith('-')
                  const isDiff = isAdded || isRemoved
                  const textColor = isRemoved
                    ? 'nine:text-red-30'
                    : isAdded
                      ? 'nine:text-green-40'
                      : ''

                  const { className, ...tokenProps } = getTokenProps({ token })
                  return (
                    <span
                      className={cx(
                        'nine:text-[14px] nine:whitespace-pre-wrap',
                        textColor,
                        isDiff && 'nine:text-[#2f2f2f]',
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
