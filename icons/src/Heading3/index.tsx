import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const Heading3Icon: React.FC<IconProps> = props => {
  return <Icon alt="Heading3" content={content} {...props} />
}
