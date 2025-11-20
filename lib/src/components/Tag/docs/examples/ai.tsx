import { Icon } from '@/components/Icon'
import { Tag } from '@/components/Tag'

const Example = () => {
  return (
    <>
      <Tag ai>AI Generated</Tag>
      <Tag ai variant="brand">
        AI Assistant
      </Tag>
      <Tag ai variant="blue">
        Machine Learning
      </Tag>
      <Tag ai disabled variant="brand">
        Neural Network
      </Tag>
      <Tag ai size="md" variant="green">
        Smart Feature
      </Tag>
      <Tag ai icon={<Icon name="user" />} size="md">
        AI overrides icon
      </Tag>
    </>
  )
}

export default Example
