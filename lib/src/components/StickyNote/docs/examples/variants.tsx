import { StickyNote } from '@/components/StickyNote'

const Example = () => {
  return (
    <div className="flex flex-wrap gap-lg">
      <StickyNote>
        <StickyNote.Title>Brand</StickyNote.Title>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </StickyNote>
      <StickyNote variant="green">
        <StickyNote.Title>Green</StickyNote.Title>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </StickyNote>
      <StickyNote variant="blue">
        <StickyNote.Title>Blue</StickyNote.Title>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </StickyNote>
      <StickyNote variant="teal">
        <StickyNote.Title>Teal</StickyNote.Title>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </StickyNote>
      <StickyNote variant="pink">
        <StickyNote.Title>Pink</StickyNote.Title>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </StickyNote>
      <StickyNote variant="orange">
        <StickyNote.Title>Orange</StickyNote.Title>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </StickyNote>
      <StickyNote variant="violet">
        <StickyNote.Title>Violet</StickyNote.Title>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </StickyNote>
    </div>
  )
}

export default Example
