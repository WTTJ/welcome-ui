import { Toggle } from '@/components/Toggle'

const Example = () => {
  return (
    <div className="flex gap-lg flex-col">
      <Toggle disabled />
      <Toggle checked disabled withVisibilityIcon />
    </div>
  )
}

export default Example
