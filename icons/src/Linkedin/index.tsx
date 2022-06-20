import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const LinkedinIcon: React.FC<IconProps> = props => {
  return <Icon alt="Linkedin" content={content} {...props} />
}
