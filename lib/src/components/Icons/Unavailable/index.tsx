import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const UnavailableIcon: React.FC<IconProps> = props => {
  return <Icon alt="Unavailable" content={content} {...props} />
}
