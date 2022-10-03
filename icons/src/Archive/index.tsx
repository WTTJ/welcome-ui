import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const ArchiveIcon: React.FC<IconProps> = props => {
  return <Icon alt="Archive" content={content} {...props} />
}
