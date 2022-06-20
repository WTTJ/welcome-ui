import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const FlagIcon: React.FC<IconProps> = props => {
  return <Icon alt="Flag" content={content} {...props} />
}
