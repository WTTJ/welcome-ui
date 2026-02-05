import { useState } from 'react'

import { Accordion, useAccordion } from '@/components/Accordion'
import { Badge } from '@/components/Badge'
import { Button } from '@/components/Button'
import { Icon } from '@/components/Icon'
import { Tag } from '@/components/Tag'

const Example = () => {
  const [tagCounter, setTagCounter] = useState(2)
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

      <Accordion store={accordion}>
        <Accordion.Disclosure
          actions={
            <Button size="md" variant="secondary">
              action
            </Button>
          }
        >
          <Button size="lg" variant="secondary">
            <Icon name="plus" />
          </Button>
          <Icon name="asterisk" size="lg" />
          <Accordion.Heading>
            <div className="flex gap-sm items-center">
              <Accordion.Title>Accordion title</Accordion.Title>
              <Badge variant="brand">0</Badge>
            </div>
            <Accordion.Subtitle>Accordion title</Accordion.Subtitle>
          </Accordion.Heading>

          <div className="flex gap-xs items-center">
            {tags.map(tag => (
              <Tag icon={<Icon name="star" />} key={tag} variant="dark-pink">
                {tag}
              </Tag>
            ))}
          </div>
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
