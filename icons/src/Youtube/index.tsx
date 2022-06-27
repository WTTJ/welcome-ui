import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const YoutubeIcon: React.FC<IconProps> = props => {
  return <Icon alt="Youtube" content={content} {...props} />
}
