import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const RemoteIcon: React.FC<IconProps> = props => {
  return <Icon alt="Remote" content={content} {...props} />
}
