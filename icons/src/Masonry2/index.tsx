import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const Masonry2Icon: React.FC<IconProps> = props => {
  return <Icon alt="Masonry2" content={content} {...props} />
}
