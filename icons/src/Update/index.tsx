import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const UpdateIcon: React.FC<IconProps> = props => {
  return <Icon alt="Update" content={content} {...props} />
}
