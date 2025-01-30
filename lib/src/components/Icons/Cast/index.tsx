import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const CastIcon: React.FC<IconProps> = props => {
  return <Icon alt="Cast" content={content} {...props} />
}
