import { useLottie } from 'lottie-light-react'
import { forwardRef } from 'react'

import { classNames } from '@/utils'

import loader from './loader.json'
import styles from './welcome-loader.module.scss'

const cx = classNames(styles)

export const WelcomeLoader = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ 'aria-label': ariaLabel = 'Loading', className, ...props }, ref) => {
    const options = {
      animationData: loader,
      loop: true,
    }

    const { View } = useLottie(options)

    return (
      <div
        aria-label={ariaLabel}
        className={cx('root', className)}
        ref={ref}
        role="status"
        {...props}
      >
        <div aria-hidden="true">{View}</div>
      </div>
    )
  }
)

WelcomeLoader.displayName = 'WelcomeLoader'
