import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const PromoteIcon: React.FC<IconProps> = props => {
  return <Icon alt="Promote" content={content} {...props} />
}
