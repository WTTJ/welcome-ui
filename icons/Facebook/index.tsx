import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const FacebookIcon: React.FC<IconProps> = props => {
  return <Icon alt="Facebook" content={content} {...props} />
}
