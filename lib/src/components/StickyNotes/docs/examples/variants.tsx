import { StickyNotes } from '@/components/StickyNotes'

const Example = () => {
  return (
    <div className="flex flex-wrap gap-lg">
      <StickyNotes>
        <StickyNotes.Title>Brand</StickyNotes.Title>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </StickyNotes>
      <StickyNotes variant="green">
        <StickyNotes.Title>Green</StickyNotes.Title>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </StickyNotes>
      <StickyNotes variant="blue">
        <StickyNotes.Title>Blue</StickyNotes.Title>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </StickyNotes>
      <StickyNotes variant="teal">
        <StickyNotes.Title>Teal</StickyNotes.Title>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </StickyNotes>
      <StickyNotes variant="pink">
        <StickyNotes.Title>Pink</StickyNotes.Title>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </StickyNotes>
      <StickyNotes variant="orange">
        <StickyNotes.Title>Orange</StickyNotes.Title>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </StickyNotes>
      <StickyNotes variant="violet">
        <StickyNotes.Title>Violet</StickyNotes.Title>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </StickyNotes>
    </div>
  )
}

export default Example
