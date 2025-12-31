import { useTabStore } from '@ariakit/react'

import { Window } from '@/components/Window'

const Example = () => {
  const tabStore = useTabStore({
    defaultSelectedId: 'tab1',
  })

  return (
    <Window className="max-w-400">
      <Window.Header>
        <Window.Header.LeftActions isExpandable />
        <Window.Header.Tabs store={tabStore}>
          <Window.Header.Tab icon="folder" id="tab1" store={tabStore}>
            1st tab
          </Window.Header.Tab>
          <Window.Header.Tab icon="file" id="tab2" store={tabStore}>
            2nd tab
          </Window.Header.Tab>
          <Window.Header.Tab icon="image" id="tab3" store={tabStore}>
            3rd tab
          </Window.Header.Tab>
        </Window.Header.Tabs>
        <Window.Header.RightActions isClosable />
      </Window.Header>
      <Window.TabPanel store={tabStore} tabId="tab1">
        <Window.Body>Content for the first tab</Window.Body>
      </Window.TabPanel>
      <Window.TabPanel store={tabStore} tabId="tab2">
        <Window.BoxText>
          This is a styled text box in the second tab. It provides a visually distinct content area
          with a different background color.
        </Window.BoxText>
      </Window.TabPanel>
      <Window.TabPanel store={tabStore} tabId="tab3">
        <Window.Media>
          <img alt="Example media content" src="/landscape.jpg" />
        </Window.Media>
      </Window.TabPanel>
    </Window>
  )
}
export default Example
