import { useTabStore } from '@ariakit/react'
import { useState } from 'react'

import { Button } from '@/components/Button'
import { Modal, useModal } from '@/components/Modal'

const Example = () => {
  const modal = useModal()
  const modal2 = useModal()
  const modal3 = useModal()
  const modal4 = useModal()

  const tabStore = useTabStore({
    defaultSelectedId: 'tab1',
  })

  const [isFullScreen, setIsFullScreen] = useState(false)

  const handleFullScreen = (value: boolean) => {
    setIsFullScreen(value)
  }

  return (
    <>
      <Modal.Trigger as={Button} store={modal}>
        Basic Window
      </Modal.Trigger>

      <Modal ariaLabel="Basic Window" fullscreen={isFullScreen} store={modal}>
        <Modal.Content>
          <Modal.Header>
            <Modal.WindowHeader.LeftActions isExpandable onExpandChange={handleFullScreen} />
            <Modal.WindowHeader.Title title="Find your people" />
            <Modal.WindowHeader.RightActions isClosable onClose={modal.hide} />
          </Modal.Header>
          <Modal.WindowBody>
            At work, behind every success story, someone found their people. Find your next job on
            Welcome to the Jungle.
          </Modal.WindowBody>
        </Modal.Content>
      </Modal>

      <Modal.Trigger as={Button} store={modal2}>
        Window with BoxText
      </Modal.Trigger>

      <Modal ariaLabel="Window with BoxText" fullscreen={isFullScreen} store={modal2}>
        <Modal.Content>
          <Modal.Header>
            <Modal.WindowHeader.LeftActions isExpandable onExpandChange={handleFullScreen} />
            <Modal.WindowHeader.Title title="Find your people" />
            <Modal.WindowHeader.RightActions isClosable onClose={modal2.hide} />
          </Modal.Header>
          <Modal.WindowBoxText>
            2At work, behind every success story, someone found their people. Find your next job on
            Welcome to the Jungle.
          </Modal.WindowBoxText>
        </Modal.Content>
      </Modal>

      <Modal.Trigger as={Button} store={modal3}>
        Window with Tabs
      </Modal.Trigger>

      <Modal ariaLabel="Window with tabs" fullscreen={isFullScreen} store={modal3}>
        <Modal.Content>
          <Modal.Header>
            <Modal.WindowHeader.LeftActions isExpandable onExpandChange={handleFullScreen} />
            <Modal.WindowHeader.Tabs
              items={[
                { icon: 'folder', id: 'tab1', title: '1st tab' },
                { icon: 'folder', id: 'tab2', title: '2nd tab' },
                { icon: 'folder', id: 'tab3', title: '3rd tab' },
              ]}
              store={tabStore}
            />
            <Modal.WindowHeader.RightActions isClosable onClose={modal3.hide} />
          </Modal.Header>
          <Modal.WindowTabPanel store={tabStore} tabId="tab1">
            <Modal.WindowBody>Content for the first tab</Modal.WindowBody>
          </Modal.WindowTabPanel>
          <Modal.WindowTabPanel store={tabStore} tabId="tab2">
            <Modal.WindowBoxText>
              This is a styled text box in the second tab. It provides a visually distinct content
              area with a different background color.
            </Modal.WindowBoxText>
          </Modal.WindowTabPanel>
          <Modal.WindowTabPanel store={tabStore} tabId="tab3">
            <Modal.WindowMedia>
              <img alt="Example media content" src="/landscape.jpg" />
            </Modal.WindowMedia>
          </Modal.WindowTabPanel>
        </Modal.Content>
      </Modal>

      <Modal.Trigger as={Button} store={modal4}>
        Window with media
      </Modal.Trigger>

      <Modal ariaLabel="Window with media" fullscreen={isFullScreen} store={modal4}>
        <Modal.Content>
          <Modal.Header>
            <Modal.WindowHeader.LeftActions isExpandable onExpandChange={handleFullScreen} />
            <Modal.WindowHeader.Title title="Landscape Image" />
          </Modal.Header>
          <Modal.WindowMedia>
            <img alt="Example media content" src="/landscape.jpg" />
          </Modal.WindowMedia>
        </Modal.Content>
      </Modal>
    </>
  )
}

export default Example
