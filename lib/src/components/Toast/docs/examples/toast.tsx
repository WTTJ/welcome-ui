import type { ToastPosition } from 'react-hot-toast/headless'

import { Button } from '@/components/Button'
import { toast } from '@/components/Toast'
import { classNames } from '@/utils'

const cx = classNames()

const Element = () => (
  // write this html tag with tailwind classname
  <div
    className={cx(
      'bg-neutral-10',
      'border-beige-30',
      'border-solid',
      'border-1px',
      'rounded-md',
      'text-neutral-90',
      'p-sm'
    )}
  >
    Lorem ipsum dolor sit amet
  </div>
)

const positions = [
  'top-left',
  'top-center',
  'top-right',
  'bottom-left',
  'bottom-center',
  'bottom-right',
]

const Example = () => {
  return (
    <>
      {positions.map(position => (
        <Button
          key={position}
          onClick={() =>
            toast(<Element />, { duration: 6000, position: position as ToastPosition })
          }
        >
          {position}
        </Button>
      ))}
    </>
  )
}

export default Example
