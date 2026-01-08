import { Tag } from '@/components/Tag'

const Example = () => {
  return (
    <div className="flex flex-col gap-lg">
      <div className="flex gap-2">
        <Tag variant="light-warm">Light Warm</Tag>
        <Tag>Default</Tag>
        <Tag variant="dark-warm">Dark Warm</Tag>
      </div>

      <div className="flex gap-2">
        <Tag variant="light-brand">Light Brand</Tag>
        <Tag variant="brand">Brand</Tag>
        <Tag variant="dark-brand">Dark Brand</Tag>
      </div>

      <div className="flex gap-2">
        <Tag variant="light-green">Light Green</Tag>
        <Tag variant="green">Green</Tag>
        <Tag variant="dark-green">Dark Green</Tag>
      </div>

      <div className="flex gap-2">
        <Tag variant="light-orange">Light Orange</Tag>
        <Tag variant="orange">Orange</Tag>
        <Tag variant="dark-orange">Dark Orange</Tag>
      </div>

      <div className="flex gap-2">
        <Tag variant="light-pink">Light Pink</Tag>
        <Tag variant="pink">Pink</Tag>
        <Tag variant="dark-pink">Dark Pink</Tag>
      </div>

      <div className="flex gap-2">
        <Tag variant="light-red">Light Red</Tag>
        <Tag variant="red">Red</Tag>
        <Tag variant="dark-red">Dark Red</Tag>
      </div>

      <div className="flex gap-2">
        <Tag variant="light-teal">Light Teal</Tag>
        <Tag variant="teal">Teal</Tag>
        <Tag variant="dark-teal">Dark Teal</Tag>
      </div>

      <div className="flex gap-2">
        <Tag variant="light-violet">Light Violet</Tag>
        <Tag variant="violet">Violet</Tag>
        <Tag variant="dark-violet">Dark Violet</Tag>
      </div>

      <Tag variant="dash">Dash</Tag>
    </div>
  )
}

export default Example
