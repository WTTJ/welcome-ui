import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const PhoneIcon: React.FC<IconProps> = props => {
  return <Icon alt="Phone" content={content} {...props} />
}
