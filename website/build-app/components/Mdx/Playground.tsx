'use client'
import { useState } from 'react'

import { Button } from '@/components/Button'
import { Icon } from '@/components/Icon'
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
      <div className="block">
        <div
          className={cx(
            'bg-neutral-10 border border-beige-40 flex-wrap gap-lg mt-xl p-sm lg:p-3xl relative rounded-md',
            columnDirection ? 'flex-col items-left' : 'items-center',
            removeFlex ? 'block' : 'flex',
            className
          )}
        >
          {preview}
        </div>
      </div>
      {withCodeEditor ? (
        <>
          <div className="bg-beige-30 border border-beige-40 -mt-md overflow-hidden pt-lg rounded-md pb-xs">
            <div className="flex gap-xs pl-sm">
              <Tooltip content="View code">
                <Button
                  onClick={() => setIsHighlightOpen(!isHighlightOpen)}
                  size="xs"
                  variant="tertiary"
                >
                  <Icon name="arrow" />
                </Button>
              </Tooltip>
              <Tooltip content="Edit on StackBlitz">
                <Button onClick={handleClickStackBlitz} size="xs" variant="tertiary">
                  <Icon name="external-link-alt" />
                </Button>
              </Tooltip>
              <Tooltip content="View on Github">
                <Button
                  as="a"
                  href={`https://github.com/WTTJ/welcome-ui/tree/main/lib/src/components${pathToFile}`}
                  rel="noreferrer noopener"
                  size="xs"
                  target="_blank"
                  variant="tertiary"
                >
                  <Icon name="github" />
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
