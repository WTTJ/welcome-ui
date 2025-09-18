import { Label } from '@/components/Label'

const Example = () => {
  return (
    <div className="flex gap-xl flex-col">
      <Label variant="warning">Warning variant</Label>
      <Label variant="danger">Danger variant</Label>
      <Label variant="success">Success variant</Label>
    </div>
  )
}

export default Example
