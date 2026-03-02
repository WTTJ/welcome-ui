import { Accordion, useAccordion } from '@/components/Accordion'
import { Icon } from '@/components/Icon'

const Example = () => {
  const accordion = useAccordion()

  return (
    <>
      <Accordion size="md" store={accordion}>
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
              title="Accordion title - composition example"
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
    </>
  )
}

export default Example
