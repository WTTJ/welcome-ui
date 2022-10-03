import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const CelebrateIcon: React.FC<IconProps> = props => {
  return <Icon alt="Celebrate" content={content} {...props} />
}
