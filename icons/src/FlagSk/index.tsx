import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const FlagSkIcon: React.FC<IconProps> = props => {
  return <Icon alt="FlagSk" content={content} {...props} />
}
