import { StickyNote } from '@/components/StickyNote'

const Example = () => {
  return (
    <div className="flex flex-wrap gap-lg">
      <StickyNote>
        <StickyNote.Title>Title</StickyNote.Title>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </StickyNote>
      <StickyNote shape="rectangle">
        <StickyNote.Title>Title</StickyNote.Title>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </StickyNote>
    </div>
  )
}

export default Example
