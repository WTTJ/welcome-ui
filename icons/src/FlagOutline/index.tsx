import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const FlagOutlineIcon: React.FC<IconProps> = props => {
  return <Icon alt="FlagOutline" content={content} {...props} />
}
