
import { Swiper, useSwiper } from '@/Swiper'

const Example = () => {
  const swiper = useSwiper({ slidesPerView: { mobile: 1, tablet: 1, desktop: 2 } })

  return (
    <Swiper h={400} store={swiper}>
      <img
        src="https://images.unsplash.com/photo-1564460549828-f0219a31bf90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }}
      />
      <img
        src="https://images.unsplash.com/photo-1575489272413-cb506258027e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }}
      />
      <img
        src="https://images.unsplash.com/photo-1541959833400-049d37f98ccd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }}
      />
    </Swiper>
  )
}

export default Example
