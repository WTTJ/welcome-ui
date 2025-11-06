import { StickyNotes } from '@/components/StickyNotes'

const Example = () => {
  const handleClick = () => {
    alert('Sticky note action')
  }

  return (
    <StickyNotes>
      <StickyNotes.Title>Title</StickyNotes.Title>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      <StickyNotes.Button onClick={handleClick}>Action</StickyNotes.Button>
    </StickyNotes>
  )
}

export default Example
