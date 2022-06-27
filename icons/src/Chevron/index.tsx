import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const ChevronIcon: React.FC<IconProps> = props => {
  return <Icon alt="Chevron" content={content} {...props} />
}
