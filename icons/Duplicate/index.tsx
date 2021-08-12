import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const DuplicateIcon: React.FC<IconProps> = props => {
  return <Icon alt="Duplicate" content={content} {...props} />
}
