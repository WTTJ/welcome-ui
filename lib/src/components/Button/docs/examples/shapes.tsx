import { Button } from '@/components/Button'
import { Icon } from '@/components/Icon'

const Example = () => {
  return (
    <>
      <Button shape="square" size="xs">
        <Icon name="wttj" />
      </Button>
      <Button shape="circle" size="xs">
        <Icon name="wttj" />
      </Button>
      <Button shape="square" size="sm">
        <Icon name="wttj" />
      </Button>
      <Button shape="circle" size="sm">
        <Icon name="wttj" />
      </Button>
      <Button shape="square">
        <Icon name="wttj" />
      </Button>
      <Button shape="circle">
        <Icon name="wttj" />
      </Button>
      <Button shape="square" size="lg">
        <Icon name="wttj" />
      </Button>
      <Button shape="circle" size="lg">
        <Icon name="wttj" />
      </Button>
    </>
  )
}

export default Example
