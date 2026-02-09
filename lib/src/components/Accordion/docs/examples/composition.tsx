import { useState } from 'react'

import { Accordion, useAccordion } from '@/components/Accordion'
import { Badge } from '@/components/Badge'
import { Button } from '@/components/Button'
import { Icon } from '@/components/Icon'

const Example = () => {
  const [tagCounter, setTagCounter] = useState(4)
  const accordion = useAccordion()

  const tags = Array.from({ length: tagCounter }, (_, i) => `tag ${i + 1}`)
  return (
    <>
      <p>Tags:</p>
      <div className="flex items-center gap-md mb-lg">
        <Button onClick={() => setTagCounter(c => c + 1)} size="sm" variant="secondary">
          +
        </Button>
        <span>{tagCounter}</span>
        <Button
          onClick={() => setTagCounter(c => Math.max(c - 1, 0))}
          size="sm"
          variant="secondary"
        >
          -
        </Button>
      </div>

      <Accordion size="lg" store={accordion}>
        <Accordion.Disclosure>
          <div className="flex gap-md flex-wrap items-start flex-1 ">
            <Accordion.HeaderWithTags>
              <Accordion.Action>
                <Icon name="plus" />
              </Accordion.Action>
              <Accordion.Icon name="asterisk" />
              <div className="flex flex-col">
                <div className="flex gap-sm items-center">
                  <Accordion.Title>Accordion title with tags</Accordion.Title>
                  <Badge variant="brand">0</Badge>
                </div>
                <Accordion.Subtitle>Accordion subtitle</Accordion.Subtitle>
              </div>
            </Accordion.HeaderWithTags>

            <Accordion.Tags>
              {tags.map(tag => (
                <Accordion.Tag icon={<Icon name="star" />} key={tag} variant="dark-pink">
                  {tag}
                </Accordion.Tag>
              ))}
            </Accordion.Tags>
          </div>

          <Accordion.Action
            onClick={() => {
              //code here
              // Action handles the prevent default
            }}
          >
            action
          </Accordion.Action>
        </Accordion.Disclosure>
        <Accordion.Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Accordion.Content>
      </Accordion>
    </>
  )
}

export default Example
