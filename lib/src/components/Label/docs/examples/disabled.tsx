import { Label } from '@/components/Label'

const Example = () => {
  return (
    <div className="nine:flex nine:gap-xl nine:flex-col">
      <Label disabled>Disabled label</Label>
      <Label disabled variant="warning">
        Disabled label
      </Label>
    </div>
  )
}

export default Example
