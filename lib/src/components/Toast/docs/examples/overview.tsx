import { Button } from '@/components/Button'
import { toast } from '@/components/Toast'
import { classNames } from '@/utils'

const cx = classNames()

const Element = () => (
  <div
    className={cx(
      'bg-neutral-10',
      'border-beige-30',
      'border-solid',
      'border-1px',
      'rounded-lg',
      'text-neutral-90',
      'p-sm'
    )}
  >
    Lorem ipsum dolor sit amet
  </div>
)

const Example = () => {
  return <Button onClick={() => toast(<Element />)}>Show Toast</Button>
}

export default Example
