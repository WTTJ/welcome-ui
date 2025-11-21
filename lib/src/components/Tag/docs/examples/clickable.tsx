import { Tag } from '@/components/Tag'

const Example = () => {
  return (
    <>
      <Tag as="button" onClick={() => alert('clicked')} variant="blue">
        Blue
      </Tag>
      <Tag as="button" onClick={() => alert('clicked')} variant="dash">
        Dash
      </Tag>
      <Tag ai as="button" onClick={() => alert('clicked')} variant="teal">
        Teal
      </Tag>
      <Tag
        as="button"
        onClick={() => alert('clicked')}
        onRemove={() => alert('removed')}
        variant="pink"
      >
        Clickable with remove
      </Tag>
    </>
  )
}

export default Example
