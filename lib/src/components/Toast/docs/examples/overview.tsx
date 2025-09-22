import { Button } from '@/components/Button'
import { toast } from '@/components/Toast'
import { classNames } from '@/utils'

const cx = classNames()

const Element = () => (
  <div
    className={cx(
      'bg-(--color-neutral-10)',
      'border-(--color-beige-30)',
      'border-solid',
      'border-1px',
      'rounded-(--radius-lg)',
      'text-(--color-neutral-90)',
      'p-(--spacing-sm)'
    )}
  >
    Lorem ipsum dolor sit amet
  </div>
)

const Example = () => {
  return <Button onClick={() => toast(<Element />)}>Show Toast</Button>
}

export default Example
