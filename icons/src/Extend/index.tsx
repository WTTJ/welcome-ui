import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const ExtendIcon: React.FC<IconProps> = props => {
  return <Icon alt="Extend" content={content} {...props} />
}
