import { useLottie } from 'lottie-light-react'
import { forwardRef } from 'react'

import { classNames } from '@/utils'

import loader from './loader.json'
import styles from './welcome-loader.module.scss'

const cx = classNames(styles)

export const WelcomeLoader = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const options = {
      animationData: loader,
      loop: true,
    }

    const { View } = useLottie(options)

    return (
      <div className={cx('root', className)} ref={ref} {...props}>
        {View}
      </div>
    )
  }
)

WelcomeLoader.displayName = 'WelcomeLoader'
