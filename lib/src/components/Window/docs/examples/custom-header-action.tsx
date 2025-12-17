import { Window } from '@/components/Window'

const Example = () => {
  return (
    <>
      <Window.Header>
        <Window.Header.LeftActions isExpandable />
        <Window.Header.Title title="My Window Title" />
        <Window.Header.RightActions isClosable>
          {/* eslint-disable-next-line no-console */}
          <Window.Header.Button icon="smile-beam" onClick={() => console.log('custom action')} />
        </Window.Header.RightActions>
      </Window.Header>
    </>
  )
}
export default Example
