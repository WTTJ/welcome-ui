import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const BirthdayIcon: React.FC<IconProps> = props => {
  return <Icon alt="Birthday" content={content} {...props} />
}
