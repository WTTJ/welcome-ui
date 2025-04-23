import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const CaddyIcon: React.FC<IconProps> = props => {
  return <Icon alt="Caddy" content={content} {...props} />
}
