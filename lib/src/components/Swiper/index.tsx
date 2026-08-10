import { classNames } from '@/utils'

import { SwiperNextButton } from './components/SwiperNextButton'
import { SwiperPrevButton } from './components/SwiperPrevButton'
import { SwiperSlides } from './components/SwiperSlides'
import { defaultStore } from './constants'
import { SwiperContext } from './context'
import swiperStyles from './swiper.module.scss'
import type { SwiperProps } from './types'
import { useSwiperViewModel } from './useSwiperViewModel'

export { swiperStyles as swiperClasses }
export { useSwiperContext } from './context'
export type { SwiperContextValue } from './types'
export { useSwiper } from './useSwiper'

const cx = classNames(swiperStyles)

export const Swiper = ({ children, className, store = defaultStore, ...rest }: SwiperProps) => {
  const contextValue = useSwiperViewModel({ children, store })

  return (
    <SwiperContext.Provider value={contextValue}>
      <div className={cx('root', className)} {...rest}>
        {children}
      </div>
    </SwiperContext.Provider>
  )
}

// Attach compound components
Swiper.PrevButton = SwiperPrevButton
Swiper.NextButton = SwiperNextButton
Swiper.Slides = SwiperSlides

Swiper.displayName = 'Swiper'
