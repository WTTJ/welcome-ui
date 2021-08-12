import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const PenIcon: React.FC<IconProps> = props => {
  return <Icon alt="Pen" content={content} {...props} />
}
