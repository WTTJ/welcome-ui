import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const HeadsetIcon: React.FC<IconProps> = props => {
  return <Icon alt="Headset" content={content} {...props} />
}
