import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const VideoCamera2Icon: React.FC<IconProps> = props => {
  return <Icon alt="VideoCamera2" content={content} {...props} />
}
