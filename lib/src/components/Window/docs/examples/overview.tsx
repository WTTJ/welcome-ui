import { Window } from '@/components/Window'

const Example = () => {
  return (
    <Window>
      <Window.Header>
        <Window.Header.LeftActions isExpandable />
        <Window.Header.Title title="Find your people" />
        <Window.Header.RightActions isClosable />
      </Window.Header>
      <Window.Body>
        At work, behind every success story, someone found their people. Find your next job on
        Welcome to the Jungle.
      </Window.Body>
    </Window>
  )
}
export default Example
