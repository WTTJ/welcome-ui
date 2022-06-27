import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const HeartShinyIcon: React.FC<IconProps> = props => {
  return <Icon alt="HeartShiny" content={content} {...props} />
}
