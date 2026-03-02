import { useState } from 'react'

import { Accordion, useAccordion } from '@/components/Accordion'
import { Button } from '@/components/Button'
import { Icon } from '@/components/Icon'

const Example = () => {
  const [tagCounter, setTagCounter] = useState(2)
  const accordion = useAccordion()

  const tags = Array.from({ length: tagCounter }, (_, i) => `tag ${i + 1}`)

  return (
    <>
      <div className="flex items-center gap-md mb-xxl">
        <p>Tags:</p>
        <Button
          onClick={() => setTagCounter(c => Math.max(c - 1, 0))}
          size="sm"
          variant="secondary"
        >
          -
        </Button>
        <span>{tagCounter}</span>
        <Button onClick={() => setTagCounter(c => c + 1)} size="sm" variant="secondary">
          +
        </Button>
      </div>

      <Accordion size="lg" store={accordion}>
        <Accordion.Disclosure>
          <Accordion.HeaderWithTagsWrapper>
            <Accordion.HeaderWithTags>
              <Accordion.Action>
                <Icon name="plus" />
              </Accordion.Action>
              <Accordion.Icon name="asterisk" />
              <Accordion.Header
                badgeValue="0"
                badgeVariant="brand"
                subtitle="Accordion subtitle"
                title="Accordion title with tags"
              />
            </Accordion.HeaderWithTags>

            <Accordion.Tags>
              {tags.map(tag => (
                <Accordion.Tag icon={<Icon name="star" />} key={tag} variant="dark-pink">
                  {tag}
                </Accordion.Tag>
              ))}
            </Accordion.Tags>
          </Accordion.HeaderWithTagsWrapper>

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
