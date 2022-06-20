import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const TeepeeIcon: React.FC<IconProps> = props => {
  return <Icon alt="Teepee" content={content} {...props} />
}
