import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const MegaphoneIcon: React.FC<IconProps> = props => {
  return <Icon alt="Megaphone" content={content} {...props} />
}
