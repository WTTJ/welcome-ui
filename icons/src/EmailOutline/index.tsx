import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const EmailOutlineIcon: React.FC<IconProps> = props => {
  return <Icon alt="EmailOutline" content={content} {...props} />
}
