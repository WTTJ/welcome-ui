import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const PngIcon: React.FC<IconProps> = props => {
  return <Icon alt="Png" content={content} {...props} />
}
