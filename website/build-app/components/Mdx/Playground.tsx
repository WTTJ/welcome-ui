'use client'
import { useState } from 'react'

import { Button } from '@/components/Button'
import { CodeBlockIcon, GithubIcon, PromoteIcon } from '@/components/Icon'
import { Tooltip } from '@/components/Tooltip'
import { classNames } from '@/utils'

import examples from '~/build-app/examples'
import { openStackBlitz } from '~/build-app/utils/stackblitz'

import { Highlight } from './Highlight'

const cx = classNames()

type PreProps = {
  className?: string
  code: string
  isOverview?: boolean
  name: string
  pathToFile: keyof typeof examples
  withCodeEditor?: boolean
}

export const Playground = ({
  className,
  code,
  isOverview,
  name,
  pathToFile,
  withCodeEditor,
}: PreProps) => {
  const [isHighlightOpen, setIsHighlightOpen] = useState(isOverview ? true : false)

  const Component = examples[pathToFile]
  const preview = Component && <Component />
  const columnDirection = [
    'Field',
    'FileDrop',
    'FileUpload',
    'Grid',
    'InputText',
    'Slider',
    'Text',
    'Textarea',
  ].includes(name)
  const removeFlex = [
    'Accordion',
    'AspectRatio',
    'FileUpload',
    'PasswordInput',
    'Search',
    'Select',
  ].includes(name)

  const handleClickStackBlitz = () => {
    openStackBlitz({
      code,
      name,
    })
  }

  return (
    <>
      <div className="nine:block">
        <div
          className={cx(
            'nine:bg-neutral-10 nine:border nine:border-beige-40 nine:flex-wrap nine:gap-lg nine:mt-xl nine:p-sm nine:lg:p-3xl nine:relative nine:rounded-lg',
            columnDirection ? 'nine:flex-col nine:items-left' : 'nine:items-center',
            removeFlex ? 'nine:block' : 'nine:flex',
            className
          )}
        >
          {preview}
        </div>
      </div>
      {withCodeEditor ? (
        <>
          <div className="nine:bg-beige-30 nine:border nine:border-beige-40 nine:-mt-md nine:overflow-hidden nine:pt-lg nine:rounded-lg nine:pb-xs">
            <div className="nine:flex nine:gap-xs nine:pl-sm">
              <Tooltip content="View code">
                <Button
                  onClick={() => setIsHighlightOpen(!isHighlightOpen)}
                  shape="circle"
                  size="xs"
                  variant="ghost"
                >
                  <CodeBlockIcon />
                </Button>
              </Tooltip>
              <Tooltip content="Edit on StackBlitz">
                <Button onClick={handleClickStackBlitz} shape="circle" size="xs" variant="ghost">
                  <PromoteIcon />
                </Button>
              </Tooltip>
              <Tooltip content="View on Github">
                <Button
                  as="a"
                  href={`https://github.com/WTTJ/welcome-ui/tree/main/lib/src/components${pathToFile}`}
                  rel="noreferrer noopener"
                  shape="circle"
                  size="xs"
                  target="_blank"
                  variant="ghost"
                >
                  <GithubIcon />
                </Button>
              </Tooltip>
            </div>
          </div>
          {isHighlightOpen ? <Highlight>{code}</Highlight> : null}
        </>
      ) : null}
    </>
  )
}
