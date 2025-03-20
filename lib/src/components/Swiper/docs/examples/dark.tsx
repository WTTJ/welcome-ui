import { Box } from '@/Box'
import { Swiper, useSwiper } from '@/Swiper'

const Example = () => {
  const swiper = useSwiper({
    slidesPerView: { desktop: 4, mobile: 1, tablet: 2 },
    withDarkUI: true,
    withPagination: { desktop: true, mobile: true },
  })

  return (
    <Swiper h={350} store={swiper}>
      {[...Array(6)].map(item => (
        <Box border="1px solid" borderColor="neutral-30" h={300} key={item} />
      ))}
    </Swiper>
  )
}

export default Example
