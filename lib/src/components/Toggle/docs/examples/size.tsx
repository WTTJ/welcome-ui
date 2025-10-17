import * as React from 'react'

import { Toggle } from '@/components/Toggle'

const Example = () => {
  const [toggleSmall, setToggleSmall] = React.useState(false)
  const [toggleMedium, setToggleMedium] = React.useState(false)
  const [toggleLarge, setToggleLarge] = React.useState(false)

  return (
    <div className="flex gap-xl flex-col">
      <div className="flex gap-lg items-center">
        <Toggle
          aria-label="Toggle component"
          checked={toggleSmall}
          onClick={() => setToggleSmall(!toggleSmall)}
          size="sm"
        />
        <Toggle
          aria-label="Toggle component"
          checked={toggleSmall}
          onClick={() => setToggleSmall(!toggleSmall)}
          size="sm"
          withVisibilityIcon
        />
      </div>
      <div className="flex gap-lg items-center">
        <Toggle
          aria-label="Toggle component"
          checked={toggleMedium}
          onClick={() => setToggleMedium(!toggleMedium)}
        />
        <Toggle
          aria-label="Toggle component"
          checked={toggleMedium}
          onClick={() => setToggleMedium(!toggleMedium)}
          withVisibilityIcon
        />
      </div>
      <div className="flex gap-lg items-center">
        <Toggle
          aria-label="Toggle component"
          checked={toggleLarge}
          onClick={() => setToggleLarge(!toggleLarge)}
          size="lg"
        />
        <Toggle
          aria-label="Toggle component"
          checked={toggleLarge}
          onClick={() => setToggleLarge(!toggleLarge)}
          size="lg"
          withVisibilityIcon
        />
      </div>
    </div>
  )
}

export default Example
