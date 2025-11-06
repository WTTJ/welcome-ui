import { StickyNotes } from '@/components/StickyNotes'

const Example = () => {
  return (
    <div className="flex flex-wrap gap-lg">
      <StickyNotes>
        <StickyNotes.Title>Title</StickyNotes.Title>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </StickyNotes>
      <StickyNotes shape="rectangle">
        <StickyNotes.Title>Title</StickyNotes.Title>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </StickyNotes>
    </div>
  )
}

export default Example
