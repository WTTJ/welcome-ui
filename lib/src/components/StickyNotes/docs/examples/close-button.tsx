import { StickyNotes } from '@/components/StickyNotes'

const Example = () => {
  const handleClose = () => {
    alert('Sticky note closed')
  }

  return (
    <StickyNotes handleClose={handleClose}>
      <StickyNotes.Title>Title</StickyNotes.Title>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </StickyNotes>
  )
}

export default Example
