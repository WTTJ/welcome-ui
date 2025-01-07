import { AspectRatio } from 'welcome-ui'
/* eslint-disable react/iframe-missing-sandbox */
import * as React from 'react'

const Example = () => {
  return (
    <AspectRatio ratio={16 / 9}>
      <iframe
        allowFullScreen
        src="https://www.youtube.com/embed/jNQXAC9IVRw"
        title="YouTube video player"
      />
    </AspectRatio>
  )
}

export default Example
