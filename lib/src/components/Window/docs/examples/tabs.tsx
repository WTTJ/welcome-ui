import { useTab } from '@/components/Tabs'
import { Window } from '@/components/Window'

const Example = () => {
  const tabStore = useTab({
    defaultSelectedId: 'tab1',
  })

  return (
    <>
      <Window.Header>
        <Window.Header.LeftActions isDraggable isExpandable />
        <Window.Header.Tabs
          items={[
            { icon: 'folder', id: 'tab1', title: 'Tab 1' },
            { icon: 'folder', id: 'tab2', title: 'Tab 2' },
            { icon: 'folder', id: 'tab3', title: 'Tab 3' },
          ]}
          store={tabStore}
        />
        <Window.Header.RightActions isClosable>
          {/* eslint-disable-next-line no-console */}
          <Window.Header.Button icon="pen" onClick={() => console.log('edit')} />
        </Window.Header.RightActions>
      </Window.Header>
    </>
  )
}
export default Example
