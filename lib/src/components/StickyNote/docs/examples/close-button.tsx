import { StickyNote } from '@/components/StickyNote'

const Example = () => {
  const handleClose = () => {
    alert('Sticky note closed')
  }

  return (
    <StickyNote handleClose={handleClose}>
      <StickyNote.Title>Title</StickyNote.Title>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </StickyNote>
  )
}

export default Example
