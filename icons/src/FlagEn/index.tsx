import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const FlagEnIcon: React.FC<IconProps> = props => {
  return <Icon alt="FlagEn" content={content} {...props} />
}
