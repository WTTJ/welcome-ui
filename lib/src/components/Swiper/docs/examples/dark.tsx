import { Swiper, useSwiper } from '@/components/Swiper'

const Example = () => {
  const swiper = useSwiper({
    slidesPerView: { desktop: 4, mobile: 1, tablet: 2 },
    withDarkUI: true,
    withPagination: { desktop: true, mobile: true },
  })

  return (
    <Swiper className="h-[350px]" store={swiper}>
      {[...Array(6)].map(item => (
        <div className="border border-neutral-30 h-[18.75rem]" key={item}></div>
      ))}
    </Swiper>
  )
}

export default Example
