import { Accordion, useAccordion } from '@/components/Accordion'
import { Icon } from '@/components/Icon'

const Example = () => {
  const smallAccordionStore = useAccordion()
  const mediumAccordionStore = useAccordion()
  const largeAccordionStore = useAccordion()

  return (
    <div className="flex flex-col gap-lg">
      <Accordion store={smallAccordionStore}>
        <Accordion.Disclosure>
          <Accordion.HeaderWrapper>
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
          </Accordion.HeaderWrapper>

          <Accordion.Action
            onClick={() => {
              //code here
              // Action handles the prevent default
            }}
          >
            action 2
          </Accordion.Action>
        </Accordion.Disclosure>
        <Accordion.Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Accordion.Content>
      </Accordion>

      <Accordion size="md" store={mediumAccordionStore}>
        <Accordion.Disclosure>
          <Accordion.HeaderWrapper>
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
          </Accordion.HeaderWrapper>

          <Accordion.Action
            onClick={() => {
              //code here
              // Action handles the prevent default
            }}
          >
            action 2
          </Accordion.Action>
        </Accordion.Disclosure>
        <Accordion.Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Accordion.Content>
      </Accordion>

      <Accordion size="lg" store={largeAccordionStore}>
        <Accordion.Disclosure>
          <Accordion.HeaderWrapper>
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
          </Accordion.HeaderWrapper>

          <Accordion.Action
            onClick={() => {
              //code here
              // Action handles the prevent default
            }}
          >
            action 2
          </Accordion.Action>
        </Accordion.Disclosure>
        <Accordion.Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Accordion.Content>
      </Accordion>
    </div>
  )
}

export default Example
