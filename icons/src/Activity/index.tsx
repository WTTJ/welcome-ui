import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const ActivityIcon: React.FC<IconProps> = props => {
  return <Icon alt="Activity" content={content} {...props} />
}
