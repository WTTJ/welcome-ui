import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const CastUnavailableIcon: React.FC<IconProps> = props => {
  return <Icon alt="CastUnavailable" content={content} {...props} />
}
