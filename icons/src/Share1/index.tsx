import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const Share1Icon: React.FC<IconProps> = props => {
  return <Icon alt="Share1" content={content} {...props} />
}
