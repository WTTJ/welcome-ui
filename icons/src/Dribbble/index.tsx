import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const DribbbleIcon: React.FC<IconProps> = props => {
  return <Icon alt="Dribbble" content={content} {...props} />
}
