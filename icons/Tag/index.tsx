import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const TagIcon: React.FC<IconProps> = props => {
  return <Icon alt="Tag" content={content} {...props} />
}
