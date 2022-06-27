import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const ArrowRightIcon: React.FC<IconProps> = props => {
  return <Icon alt="ArrowRight" content={content} {...props} />
}
