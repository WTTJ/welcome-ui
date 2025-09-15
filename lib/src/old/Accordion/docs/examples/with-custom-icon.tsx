import { Accordion, useAccordion } from '@/Accordion'
import { PlayIcon } from '@/Icons'

const Example = () => {
  const accordion = useAccordion()

  return (
    <Accordion icon={<PlayIcon />} store={accordion} title="Accordion title">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat.
    </Accordion>
  )
}

export default Example
