import { Button } from '@/components/Button'
import { Icon } from '@/components/Icon'
import { classNames } from '@/utils'

import { useSwiperContext } from '..'
import styles from '../swiper.module.scss'
import type { SwiperPrevButtonProps } from '../types'

const cx = classNames(styles)

export const SwiperPrevButton = ({
  children,
  className,
  placement = 'side',
  size = 'md',
  variant,
  ...rest
}: SwiperPrevButtonProps) => {
  const {
    navigation: { desktop, goPrev, isPrevDisabled, mobile },
  } = useSwiperContext()

  return (
    <Button
      aria-label="Previous slide"
      className={cx(
        'arrow',
        desktop && 'arrow-mobile',
        mobile && 'arrow-desktop',
        placement === 'side' && 'arrow-placement-side',
        placement === 'side' && 'arrow-placement-side-left',
        className
      )}
      disabled={isPrevDisabled}
      onClick={goPrev}
      size={size}
      variant={variant ?? 'secondary'}
      {...rest}
    >
      {children ?? <Icon name="angle-left-b" />}
    </Button>
  )
}
