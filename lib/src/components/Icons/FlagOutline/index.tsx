import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const FlagOutlineIcon: React.FC<IconProps> = props => {
  return <Icon alt="FlagOutline" content={content} {...props} />
}
