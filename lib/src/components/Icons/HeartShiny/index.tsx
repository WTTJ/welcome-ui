import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const HeartShinyIcon: React.FC<IconProps> = props => {
  return <Icon alt="HeartShiny" content={content} {...props} />
}
