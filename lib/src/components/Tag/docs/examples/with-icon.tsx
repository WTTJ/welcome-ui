import { Icon } from '@/components/Icon'
import { Tag } from '@/components/Tag'

const Example = () => {
  return (
    <>
      <Tag icon={<Icon name="heart" />}>Favorite</Tag>
      <Tag icon={<Icon name="star" />} variant="orange">
        Featured
      </Tag>
      <Tag icon={<Icon name="calendar" />} variant="teal">
        Event
      </Tag>
      <Tag icon={<Icon name="map" />} variant="dash">
        Location
      </Tag>
    </>
  )
}

export default Example
