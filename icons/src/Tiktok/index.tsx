import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const TiktokIcon: React.FC<IconProps> = props => {
  return <Icon alt="Tiktok" content={content} {...props} />
}
