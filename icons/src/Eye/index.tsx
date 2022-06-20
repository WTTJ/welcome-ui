import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const EyeIcon: React.FC<IconProps> = props => {
  return <Icon alt="Eye" content={content} {...props} />
}
