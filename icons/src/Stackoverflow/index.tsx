import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const StackoverflowIcon: React.FC<IconProps> = props => {
  return <Icon alt="Stackoverflow" content={content} {...props} />
}
