import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const FlagEsIcon: React.FC<IconProps> = props => {
  return <Icon alt="FlagEs" content={content} {...props} />
}
