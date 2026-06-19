import { useState } from 'react'

import { Window } from '@/components/Window'

const Example = () => {
  const [isPinned, setIsPinned] = useState(false)

  return (
    <Window>
      <Window.Header>
        <Window.Header.LeftActions />
        <Window.Header.Title title="Find your people" />
        <Window.Header.RightActions isClosable>
          <Window.Header.Button
            aria-label={isPinned ? 'Unpin window' : 'Pin window'}
            icon="setting"
            isActive={isPinned}
            onClick={() => setIsPinned(v => !v)}
          />
        </Window.Header.RightActions>
      </Window.Header>
      <Window.Body>
        At work, behind every success story, someone found their people. Find your next job on
        Welcome to the Jungle.
      </Window.Body>
    </Window>
  )
}
export default Example
