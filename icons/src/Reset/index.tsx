import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const ResetIcon: React.FC<IconProps> = props => {
  return <Icon alt="Reset" content={content} {...props} />
}
