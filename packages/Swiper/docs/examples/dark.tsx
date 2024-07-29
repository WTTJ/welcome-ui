import * as React from 'react'
import { Swiper, useSwiper } from '@welcome-ui/swiper'
import { Box } from '@welcome-ui/box'

const Example = () => {
  const swiper = useSwiper({
    slidesPerView: { mobile: 1, tablet: 2, desktop: 4 },
    withPagination: { mobile: true, desktop: true },
    withDarkUI: true,
  })

  return (
    <Swiper h={350} store={swiper}>
      {[...Array(6)].map(item => (
        <Box border="1px solid" borderColor="neutral-20" h={300} key={item} />
      ))}
    </Swiper>
  )
}

export default Example
