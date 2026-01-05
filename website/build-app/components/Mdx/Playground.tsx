'use client'
import { useState } from 'react'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Icon } from '@/components/Icon'
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
  const removeFlex = [
    'Accordion',
    'AspectRatio',
    'Field',
    'FileDrop',
    'FileUpload',
    'FileUpload',
    'PasswordInput',
    'Search',
    'Select',
    'Text',
  ].includes(name)

  const handleClickStackBlitz = () => {
    openStackBlitz({
      code,
      name,
    })
  }

  return (
    <>
      <Card className="mt-xl">
        <Card.Body>
          <div
            className={cx(
              'lg:py-6xl p-md lg:px-xxl relative',
              !removeFlex && 'flex flex-wrap gap-lg justify-center',
              className
            )}
          >
            {preview}
          </div>
        </Card.Body>
        {withCodeEditor ? (
          <Card className="ml-md mb-md mr-md" size="sm">
            <Card.Body className="flex flex-row gap-md">
              <Button
                onClick={() => setIsHighlightOpen(!isHighlightOpen)}
                size="md"
                variant={isHighlightOpen ? 'primary' : 'secondary'}
              >
                <Icon name="arrow" />
                <span>Code</span>
              </Button>
              <Button onClick={handleClickStackBlitz} size="md" variant="secondary">
                <Icon name="external-link-alt" />
                <span>Stackblitz</span>
              </Button>
              <Button
                as="a"
                href={`https://github.com/WTTJ/welcome-ui/tree/main/lib/src/components${pathToFile}`}
                rel="noreferrer noopener"
                size="md"
                target="_blank"
                variant="secondary"
              >
                <Icon name="github" />
                <span>Github</span>
              </Button>
            </Card.Body>
          </Card>
        ) : null}
      </Card>
      {isHighlightOpen ? <Highlight>{code}</Highlight> : null}
    </>
  )
}
