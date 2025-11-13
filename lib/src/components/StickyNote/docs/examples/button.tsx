import { StickyNote } from '@/components/StickyNote'

const Example = () => {
  const handleClick = () => {
    alert('Sticky note action')
  }

  return (
    <StickyNote>
      <StickyNote.Title>Title</StickyNote.Title>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      <StickyNote.Button onClick={handleClick}>Action</StickyNote.Button>
    </StickyNote>
  )
}

export default Example
