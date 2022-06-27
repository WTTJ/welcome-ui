import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const ScreenshareOnIcon: React.FC<IconProps> = props => {
  return <Icon alt="ScreenshareOn" content={content} {...props} />
}
