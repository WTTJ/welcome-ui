import { Window } from '@/components/Window'

const Example = () => {
  return (
    <>
      <Window.Header>
        <Window.Header.LeftActions isDraggable isExpandable />
        <Window.Header.Title title="My Window Title" />
        <Window.Header.RightActions isClosable>
          {/* eslint-disable-next-line no-console */}
          <Window.Header.Button icon="pen" onClick={() => console.log('edit')} />
        </Window.Header.RightActions>
      </Window.Header>
    </>
  )
}
export default Example
