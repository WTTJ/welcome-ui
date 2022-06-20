import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const MusicIcon: React.FC<IconProps> = props => {
  return <Icon alt="Music" content={content} {...props} />
}
