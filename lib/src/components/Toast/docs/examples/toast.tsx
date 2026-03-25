import type { ToastPosition } from 'react-hot-toast/headless'

import { Button } from '@/components/Button'
import { toast } from '@/components/Toast'
import { classNames } from '@/utils'

const cx = classNames()

const Element = () => (
  // write this html tag with tailwind classname
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
