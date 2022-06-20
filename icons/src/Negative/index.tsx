import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const NegativeIcon: React.FC<IconProps> = props => {
  return <Icon alt="Negative" content={content} {...props} />
}
