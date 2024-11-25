import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const TemporaryProfileIcon: React.FC<IconProps> = props => {
  return <Icon alt="TemporaryProfile" content={content} {...props} />
}
