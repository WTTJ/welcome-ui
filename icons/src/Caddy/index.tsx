import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const CaddyIcon: React.FC<IconProps> = props => {
  return <Icon alt="Caddy" content={content} {...props} />
}
