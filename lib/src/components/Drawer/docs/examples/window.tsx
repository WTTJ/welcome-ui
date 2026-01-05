import { useTabStore } from '@ariakit/react'
import { useState } from 'react'

import { Button } from '@/components/Button'
import { Drawer, useDrawer } from '@/components/Drawer'

const Example = () => {
  const drawer = useDrawer()
  const drawer2 = useDrawer()
  const drawer3 = useDrawer()
  const drawer4 = useDrawer()

  const tabStore = useTabStore({
    defaultSelectedId: 'tab1',
  })

  const [isFullScreen, setIsFullScreen] = useState(false)

  const handleFullScreen = (value: boolean) => {
    setIsFullScreen(value)
  }

  return (
    <>
      <Drawer.Trigger as={Button} store={drawer}>
        Basic Window (Drawer)
      </Drawer.Trigger>

      <Drawer aria-label="Basic Window" fullscreen={isFullScreen} store={drawer}>
        <Drawer.Header>
          <Drawer.Header.LeftActions isExpandable onExpandChange={handleFullScreen} />
          <Drawer.Header.Title title="Find your people" />
          <Drawer.Header.RightActions isClosable onClose={drawer.hide} />
        </Drawer.Header>
        <Drawer.Body>
          At work, behind every success story, someone found their people. Find your next job on
          Welcome to the Jungle.
        </Drawer.Body>
      </Drawer>

      <Drawer.Trigger as={Button} store={drawer2}>
        Window with BoxText
      </Drawer.Trigger>

      <Drawer aria-label="Window with BoxText" fullscreen={isFullScreen} store={drawer2}>
        <Drawer.Header>
          <Drawer.Header.LeftActions isExpandable onExpandChange={handleFullScreen} />
          <Drawer.Header.Title title="Find your people" />
          <Drawer.Header.RightActions isClosable onClose={drawer2.hide} />
        </Drawer.Header>
        <Drawer.BoxText>
          At work, behind every success story, someone found their people. Find your next job on
          Welcome to the Jungle.
        </Drawer.BoxText>
      </Drawer>

      <Drawer.Trigger as={Button} store={drawer3}>
        Window with Tabs
      </Drawer.Trigger>

      <Drawer aria-label="Window with tabs" fullscreen={isFullScreen} store={drawer3}>
        <Drawer.Header>
          <Drawer.Header.LeftActions isExpandable onExpandChange={handleFullScreen} />
          <Drawer.Header.Tabs store={tabStore}>
            <Drawer.Header.Tab id="tab1" store={tabStore}>
              1st tab
            </Drawer.Header.Tab>
            <Drawer.Header.Tab id="tab2" store={tabStore}>
              2nd tab
            </Drawer.Header.Tab>
            <Drawer.Header.Tab id="tab3" store={tabStore}>
              3rd tab
            </Drawer.Header.Tab>
          </Drawer.Header.Tabs>
          <Drawer.Header.RightActions isClosable onClose={drawer3.hide} />
        </Drawer.Header>
        <Drawer.WindowTabPanel store={tabStore} tabId="tab1">
          <Drawer.Body>Content for the first tab</Drawer.Body>
        </Drawer.WindowTabPanel>
        <Drawer.WindowTabPanel store={tabStore} tabId="tab2">
          <Drawer.BoxText>
            This is a styled text box in the second tab. It provides a visually distinct content
            area with a different background color.
          </Drawer.BoxText>
        </Drawer.WindowTabPanel>
        <Drawer.WindowTabPanel store={tabStore} tabId="tab3">
          <Drawer.Media>
            <img alt="Example media content" src="/landscape.jpg" />
          </Drawer.Media>
        </Drawer.WindowTabPanel>
      </Drawer>

      <Drawer.Trigger as={Button} store={drawer4}>
        Window with media
      </Drawer.Trigger>

      <Drawer aria-label="Window with media" fullscreen={isFullScreen} store={drawer4}>
        <Drawer.Header>
          <Drawer.Header.LeftActions isExpandable onExpandChange={handleFullScreen} />
          <Drawer.Header.Title title="Landscape Image" />
        </Drawer.Header>
        <Drawer.Media>
          <img alt="Example media content" src="/landscape.jpg" />
        </Drawer.Media>
      </Drawer>
    </>
  )
}

export default Example
