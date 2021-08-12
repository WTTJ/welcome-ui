import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const CreateIcon: React.FC<IconProps> = props => {
  return <Icon alt="Create" content={content} {...props} />
}
