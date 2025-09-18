import { Label } from '@/components/Label'

const Example = () => {
  return (
    <div className="flex gap-xl flex-col">
      <Label disabled>Disabled label</Label>
      <Label disabled variant="warning">
        Disabled label
      </Label>
    </div>
  )
}

export default Example
