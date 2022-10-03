import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const TwitterIcon: React.FC<IconProps> = props => {
  return <Icon alt="Twitter" content={content} {...props} />
}
