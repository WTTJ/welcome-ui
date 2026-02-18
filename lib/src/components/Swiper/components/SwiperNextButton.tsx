import { Button } from '@/components/Button'
import { Icon } from '@/components/Icon'
import { classNames } from '@/utils'

import { useSwiperContext } from '..'
import styles from '../swiper.module.scss'
import type { SwiperNextButtonProps } from '../types'

const cx = classNames(styles)

export const SwiperNextButton = ({
  children,
  className,
  placement = 'side',
  size = 'md',
  variant,
  ...rest
}: SwiperNextButtonProps) => {
  const {
    navigation: { desktop, goNext, isNextDisabled, mobile },
  } = useSwiperContext()

  return (
    <Button
      aria-label="Next slide"
      className={cx(
        'arrow',
        desktop && 'arrow-desktop',
        mobile && 'arrow-mobile',
        placement === 'side' && 'arrow-placement-side',
        placement === 'side' && 'arrow-placement-side-right',
        className
      )}
      disabled={isNextDisabled}
      onClick={goNext}
      size={size}
      variant={variant ?? 'secondary'}
      {...rest}
    >
      {children ?? <Icon name="angle-right-b" />}
    </Button>
  )
}
