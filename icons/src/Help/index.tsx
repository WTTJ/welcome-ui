import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const HelpIcon: React.FC<IconProps> = props => {
  return <Icon alt="Help" content={content} {...props} />
}
