import { Swiper, useSwiper } from '@/components/Swiper'

const Example = () => {
  const swiper = useSwiper({ spaceBetween: 0 })

  return (
    <Swiper className="h-[400px]" store={swiper}>
      <img
        src="https://images.unsplash.com/photo-1564460549828-f0219a31bf90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
      />
      <img
        src="https://images.unsplash.com/photo-1575489272413-cb506258027e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
      />
      <img
        src="https://images.unsplash.com/photo-1541959833400-049d37f98ccd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
      />
    </Swiper>
  )
}

export default Example
