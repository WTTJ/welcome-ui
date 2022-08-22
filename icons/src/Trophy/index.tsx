import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const TrophyIcon: React.FC<IconProps> = props => {
  return <Icon alt="Trophy" content={content} {...props} />
}
