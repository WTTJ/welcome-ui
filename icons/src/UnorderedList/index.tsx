import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const UnorderedListIcon: React.FC<IconProps> = props => {
  return <Icon alt="UnorderedList" content={content} {...props} />
}
