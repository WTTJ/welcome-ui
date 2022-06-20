import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const OfficeIcon: React.FC<IconProps> = props => {
  return <Icon alt="Office" content={content} {...props} />
}
