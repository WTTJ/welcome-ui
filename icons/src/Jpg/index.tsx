import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const JpgIcon: React.FC<IconProps> = props => {
  return <Icon alt="Jpg" content={content} {...props} />
}
