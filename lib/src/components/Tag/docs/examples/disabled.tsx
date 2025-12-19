import { Icon } from '@/components/Icon'
import { Tag } from '@/components/Tag'

const Example = () => {
  return (
    <>
      <Tag disabled onRemove={() => alert("Can't trigger it")}>
        Disabled
      </Tag>
      <Tag ai disabled variant="blue">
        Disabled
      </Tag>
      <Tag disabled variant="dash">
        Disabled
      </Tag>
      <Tag disabled variant="orange">
        Disabled
      </Tag>
      <Tag disabled icon={<Icon name="map" />} variant="green">
        Disabled with icon
      </Tag>
    </>
  )
}

export default Example
