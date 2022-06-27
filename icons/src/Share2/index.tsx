import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const Share2Icon: React.FC<IconProps> = props => {
  return <Icon alt="Share2" content={content} {...props} />
}
