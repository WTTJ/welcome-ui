import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const FlagCsIcon: React.FC<IconProps> = props => {
  return <Icon alt="FlagCs" content={content} {...props} />
}
