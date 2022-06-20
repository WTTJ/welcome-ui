import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const ShieldIcon: React.FC<IconProps> = props => {
  return <Icon alt="Shield" content={content} {...props} />
}
