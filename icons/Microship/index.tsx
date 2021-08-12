import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const MicroshipIcon: React.FC<IconProps> = props => {
  return <Icon alt="Microship" content={content} {...props} />
}
