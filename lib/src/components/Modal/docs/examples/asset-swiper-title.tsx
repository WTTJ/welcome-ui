import { AssetModal, Modal, useModal } from '@/Modal'
import { Swiper, useSwiper } from '@/Swiper'
import { Button } from '@/Button'

const Example = () => {
  const modal = useModal()
  const swiper = useSwiper({ firstSlideToShow: 2, spaceBetween: 0 })

  const isOpen = modal.useState().open

  return (
    <>
      <Modal.Trigger as={Button} store={modal}>
        Open modal
      </Modal.Trigger>
      {isOpen && (
        <Modal
          ariaLabel="asset modal example"
          as={AssetModal}
          backdrop={<AssetModal.Backdrop />}
          store={modal}
        >
          <AssetModal.Content>
            <Swiper store={swiper}>
              <AssetModal.AssetWithTitle subtitle="THE JOB IS YOURS" title="Sapin & Rétroviseur">
                <AssetModal.Iframe>
                  <iframe
                    allowFullScreen
                    src="https://www.youtube.com/embed/uSTy3cT5hbw"
                    title="YouTube video player"
                  />
                </AssetModal.Iframe>
              </AssetModal.AssetWithTitle>
              <AssetModal.AssetWithTitle subtitle="THE JOB IS YOURS" title="Claquette & Chaussette">
                <AssetModal.Iframe>
                  <iframe
                    allowFullScreen
                    src="https://www.youtube.com/embed/1kjATTF4v5A"
                    title="YouTube video player"
                  />
                </AssetModal.Iframe>
              </AssetModal.AssetWithTitle>
              <AssetModal.AssetWithTitle subtitle="THE JOB IS YOURS" title="Pizza & Ananas">
                <AssetModal.Iframe>
                  <iframe
                    allowFullScreen
                    src="https://www.youtube.com/embed/YlEMLSsv_3w"
                    title="YouTube video player"
                  />
                </AssetModal.Iframe>
              </AssetModal.AssetWithTitle>
            </Swiper>
          </AssetModal.Content>
        </Modal>
      )}
    </>
  )
}

export default Example
