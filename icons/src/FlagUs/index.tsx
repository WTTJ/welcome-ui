import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const FlagUsIcon: React.FC<IconProps> = props => {
  return <Icon alt="FlagUs" content={content} {...props} />
}
