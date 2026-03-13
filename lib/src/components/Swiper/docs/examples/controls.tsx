import { Button } from '@/components/Button'
import { Swiper, useSwiper } from '@/components/Swiper'
import { Tag } from '@/components/Tag'

const Example = () => {
  const swiper = useSwiper({ slides: { gap: 0 } })

  return (
    <>
      <Tag>Current slide: {swiper.slides.currentPage}</Tag>
      <Swiper className="h-400" store={swiper}>
        <Swiper.Slides>
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
        </Swiper.Slides>
        <Swiper.PrevButton />
        <Swiper.NextButton />
      </Swiper>
      <Button onClick={() => swiper.slides.setCurrentPage(0)} variant="secondary">
        slide to 0
      </Button>
      <Button onClick={() => swiper.slides.setCurrentPage(1)} variant="secondary">
        slide to 1
      </Button>
      <Button onClick={() => swiper.slides.setCurrentPage(2)} variant="secondary">
        slide to 2
      </Button>
    </>
  )
}

export default Example
