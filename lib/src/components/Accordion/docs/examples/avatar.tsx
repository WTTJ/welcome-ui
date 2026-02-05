import { Accordion, useAccordion } from '@/components/Accordion'
import { Avatar } from '@/components/Avatar'

const Example = () => {
  const accordion = useAccordion()

  return (
    <Accordion className="mt-md" store={accordion}>
      <Accordion.Disclosure>
        <Accordion.Heading>
          <div className="items-center flex">
            <Avatar className="mr-sm flex" name="accordion" />
            <Accordion.Title>Accordion title</Accordion.Title>
          </div>
        </Accordion.Heading>
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
