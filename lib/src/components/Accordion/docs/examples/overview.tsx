import { Accordion, useAccordion } from '@/components/Accordion'

const Example = () => {
  const accordion = useAccordion()

  return (
    <Accordion store={accordion}>
      <Accordion.Disclosure>
        <Accordion.Title>Accordion title</Accordion.Title>
      </Accordion.Disclosure>
      <Accordion.Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </Accordion.Content>
    </Accordion>
  )
}

export default Example
