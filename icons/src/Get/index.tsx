import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const GetIcon: React.FC<IconProps> = props => {
  return <Icon alt="Get" content={content} {...props} />
}
