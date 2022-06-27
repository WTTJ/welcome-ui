import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const TargetIcon: React.FC<IconProps> = props => {
  return <Icon alt="Target" content={content} {...props} />
}
