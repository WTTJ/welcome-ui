import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const CaddyIcon: React.FC<IconProps> = props => {
  return <Icon alt="Caddy" content={content} {...props} />
}
