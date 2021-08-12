import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const TtfIcon: React.FC<IconProps> = props => {
  return <Icon alt="Ttf" content={content} {...props} />
}
