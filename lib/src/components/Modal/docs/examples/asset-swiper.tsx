import { Button } from '@/components/Button'
import { AssetModal, Modal, useModal } from '@/components/Modal'
import { Swiper, useSwiper } from '@/components/Swiper'

const Example = () => {
  const modal = useModal()
  const swiper = useSwiper({ firstSlideToShow: 2, spaceBetween: 0 })

  const isOpen = modal.useState().open

  return (
    <>
      <Modal.Trigger as={Button} store={modal}>
        Open modal
      </Modal.Trigger>
      {isOpen ? (
        <Modal
          ariaLabel="asset modal example"
          as={AssetModal}
          backdrop={<AssetModal.Backdrop />}
          store={modal}
        >
          <AssetModal.Content>
            <Swiper className="h-[calc(100vh - 10rem)]" store={swiper}>
              <img
                src="https://cdn-images.welcometothejungle.com/H6cEYCT1JsY1ipyX37LWouwduQZNHlUikfeUaHhUagA/rs:auto:1500::/q:85/czM6Ly93dHRqLXByb2R1Y3Rpb24vdXBsb2Fkcy9pbWFnZS9maWxlLzk4NTMvMTYzMzYyL2I5OTdhMzIxLTJlNjktNGM1Ny05NzcyLWE0YjU3ZmQ0YWNiMi5qcGc"
                style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
              />
              <img
                src="https://cdn-images.welcometothejungle.com/7DJ8Ggq5-1JMgNEcVXLlM7xqDOBNhBoZ9QpEdO1G4Qs/rs:auto:1500::/q:85/czM6Ly93dHRqLXByb2R1Y3Rpb24vdXBsb2Fkcy9pbWFnZS9maWxlLzQ0OTEvMTcwMzg2LzdiYWRjMjc4LTQ3MWUtNDI1My1hN2NmLWJkM2FiYmNiMTM4Yi5qcGc"
                style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
              />
              <img
                src="https://cdn-images.welcometothejungle.com/rUlGHCfE1zos9CVMJELrqCeCVzH27VuBO8GH5yiMkic/rs:auto:1500::/q:85/czM6Ly93dHRqLXByb2R1Y3Rpb24vdXBsb2Fkcy9pbWFnZS9maWxlLzQ0MjIvMTcwMzg2L2NkNGRhNTc5LWQ4YTktNDQ0OC1iMGM2LWI3ZWYwY2U2ZjQ0MS5qcGc"
                style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
              />
            </Swiper>
          </AssetModal.Content>
        </Modal>
      ) : null}
    </>
  )
}

export default Example
