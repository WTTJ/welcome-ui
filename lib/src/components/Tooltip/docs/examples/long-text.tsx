import { Tooltip } from '@/Tooltip'

const Example = () => {
  return (
    <Tooltip
      content={<div>lorem ipsum dolor sit amet, consectetur adipiscing elit</div>}
      fixed
      placement="bottom-start"
    >
      <span>With long text</span>
    </Tooltip>
  )
}

export default Example
