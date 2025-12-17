import { useTabStore } from '@ariakit/react'

import { Window } from '@/components/Window'

const Example = () => {
  const tabStore = useTabStore({
    defaultSelectedId: 'tab1',
  })

  return (
    <>
      <Window.Header>
        <Window.Header.LeftActions isDraggable isExpandable />
        <Window.Header.Tabs
          items={[
            { icon: 'folder', id: 'tab1', title: '1st tab' },
            { icon: 'folder', id: 'tab2', title: '2nd tab' },
            { icon: 'folder', id: 'tab3', title: '3rd tab' },
          ]}
          store={tabStore}
        />
        <Window.Header.RightActions isClosable />
      </Window.Header>
    </>
  )
}
export default Example
