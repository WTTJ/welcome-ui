import { Label } from 'welcome-ui/Label'

const FALSE = false

export const LabelComponent = () => {
  return (
    <div>
      <Label alignItems="center" mb="sm" required={FALSE}>
        Email Label
      </Label>
      <Label fontSize="sm" fontWeight="bold">
        Bold Label
      </Label>
    </div>
  )
}
