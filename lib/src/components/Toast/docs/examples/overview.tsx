import { Button } from '@/components/Button'
import { toast } from '@/components/Toast'
import { classNames } from '@/utils'

const cx = classNames()

const Element = () => (
  <div
    className={cx(
      'nine:bg-neutral-10',
      'nine:border-beige-30',
      'nine:border-solid',
      'nine:border-1px',
      'nine:rounded-lg',
      'nine:text-neutral-90',
      'nine:p-sm'
    )}
  >
    Lorem ipsum dolor sit amet
  </div>
)

const Example = () => {
  return <Button onClick={() => toast(<Element />)}>Show Toast</Button>
}

export default Example
