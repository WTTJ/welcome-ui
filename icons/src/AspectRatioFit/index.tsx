import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const AspectRatioFitIcon: React.FC<IconProps> = props => {
  return <Icon alt="AspectRatioFit" content={content} {...props} />
}
