/* eslint-disable react/iframe-missing-sandbox */
import * as React from 'react'
import { AssetModal, Modal, useModal } from '@welcome-ui/modal'
import { Button } from '@welcome-ui/button'

const Example = () => {
  const modal = useModal()

  return (
    <>
      <Modal.Trigger as={Button} store={modal}>
        Open modal
      </Modal.Trigger>
      <Modal
        ariaLabel="asset modal example"
        as={AssetModal}
        backdrop={<AssetModal.Backdrop />}
        store={modal}
      >
        <AssetModal.Content>
          <AssetModal.Iframe>
            <iframe
              allowFullScreen
              src="https://www.youtube.com/embed/uSTy3cT5hbw"
              title="YouTube video player"
            />
          </AssetModal.Iframe>
        </AssetModal.Content>
      </Modal>
    </>
  )
}

export default Example
