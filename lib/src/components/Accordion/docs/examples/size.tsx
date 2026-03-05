import { Accordion, useAccordion } from '@/components/Accordion'

const Example = () => {
  const smallAccordionStore = useAccordion()
  const mediumAccordionStore = useAccordion()
  const largeAccordionStore = useAccordion()

  return (
    <div className="flex flex-col gap-lg">
      <Accordion size="sm" store={smallAccordionStore}>
        <Accordion.Disclosure>
          <Accordion.Header title="Accordion - small" />
        </Accordion.Disclosure>
        <Accordion.Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Accordion.Content>
      </Accordion>

      <Accordion size="md" store={mediumAccordionStore}>
        <Accordion.Disclosure>
          <Accordion.Header title="Accordion - medium" />
        </Accordion.Disclosure>
        <Accordion.Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Accordion.Content>
      </Accordion>

      <Accordion size="lg" store={largeAccordionStore}>
        <Accordion.Disclosure>
          <Accordion.Header title="Accordion - large" />
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
