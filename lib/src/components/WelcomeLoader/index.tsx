import { useLottie } from 'lottie-light-react'
import { forwardRef } from 'react'

import { classNames } from '@/utils'

import loader from './loader.json'

const cx = classNames()

export const WelcomeLoader = forwardRef<HTMLDivElement, React.InputHTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const options = {
      animationData: loader,
      loop: true,
    }

    const { View } = useLottie(options)

    return (
      <div className={cx(`w-150`, className)} ref={ref} {...props}>
        {View}
      </div>
    )
  }
)
