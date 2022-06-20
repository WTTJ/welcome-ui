import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const FullscreenOnIcon: React.FC<IconProps> = props => {
  return <Icon alt="FullscreenOn" content={content} {...props} />
}
