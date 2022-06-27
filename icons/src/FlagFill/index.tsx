import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const FlagFillIcon: React.FC<IconProps> = props => {
  return <Icon alt="FlagFill" content={content} {...props} />
}
