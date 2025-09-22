import { Accordion, useAccordion } from '@/components/Accordion'
import { Avatar } from '@/components/Avatar'

const Example = () => {
  const accordion = useAccordion()

  return (
    <Accordion
      store={accordion}
      style={{ marginTop: 'var(--spacing-md)' }}
      title={
        <div style={{ alignItems: 'center', display: 'flex' }}>
          <Avatar name="accordion" style={{ marginRight: '0.5rem' }} />
          <h3 style={{ fontWeight: 'bold', margin: 0 }}>Accordion title</h3>
        </div>
      }
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat.
    </Accordion>
  )
}

export default Example
